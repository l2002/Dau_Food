# Security Specification for Comments

## 1. Data Invariants
- Each comment in `/comments/{commentId}` must contain valid fields: `author`, `role`, `content`, `likes`, and server-generated `createdAt`.
- Ghost fields and unauthorized properties are strictly prohibited.
- `commentId` path variable must be alphanumeric and bounded (<= 128 characters).
- Updates are strictly restricted to incrementing the `likes` counter by 1. No other fields can be modified.
- Deletions are disallowed from public clients to prevent tampering with historical review records.

## 2. The Dirty Dozen Payloads & Test Scenarios
1. Injection with 1MB author payload -> REJECTED (exceeds 60 characters).
2. Missing content field -> REJECTED (content is required).
3. Client-forged timestamp (`createdAt` not matching `request.time`) -> REJECTED.
4. Negative likes count (`likes < 0`) -> REJECTED.
5. Injected unauthorized admin ghost field (`isAdmin: true`) -> REJECTED.
6. Malformed document ID with SQL/NoSQL injection string -> REJECTED by `isValidId`.
7. Attempting to edit comment text / `content` after creation -> REJECTED.
8. Attempting to spoof `author` on update -> REJECTED.
9. Attempting to delete a comment -> REJECTED.
10. Attempting to jump likes by +100 in one write -> REJECTED (only +1 allowed).
11. Arbitrary write to non-existent collection (`/admin_secrets/{id}`) -> REJECTED by catch-all rule.
12. Attempting to overwrite `createdAt` timestamp during like update -> REJECTED.

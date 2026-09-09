import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  getDocs, 
  query, 
  orderBy, 
  limit, 
  setDoc, 
  doc, 
  serverTimestamp, 
  updateDoc, 
  increment,
  onSnapshot,
  getDocFromServer,
  Timestamp
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Firestore with the provisioned database ID
export const db = firebaseConfig.firestoreDatabaseId 
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app);

// Test connection on boot as mandated
export async function testConnection(): Promise<void> {
  try {
    await getDocFromServer(doc(db, 'comments', 'connection_probe'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn("Firebase client appears offline, will retry when network reconnects.");
    }
  }
}
testConnection();

export interface CloudComment {
  id: string;
  author: string;
  role: string;
  content: string;
  likes: number;
  createdAt: Timestamp | Date | string | null;
}

export const COMMENTS_COLLECTION = 'comments';

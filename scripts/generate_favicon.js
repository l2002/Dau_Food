import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. High-fidelity vector SVG matching warning.jpg exactly
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <style>
      .icon-bg { fill: #FFCA28; }
      .icon-black { fill: #111111; }
      @media (prefers-color-scheme: dark) {
        .contrast-wrapper {
          filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.45));
        }
      }
    </style>
  </defs>

  <g class="contrast-wrapper">
    <!-- Top Comic Shockwave Spark (2 sharp peaks M-shape) -->
    <polygon 
      points="272,136 280,48 318,92 360,68 334,142" 
      class="icon-black"
    />

    <!-- Right Comic Shockwave Spark (3 sharp spikes burst) -->
    <polygon 
      points="348,142 422,148 376,188 448,194 372,228 424,258 356,252" 
      class="icon-black"
    />

    <!-- Main Warning Triangle (Equilateral/Isosceles with rounded corners) -->
    <!-- Center of triangle is approx x=236, base at y=412, apex at y=134 -->
    <path 
      d="M 214,148 
         Q 236,112 258,148 
         L 396,380 
         Q 416,412 376,412 
         L 96,412 
         Q 56,412 76,380 
         Z" 
      fill="#FFCB28" 
      stroke="#111111" 
      stroke-width="32" 
      stroke-linejoin="round"
      stroke-linecap="round"
    />

    <!-- Exclamation Mark Inside Triangle -->
    <!-- Upper Bar: Tapered with rounded ends -->
    <path 
      d="M 218,192 
         C 218,181 254,181 254,192 
         L 248,322 
         C 248,331 224,331 224,322 
         Z" 
      class="icon-black"
    />

    <!-- Lower Dot: Circular -->
    <circle 
      cx="236" 
      cy="366" 
      r="17" 
      class="icon-black"
    />
  </g>
</svg>`;

const svgPath = path.join(publicDir, 'favicon.svg');
fs.writeFileSync(svgPath, svgContent.trim());
console.log('Written: favicon.svg');

// 2. Generate PNG and ICO formats using ImageMagick convert
try {
  // Draw the icon onto high-resolution PNG, then scale to 32x32, 192x192, and .ico
  const drawCommand = `convert -size 512x512 xc:transparent \\
    -fill "#111111" -draw "polygon 272,136 280,48 318,92 360,68 334,142" \\
    -fill "#111111" -draw "polygon 348,142 422,148 376,188 448,194 372,228 424,258 356,252" \\
    -fill "#FFCB28" -stroke "#111111" -strokewidth 32 \\
    -draw "stroke-linejoin round stroke-linecap round path 'M 214,148 Q 236,112 258,148 L 396,380 Q 416,412 376,412 L 96,412 Q 56,412 76,380 Z'" \\
    -fill "#111111" -stroke none \\
    -draw "path 'M 218,192 C 218,181 254,181 254,192 L 248,322 C 248,331 224,331 224,322 Z'" \\
    -draw "circle 236,366 236,383" \\
    ${path.join(publicDir, 'favicon-512x512.png')}`;

  execSync(drawCommand);
  console.log('Generated: favicon-512x512.png');

  // Generate 192x192 and 32x32 PNGs
  execSync(`convert ${path.join(publicDir, 'favicon-512x512.png')} -resize 192x192 ${path.join(publicDir, 'favicon-192x192.png')}`);
  execSync(`convert ${path.join(publicDir, 'favicon-512x512.png')} -resize 32x32 ${path.join(publicDir, 'favicon-32x32.png')}`);
  execSync(`convert ${path.join(publicDir, 'favicon-32x32.png')} ${path.join(publicDir, 'favicon.ico')}`);
  console.log('Generated: favicon-192x192.png, favicon-32x32.png, favicon.ico');
} catch (err) {
  console.error('ImageMagick generation error:', err);
}

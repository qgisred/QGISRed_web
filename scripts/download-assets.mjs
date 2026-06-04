import { mkdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');

const assets = [
  // Favicon / logo
  { url: 'https://qgisred.upv.es/wp-content/uploads/2022/05/logoqgisred.svg', dest: 'seo/favicon.svg' },
  // Header logo
  { url: 'https://qgisred.upv.es/wp-content/uploads/2022/05/qgisred.jpeg', dest: 'images/logo-qgisred.jpeg' },
  // Hero background
  { url: 'https://qgisred.upv.es/wp-content/uploads/2022/07/Diapositiva23.png', dest: 'images/hero-bg.png' },
  // Presentacion section screenshot image
  { url: 'https://qgisred.upv.es/wp-content/uploads/2022/07/4.jpg', dest: 'images/presentacion-screenshot.jpg' },
  // Capacidades section background
  { url: 'https://qgisred.upv.es/wp-content/uploads/2022/07/acciona-edar-burgos.jpg', dest: 'images/capacidades-bg.jpg' },
  // Utilizacion section background
  { url: 'https://qgisred.upv.es/wp-content/uploads/2022/07/3-2.jpg', dest: 'images/utilizacion-bg.jpg' },
  // Utilizacion section image
  { url: 'https://qgisred.upv.es/wp-content/uploads/2022/07/Diapositiva26.png', dest: 'images/utilizacion-img.png' },
  { url: 'https://qgisred.upv.es/wp-content/uploads/2022/07/Diapositiva13.png', dest: 'images/presentacion-img2.png' },
  { url: 'https://qgisred.upv.es/wp-content/uploads/2022/07/Diapositiva16.png', dest: 'images/presentacion-img3.png' },
  // Difusion section background
  { url: 'https://qgisred.upv.es/wp-content/uploads/2022/07/diverse-people-in-a-seminar.jpg', dest: 'images/difusion-bg.jpg' },
  // Soporte section images
  { url: 'https://qgisred.upv.es/wp-content/uploads/2022/07/young-female-programmer-web-developer-working-on-computer-software.jpg', dest: 'images/soporte-img1.jpg' },
  { url: 'https://qgisred.upv.es/wp-content/uploads/2022/07/girl-sitting-in-front-of-laptop-carefully-looking-at-paper-document-.jpg', dest: 'images/soporte-img2.jpg' },
  { url: 'https://qgisred.upv.es/wp-content/uploads/2022/07/man-working-on-laptop.jpg', dest: 'images/soporte-img3.jpg' },
  { url: 'https://qgisred.upv.es/wp-content/uploads/2022/07/wooden-dices-with-question-mark.jpg', dest: 'images/soporte-img4.jpg' },
  // Footer logos
  { url: 'https://qgisred.upv.es/wp-content/uploads/2022/05/logoqgisred.png', dest: 'images/footer-logo-qgisred.png' },
  { url: 'https://qgisred.upv.es/wp-content/uploads/2022/05/logoRedhisp-1.png', dest: 'images/footer-logo-redhisp.png' },
  { url: 'https://qgisred.upv.es/wp-content/uploads/2022/05/logoIiama.png', dest: 'images/footer-logo-iiama.png' },
  { url: 'https://qgisred.upv.es/wp-content/uploads/2022/05/logoUPV.png', dest: 'images/footer-logo-upv.png' },
];

async function downloadAsset(url, dest) {
  const fullDest = path.join(PUBLIC, dest);
  const dir = path.dirname(fullDest);

  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }

  if (existsSync(fullDest)) {
    console.log(`SKIP (exists): ${dest}`);
    return;
  }

  try {
    const resp = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120' }
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const buf = await resp.arrayBuffer();
    await writeFile(fullDest, Buffer.from(buf));
    console.log(`OK: ${dest} (${buf.byteLength} bytes)`);
  } catch (e) {
    console.error(`FAIL: ${dest} - ${e.message}`);
  }
}

async function downloadBatch(items, batchSize = 4) {
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    await Promise.all(batch.map(item => downloadAsset(item.url, item.dest)));
  }
}

console.log('Downloading assets...');
await downloadBatch(assets);
console.log('Done!');

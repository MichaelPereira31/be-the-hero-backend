import fs from 'fs';
import path from 'path';

export const tmpDir = path.resolve(__dirname, '..', '..', 'tmp');

if (!fs.existsSync(tmpDir)) {
  fs.mkdirSync(tmpDir, { recursive: true });
}

fs.mkdirSync(path.join(tmpDir, 'uploads'), { recursive: true });

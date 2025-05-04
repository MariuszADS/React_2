// // server/downloadFile.js
// import download from 'download';
// import fs from 'fs';

// export async function downloadFile(url, destFolder = 'downloads') {
//   if (!fs.existsSync(destFolder)) {
//     fs.mkdirSync(destFolder, { recursive: true });
//   }
//   await download(url, destFolder);
// }

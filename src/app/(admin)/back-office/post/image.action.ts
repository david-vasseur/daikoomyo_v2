// "use server"

// import path from 'path';
// import { Storage } from '@google-cloud/storage';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const storage = new Storage({
//     keyFilename: path.join(__dirname, '../../../../../gcs/electron-photo-1de49ac60352.json'),
//   });

// const bucketName = 'daikoomyo';
// const bucket = storage.bucket(bucketName);

// export const uploadImage = async (file: { originalname: string; mimetype: any; buffer: any; }) => {

//     try {
//         const blob = bucket.file(Date.now() + '-' + file.originalname);
//         const blobStream = blob.createWriteStream({
//             resumable: false,
//             metadata: {
//                 contentType: file.mimetype,
//             },
//         });

//         const result = await new Promise((resolve, reject) => {
//             blobStream.on('error', err => reject(err));

//             blobStream.on('finish', async () => {
//                 await blob.makePublic();
//                 const publicUrl = `https://storage.googleapis.com/${bucketName}/${blob.name}`;
//                 resolve({ url: publicUrl, filename: blob.name });
//             });

//             blobStream.end(file.buffer);
//             });

//         return result;

//     } catch (error) {
//         throw error
//     }
// };

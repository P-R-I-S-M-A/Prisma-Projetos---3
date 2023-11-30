import React, { useState } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../App';

function Storage() {
  const [file, setFile] = useState(null);
  const [downloadURL, setDownloadURL] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const storageRef = ref(storage, 'foto_usuarios/' + file.name);
      await uploadBytes(storageRef, file);

      // Obtenha a URL de download após o upload
      const url = await getDownloadURL(storageRef);
      console.log(url)
      setDownloadURL(url);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {downloadURL && <img src={downloadURL} alt="Uploaded" />}
    </div>
  );
}

export default Storage;
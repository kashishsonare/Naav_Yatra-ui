import React, { useState } from 'react';
import styles from './PhotoUploadCard.module.css';


const PhotoUploadCard = ({ handleChange, data, setData }) => {
  const [photos, setPhotos] = useState([]);



  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + photos.length > 4) {
      alert('You can only upload up to 4 photos.');
      return;
    }
    setPhotos((prevPhotos) => [...prevPhotos, ...files]);
    setData({ ...data, images: files });
  };

  const handleRemovePhoto = (index) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
  };
  console.log(photos);

  return (
    <div className={styles["photo-upload-card"]}>
      <h2>Upload Photos</h2>
      <input
        type="file"
        accept="image/*"
        multiple
        name=''
        onChange={handlePhotoUpload}
        disabled={photos.length >= 4}
      />
      
      <div className={styles["photo-grid"]}>
        {photos.map((photo, index) => (
          <div key={index} className={styles["photo-item"]}>
            <img src={URL.createObjectURL(photo)} alt={`Upload ${index + 1}`} />
            <button onClick={() => handleRemovePhoto(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default PhotoUploadCard;

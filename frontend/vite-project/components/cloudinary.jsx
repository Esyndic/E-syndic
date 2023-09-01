import React, { useState } from 'react';
import axios from 'axios';

const CloudinaryUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleImageUpload = async () => {
    if (!selectedImage) return;

    const cloudName = 'dcygttfkr'; // Replace with your Cloudinary cloud name
    const uploadPreset = 'sdzk10qw'; // Replace with your Cloudinary upload preset

    const formData = new FormData();
    formData.append('file', selectedImage);
    formData.append('upload_preset', uploadPreset);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setUploadedImageUrl(response.data.secure_url);
      console.log(uploadedImageUrl)
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
      {uploadedImageUrl && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={uploadedImageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default CloudinaryUploader;

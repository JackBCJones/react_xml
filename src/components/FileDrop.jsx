import React, { useState } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null);
  const [xMultiplier, setXMultiplier] = useState(1.15);
  const [yMultiplier, setYMultiplier] = useState(0.74);


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    const url = `${process.env.REACT_APP_API_DOMAIN}/upload?x_multiplier=${xMultiplier}&y_multiplier=${yMultiplier}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        mode: 'cors'
      })
      .then((response) => response.blob())
      .then((blob) => {
        const fileUrl = URL.createObjectURL(blob);
        setDownloadLink(fileUrl);
      })
    } catch (error) {
      console.error(error);
    }
  };
  
  
  

  return (
    <div className=''>
      <div className=''>
      <div className=''>
        <input className='py-5' type="file" onChange={handleFileChange} />
          <br></br>
          <label className=''>Field Width (x):</label>
          <input
            className='border border-gray-400'
            type="number"
            step="0.10"
            value={xMultiplier}
            onChange={(e) => setXMultiplier(e.target.value)}
          />
      </div>
      <div className='py-5'>
        <label className=''>Field Height (y):</label>
        <input
          className='border border-gray-400'
          type="number"
          step="0.10"
          value={yMultiplier}
          onChange={(e) => setYMultiplier(parseFloat(e.target.value))}
        />
      </div>
        <div className=''>
          <button className='border border-gray-400' onClick={handleUpload}>Upload</button>
          {downloadLink && (
            <a href={downloadLink} download="converted_file.json">
              Download converted_file
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default FileUpload;

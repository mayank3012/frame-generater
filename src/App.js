import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import html2canvas from 'html2canvas';

function App() {
  const [image, setImage] = useState(null);
  const FRAME = '/frame/frame.png';

  
  
  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    html2canvas(document.querySelector("#frame")).then(canvas => {
      canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'result.png';
        a.click();
      });
    });
  };

  return (
    <div>
      <Dropzone onDrop={handleDrop}>
        {({getRootProps, getInputProps}) => (
          <div {...getRootProps()}>
            <input type="file" {...getInputProps()} />
            <p>Drag and drop an image here, or click to select an image</p>
          </div>
        )}
      </Dropzone>
      {image && (
        <div id="frame" style={{ width: '500px', height: '500px', border: '2px solid black', position: 'relative' }}>
          <img src={FRAME} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '100%', height: '100%' }} />
          <img src={image} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',borderRadius:'50%', width: '65%', height: '65%' }} />
        </div>
      )}
      {image && <button onClick={handleDownload}>Download result</button>}
    </div>
  );
};
export default App;

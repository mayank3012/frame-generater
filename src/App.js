import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import html2canvas from 'html2canvas';
import {BsImage} from 'react-icons/bs'

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
    <div className="bg-[#0f172a] min-h-[100vh] py-10 md:py-20" >
    <div className='flex flex-col justify-center items-center min-h-[80vh] rounded-lg shadow-lg w-[90%] mx-auto max-w-[400px] bg-white bg-opacity-10 shadow-gray-700 gap-3 '>
      <h2 className='capitalize text-3xl text-white text-center'>Frame generator</h2>
        <Dropzone onDrop={handleDrop}>
        {({getRootProps, getInputProps}) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
              <p className=" flex gap-4 text-white border-2 border-gray-800 p-12 mx-4 rounded-lg cursor-grab">
                <BsImage size={65} />
                <span className='pt-2'>
                  Drag and drop an image here, or click to select an image
                  </span>
                </p>
          </div>
        )}
      </Dropzone>
      {image && (
        <div id="frame" className='relative w-[90%] aspect-square'>
          <img src={FRAME} alt="frame" className='z-10' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '100%', height: '100%' }} />
          <img src={image} alt="userImage" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',borderRadius:'50%', width: '65%', height: '65%' }} />
        </div>
      )}
        {image &&
          <button onClick={handleDownload} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span>
</button>
        }
      </div>
      </div>
  );
};
export default App;

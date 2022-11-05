import React, { FC } from 'react';

import { UploadType } from '../../types/UploadType';

const ImageUploader: FC<UploadType> = ({ setFileURL, setFileReader }) => {
  const onSaveFile = (newFile: File | null) => {
    if (!newFile) alert('Error');
    else {
      setFileURL(URL.createObjectURL(newFile));
    }
  };

  const handleChange = (e: {
    preventDefault: () => void;
    target: { files: any[] };
  }) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    setFileReader(reader);
    // console.log('e.target.files[0]: ', reader);
    onSaveFile(e.target.files[0]);
  };

  return (
    <div className="bg-bgWhite flex items-center">
      <div className="rounded-lg bg-white border-2 border-white w-[290px] h-[469px] sm:w-[402px] sm:h-[469px] drop-shadow-xl flex flex-col items-center justify-between py-8">
        <h1 className="text-2xl text-center font-medium text-title">
          Upload your image
        </h1>
        <p className="text-subTitle text-center text-xs font-medium">
          File should be Jpeg, Png, ...
        </p>
        <div className="sm:w-[338px] sm:h-[219px]  w-[250px] h-[219px] border border-dashed border-blue-300 rounded-lg bg-dropZone flex flex-col justify-evenly items-center ">
          <img
            src="/assets/image.svg"
            alt="dropZone"
            className="w-[115px] h-[89px]"
          />
          <p className="text-dropZoneText font-sm font-medium">
            Drag & Drop your image here
          </p>
        </div>
        <p className="text-dropZoneText font-sm">Or</p>
        <div>
          <label className="px-3 py-2 text-white bg-button rounded-lg cursor-pointer font-light text-xs ml-1">
            <input
              type="file"
              className="input-button"
              onChange={(e) => handleChange(e)}
              accept="image/png, image/jpeg, image/jpg"
            />
            Choose a file
          </label>
        </div>
      </div>
    </div>
  );
};

export { ImageUploader };

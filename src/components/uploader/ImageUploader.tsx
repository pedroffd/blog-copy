import React, { FC, useState } from 'react';

import { UploadType } from '../../types/UploadType';

const ImageUploader: FC<UploadType> = ({ setFileURL, setFileReader }) => {
  const [previewSource, setPreviewSource] =
    useState<string>('/assets/image.svg');
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
    setPreviewSource(URL.createObjectURL(e.target.files[0]));

    onSaveFile(e.target.files[0]);
  };

  return (
    <div className="bg-bgWhite flex items-center">
      <div className="rounded-lg bg-white border-2 border-white w-[290px] h-[469px] sm:w-[402px] sm:h-[469px] drop-shadow-xl flex flex-col items-center justify-between py-10">
        <h1 className="text-2xl text-center font-medium text-title">
          Upload your image
        </h1>

        <div className="sm:w-[338px] sm:h-[219px]  w-[250px] h-[219px] border border-dashed border-blue-300 rounded-lg bg-dropZone flex flex-col justify-evenly items-center ">
          <img src={previewSource} alt="dropZone" className="w-5/6 h-5/6" />
        </div>
        <div>
          <label className="px-3 py-2 text-white bg-button rounded-lg cursor-pointer font-light text-xs ml-1">
            <input
              type="file"
              className="input-button"
              onChange={(e) => handleChange(e)}
              src={previewSource}
              width="48"
              height="48"
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

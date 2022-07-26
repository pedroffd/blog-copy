import React, { useState } from 'react';

import { ChakraProvider, FormControl } from '@chakra-ui/react';
import { CreatableSelect } from 'chakra-react-select';
import Router from 'next/router';

import { Section } from '@/layout/Section';
import { CreatorHeader } from '@/navigation/CreatorHeader';

import { ImageUploader } from '../components/uploader/ImageUploader';
import { categoryOptions } from '../data/mapData';

interface FormData {
  title: string;
  content: string;
  category: string;
  imgSrc: string;
  isHighlighted: boolean;
}

const Draft: React.FC = () => {
  const [fileURL, setFileURL] = useState<string>('');
  const [highlight, setHighlight] = useState<boolean>(false);
  const [fileReader, setFileReader] = useState<FileReader>();
  const [form, setForm] = useState<FormData>({
    title: '',
    content: '',
    category: '',
    imgSrc: '',
    isHighlighted: false,
  });

  const uploadImage = async () => {
    try {
      if (fileReader) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}api/upload`,
          {
            method: 'POST',
            body: JSON.stringify({ data: fileReader.result }),
            headers: { 'Content-Type': 'application/json' },
          }
        );
        const publicId = await res.json();
        setForm({ ...form, imgSrc: publicId.secure_url });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await uploadImage();
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      await Router.push('/drafts');
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheckbox = () => {
    setHighlight(!highlight);
  };

  return (
    <div className="container mx-auto bg-white">
      <CreatorHeader pageRef="Draft in..." />
      <Section yPadding="py-16" divId="createDraft">
        <form onSubmit={submitData}>
          <input
            className="text-xl hover:border-none focus:outline-none placeholder-placeholderColor text-2xl"
            autoFocus
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Title"
            type="text"
            value={form.title}
          />
          {/* later the resize property should be conditional, only allow resize if the input text is bigger than the original size of the textarea tag component */}
          <textarea
            className="hover:border-none focus:outline-none resize-y placeholder-placeholderColor"
            cols={50}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            placeholder="Content"
            rows={8}
            value={form.content}
          />
          <input
            type="checkbox"
            checked={highlight}
            onChange={handleCheckbox}
          />
          <label className="pl-3 mb-5 text-zinc-800">Highlight Post?</label>

          <div className="hover:border-none focus:outline-none w-80 pb-4 pt-4">
            <ChakraProvider>
              <FormControl id="dropdown">
                <CreatableSelect
                  instanceId="creatableSelect"
                  isMulti
                  name="categories"
                  options={categoryOptions}
                  placeholder="Category..."
                  closeMenuOnSelect={true}
                  // next release this should be changes to allow multiple insertions on the database
                  onChange={(e) => setForm({ ...form, category: e[0].label })}
                />
              </FormControl>
            </ChakraProvider>
          </div>

          <ImageUploader
            setFileURL={setFileURL}
            setFileReader={setFileReader}
          />
          <div className="py-12">
            <input
              disabled={!form.content || !form.title}
              type="submit"
              value="Create"
            />
            <a className="back" href="#" onClick={() => Router.push('/drafts')}>
              or Cancel
            </a>
          </div>
        </form>

        <style jsx>{`
          /create .page {
            background: white;
            padding: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          input[type='text'],
          textarea {
            width: 100%;
            padding: 0.5rem;
            margin: 0.5rem 0;
          }

          input[type='submit'] {
            background: #ececec;
            padding: 1rem 2rem;
          }

          .back {
            margin-left: 1rem;
          }
        `}</style>
      </Section>
    </div>
  );
};

export default Draft;

import React, { useState } from 'react';

import Router from 'next/router';

import { Section } from '@/layout/Section';
import { CreatorHeader } from '@/navigation/CreatorHeader';

interface FormData {
  title: string;
  content: string;
  category: string;
  imgSrc: string;
}

const Draft: React.FC = () => {
  /*   const [title, setTitle] = useState('');
  const [content, setContent] = useState(''); */
  const [form, setForm] = useState<FormData>({
    title: '',
    content: '',
    category: '',
    imgSrc: '',
  });

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      // const body = { title, content };
      //       await fetch('/api/post', {
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
  //  const { title, content, postUrl, category, imgSrc } = req.body;
  return (
    <div className="container mx-auto bg-white">
      <CreatorHeader />
      <h1 className="px-7">New Draft</h1>
      <Section yPadding="py-16" key="createDraft">
        <form onSubmit={submitData}>
          <input
            className="text-xl hover:border-none focus:outline-none"
            autoFocus
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Title"
            type="text"
            value={form.title}
          />
          {/* later the resize property should be conditional, only allow resize if the input text is bigger than the original size of the textarea tag component */}
          <textarea
            className="hover:border-none focus:outline-none resize-y"
            cols={50}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            placeholder="Content"
            rows={8}
            value={form.content}
          />
          <input
            className="hover:border-none focus:outline-none"
            autoFocus
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            placeholder="Category"
            type="text"
            value={form.category}
          />
          <input
            autoFocus
            onChange={(e) => setForm({ ...form, imgSrc: e.target.value })}
            placeholder="Image"
            type="text"
            value={form.imgSrc}
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

import React, { useState } from 'react';

import Router from 'next/router';

import { Section } from '@/layout/Section';
import { CreatorHeader } from '@/navigation/CreatorHeader';

interface FormData {
  title: string;
  content: string;
  category: string;
  image: string;
}

const Draft: React.FC = () => {
  /*   const [title, setTitle] = useState('');
  const [content, setContent] = useState(''); */
  const [form, setForm] = useState<FormData>({
    title: '',
    content: '',
    category: '',
    image: '',
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
  //  const { title, content, postUrl, category, image } = req.body;
  return (
    <>
      <CreatorHeader />
      <Section>
        <div>
          <form onSubmit={submitData}>
            <h1>New Draft</h1>
            <input
              autoFocus
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Title"
              type="text"
              value={form.title}
            />
            <textarea
              cols={50}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              placeholder="Content"
              rows={8}
              value={form.content}
            />
            <input
              autoFocus
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              placeholder="Category"
              type="text"
              value={form.category}
            />
            <input
              autoFocus
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              placeholder="Image"
              type="text"
              value={form.image}
            />
            <input
              disabled={!form.content || !form.title}
              type="submit"
              value="Create"
            />
            <a className="back" href="#" onClick={() => Router.push('/drafts')}>
              or Cancel
            </a>
          </form>
        </div>
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
            border-radius: 0.25rem;
            border: 0.125rem solid rgba(0, 0, 0, 0.2);
          }

          input[type='submit'] {
            background: #ececec;
            border: 0;
            padding: 1rem 2rem;
          }

          .back {
            margin-left: 1rem;
          }
        `}</style>
      </Section>
    </>
  );
};

export default Draft;

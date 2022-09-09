export type PostProps = {
  post: any;
  id: string;
  title: string;
  postUrl: string;
  imgSrc: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
  createdAt: Date;
};

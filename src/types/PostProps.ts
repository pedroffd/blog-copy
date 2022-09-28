export type PostProps = {
  props(arg0: string, props: any): unknown;
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

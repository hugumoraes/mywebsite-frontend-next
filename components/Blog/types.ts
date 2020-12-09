export interface IBlogpost {
  id: string;
  title: string;
  content: string;
  published: string;
  createdAt: string;
  cover: string;
}

export interface IProps {
  blogposts: IBlogpost[];
}

export interface Img {
  image: string[];
}
export type PostProps = {
  text: string;
  like: string[];
  unlike: string[];
  comment: number;
  img?: Img;
};

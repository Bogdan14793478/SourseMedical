interface PostI {
  count: number;
  link: string;
}
export interface EventModelI {
  // id: string; - moc
  // time: string;
  // full_name: string;
  // email: string;
  // posts: PostI;
  id: string;
  email: string;
  username: string;
  level: string;
  isActivated: true;
  banned: false;
}

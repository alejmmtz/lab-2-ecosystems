export interface Post {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
}
export interface createPost {
  imageUrl: string;
  title: string;
  description: string;
}

export const postState: createPost = {
  title: "",
  description: "",
  imageUrl: "",
};

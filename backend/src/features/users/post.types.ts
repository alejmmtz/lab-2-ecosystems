export interface Post {
  id: String;
  imageUrl: String;
  title: String;
  description: String;
}

export interface CreatePostDTO {
  imageUrl: String;
  title: String;
  description: String;
}

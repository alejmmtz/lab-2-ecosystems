import { CreatePostDTO, Post } from './post.types';
import Boom from '@hapi/boom';

export class PostService {
  private posts: Post[];

  constructor() {
    this.posts = [];
  }

  getPosts = (): Post[] => {
    return this.posts;
  };

  createPosts = (post: CreatePostDTO): Post => {
    const newPost: Post = {
      id: new Date().getTime().toString(),
      imageUrl: post.imageUrl,
      title: post.title,
      description: post.description,
    };
    this.posts.push(newPost);

    return newPost;
  };

  /*Tipo de operación*/
  deletePosts = (postId: string): void => {
    const postFound = this.posts.find((post) => post.id === postId);

    if (!postFound) {
      throw Boom.notFound('404 Error Post not Found');
    }

    this.posts = this.posts.filter((post) => post.id !== postId);
  };
}

import { Request, Response } from 'express';
import Boom from '@hapi/boom';
import { PostService } from './post.service';

export class PostController {
  private postService: PostService;

  constructor(postService: PostService) {
    this.postService = postService;
  }

  getPosts = (req: Request, res: Response) => {
    const posts = this.postService.getPosts();
    return res.json(posts);
  };

  createPosts = (req: Request, res: Response) => {
    const { imageUrl, title, description } = req.body;

    if (imageUrl === undefined) {
      throw Boom.badRequest('An ImageUrl of the Post is REQUIRED');
    }
    if (title === undefined) {
      throw Boom.badRequest('A Title for the Post is REQUIRED');
    }
    if (description === undefined) {
      throw Boom.badRequest('A Description of the Post is REQUIRED');
    }

    const posts = this.postService.createPosts({
      imageUrl,
      title,
      description,
    });
    return res.json(posts);
  };

  deletePosts = (req: Request, res: Response) => {
    const { id } = req.params;
    //const id = req.params.id;
    this.postService.deletePosts(String(id));
    return res.send('Post DELETED');
  };
}

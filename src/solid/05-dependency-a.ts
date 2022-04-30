import { PostService } from './05-dependency-b';

(async (): Promise<void> => {
  const postService = new PostService();
  const posts = await postService.getPosts();
  console.log({ posts });
})();

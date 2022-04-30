/* import { PostService } from './05-dependency-b';

(async (): Promise<void> => {
  const postService = new PostService();
  const posts = await postService.getPosts();
  console.log({ posts });
})(); */

import { PostService } from './05-dependency-d';
import { LocalDatabaseService, JsonDatabaseService } from './05-dependency-d';

(async (): Promise<void> => {
  // const provider = new JsonDatabaseService();
  const provider = new LocalDatabaseService();

  const postService = new PostService(provider);
  const posts = await postService.getPosts();
  console.log({ posts });
})();

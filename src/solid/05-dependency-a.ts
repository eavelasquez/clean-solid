/* import { PostService } from './05-dependency-b';

(async (): Promise<void> => {
  const postService = new PostService();
  const posts = await postService.getPosts();
  console.log({ posts });
})(); */

import {
  JsonDatabaseService,
  LocalDatabaseService,
  PostService,
  WebApiPostService,
} from './05-dependency-d';

(async (): Promise<void> => {
  // const provider = new JsonDatabaseService();
  // const provider = new LocalDatabaseService();
  const provider = new WebApiPostService();

  const postService = new PostService(provider);
  const posts = await postService.getPosts();
  console.log({ posts });
})();

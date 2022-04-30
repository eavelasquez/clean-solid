// note: uncomment the block without or with Dependency Inversion Principle
// select the block (/* */) to test and press Ctrl+Shift+A to uncomment
// and comment the other block

// ❌ Without Dependency Inversion Principle
/* import { PostService } from './05-dependency-b';

(async (): Promise<void> => {
  const postService = new PostService();
  const posts = await postService.getPosts();
  console.log({ posts });
})(); */

// ✅ With Dependency Inversion Principle
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

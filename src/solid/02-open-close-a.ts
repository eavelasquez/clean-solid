// note: uncomment the block without or with Open-Close Principle
// select the block (/* */) to test and press Ctrl+Shift+A to uncomment
// and comment the other block

// ❌ Without Open-Close Principle
/* import { TodoService, PhotoService, PostService } from './02-open-close-b';

(async (): Promise<void> => {
  const photoService = new PhotoService();
  const postService = new PostService();
  const todoService = new TodoService();

  const photos = await photoService.getPhotos();
  const posts = await postService.getPosts();
  const todos = await todoService.getTodos();

  console.log({ photos, posts, todos });
})(); */

// ✅ With Open-Closed Principle
import {
  HttpClient,
  PhotoService,
  PostService,
  TodoService,
} from './02-open-close-c';

(async (): Promise<void> => {
  const http = new HttpClient('https://jsonplaceholder.typicode.com');

  const photoService = new PhotoService(http);
  const postService = new PostService(http);
  const todoService = new TodoService(http);

  const photos = await photoService.getPhotos();
  const posts = await postService.getPosts();
  const todos = await todoService.getTodos();

  console.log({ photos, posts, todos });
})();

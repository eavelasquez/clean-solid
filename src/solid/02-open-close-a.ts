// ❌ Without Open-Close Principle
import { TodoService, PhotoService, PostService } from './02-open-close-b';

(async (): Promise<void> => {
  const photoService = new PhotoService();
  const postService = new PostService();
  const todoService = new TodoService();

  const photos = await photoService.getPhotos();
  const posts = await postService.getPosts();
  const todos = await todoService.getTodos();

  console.log({ photos, posts, todos });
})();

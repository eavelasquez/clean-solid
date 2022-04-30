// ❌ Without Open-Close Principle: the PostService class is left open to
// modification if the service is changed
// ❌ Without Liskov Substitution Principle
// ❌ Without Dependency Inversion Principle
import { LocalDatabaseService, JsonDatabaseService } from './05-dependency-c';

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: Post[] = [];

  constructor() { }

  async getPosts(): Promise<Post[]> {
    if (this.posts.length === 0) {
      // const posts = await new LocalDatabaseService().getFakePostsDatabase();
      const posts = await new JsonDatabaseService().getPosts();
      this.posts = posts;
    }

    return this.posts;
  }
}

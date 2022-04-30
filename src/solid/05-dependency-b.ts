import { LocalDatabaseService } from './05-dependency-c';

interface Post {
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
      const posts = await new LocalDatabaseService().getFakePostsDatabase();
      this.posts = posts;
    }

    return this.posts;
  }
}

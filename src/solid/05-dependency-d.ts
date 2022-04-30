
import localPosts from '../data/local-database.json';

export class LocalDatabaseService {
  constructor() { }

  async getFakePostsDatabase(): Promise<any[]> {
    return [
      {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
      },
    ];
  }
}

export class JsonDatabaseService {
  constructor() { }

  async getPosts(): Promise<any[]> {
    return localPosts;
  }
}

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

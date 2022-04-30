import localPosts from '../data/local-database.json';

export abstract class PostProvider {
  abstract getPosts(): Promise<Post[]>;
}

export class LocalDatabaseService implements PostProvider {
  constructor() { }

  async getPosts(): Promise<Post[]> {
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

export class JsonDatabaseService implements PostProvider {
  constructor() { }

  async getPosts(): Promise<Post[]> {
    return localPosts;
  }
}

export class WebApiPostService implements PostProvider {
  constructor() { }

  async getPosts(): Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json() as Post[];
    return posts;
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

  constructor(private postProvider: PostProvider) { }

  async getPosts(): Promise<Post[]> {
    if (this.posts.length === 0) {
      const posts = await this.postProvider.getPosts();
      this.posts = posts;
    }

    return this.posts;
  }
}

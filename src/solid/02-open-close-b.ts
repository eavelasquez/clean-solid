// ❌ Without Open-Close Principle: this example relies too much the axios library,
// which is not a good idea because the class is open for modification
import axios from 'axios';

export class TodoService {
  constructor() { }

  async getTodos(): Promise<Object[]> {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    return data;
  }
}

export class PostService {
  constructor() { }

  async getPosts(): Promise<Object[]> {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return data;
  }
}

export class PhotoService {
  constructor() { }

  async getPhotos(): Promise<Object[]> {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/photos'
    );
    return data;
  }
}

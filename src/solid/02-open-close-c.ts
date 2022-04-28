// ✅ With Open-Close Principle
// this example creates a class called HttpClient to centralize
// the axios library or other implementation for making requests,
// which is a good idea because the other classes are closed for modification

// import axios from 'axios';

export class HttpClient {
  constructor(private url: string) { }

  // async get<T>(path: string): Promise<T> {
  //   const { data } = await axios.get(`${this.url}/${path}`);
  //   return data;
  // }

  async get<T>(path: string): Promise<T> {
    const response = await fetch(`${this.url}/${path}`);
    const data = await response.json();

    return { data, status: response.status } as unknown as T;
  }
}

export class TodoService {
  constructor(private http: HttpClient) { }

  async getTodos(): Promise<any[]> {
    const { data } = await this.http.get('todos');
    return data;
  }
}

export class PostService {
  constructor(private http: HttpClient) { }

  async getPosts(): Promise<any[]> {
    const { data } = await this.http.get('posts');
    return data;
  }
}

export class PhotoService {
  constructor(private http: HttpClient) { }

  async getPhotos(): Promise<any[]> {
    const { data } = await this.http.get('photos');
    return data;
  }
}

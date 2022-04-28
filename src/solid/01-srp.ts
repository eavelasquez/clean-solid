((): void => {
  // ❌ Without SRP

  interface Product {
    id: number;
    name: string;
  }

  // Usually, this is a class to control the view that is displayed to the user
  // Remember that we can have many views that do this same job
  class ProductBusinessLogicComponent {
    constructor() { }

    loadProduct(id: number): void {
      // ...
      // carry out some logic to load the product from the database and return it
      console.log('product loaded:', { id, name: 'OLED TV' });
    }

    saveProduct(product: Product): void {
      // ...
      // carry out some logic to save the product into the database
      console.log('product saved', product);
    }

    notifyCustomers(): void {
      // ...
      // carry out some logic to notify customers of the product
      console.log('notified customers');
    }

    addToCart(productId: number): void {
      // ...
      // carry out some logic to add the product to the cart
      console.log('added to cart product:', productId);
    }
  }

  const productBloc = new ProductBusinessLogicComponent();

  productBloc.loadProduct(1);
  productBloc.saveProduct({ id: 1, name: 'OLED TV' });
  productBloc.notifyCustomers();
  productBloc.addToCart(1);
})();

((): void => {
  // ✅ With SRP

  interface Product {
    id: number;
    name: string;
  }

  // This is a class that manages the operations that are related to the product logic
  class ProductService {
    private httpAdapter!: Object; // adapter to make the http request

    getProduct(id: number): Product {
      // ...
      // carry out some logic to get the product from the database and return it
      const product = { id, name: 'OLED TV' };
      console.log('get product', product);
      return product;
    }

    postProduct(product: Product): void {
      // ...
      // carry out some logic to post the product into the database
      console.log('post product', product);
    }
  }

  // This is a class that manages the operations that are related to the email logic
  class MailerService {
    private httpAdapter!: Object; // adapter to make the http request
    private masterEmailAddress: string = 'ai@google.com';

    sendEmail(emailList: string[], template: 'to-clients' | 'to-admin'): void {
      // ...
      // carry out some logic to send the email
      console.log('send email', {
        from: this.masterEmailAddress,
        to: emailList,
        template,
      });
    }
  }

  // Usually, this is a class to control the view that is displayed to the user
  // Remember that we can have many views that do this same job.
  class ProductBusinessLogicComponent {
    private mailerService: MailerService;
    private productService: ProductService;

    constructor(mailerService: MailerService, productService: ProductService) {
      this.mailerService = mailerService;
      this.productService = productService;
    }

    loadProduct(id: number): void {
      // ...
      // carry out some logic to load the product and show it
      this.productService.getProduct(id);
    }

    saveProduct(product: Product): void {
      // ...
      // carry out some logic to save the product
      this.productService.postProduct(product);
    }

    notifyCustomers(): void {
      // ...
      // carry out some logic to notify customers of the product
      this.mailerService.sendEmail(['lucy@google.com'], 'to-clients');
      console.log('notified customers');
    }
  }

  class CartBusinessLogicComponent {
    private itemsInCart: Object[] = [];

    constructor() { }

    addToCart(id: number): void {
      // ...
      // carry out some logic to add the product to the cart
      this.itemsInCart.push({ id, name: 'OLED TV' });
      console.log('added to cart product:', this.itemsInCart);
    }
  }

  const mailerService = new MailerService();
  const productService = new ProductService();

  const productBloc = new ProductBusinessLogicComponent(
    mailerService,
    productService
  );
  const cartBloc = new CartBusinessLogicComponent();

  productBloc.loadProduct(1);
  productBloc.saveProduct({ id: 1, name: 'OLED TV' });
  productBloc.notifyCustomers();
  cartBloc.addToCart(1);
})();

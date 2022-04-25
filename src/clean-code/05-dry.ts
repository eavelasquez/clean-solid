type Size = '' | 'small' | 'medium' | 'large';

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = '',
  ) {}

  isProductReady(): boolean {
    // No Dry
    // if (this.name.length <= 0) throw Error('name is empty');
    // if (this.price <= 0) throw Error('price is zero or negative');
    // if (this.size.length <= 0) throw Error('size is empty');

    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          // validate string is not empty
          if ((<string><unknown>this[key]).length <= 0) {
            throw Error(`${key} is empty`);
          }
          break;
        case 'number':
          // validate number is positive
          if ((<number><unknown>this[key]) <= 0) {
            throw Error(`${key} is zero or negative`);
          }
          break;

        default:
          throw Error(`${typeof this[key]} is not a string or number`);
      }
    }

    return true;
  }

  toString(): string {
    if (!this.isProductReady()) return 'Product is not ready';

    return `${this.name} (${this.price}), ${this.size}`;
  }
}

/**
 * self-executing anonymous function
 */
((): void => {
  const bluePants = new Product('blue pants', 100, 'large');
  const redShirt = new Product('red shirt', 50, 'medium');
  const greenShoes = new Product('green shoes', 150, 'small');

  const products: Product[] = [bluePants, redShirt, greenShoes];

  console.group('products');
  products.forEach(product => console.log(product.toString()));
})();

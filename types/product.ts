export interface Product{
    _id : string,
    productName: string,
    _type : "product"
    category: string,
    price: number,
    inventory: number,
    colors: string, 
    status: string,
    description?: string,
    slug: {
        _type : "slug"
        current :string,
    }
    image: {
        asset: {
          _ref: string;
          _type: "image";
        };
      };
}


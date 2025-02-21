import React from "react";

const products = [
  {
    id: 1,
    name: "Product 1",
    slug: "product-1",
  },
  {
    id: 2,
    name: "Product 2",
    slug: "product-2",
  },
  {
    id: 3,
    name: "Product 3",
    slug: "product-3",
  },
];

const ProductsLayout = ({ children }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <a href={`/products/${product.slug}`}>{product.name}</a>
        </div>
      ))}
    </div>
  );
};

export default ProductsLayout;

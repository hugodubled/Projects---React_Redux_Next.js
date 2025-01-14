import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My first  Book",
    description: "The first book I ever write",
  },
  {
    id: "p2",
    price: 5,
    title: "The second  Book",
    description: "The book I put a lot of effort into it",
  },
  {
    id: "p3",
    price: 4,
    title: "The third  Book",
    description: "The last book I wrote"
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map ( product =>(
          <ProductItem
          key= {product.id}
          id = {product.id}
          title= {product.title}
          price= {product.price}
          description={product.description}
        />))}
      </ul>
    </section>
  );
};

export default Products;

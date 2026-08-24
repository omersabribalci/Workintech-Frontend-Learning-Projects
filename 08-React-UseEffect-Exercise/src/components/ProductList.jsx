import Product from './Product';

export default function ProductList(props) {
  const { products } = props;
  return (
    <>
      {products.map((item, index) => (
        <Product key={item.id} product={item} />
      ))}
    </>
  );
}

import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, setVisible }) => {
   return (
      <ul>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} setVisible={setVisible}/>
         ))}
      </ul>
   );
};

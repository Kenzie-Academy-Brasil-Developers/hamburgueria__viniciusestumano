import { ProductCard } from "./ProductCard";
import style from "./index.module.scss"

export const ProductList = ({ productList, addProduct }) => {
   return (
      <ul className={style.products__list}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} addProduct={addProduct}/>
         ))}
      </ul>
   );
};

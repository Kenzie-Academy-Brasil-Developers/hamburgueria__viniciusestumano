import { MdDelete } from "react-icons/md";
import style from "./index.module.scss";

export const CartItemCard = ({ product, removeProduct }) => {
   return (
      <li className={style.cart__container}>
         <div className={style.cart__imgContainer}>
            <img className={style.cart__img} src={product.img} alt={product.name} />
         </div>
         <div className={style.namePrice__container}>
         <h3 className="heading3">{product.name}</h3>
         <span className={style.span__price}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
         </div>
         <button className={style.button__delete} aria-label="delete" title="Remover item" onClick={() => removeProduct(product)}>
            <MdDelete size={21} />
         </button>
      </li>
   );
};

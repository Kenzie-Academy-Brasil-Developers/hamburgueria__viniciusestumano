import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import style from "./index.module.scss";

export const CartModal = ({ cartList, setVisible }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div role="dialog" className={style.cart__container}>
         <div className={style.cart__titleClose}>
            <h2>Carrinho de compras</h2>
            <button className={style.closeButton} aria-label="close" title="Fechar" onClick={() => setVisible(false)}>
               <MdClose size={21} />
            </button>
         </div>
         <div>
            <ul className={style.list__itens}>
               {cartList.map((product) => (
                  <CartItemCard key={product.id} product={product} />
               ))}
            </ul>
         </div>
         <div className={style.valueButton__container}>
            <div className={style.total__value}>
               <span className="heading3">Total</span>
               <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
            <button className="button__removeAll">Remover todos</button>
         </div>
      </div>
   );
};

import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md";
import style from "./index.module.scss";

export const Header = ({ setVisible, cartList }) => {
   return (
      <header className={style.header__container}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <button onClick={() => setVisible(true)}>
            <MdShoppingCart size={21} />
            <span className="heading3" cartList={cartList}>{cartList.length}</span>
         </button>
      </header>
   );
};

import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md";
import style from "./index.module.scss";

export const Header = () => {
   return (
      <header className={style.header__container}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <button>
            <MdShoppingCart size={21} />
            <span>0</span>
         </button>
      </header>
   );
};

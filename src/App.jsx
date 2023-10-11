import { useState, useEffect } from "react";
import { CartModal } from "./components/CartModal";
import { HomePage } from "./pages/HomePage";
import "./styles/index.scss";
import { hamburgueriaApi } from "./services/api";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartList, setCartList] = useState([]);
  const [isVisible, setVisible] = useState(false);

  const addProduct = (productToAdd) => {
    setCartList([...cartList, productToAdd]);
    toast.success("Produto adicionado ao carrinho.");
  }

  const removeProduct = (productToRemove) => {
    const updatedCartList = cartList.filter((product) => product !== productToRemove);
    setCartList(updatedCartList);
    toast.error("Produto removido do carrinho.");
  }

  const clearAllProducts = () => {
    setCartList([]);
    toast.error("Todos os produtos foram removidos do carrinho.");
  }

  return (
    <>
      <HomePage
        setVisible={setVisible}
        addProduct={addProduct}
        cartList={cartList} 
      />

      {isVisible ? <CartModal 
      cartList={cartList} 
      setVisible={setVisible} 
      removeProduct={removeProduct}
      clearAllProducts={clearAllProducts} 
      /> : null}
      <ToastContainer position="bottom-right" />
    </>
  )
}

export default App

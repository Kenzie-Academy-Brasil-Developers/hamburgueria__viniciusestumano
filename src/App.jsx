import { useState, useEffect } from "react";
import { CartModal } from "./components/CartModal";
import { HomePage } from "./pages/HomePage";
import "./styles/index.scss";
import { hamburgueriaApi } from "./services/api";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartList, setCartList] = useState([]);
  const [isVisible , setVisible] = useState(false);

 const addProduct = (productToAdd) => {
  setCartList([...cartList, productToAdd]);
  toast.success("Produto adicionado ao carrinho.");
}

  return (
    <>
      <HomePage setVisible={setVisible} addProduct={addProduct}/>
      {isVisible ? <CartModal cartList={cartList} setVisible={setVisible} /> : null}
      <ToastContainer position="bottom-right" />
    </>
  )
}

export default App

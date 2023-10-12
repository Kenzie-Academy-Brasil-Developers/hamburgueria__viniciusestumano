import { useState, useEffect } from "react";
import { CartModal } from "./components/CartModal";
import { HomePage } from "./pages/HomePage";
import "./styles/index.scss";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartList, setCartList] = useState([]);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const savedCartList = localStorage.getItem("cartList");

    if (savedCartList) {
      setCartList(JSON.parse(savedCartList));

    }
  }, []);

  const addProduct = (productToAdd) => {
    const existingProduct = cartList.find(item => item.id === productToAdd.id);

    if (existingProduct) {
      const updatedCartList = cartList.map(item => {
        if (item.id === productToAdd.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartList(updatedCartList);
    } else {
      setCartList([...cartList, { ...productToAdd, quantity: 1 }]);
    }

    toast.success("Produto adicionado ao carrinho.");
    localStorage.setItem("cartList", JSON.stringify(cartList));

  }

  const removeProduct = (productToRemove) => {
    const existingProduct = cartList.find(item => item.id === productToRemove.id);

    if (existingProduct && existingProduct.quantity > 1) {
      const updatedCartList = cartList.map(item => {
        if (item.id === productToRemove.id) {
          return { ...item, quantity: item.quantity - 1 };

        }
        return item;

      });
      setCartList(updatedCartList);

    } else {
      const updatedCartList = cartList.filter(item => item.id !== productToRemove.id);
      setCartList(updatedCartList);
      
      const updatedLocalStorageCart = JSON.parse(localStorage.getItem("cartList"));
      const updatedCartIndex = updatedLocalStorageCart.findIndex(item => item.id === productToRemove.id);
  
      if (updatedCartIndex !== -1) {
        updatedLocalStorageCart.splice(updatedCartIndex, 1);
        localStorage.setItem("cartList", JSON.stringify(updatedLocalStorageCart));

      }
    }
  
    toast.error("Produto removido do carrinho.");

  }

  const calculateTotal = () => {
    return cartList.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  const clearAllProducts = () => {
    setCartList([]);
    toast.error("Todos os produtos foram removidos do carrinho.");
    localStorage.removeItem("cartList");
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
      calculateTotal={calculateTotal()} 
      /> : null}
      <ToastContainer position="bottom-right" />
    </>
  )
}

export default App

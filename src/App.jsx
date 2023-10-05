import { useState, useEffect } from "react";
import { CartModal } from "./components/CartModal";
import { HomePage } from "./pages/HomePage";
import "./styles/index.scss";
import { hamburgueriaApi } from "./services/api";

function App() {
  const [cartList, setCartList] = useState([]);
  const [isVisible , setVisible] = useState(false);

  useEffect(() => {
    const fetchCarts = async () => {
       try {
          const { data } = await hamburgueriaApi.get("/products");
          setCartList(data);
       } catch (error) {
          console.log("Erro ao renderizar o produto.");
          console.log(error.message);
       }
    };

    fetchCarts();

 }, []);

  return (
    <>
      <HomePage setVisible={setVisible} />
      {isVisible ? <CartModal cartList={cartList} setVisible={setVisible} /> : null}
    </>
  )
}

export default App

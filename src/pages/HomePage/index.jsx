import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { hamburgueriaApi } from "../../services/api";

export const HomePage = ({ setVisible, addProduct, cartList }) => {
   const [productList, setProductList] = useState([]);

   useEffect(() => {
      const fetchProducts = async () => {
         try {
            const { data } = await hamburgueriaApi.get("/products");
            setProductList(data);
         } catch (error) {
            console.log("Erro ao buscar o produto.");
            console.log(error.message);
         }
      };

      fetchProducts();

   }, []);

   return (
      <>
         <Header
            setVisible={setVisible}
            cartList={cartList}
         />

         <main>
            <ProductList productList={productList} addProduct={addProduct} />
         </main>
      </>
   );
};

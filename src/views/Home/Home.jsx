import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsThunk } from "../../store/slices/productSlice";
import ProductList from "../ProductList/ProductList";
import { selectUser } from "../../store/slices/userSlice";
import {
  selectAllProducts,
  selectSearchTerm,
} from "../../store/slices/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const products = useSelector(selectAllProducts);
  const searchTerm = useSelector(selectSearchTerm);

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, []);

  console.log("fetched products --->", products);

  useEffect(() => {}, [searchTerm, products]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <div className="user-message">
        {user ? (
          <p>¡{user.username}, aprovecha tu 20% de descuento!</p>
        ) : (
          <p>Crea una cuenta para disfrutar de nuestros descuentos.</p>
        )}
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Home;

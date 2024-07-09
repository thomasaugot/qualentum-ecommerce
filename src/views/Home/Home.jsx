import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/actions";
import ProductList from "../ProductList/ProductList";
import { selectUser } from "../../redux/reducers/userReducer";
import {
  selectAllProducts,
  selectSearchTerm,
} from "../../redux/reducers/productReducer";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const products = useSelector(selectAllProducts);
  const searchTerm = useSelector(selectSearchTerm);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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

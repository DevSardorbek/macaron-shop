import React, { useEffect, useState } from "react";
import "../../sass/__products.scss";
import { FiChevronRight } from "react-icons/fi";
import axios from "axios";
import bag from "../../assets/bag.png";
import { useSearchParams } from "react-router-dom";
import Modal from "../modal/Modal";

const API_URL = "https://dummyjson.com";

const Products = () => {
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [detailData, setDetailData] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [limit, setLimit] = useState(10);

  document.body.style.overflow = detailData ? "hidden" : "auto";

  useEffect(() => {
    const id = searchParams.get("detail");
    if (id) {
      axios
        .get(`${API_URL}/products/${id}`)
        .then((res) => setDetailData(res.data))
        .catch((err) => console.error(err));
    }
  }, [searchParams]);

  useEffect(() => {
    axios
      .get(`${API_URL}/products`, { params: { limit: 18 } })
      .then((res) => setData(res.data.products))
      .catch((err) => console.error(err));

    axios
      .get(`${API_URL}/products/categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddToCart = (product) => {
    setSearchParams({ detail: product.id });
    setQuantity(quantity + 1);
  };
  const closeDetailModal = () => {
    setDetailData(null);
    setSearchParams({});
  };
  const handleShowMore = () => {
    setLimit(limit + 5);
    axios
      .get(`${API_URL}/products`, { params: { limit: limit + 5 } })
      .then((res) => setData(res.data.products))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="products__wrapper">
        <div className="container">
          <div className="products__line">
            <p>Главная</p>
            <FiChevronRight />
            <p>Каталог</p>
            <FiChevronRight />
            <p>Готовые наборы</p>
          </div>
          <div className="products__title">
            <h1>Готовые наборы</h1>
          </div>
          <div className="products__category">
            {categories.map((category) => (
              <button key={category.name}>{category.name}</button>
            ))}
          </div>
          <div className="products__cards">
            {data &&
              data.slice(0, limit).map((product) => (
                <div
                  key={product.id}
                  data-aos="fade-up"
                  className="products__card"
                >
                  <div className="products__card-img">
                    <img src={product.images[0]} alt="" />
                  </div>
                  <div className="products__card-info">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <div>
                      <h2>${product.price}</h2>
                      <button onClick={() => handleAddToCart(product)}>
                        <img src={bag} alt="" />
                        <span>В корзину</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="more__btn">
            <button onClick={handleShowMore}>Показать ещё</button>
          </div>
        </div>
      </div>
      {detailData && (
        <Modal close={closeDetailModal}>
          <div className="modal">
            <div className="product__modal__wrapper">
              <div className="prodact__img">
                <img width={400} src={detailData.images[0]} alt="" />
              </div>
              <div className="product_info">
                <h1>{detailData.title}</h1>
                <p>{detailData.description}</p>
                <span>
                  <del>${detailData.price * 1.5}</del>
                  <h2>${detailData.price}</h2>
                </span>
                <article>
                  <button onClick={() => setQuantity(quantity - 1)}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </article>
                <div className="all__price">
                  <h1>${detailData.price * quantity}</h1>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Products;

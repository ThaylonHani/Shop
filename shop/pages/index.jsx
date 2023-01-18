// import styles from "../styles/Home.module.css";
import styles_modal from "../styles/ModalProduct.module.scss";
import styles_div from "../styles/Products.module.scss";

import Link from "next/link";
import { HeadTitle } from "../src/infra/headTitle";
import Modal from "react-modal";
import { useEffect, useState, useContext } from "react";
import { Cart } from "../src/components/Cart";
import { Header } from "../src/components/Header";
import { CartContext } from "../context/CartContext";

export default function Home() {
  const [itemsCart, setItemsCart] = useState([]);
  const [stateCart, setStateCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    productName: "",
    productPrice: 0,
    url: "",
    description: "",
  });
  useEffect(() => {
    fetch("/api/product")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setProducts(res);
      });
  }, []);

  const { handleBuyProducts } = useContext(CartContext);

  function openModal() {
    setIsOpen(true);
    document.querySelector("body").classList.add("overflow-hidden");
    document.querySelector("header").style.display = "none";
  }

  function closeModal() {
    setIsOpen(false);
    document.querySelector("body").classList.remove("overflow-hidden");
    document.querySelector("header").style.display = "flex";
  }
  
  return (
    <>
      <Header setState={() => setStateCart(true)} />
      <div className={styles_div.product}>
        <HeadTitle key={Math.random() * 10}>Shop</HeadTitle>
        {products.map((product, idx) => {
          return (
            <div key={product.Key} >
              <section className={styles_div.section_products} onClick={() => {
                openModal();
                setModalContent(product);
              }}>
              <section>
                
                <h1 id="product-name" className="product-title">
                  {product.name}
                </h1>
              </section>
              <img
                src={product.url ? product.url : "https://picsum.photos/1000"}
                alt={product.name}
              />
              <p>R$ {product.price} </p>
             </section>
              <Modal
                idx={idx}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className={styles_modal.div}
                contentLabel="Example Modal"
                ariaHideApp={false}
              >
                <div className={styles_modal.section}>
                  <section className={styles_modal.header}>
                    <h2>{modalContent.name}</h2>
                    <i
                      className={`bi bi-x ${styles_modal.i}`}
                      onClick={closeModal}
                    ></i>
                  </section>
                  <img src={modalContent.url} alt="" />
                  <p className={styles_modal.price}>R$ {modalContent.price}</p>
                  <button
                    className={styles_modal.addCart}
                    onClick={() => {
                      setItemsCart((prev) => [...prev, modalContent]);
                      closeModal();
                      setStateCart(true);
                    }}
                  >
                    Coloque no carrinho
                  </button>
                  <h4>Descrição:</h4>
                  <p>{modalContent.description}</p>
                </div>
              </Modal>
              {stateCart ? (
                <Cart product={itemsCart} setState={() => setStateCart()} />
              ) : (
                ""
              )}
            </div>
          );
        })}
        
      </div>
    </>
  );
}

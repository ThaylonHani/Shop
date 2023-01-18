import Link from "next/link";
import { useState, useContext } from "react";
import Modal from "react-modal";
import { CartContext } from "../../context/CartContext";
useState;
import stylesCart from "../../styles/Cart.module.scss";
export function Cart({ product, setState }) {

  const {handleBuyProducts } = useContext(CartContext);
  const [href, setHref] = useState(false);
 

 


  function handleRemoveProduct(key) {
    const result = product.filter((el) => {
      return el.Key == key;
    });

    for (const element of result) {
      const index = product.indexOf(element);
      product.splice(index, 1);
    }
  }

    function closeModal() {
       
    setState(false);
    document.querySelector("body").classList.remove("overflow-hidden");
    document.querySelector("header").style.display = "flex";
  }
  
    
  return (
    <Modal
      isOpen={product}
      onRequestClose={closeModal}
      className={stylesCart.divCart}
      contentLabel="Cart Modal"
      ariaHideApp={false}
      >
      <p>
        <i className="bi bi-cart2" alt="carrinho de compras"></i>{" "}
        <i
          className="bi bi-x"
          alt="botão para fechar carrinho"
          onClick={() => {
            setState(false);
            closeModal();
          }}
        ></i>{" "}
          </p>
      {product.length > 0 ?
          <div className="products">
                  {product.map((product) => {
                      return (
                          <section key={Math.random() * product.Key}>
                              <img src={product.url} alt={product.name} />
                              <span>
                                  <h3>{product.name}</h3>
                                  <h4>R$ {product.price}</h4>
                              </span>
                              <i
                                  className="bi bi-trash"
                                  key={Math.random() * 3}
                                  onClick={(e) => {
                                      e.target.parentNode.remove();
                                      handleRemoveProduct(product.Key);
                                      if (product.length == 0) {
                                          () => setState(false);
                                      }
                                  }}
                              ></i>
                          </section>
                      );
                  })} 
              </div>
              : <p className={stylesCart.p}>Carrinho vazio</p> }
      <Link href={href ? "/purchase" : "/"} legacyBehavior passHref className="Link" >
        <a onClick={() => { handleBuyProducts(product), product.length > 0 ? setHref(true) : (setHref(false), alert("Erro: Carrinho vazio")) }}>
        Fechar compra
        </a>
        </Link>
    </Modal>
  );
}

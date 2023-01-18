import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Header } from "../src/components/Header";

export default function Purchase() {
  const [showProduct, setShowProduct] = useState(true);
  const { itemsCartContext } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleShowProducts() {
    document.querySelector(".container-items").style.display = showProduct
      ? "block"
      : "none";
    setShowProduct(!showProduct);
    handleTotalPrice();
  }

  function handleTotalPrice() {
    let total = 0;
    for (let i = 0; i < itemsCartContext.length; i++) {
      total = total + itemsCartContext[i].price;
    }

    setTotalPrice(total.toFixed(2));
  }

  return (
    <>
      <Header />
      <button onClick={handleShowProducts}>
        {" "}
        <span className="show">
          {showProduct ? "Mostrar" : "Esconder"}
        </span>{" "}
        Produtos{" "}
        <i
          className={
            showProduct ? "bi bi-caret-down-square" : "bi bi-caret-up-square"
          }
        ></i>{" "}
        <span className="totalPrice">
          {" "}
          {totalPrice ? `${totalPrice} R$` : ""}
        </span>{" "}
      </button>
      <div className="container-items">
        {itemsCartContext.length > 0 ? (
          itemsCartContext.map((itemsInCart) => {
            return (
              <section className="section-container">
                <p>
                  <h1>{itemsInCart.name}</h1>
                  <p className="itemPrice">{itemsInCart.price}</p>
                </p>
                <img src={itemsInCart.url} alt={itemsInCart.name} />
              </section>
            );
          })
        ) : (
          <h1>
            Carrinho vazio, volte para a <Link href="/">página principal</Link>{" "}
          </h1>
        )}
      </div>

      <form action={itemsCartContext.length > 0 ? "purchase/successful" : "purchase/unsuccessful" }>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
                  id="name"
                  name="name"
          placeholder="EX: João dos Santos"
          minLength={3}
          maxLength={30}
          pattern="\w{3,30 }"
          required
          onClick={(e) => console.log(e)}
        />
        <label htmlFor="Cpf">Cpf:</label>
        <input
          type="text"
                  id="cpf"
                  name="cpf"
          title="Formato do cpf: (xxx.xxx.xxx-xx) "
          placeholder="xxx.xxx.xxx-xx"
          pattern="[0-9]{3}([. ]{1})?[0-9]{3}([. ]{1})?[0-9]{3}([- ]{1})?[0-9]{2}"
          required
          maxLength={14}
        />
        <label htmlFor="card">Número do cartão:</label>
        <input
          type="text"
                  id="card"
                  name="card"
          placeholder="xxxx xxxx xxxx xxxx"
          pattern="[0-9]{4}[- ]?[0-9]{4}[- ]?[0-9]{4}"
          title="Formato do cartão: 0000 0000 0000 0000 (16 dígitos)"
          maxLength={16}
          required
        />
        <label htmlFor="tel">Telefone:</label>
        <input
          placeholder="(00) 0000-0000"
          type="tel"
          name="tel"
          id="tel"
          pattern="\(?[0-9]{2}\)?[ ]?[9]?[0-9]{4}[- ]?[0-9]{4}"
          maxLength="19"
          required
        />
        <button type="submit" className="buyButton">
          Comprar
        </button>
      </form>
      <style jsx>{`
        section {
          display: flex;
          justify-content: space-between;
          text-align: center;
          align-items: center;
          padding: rem;
          width: 100%;
          padding: 0.3rem;
          margin-top: 1rem;
        }
        .container-items {
          transform: translateY(-2rem);
          display: none;
          border-bottom: 2px solid rgb(242, 167, 101);
          animation: showContainerItems 0.5s ease-in-out forwards;
        }

        @keyframes showContainerItems{
          to{
            transform: translateY(0);
          }
        }

        .totalPrice {
          width: 100rem;         
          margin-left: 2rem;
          color:rgb(25, 24, 38);
          text-align: center;
          animation: showTotalPrice 2s ease forwards;
        }

        @keyframes showTotalPrice{
          to{
            color:inherit
          }
        }

        
        button {
          width: 100%;
          text-align: left;
          justify-content: space-around;
          align-items: center;
          padding: 0.5em;
          font-size: 1.2rem;
          background-color: rgb(25, 24, 38);
          border: 0;
          color: #f2f2f2;
        }

        i {
          font-size: 1.2rem;
        }
        h1 {
          font-size: 1.3rem;
        }
        p {
          width: 60%;
          text-align: center;
          margin: 0;
        }
        .itemPrice {
          width: 100%;
          font-size: 1rem;
        }
        img {
          width: 3.5rem;
          height: 3.5rem;
          max-width: 4rem;
          max-height: 4rem;
          border-radius: 1rem;
        }
        form {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          flex-wrap: wrap;
          align-items: center;
          text-align: center;
          border-radius: 1rem;
          justify-content: center;
          max-width: 100%;
          width: 80%;
          margin: 3rem auto 0;
          background-color: rgb(49, 55, 89);
        }
        input {
          padding: 0.2rem;
          width: 90%;
          border-radius: 0.5rem;
          text-align: center;
          font-size: 1.2rem;
          background-color:rgb(132, 216, 130);
          border:2px solid rgb(242, 167, 101);
        }
        input:invalid {
          background-color: rgb(49, 55, 89);
        }
        label {
          margin-top: 1rem;
          font-size: 1.2rem;
        }
        .buyButton {
          width: 90%;
          margin-top: 2rem;
          text-align: center;
          padding: 1rem;
          font-size: 1.5rem;
          border-radius: 1rem;
          border: none;
          font-weight: 700;
          color: rgb(132, 216, 130);
        }



      `}</style>
    </>
  );
}

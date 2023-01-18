import styles from "../styles/About.module.scss";
import { useState } from "react";
import { Header } from "../src/components/Header";
export default function about() {
  const [topicQuestions, setTopicQuestions] = useState(true);
  const [topicGitHub, setTopicGitHub] = useState(false);
  const [topicProgram, setTopicProgram] = useState(false);

  function handleTopics(chose) {
    if (chose == "a") {
      setTopicQuestions(true);
      setTopicGitHub(false);
      setTopicProgram(false);
    } else if (chose == "b") {
      setTopicQuestions(false);
      setTopicGitHub(true);
      setTopicProgram(false);
    } else {
      setTopicQuestions(false);
      setTopicGitHub(false);
      setTopicProgram(true);
    }
  }
  

  return (
    <>
      <Header/>
    <div className={styles.about}>
      <section className={styles.topics}>
        <ul>
          <li onClick={() => {handleTopics("a")}} style={{"color": topicQuestions ? "rgb(132, 216, 130)" : "rgb(242, 242, 242)"}}>Perguntas frequentes</li>
          <li onClick={() => handleTopics("b")}   style={{"color": topicGitHub ? "rgb(132, 216, 130)" : "rgb(242, 242, 242)"}}> Github</li>
          <li onClick={() => handleTopics("c")}   style={{"color": topicProgram ? "rgb(132, 216, 130)" : "rgb(242, 242, 242)"}}>Criação</li>
        </ul>
        <p></p>
      </section>
      <section className={styles.test}>
        <ol>
          {topicQuestions ? (
            <>
              <li>Quais são os estados em que entregamos ?</li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, provident explicabo nostrum corrupti nulla facilis
                eligendi tempore ratione ex! Fugit molestiae ut earum, facilis
                excepturi minus eligendi iste aspernatur? Ea.
              </p>
              <li>Quem somos nós ?</li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus dolore cupiditate tempore aliquam libero quia modi
                sapiente ducimus. Quam at dolores illum eaque odio labore ab
                possimus unde, doloribus voluptatibus!
              </p>
              <li>Fazemos devoluções ?</li>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
                cum eligendi saepe, recusandae, excepturi veniam praesentium
                velit autem distinctio debitis voluptatibus a corrupti quia
                similique eveniet mollitia voluptatem eum quaerat.
              </p>
            </>
          ) : (
            ""
          )}
          {topicGitHub ? (
            <>
              <li>Meu GitHub</li>
              <p>
                Acesse:  
                <a href="https://github.com/ThaylonHani" target="_blank">
                  Th0Gy
                </a>
              </p>
            </>
          ) : (
            ""
          )}
          {topicProgram ? (
            <>
              <li>Linguagem e frameWork:</li>
              <p>A linguagem foi Javascript com o framework React</p>
              <li>Objetivo:</li>
              <p>
                Simular um Web App de compras, podendo colocar o produto no
                carrinho, ver mais informações do produto e finalizar a compra
              </p>
            </>
          ) : (
            ""
          )}
        </ol>
      </section>
      </div>
      </>
  );
}

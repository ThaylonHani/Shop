import styles from "../../styles/Header.module.scss";
import { useState } from "react";
import Link from "next/link";
export function Header({setState}) {
  const [menu, setMenu] = useState(false);

  function handleOpenMenu() {
    setMenu(!menu);
    const body = document.querySelector("body");
    body.style.overflow = 'hidden';
  }

  function closeMenu() {
    setMenu(false);
    const body = document.querySelector("body");
    if (body.offsetWidth < 480) {
      document.querySelector("nav").style.display = "none";

    }
    body.style.overflow = 'scroll';
  }


  return (
    <header className={styles.header}>
      <div>
        <h1 onClick={closeMenu}><Link href="/">Shop</Link></h1>
      </div>

      
        <nav>
          <ul>
            <li onClick={closeMenu}><Link href="/about">Sobre</Link></li>
            {setState ? <li onClick={() => { closeMenu(); setState() }}>Carrinho</li> : ""}

          </ul>
        </nav>
      
      {menu ? (
        <i className="bi bi-x" onClick={() => {closeMenu(), document.querySelector("nav").style.display = "none"}}></i>
      ) : (
        <i className="bi bi-list" onClick={() => {handleOpenMenu(), document.querySelector("nav").style.display = "block"}}></i>
      )}
    </header>
  );
}

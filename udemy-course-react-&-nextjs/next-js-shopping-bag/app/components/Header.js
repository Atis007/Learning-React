import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
// import { useBasket } from "../context/BasketContext";
import BasketCount from "./BasketCount";

export default function Header() {
  // to access the basket context, the whole Header component needs to be a client component
  // so we add 'use client' at the top of this file
  // but we don't want the whole header to be a client component, because it will lose the server-side rendering benefits
  // so I just comment out the code for learning purpose, and create a new component for that simple part that needs to be interactive (number of items in the basket)
  /* const { items } = useBasket();
console.log('basket items:', items) */

  return (
    /*kebab-case stlye using is look like this*/
    <header className={styles["app-header"]}>
      {/* multiple classes, first one is from a module, the other is from the global css files, this is how to apply them*/}
      <div className={`${styles.wrapper} container`}>
        <aside>
          <Link href="/">
            <Image src="/logo.png" alt="Website Logo" width={108} height={22} />
          </Link>
        </aside>
        <aside>
          <nav>
            <ul>
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/products">
                <li>Product</li>
              </Link>
              <Link href="/basket">
                <li className={styles.basket}>
                  Shopping Bag 
                  <BasketCount />
                </li>
              </Link>
            </ul>
          </nav>
        </aside>
      </div>
    </header>
  );
}

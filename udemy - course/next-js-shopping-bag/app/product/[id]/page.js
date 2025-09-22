import styles from './page.module.css';
import Image from 'next/image';
import AddToBag from './AddToBag';
import { formatPrice } from '@/app/util';

/*
  This is a server component by default, to make it a client component, we need to add 'use client' at the top of the file
  We need to make it a client component because we are using useState and useEffect hooks
  If the 'use client' is added, we cannot use server-side code like fetch directly, we need to use it inside useEffect or other client-side hooks
  So the export function cannot be async, we need to fetch the data inside useEffect and store it in a state


  The best practice is to keep everything as is, and make a seperate client component for the parts that need to be interactive
  This way, we can keep the server-side rendering benefits and also have interactivity where needed
*/
export default async function page({params}) {
  const {id} = await params;
  const data = await fetch(
    `https://dummyjson.com/products/${id}`
  );
  const product = await data.json();
  

  return (
    <div className={`${styles["product-page"]} container`}>
      <section className={styles.photo}>
        <Image
          src={product.images[0]}
          alt={`Image for ${product.title}`}
          width={344}
          height={344}
        />
      </section>

      <section className={styles.info}>
        <h1>{product.title}</h1>
        <p className={styles.price}>{formatPrice(product.price)}</p>
        <p>{product.description}</p>

        <AddToBag product={product}/>
      </section>
    </div>
  );
}

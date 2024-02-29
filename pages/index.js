import Head from "next/head";
//import Image from "next/image";
//import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import Link from 'next/link'
//import about from "./api/about";

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
      <title>Ayushi's List | Home</title>
      <meta name="keywords" content = "ayushi" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.title.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quisquam nemo modi reiciendis odio commodi nobis culpa repellendus? Temporibus maxime possimus aperiam nam. Numquam recusandae molestias aliquam sed commodi. Omnis?</p>
      <p className={styles.title.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi illum molestias cumque quis molestiae quidem, reprehenderit, tempore incidunt minima, ab vel repellat? Facilis, ea iste! Iure, laboriosam! Quisquam, vitae exercitationem!</p>
      <Link href="/ayushi" className={styles.btn}>
        See Ayushi's Listing
      </Link>
    </div>
    </>
  );
}

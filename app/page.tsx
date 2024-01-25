import Link from "next/link"
import Head from "next/head"
import styles from "@/styles/styles.module.css"
import Footer from "@/components/Footer"
import Login from "@/components/Login"
import IndexPage from "@/components/indexPage"

export default function Home() {
  return (
    <div className={styles.container}>
      {/*<Head>
          <title>Mi pagina web</title>
          <meta httpEquiv="Content-Types" content="text/html;charset-UFT-8" />
          <meta name="viewport" content="width-device-widt, initial-scale=1,"></meta>

        </Head>*/}

      {/*Navbar*/}
      {/*<nav className={styles.navbar}>
        <a href="#" className={styles.navbarBrand}>Home</a>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
            <Link href="/pages/help" className={styles.navLink}>
              Help
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/pages/session" className={styles.navLink}>
              Session
            </Link>
          </li>
        </ul>
      </nav>*/}

      {/*Componente Principal*/}
      {/*<div className={styles.content}>
        <h1>Hola mundo</h1>
      </div>

      {/*Componente Footer*/}
      {/*<Footer />}*/}
      <IndexPage />

    </div>
  )
}

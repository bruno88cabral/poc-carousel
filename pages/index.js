import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <Link href="/react-slick">
          <a>
              react-slick
          </a>
        </Link>
        <Link href="/react-carousel">
          <a>
            react-carousel
          </a>
        </Link>
    </div>
  )
}

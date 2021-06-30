import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import ProductCard from '../components/product-card'

export default function Home() {
  return (
    <div className={styles.container}>
        <Link href="/react-slick">
          <a>
            <ProductCard>
              <h1>
                react-slick
              </h1>
              <p>downloads: 795k/month</p>
              <p>unpacked size: 764 kB</p>
              <p>maintained: yes</p>
              <p>ssr supports: yes</p>
            </ProductCard>
          </a>
        </Link>
        
        <Link href="/react-multi-carousel">
          <a>
            <ProductCard>
              <h1>
                react-multi-carousel
              </h1>
              <p>downloads: 77k/month</p>
              <p>unpacked size: 754 kB</p>
              <p>maintained: yes</p>
              <p>ssr supports: yes</p>
            </ProductCard>
          </a>
        </Link>

        <Link href="/react-styled-carousel">
          <a>
            <ProductCard>
              <h1>
                react-styled-carousel
              </h1>
              <p>downloads: 1.5k/month</p>
              <p>unpacked size: 403 kB</p>
              <p>maintained: yes</p>
              <p>ssr supports: yes</p>
            </ProductCard>
          </a>
        </Link>
    </div>
  )
}

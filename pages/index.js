import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Chandra Shekar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Comming Soon..." />
        <p>
          Browser previous articles on <a href="https://medium.com/@csreddy1998">Medium</a>
        </p>
        <p><a href="mailto:howdy@csreddy.com">howdy@csreddy.com</a></p>
      </main>
    </div>
  )
}

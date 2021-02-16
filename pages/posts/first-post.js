import Link from "next/link"
import Head from "next/head"
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
    <Head>
      <title>An amazing new blog</title>
    </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back home!</a>
        </Link>
      </h2>
    </Layout>
  )
}
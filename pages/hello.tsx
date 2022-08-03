import type {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/layout'
import styles from '@/styles/Home.module.css'

const Hello = (props: any) => {
  console.log(props)
  console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID)
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>hello page</title>
          <meta name='description' content='这是一个page页面' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>hello page </h1>
          <div className='text-6xl font-bold'>
            返回{' '}
            <Link href='/'>
              <a>首页</a>
            </Link>
          </div>
        </main>
        {/*  <style jsx>{`
          .test {
            color: red;
          }
        `}</style> */}
      </div>
    </Layout>
  )
}

/* export const getStaticPaths: GetStaticPaths = async () => {
  // ...
}; 

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...
};*/
export const getStaticProps: GetStaticProps = async (context) => {
  // Get external data from the file system, API, DB, etc.
  const data = [1, 2, 3]

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      list: data,
    },
  }
}
export default Hello

import { GetServerSideProps, GetStaticPaths } from 'next'
import { getAllPostIds } from '../../utils/posts'
interface Props {
  id: string | number
  list: any[]
}

export default function Post({ id, list }: Props) {
  return <div>Postid:{id}</div>
}

/* export const getServerSideProps: GetServerSideProps = async (content) => {
  return {
    props: {},
  }
} */
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds() // 从服务器获取可用的参数列表.此部分为预渲染的,
  return {
    paths,
    fallback: true, //blocking 则未返回的新路径getStaticPaths将等待HTML生成，与 SSR 相同（因此为什么阻塞），然后缓存以供将来的请求使用，因此每个路径仅发生一次。 false时,只有paths中有的路由能通过,没有的无法通过,跳转404页面
  }
}

export async function getStaticProps({ params }: any) {
  //根据参数获取数据,然后返回给组件使用
  const data = [1, 2, 3]
  console.log(params)

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      id: params.id,
      list: data,
    },
  }
}

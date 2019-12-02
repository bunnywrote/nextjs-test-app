import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../../../components/header'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>Title: Post {id} 🤔</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      <h1>Post: {id}</h1>
      <ul>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Post

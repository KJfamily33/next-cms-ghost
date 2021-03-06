
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { Layout, HeaderPage, PostCard } from '@components'

import { getPosts, getAllSettings, GhostSettings } from '@lib/ghost'
import { useLang, get } from '@utils/use-lang'
import { PostsOrPages } from '@tryghost/content-api'

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts({ limit: 3 })
  const settings = await getAllSettings()

  return {
    props: {
      settings,
      posts
    },
  }
}

interface Custom404Props {
  posts: PostsOrPages
  settings: GhostSettings
}


export default function Custom404({ posts, settings }: Custom404Props) {
  const text = get(useLang())

  return (
    <Layout {...{ settings }} header={<HeaderPage {...{ settings }} />} errorClass="error-content">
      <div className="inner">
        <section className="error-message">
          <h1 className="error-code">404</h1>
          <p className="error-description">{text(`PAGE_NOT_FOUND`)}</p>
          <Link href="/" ><a className="error-link">{text(`GOTO_FRONT_PAGE`)} →</a></Link>
        </section>

        <div className="post-feed">
          {posts.map((post, i) => (
            <PostCard key={post.id} post={post} num={i} />
          ))}
        </div>

      </div>
    </Layout>
  )
}

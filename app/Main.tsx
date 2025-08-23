/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { redirect } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  const handleBlogClick = (slug: string) => {
    redirect(`/blog/${slug}`)
  }

  return (
    <>
      <div className="mt-7 flex items-center justify-between">
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold leading-9 tracking-normal tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-7xl md:leading-14 ">
            <span className="wave">Hey, I am </span>
            <span className="text-primary-500  dark:text-sky-500">Alecs.</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Performance-driven Digital Marketing Manager with 9+ years of experience in Digital
            Marketing, E-commerce Management, and Team Leadership. Proven expertise in scaling ROAS
            from 300% to 500% and delivering $12.8M in revenue through strategic campaign
            optimization across Google, Bing, and social media platforms. I excel in managing
            cross-functional teams, coordinating with external vendors, and driving sustainable
            business growth through data-driven strategies.
          </p>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex flex-row space-x-2">
          <div className="space-y-2 pb-6 pt-6 md:space-y-2">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-7xl sm:leading-10 md:text-5xl md:leading-14">
              Recent Articles
            </h1>
            <p className="text-lg leading-7 text-gray-600 dark:text-gray-400">
              Welcome to my collection of writings on digital marketing transformation, where I
              share experiences from leading performance campaign optimizations, e-commerce platform
              overhauls, and cross-channel strategy implementations. These articles capture both the
              technical challenges and strategic insights that make this industry so dynamic—from
              scaling ROAS through creative testing to the evolving relationship between data
              analytics, customer experience, and business growth. If you notice any inconsistencies
              or errors in my articles, please feel free to let me know. Your feedback is always
              appreciated 🙏🏼
            </p>
          </div>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && <h3 className="mt-3 text-center text-lg"> No post found. </h3>}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <div
                  onClick={() => handleBlogClick(slug)}
                  className="text-gray-900 dark:text-gray-100"
                >
                  <article className="hover:scale-102 duration-300 hover:-translate-y-1">
                    <div className="space-y-2 rounded-lg border-t-2 border-slate-50 shadow-md  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 ">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="pl-5 text-base font-medium leading-6 text-gray-600 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5  p-3 xl:col-span-3">
                        <div className="space-y-4">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">{title}</h2>
                            <div className="mt-3 flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag
                                  path="tags"
                                  key={tag}
                                  text={tag}
                                  text_color={`text-tag-${tag.toLowerCase()}`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-600 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Read "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

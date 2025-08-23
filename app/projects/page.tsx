'use client'

import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

import Tag from '@/components/Tag'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
// import { useRouter } from 'next/router'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import clsx from 'clsx'
import ProjectTag from '@/components/ProjectTag'

// export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  const searchParams = useSearchParams()
  const [project, setProject] = useState<typeof projectsData | null>(null)

  const tagsList = projectsData.reduce((acc, project) => {
    project.tags.forEach((tag: string) => {
      acc[tag] = (acc[tag] || 0) + 1
    })
    return acc
  }, {})
  const tagKeys = Object.keys(tagsList)
  const sortedTags = tagKeys.sort((a, b) => tagsList[b] - tagsList[a])

  const queryTag = searchParams.get('tag')
  const allTags = projectsData.reduce((acc: string[], project) => {
    project.tags.forEach((tag: string) => {
      if (!acc.includes(tag)) {
        acc.push(tag)
      }
    })
    return acc
  }, [])

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  useEffect(() => {
    setProject(projectsData)
    const filteredProjects = projectsData.filter((project) => {
      return project.tags.includes(queryTag!)
    })
    if (queryTag === null) return
    setProject(filteredProjects)
  }, [queryTag])

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects<span className="text-primary-500">.</span>
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Here are some of the digital marketing projects I have worked on. Due to NDA
            restrictions, I can't share all of my campaigns and client work as some of them are
            proprietary. However, I have shared some of the projects that I can share publicly. If
            you have any questions or would like to know more about my work, feel free to reach out
            to me.
          </p>
          <div className="pt-2">
            {allTags.length === 0 && 'No tags found.'}
            <div className="mb-3 flex flex-wrap justify-center">
              {sortedTags.map((tag) => {
                return <ProjectTag key={tag} tag={tag} tagsList={tagsList} queryTag={queryTag!} />
              })}
              {queryTag && (
                <Link
                  className={clsx(
                    'mb-2 mr-3 inline-block cursor-pointer rounded-full border border-gray-200 bg-transparent px-2 py-1 text-sm  dark:border-gray-500',
                    'text-red-500'
                  )}
                  href="/projects"
                >
                  clear filter
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="container py-12">
          <div className=" -m-4 flex flex-wrap justify-center">
            {project?.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrcLight={d.imgSrcLight}
                imgSrcDark={d.imgSrcDark}
                href={d.href}
                tags={d.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

'use client'
import { use } from 'react'
import ProjectTag from '@/components/ProjectTag'
import Tag from '@/components/Tag'
import projectsData from '@/data/projectsData'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const LinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    fill="#58c4dc"
    className="group:hover:text-gray-100 h-9 w-9"
  >
    <path
      fillRule="evenodd"
      d="M13.757 19.868c-0.416 0-0.832-0.159-1.149-0.476-2.973-2.973-2.973-7.81 0-10.783l6-6c1.44-1.44 3.355-2.233 5.392-2.233s3.951 0.793 5.392 2.233c2.973 2.973 2.973 7.81 0 10.783l-2.743 2.743c-0.635 0.635-1.663 0.635-2.298 0s-0.635-1.663 0-2.298l2.743-2.743c1.706-1.706 1.706-4.481 0-6.187-0.826-0.826-1.925-1.281-3.094-1.281s-2.267 0.455-3.094 1.281l-6 6c-1.706 1.706-1.706 4.481 0 6.187 0.635 0.635 0.635 1.663 0 2.298-0.317 0.317-0.733 0.476-1.149 0.476z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M8 31.625c-2.037 0-3.952-0.793-5.392-2.233-2.973-2.973-2.973-7.81 0-10.783l2.743-2.743c0.635-0.635 1.664-0.635 2.298 0s0.635 1.663 0 2.298l-2.743 2.743c-1.706 1.706-1.706 4.481 0 6.187 0.826 0.826 1.925 1.281 3.094 1.281s2.267-0.455 3.094-1.281l6-6c1.706-1.706 1.706-4.481 0-6.187-0.635-0.635-0.635-1.663 0-2.298s1.663-0.635 2.298 0c2.973 2.973 2.973 7.81 0 10.783l-6 6c-1.44 1.44-3.355 2.233-5.392 2.233z"
      clipRule="evenodd"
    />
  </svg>
)

export default function ProjectDetails({ params }) {
  const { theme } = useTheme()
  const { slug } = use(params) as { slug: string }
  const project = projectsData.find((project) => project.id === slug)

  if (!project) {
    return <div>Project not found</div>
  }

  const imgSrc = theme === 'dark' ? project.imgSrcDark : project.imgSrcLight

  const tagsList = projectsData.reduce((acc, project) => {
    project.tags.forEach((tag: string) => {
      acc[tag] = (acc[tag] || 0) + 1
    })
    return acc
  }, {})
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 flex justify-center">
        <Image
          alt={project.title}
          src={imgSrc}
          className="object-cover object-center md:h-36 lg:h-96"
          width={600}
          height={340}
        />
      </div>

      <div className="mb-12">
        <h2 className="flex items-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          <span className="mr-3 capitalize"> {project.title} </span>
          {project.title_extra && (
            <span className="mr-3 capitalize"> - {project.title_extra} </span>
          )}
          {/* <Link href={project.url} target="_blank">
            <LinkIcon />
          </Link> */}
        </h2>
        <p className="mt-4 text-lg leading-7 text-gray-500 dark:text-gray-400">{project.detail}</p>
      </div>

      {project.features && (
        <div className="mb-12">
          <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Project Features
          </h3>
          <ul className="mt-4 space-y-4 text-lg leading-7 text-gray-500 dark:text-gray-400">
            {project.features.map((feature, index) => {
              return (
                <li key={index}>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    {feature.title}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">: {feature.description}</span>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      {project.contribution && (
        <div>
          <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Key Contributions
          </h3>
          <ul className="mt-4 space-y-4 text-lg leading-7 text-gray-500 dark:text-gray-400">
            {project.contribution.map((contribution, index) => {
              return (
                <li key={index}>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    {contribution.title} :{' '}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {contribution.description}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      )}
      <div className="mt-6 flex flex-wrap justify-center">
        {project.tags.map((tag) => (
          <ProjectTag key={tag} tag={tag} tagsList={tagsList} />
        ))}
      </div>
    </div>
  )
}

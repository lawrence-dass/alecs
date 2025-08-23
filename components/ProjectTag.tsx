'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

interface ProjectTagProps {
  tag: string
  queryTag?: string
  tagsList?: Record<string, number>
}

export default function ProjectTag({ tag, queryTag, tagsList }: ProjectTagProps) {
  const searchParams = useSearchParams()
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )
  return (
    <Link
      className={clsx(
        'border-grey-200 mb-2 mr-3 inline-block cursor-pointer rounded-full border bg-gray-200 px-2 py-1 text-sm font-bold',
        tag === queryTag
          ? 'text-primary-500 dark:border-gray-700 dark:bg-transparent dark:hover:text-primary-500'
          : 'text-sky-800 dark:border-gray-700 dark:bg-transparent dark:text-sky-500'
      )}
      href={`/projects/?${createQueryString('tag', tag)}`}
    >
      {tag}
      {tagsList && tagsList[tag] > 1 ? ` (${tagsList[tag]})` : null}
    </Link>
  )
}

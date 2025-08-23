import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
  path: string
  text_color: string
}

const Tag = ({ text, path, text_color }: Props) => {
  return (
    <Link
      href={`/${path}/${slug(text)}`}
      className={`${text_color} border-grey-200 mb-2 mr-3 inline-block cursor-pointer rounded-full border px-2 py-1 text-sm text-sky-500 dark:border-gray-700 dark:bg-transparent dark:text-sky-500`}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag

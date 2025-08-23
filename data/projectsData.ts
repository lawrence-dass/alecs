interface Project {
  title: string
  title_extra?: string
  id?: string
  description: string
  href: string
  imgSrcDark: string
  imgSrcLight: string
  detail: string
  features?: { title: string; description: string }[]
  contribution?: { title: string; description: string }[]
  company?: string
  tags: string[]
  url: string
}

const projectsData: Project[] = []

export default projectsData

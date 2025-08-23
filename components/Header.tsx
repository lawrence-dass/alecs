'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import AS_light from '@/data/as_light.png'
import AS_dark from '@/data/as_dark.png'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from 'next/image'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'

const Header = () => {
  const pathname = usePathname()
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  const { theme } = useTheme()
  const imgSrc = theme === 'dark' ? AS_dark : AS_light

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Image src={imgSrc} alt="Alecs Sandra Saminathan logo" width={100} height={130} />
          </div>
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={clsx(
                  'mx-1 rounded px-2 py-1 font-medium sm:px-3 sm:py-2',
                  pathname.startsWith(link.href)
                    ? 'text-primary-500 dark:hover:text-primary-500'
                    : 'text-gray-900 dark:text-gray-200 dark:hover:text-primary-500'
                )}
              >
                {link.title}
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header

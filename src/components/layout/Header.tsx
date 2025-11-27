'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  Bars3Icon,
  ChartBarIcon,
  HomeIcon,
  NewspaperIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { mainNavLinks } from '@/lib/constants/routes'
import Button from '../ui/Button'
import Logo from '../common/Logo'
import SearchBar from './SearchBar'
import Navigation from './Navigation'
import CustomLink from '../ui/Link'
import cn from '@/lib/utils/cn'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev)
  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), [])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [closeMenu, isMobileMenuOpen])

  const ICONS = {
    Home: HomeIcon,
    News: NewspaperIcon,
    Analytics: ChartBarIcon,
  }

  return (
    <header className="header-container px-4 py-2">
      <div className="hidden items-center sm:flex sm:flex-nowrap">
        <Logo className="flex-shrink-0" />
        <Navigation className="pl-4" />
        <SearchBar className="sm:flex-1 sm:px-4" />
        <Button variant="primary" className="mr-2">
          Subscribe
        </Button>
        <Button variant="primary">Sign in</Button>
      </div>

      <div className="flex items-center justify-between sm:hidden">
        <Logo />
        <div className="flex items-center gap-4">
          <SearchBar />
          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-label="Open navigation menu"
            className="rounded-lg border border-white/20 p-2 text-white"
            onClick={toggleMenu}
          >
            <Bars3Icon className="size-6" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm sm:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div className="mobile-menu-panel sm:hidden">
            <div className="mobile-menu-header">
              <Logo />
              <button
                type="button"
                className="mobile-menu-close-btn"
                aria-label="Close navigation menu"
                onClick={closeMenu}
              >
                <XMarkIcon className="size-7" />
              </button>
            </div>

            <div className="flex flex-col gap-3 py-4">
              <Button variant="primary" className="mobile-menu-action">
                Subscribe
              </Button>
              <Button variant="primary" className="mobile-menu-action">
                Sign in
              </Button>
            </div>

            <nav aria-label="Mobile Primary Navigation">
              <ul>
                {mainNavLinks.map(({ href, label }) => {
                  const Icon = ICONS[label as keyof typeof ICONS] ?? HomeIcon
                  return (
                    <li key={href}>
                      <CustomLink
                        href={href}
                        className={cn(
                          'mobile-menu-link',
                          'flex items-center gap-4 rounded-md px-3 py-3 text-xl text-white'
                        )}
                        onClick={closeMenu}
                      >
                        <Icon className="size-6" />
                        <span>{label}</span>
                      </CustomLink>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}

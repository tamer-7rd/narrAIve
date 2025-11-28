'use client'

import { useCallback, useEffect, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from '../ui/Button'
import Logo from '../common/Logo'
import SearchBar from './SearchBar'
import Navigation from './Navigation'

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
                <XMarkIcon className="size-4" />
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

            <Navigation
              ariaLabel="Mobile Primary Navigation"
              orientation="vertical"
              withIcons
              onItemClick={closeMenu}
              linkClassName="mobile-menu-link flex items-center gap-4 rounded-md px-3 py-3 text-xl text-white"
            />
          </div>
        </>
      )}
    </header>
  )
}

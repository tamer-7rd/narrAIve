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
      {/* Desktop version  */}
      <div className="hidden items-center sm:flex sm:flex-nowrap">
        <Logo className="flex-shrink-0" />
        <Navigation className="pl-4" />
        <SearchBar className="sm:flex-1 sm:px-4" />
        <Button variant="primary" className="mr-2">
          Subscribe
        </Button>
        <Button variant="primary">Sign in</Button>
      </div>

      {/* Mobile version  */}
      <div className="flex items-center justify-between sm:hidden">
        <Logo />
        <div className="flex items-center gap-4">
          <SearchBar />
          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-label="Open navigation menu"
            className="rounded-lg border button-border p-2"
            onClick={toggleMenu}
          >
            <Bars3Icon className="size-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile opened menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-[#181a1b]/80 backdrop-blur-sm sm:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-full flex-col overflow-y-auto px-6 py-6 shadow-2xl sm:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                className="rounded-full border border-white/25 bg-transparent p-2 text-white transition-opacity hover:opacity-80"
                aria-label="Close navigation menu"
                onClick={closeMenu}
              >
                <XMarkIcon className="size-4" aria-hidden="true" />
              </button>
            </div>

            <div className="flex flex-col gap-3 py-4">
              <Button variant="primary" className="w-full text-center text-lg font-medium">
                Subscribe
              </Button>
              <Button variant="primary" className="w-full text-center text-lg font-medium">
                Sign in
              </Button>
            </div>

            <Navigation
              ariaLabel="Mobile Primary Navigation"
              orientation="vertical"
              withIcons
              onItemClick={closeMenu}
              linkClassName="flex items-center gap-4 rounded-md px-3 py-3 text-xl text-white text-lg font-light tracking-wide"
            />
          </div>
        </>
      )}
    </header>
  )
}

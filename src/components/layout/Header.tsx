import Button from '../ui/Button'
import Logo from '../common/Logo'
import SearchBar from './SearchBar'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="flex flex-wrap header-container px-4 py-1 sm:flex-nowrap sm:items-center">
      <Logo className="mb-1 flex-shrink-0" />
      <Navigation className="pl-4" />
      <SearchBar className="flex-1 px-4" />
      <Button variant="primary" className="mr-2">
        Subscribe
      </Button>
      <Button variant="primary">Sign in</Button>
    </header>
  )
}

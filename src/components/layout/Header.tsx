import { Button, CustomLink } from '@/components/ui'
import Logo from '../common/Logo'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <header className="header-container">
      <Logo />
      <CustomLink href="/">Home</CustomLink>
      <CustomLink href="/">News</CustomLink>
      <CustomLink href="/">Data</CustomLink>
      <SearchBar />
      <Button>Subscribe</Button>
      <Button>Sign in</Button>
    </header>
  )
}

import Button from '@/components/ui/Button'
import Logo from '../common/Logo'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <header className="">
      <Logo />
      <SearchBar />
      <Button>Subscribe</Button>
      <Button>Sign in</Button>
    </header>
  )
}

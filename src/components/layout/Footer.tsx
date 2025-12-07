import Logo from '../common/Logo'
import Button from '../ui/Button'
import Navigation from './Navigation'

export default function Footer() {
  return (
    <footer className="header-footer-container flex flex-col sm:flex-row px-4 gap-9">
      <div className="flex flex-col flex-1">
        <Logo />
        <p className="tracking-wider font-light">
          The definitive platform for global AI intelligence. We track AGI progress, industry
          metrics, and business applications to clarify the future of technology.
        </p>
      </div>
      <div className="flex-1 mt-3">
        <h1 className="mb-3 font-bold">EXPLORE</h1>
        <Navigation
          listClassName="gap-2"
          withLabels
          ariaLabel="Explore Navigation"
          orientation="vertical"
          linkKey="exploreLinks" // key variants defined in Navigation.tsx
          linkClassName="tracking-wider"
        />
      </div>
      <div className="flex-1 mt-3">
        <h1 className="mb-3 font-bold">COMPANY</h1>
        <Navigation
          withLabels
          listClassName="gap-2"
          ariaLabel="Companies Navigation"
          orientation="vertical"
          linkKey="companyLinks" // key variants defined in Navigation.tsx
          linkClassName="tracking-wider"
        />
      </div>
      <div className="flex-1 mt-3">
        <h1 className="mb-3 font-bold">CONNECT & SUBSCRIBE</h1>

        <Navigation
          listClassName="gap-4"
          className="mb-8"
          withIcons
          ariaLabel="Contact Navigation"
          linkKey="socialLinks" // key variants defined in Navigation.tsx
          linkClassName="tracking-wider"
          iconClassName="size-7"
        />
        {/* Временный input */}
        <input className="border rounded-lg px-3 py-1 w-full mb-2" placeholder="Your email" />
        <Button className="w-full">Subscribe</Button>
      </div>
    </footer>
  )
}

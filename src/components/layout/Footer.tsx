import Logo from '../common/Logo'
import Button from '../ui/Button'
import Navigation from './Navigation'
import Input from '../ui/Input'

export default function Footer() {
  return (
    <footer className="header-footer-container flex flex-col px-4">
      <div className="flex flex-col sm:flex-row gap-9 text-center sm:items-start sm:text-start">
        <div className="flex flex-col flex-1">
          <Logo />
          <p className="text-body mt-2">
            The definitive platform for global AI intelligence. We track AGI progress, industry
            metrics, and business applications to clarify the future of technology.
          </p>
        </div>
        <div className="flex-1 mt-3">
          <h3 className="text-section-title mb-3">EXPLORE</h3>
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
          <h3 className="text-section-title mb-3">COMPANY</h3>
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
          <h3 className="text-section-title mb-3">CONNECT & SUBSCRIBE</h3>

          <Navigation
            listClassName="gap-4 justify-center sm:justify-start"
            className="mb-8"
            withIcons
            ariaLabel="Contact Navigation"
            linkKey="socialLinks" // key variants defined in Navigation.tsx
            linkClassName="tracking-wider"
            iconClassName="size-6"
          />
          <div className="pb-2">
            <Input type="text" placeholder="Your email" aria-label="Email for subscription" />
          </div>

          <Button className="w-full">Subscribe</Button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="h-px w-full bg-gray-700 mt-10" />
        <div className="text-body text-center flex flex-col sm:flex-row sm:justify-between my-5">
          <p>Ⓒ 2025 narrAIve. All rights reserved. </p>
          <p>Data-driven insights for the AI era.</p>
        </div>
      </div>
    </footer>
  )
}

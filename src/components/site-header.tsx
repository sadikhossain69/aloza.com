import { Link } from "react-router-dom"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import websiteLogo from "@/assets/home/websiteLogo.png"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className=" md:px-5">
          <Link to="/" className="flex items-center space-x-2">
            {/* <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span> */}
            <img className={cn("sm:h-14 sm:w-32 h-10 w-28")} src={websiteLogo} alt="" />
          </Link>
        </div>
        <MainNav items={siteConfig.mainNav} />
        <div className=" space-x-4">
          <nav className="flex items-center space-x-1">
            {/* <Link to={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              to={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link> */}
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

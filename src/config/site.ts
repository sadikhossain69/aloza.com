export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Aloza",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Workshop",
      href: "/workshop",
    },
    {
      title: "Visitor",
      href: "/visitor",
    }
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/m6io/shadcn-vite-template",
    docs: "https://ui.shadcn.com",
  },
}

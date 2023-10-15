import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { useRoutes } from "react-router-dom"
import { TailwindIndicator } from "./components/tailwind-indicator"
import Home from "@/components/home/home"

const routes = [{ path: "/", element: <Home /> }]

function App() {
  const children = useRoutes(routes)

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
      </div>
      <TailwindIndicator />
    </ThemeProvider>
  )
}

export default App

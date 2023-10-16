import About from "@/components/common/about";
import Contact from "@/components/contact";
import Home from "@/components/home/home";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> }
]

export default routes;
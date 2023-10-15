import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import homeImg from "@/assets/home/home.png";
import { Button } from "../ui/button";
import About from "../common/about";
import Footer from "../common/footer";

export default function Home(): ReactNode {
    return (
        <>
            <section className={cn("text-gray-600 body-font container")}>
            <div className={cn("mx-auto flex md:flex-row flex-col-reverse items-center")}>
                <div className={cn("lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center pl-5")}>
                    <h1 className={cn("title-font sm:text-5xl text-3xl font-bold text-[#3B3968] dark:text-white")}>Welcome to ALOZO Mobile <p className="leading-snug">Application!</p>
                    </h1>

                    <p className={cn("text-xl my-10 dark:text-white")}>L'application mobile ALOZO est une application de proximité qui vous facilite la tâche dans votre recherche d'un artisan compétent dans votre zone de localisation. Trouvez un artisan dans notre vaste réseau en sélectionnant la spécialité que vous recherchez si vous recherchez des artisans professionnels
                    </p>
                    <div className="flex justify-center">
                        {/* <button className={cn("inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg")}>Button</button>
                        <button className={cn("ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg")}>Button</button> */}
                        <Button size={"lg"} className={cn("bg-[#3A3767] uppercase dark:text-white hover:dark:text-black")}>Create You Own Account</Button>
                    </div>
                </div>
                <div className={cn("lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pr-5")}>
                    <img className={cn("pt-14 rounded")} loading="lazy" alt="hero" src={homeImg} />
                </div>
            </div>
        </section>
        <About />
        <Footer />
        </>
    )
}
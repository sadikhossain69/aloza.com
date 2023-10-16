import { cn } from "@/lib/utils";
import aboutImg from "@/assets/home/aboutImg.jpg"
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {

    const aboutUsText: string = `Chez Alozo, nous croyons que chacun devrait avoir accès à des services de peinture de haute qualité, quel que soit son budget ou ses besoins. C'est pourquoi nous avons créé un site Web qui permet aux utilisateurs de trouver facilement des peintres qualifiés dans leur région.

    Nous comprenons que trouver un bon peintre peut être une tâche ardue. Il y a de nombreux facteurs à prendre en compte, tels que le prix, l'expérience et la disponibilité. C'est pourquoi nous travaillons dur pour vous. Nous sélectionnons soigneusement tous nos peintres pour nous assurer qu’ils sont agréés, assurés et qu’ils ont fait leurs preuves en matière de fourniture d’un excellent service client.
    
    We also offer a variety of features to make it easy for users to find the right painter for their needs. Users can search by location, price, and type of painting project. They can also read reviews from other customers and view photos of previous work.
    
    We are committed to providing our users with the best possible experience. That's why we offer a satisfaction guarantee on all of our services. If you are not happy with the work of your painter, we will work with you to find a solution.
    
    We hope that [website name] will be your one-stop shop for all of your painting needs. Thank you for choosing us!
    
    You can also include a call to action at the end of your About Us section, such as inviting users to sign up for a free account or search for painters in their area.`

    const location = useLocation()
    console.log(location)

    return (
        <>
            <section className={cn("text-gray-600 body-font container")}>
                <div className={cn("mx-auto flex px-5 py-24 md:flex-row flex-col items-center")}>
                    <div className={cn("lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0")}>
                        <img className={cn("object-cover object-center rounded")} alt="hero" src={aboutImg} loading="lazy" />
                    </div>
                    <div className={cn("lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center")}>
                        <h1 className={cn("title-font sm:text-5xl text-3xl font-bold text-[#3B3968] dark:text-white uppercase")}>
                            about us
                        </h1>
                        {
                            location.pathname === "/" ?
                                <>
                                    <p className="my-10 leading-relaxed dark:text-white">
                                        {
                                            aboutUsText.slice(0, 580)
                                        }
                                    </p>
                                    <Button size={"lg"} className="bg-[#3B3968] dark:text-white hover:dark:text-gray-700">
                                        <Link to={'/about'}>
                                            Read More
                                        </Link>
                                    </Button>
                                </>
                                :
                                <p className="my-10 leading-relaxed dark:text-white">{aboutUsText}</p>
                        }
                        {/* <div className="flex justify-center">
                            <button className={cn("inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg")}>Button</button>
                            <button className={cn("ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg")}>Button</button>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
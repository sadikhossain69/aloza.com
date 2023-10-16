import { cn } from "@/lib/utils";
import gallery1 from "@/assets/gallery/gallery1.jpg";
import gallery2 from "@/assets/gallery/gallery2.jpg";
import gallery3 from "@/assets/gallery/gallery3.jpg";
import gallery4 from "@/assets/gallery/gallery4.jpg";
import gallery5 from "@/assets/gallery/gallery5.jpg";
import gallery6 from "@/assets/gallery/gallery6.jpg";

const Gallery = () => {
    return (
        <>
            <section className={cn("container text-gray-600 body-font")}>
                <h1 className={cn("sm:text-5xl text-2xl font-bold title-font text-gray-700  mb-10 text-center dark:text-white uppercase")}>Gallery</h1>
                <div className={cn("container px-5 py-10 mx-auto flex flex-wrap")}>
                    <div className={cn("flex flex-wrap md:-m-2 -m-1")}>
                        <div className="flex flex-wrap md:w-1/2">
                            <div className={cn("md:p-2 p-1 md:w-1/2 w-full hover:scale-110 ease-in-out duration-300")}>
                                <img alt="gallery" className={cn("w-full object-cover h-full object-center block")} src={gallery1} loading="lazy" />
                            </div>
                            <div className={cn("md:p-2 p-1 md:w-1/2 w-full hover:scale-110 ease-in-out duration-300")}>
                                <img alt="gallery" className={cn("w-full object-cover h-full object-center block")} src={gallery2} loading="lazy" />
                            </div>
                            <div className={cn("md:p-2 p-1 w-full hover:scale-110 ease-in-out duration-300")}>
                                <img alt="gallery" className={cn("w-full h-full object-cover object-center block")} src={gallery3} />
                            </div>
                        </div>
                        <div className="flex flex-wrap md:w-1/2">
                            <div className={cn("md:p-2 p-1 w-full hover:scale-110 ease-in-out duration-300")}>
                                <img alt="gallery" className={cn("w-full h-full object-cover object-center block")} src={gallery4} loading="lazy" />
                            </div>
                            <div className={cn("md:p-2 p-1 md:w-1/2 w-full hover:scale-110 ease-in-out duration-300")}>
                                <img alt="gallery" className={cn("w-full object-cover h-full object-center block")} src={gallery5} loading="lazy" />
                            </div>
                            <div className={cn("md:p-2 p-1 md:w-1/2 w-full hover:scale-110 ease-in-out duration-300")}>
                                <img alt="gallery" className={cn("w-full object-cover h-full object-center block")} src={gallery6} loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
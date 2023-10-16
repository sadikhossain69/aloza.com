import { cn } from "@/lib/utils";

const Gallery = () => {
    return (
        <>
            <section className={cn("container text-gray-600 body-font")}>
                <h1 className={cn("sm:text-5xl text-2xl font-bold title-font text-gray-700 lg:mb-0 mb-4 text-center dark:text-white")}>Gallery</h1>
                <div className={cn("container px-5 py-10 mx-auto flex flex-wrap")}>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap md:w-1/2">
                            <div className="md:p-2 p-1 md:w-1/2 w-full hover:scale-110 ease-in-out duration-300">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
                            </div>
                            <div className="md:p-2 p-1 md:w-1/2 w-full hover:scale-110 ease-in-out duration-300">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
                            </div>
                            <div className="md:p-2 p-1 w-full hover:scale-110 ease-in-out duration-300">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
                            </div>
                        </div>
                        <div className="flex flex-wrap md:w-1/2">
                            <div className="md:p-2 p-1 w-full hover:scale-110 ease-in-out duration-300">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" />
                            </div>
                            <div className="md:p-2 p-1 md:w-1/2 w-full hover:scale-110 ease-in-out duration-300">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
                            </div>
                            <div className="md:p-2 p-1 md:w-1/2 w-full hover:scale-110 ease-in-out duration-300">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
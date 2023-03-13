import React from "react";
import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";

function Carussel(props) {
    const { images, name, price } = props;
    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
        exit: { y: -20, opacity: 0, transition: { duration: 0.5 } },
    };

    return (
        <>
            <motion.div
                variants={item}
                className="h-56 sm:h-64 xl:h-80 2xl:h-96 relative "
            >
                <Carousel leftControl=" " rightControl=" ">
                    {images.map((image, index) => (
                        <img
                            className="brightness-50"
                            key={index}
                            src={image}
                            alt="..."
                        />
                    ))}
                </Carousel>
                <span className="absolute bottom-8 left-5 text-white text-xl z-20">
                    {name}
                </span>
                <button className="absolute bottom-8 right-5 bg-red-600 text-white z-20 rounded-xl px-5 py-1 ">
                    $ {price}
                </button>
                {/* <div className="absolute top-0 bg-gradient-to-t from-black z"></div> */}
            </motion.div>
        </>
    );
}

export default Carussel;
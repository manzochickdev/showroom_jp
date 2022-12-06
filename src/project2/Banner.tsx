import React from "react";
import BannerImage from "../project2/img/banner.png"

const Banner = () => {
    return (
        <div className='w-full bg-no-repeat bg-cover relative h-[600px]' style={{ backgroundImage: `url(${BannerImage})` }}>
            {/* container */}
            <div className="absolute top-1/2 left-1/4 right-1/4 transform -translate-y-1/2 text-white text-center">
                {/* content */}
                <p className="text-xl mb-5">Food App</p>
                <h1 className="text-3xl mb-5 font-bold w-6xl md:leading-relaxed md:text-5xl">Why stay hungry when you can order from Bello Onojie</h1>

                <p className="text-xl mb-5 font-light">Download the bella onoje's food app now on</p>
                <div className="flex justify-center">
                    <button className="mx-2 border border-transparent bg-red-500 px-4 md:px-10 py-3 rounded-full hover:bg-red-800 transition-all">Play Store</button>
                    <button className="mx-2 border border-white bg-transparent px-4 md:px-10 py-3 rounded-full hover:text-red-800 hover:border-red-800 transition-all">App Store</button>
                </div>

            </div>
        </div>
    )
}

export default Banner
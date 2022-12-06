import React from "react";
import DownloadBackgroundImg from '../project2/img/download.png'

const Download = () => {
    return(
        <div style={{backgroundImage:`url(${DownloadBackgroundImg})`}} className="relative w-full h-[600px] bg-no-repeat bg-cover">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h1 className="text-4xl mb-5 font-bold max-w-2xl md:leading-relaxed md:text-5xl">Download the app</h1>
                <p className="text-xl mb-5 font-light">Available on your favorite store. Start your premium experience now</p>

                <div>
                    <button className="mx-2 border border-transparent bg-red-500 px-4 md:px-10 py-3 rounded-full hover:bg-red-800 transition-all">Play Store</button>
                    <button className="mx-2 border border-white bg-transparent px-4 md:px-10 py-3 rounded-full hover:text-red-800 hover:border-red-800 transition-all">App Store</button>
                </div>
            </div>
        </div>
    )
}

export default Download
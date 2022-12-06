import React from "react";
import AppScreenshotImg from '../project2/img/app-img.png'

const AppScreenshot = () => {
    return <div className="relative">
        <div className="absolute top-1/2 left-1/2 transfrom -translate-x-2/3 -translate-y-1/4">
            <img src={AppScreenshotImg} alt="app_screenshot_img" className="max-w-none w-screen pl-20 md:w-auto" />
        </div>
    </div>
}

export default AppScreenshot
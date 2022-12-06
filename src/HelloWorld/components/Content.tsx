import React from "react";
import Image1 from "../images/img_1.jpg"
import Image2 from "../images/img_2.png"

const Content = () => {
    return (
        <>
            <div className="menu-card">
                <img src={Image1} alt="7uppercuts" className="h-full rounded mb-20 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">7uppercuts</h2>
                    <p className="mb2">Dung choi dung choi dung choi tron tim uwauwauwauwa</p>
                    <span>Ohaiyou wake up</span>
                </div>
            </div>
            <div className="menu-card">
                <img src={Image2} alt="7uppercuts" className="h-full rounded mb-20 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Tup tac records</h2>
                    <p className="mb2">Together we live</p>
                    <span>Tup tac records @ 2022</span>
                </div>
            </div>
        </>
    )
}

export default Content
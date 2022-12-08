import React from "react";
import HTML from './assets/html.png'
import AWS from './assets/aws.png'
import CSS from './assets/css.png'
import Firebase from './assets/firebase.png'
import Github from './assets/github.png'
import Javascript from './assets/javascript.png'
import Mongo from './assets/mongo.png'
import Node from './assets/node.png'
import ReactJS from './assets/react.png'
import Tailwind from './assets/tailwind.png'


const SkillsPage = () => {
    return(
        <div id="skills" className="bg-[#0a192f] text-gray-300 w-full md:h-screen">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
                    <p className="py-4">// These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={HTML} alt="html_img" />
                        <p className="my-4">HTML</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={CSS} alt="css_img" />
                        <p className="my-4">CSS</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Firebase} alt="firebase_img" />
                        <p className="my-4">Firebase</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Github} alt="github_img" />
                        <p className="my-4">Github</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Javascript} alt="js_img" />
                        <p className="my-4">Javascript</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Mongo} alt="html_img" />
                        <p className="my-4">Mongo</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={ReactJS} alt="react_img" />
                        <p className="my-4">ReactJS</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Tailwind} alt="tailwind_img" />
                        <p className="my-4">Tailwind</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsPage
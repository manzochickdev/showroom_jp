import React from "react";
import AppInstruction1 from '../project2/img/app-1.png'
import AppInstruction2 from '../project2/img/app-2.png'
import AppInstruction3 from '../project2/img/app-3.png'

const AppInstruction = () => {
    return(
        <div className="pt-96 mt-28 sm:pt-[40rem] md:mt-0">
            <div>
            <hr className="w-4/5 mx-auto h-0.5 bg-gray-200 md:w-2/5"/>
            <h2 className="text-center text-4xl font-semibold py-10">How the app work</h2>
            <div className="flex flex-col justify-evenly items-center py-10 md:flex-row">
                {/* step 1 */}
                <img src={AppInstruction1} alt="app_instruction_1" className="mb-10" />
                <div className="text-center md:text-left">
                    <span className="text-red-500 font-semibold">Create an account</span>
                    <h2 className="text-4xl text-blue-900 font-bold max-w-md leading-relaxed py-5">Create/Login to an existing account to get started</h2>
                    <p className="text-xl text-gray-500 font-light max-w-sm mx-auto md:mx-0">An account is created wi th your email and a desired password</p>

                </div>
            </div>

            <div className="flex flex-col justify-evenly items-center py-10 md:flex-row">
                {/* step 2 */}
                <img src={AppInstruction2} alt="app_instruction_2" className="mb-10 order-1 md:order-2" />
                <div className="text-center md:text-left order-2 md:order-1">
                    <span className="text-red-500 font-semibold">Create an account</span>
                    <h2 className="text-4xl text-blue-900 font-bold max-w-md leading-relaxed py-5">Create/Login to an existing account to get started</h2>
                    <p className="text-xl text-gray-500 font-light max-w-sm mx-auto md:mx-0">An account is created wi th your email and a desired password</p>

                </div>
            </div>

            <div className="flex flex-col justify-evenly items-center py-10 md:flex-row">
                {/* step 3 */}
                <img src={AppInstruction3} alt="app_instruction_3" className="mb-10" />
                <div className="text-center md:text-left">
                    <span className="text-red-500 font-semibold">Create an account</span>
                    <h2 className="text-4xl text-blue-900 font-bold max-w-md leading-relaxed py-5">Create/Login to an existing account to get started</h2>
                    <p className="text-xl text-gray-500 font-light max-w-sm mx-auto md:mx-0">An account is created wi th your email and a desired password</p>

                </div>
            </div>
        </div>
        </div>
    )
}

export default AppInstruction
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function EarnPage() {

    const navigate = useNavigate()

    return (
        <div className=' w-full h-auto overflow-y-auto ' >
            <div className=" w-full text-xl h-12 items-center  flex justify-center py-4 relative " >
                <div role="button" onClick={() => navigate("/")} className=" absolute left-0 " >
                    <IoIosArrowBack />
                </div>
                Brickstone
            </div>
            <div className=" w-full h-[450px] bg-blue-600 rounded-lg " > 

            </div>
            <div className=" w-full pt-8 flex flex-col gap-3" >
                <p>Brickstone First Task</p>
                <div className=" w-full flex flex-col gap-2 " >
                    <div className=" w-full rounded-xl flex gap-4 items-center bg-[#1d2025] px-4 py-2 " >
                        <div className=" w-12 h-12 rounded-full bg-purple-600 " >

                        </div>
                        <div className=" flex flex-col gap-2 " >
                            <p className=" font-thin leading-[15px] " >Follow us on Instagram</p>
                            <p className=" font-bold leading-[15px] " >100,000</p>
                        </div>
                    </div>
                    <div className=" w-full rounded-xl flex gap-4 items-center bg-[#1d2025] px-4 py-2 " >
                        <div className=" w-12 h-12 rounded-full bg-purple-600 " >

                        </div>
                        <div className=" flex flex-col gap-2 " >
                            <p className=" font-thin leading-[15px] " >Follow us on Instagram</p>
                            <p className=" font-bold leading-[15px] " >100,000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full pt-8 flex flex-col gap-3" >
                <p>Brickstone First Task</p>
                <div className=" w-full flex flex-col gap-2 " >
                    <div className=" w-full rounded-xl flex gap-4 items-center bg-[#1d2025] px-4 py-2 " >
                        <div className=" w-12 h-12 rounded-full bg-purple-600 " >

                        </div>
                        <div className=" flex flex-col gap-2 " >
                            <p className=" font-thin leading-[15px] " >Follow us on Instagram</p>
                            <p className=" font-bold leading-[15px] " >100,000</p>
                        </div>
                    </div>
                    <div className=" w-full rounded-xl flex gap-4 items-center bg-[#1d2025] px-4 py-2 " >
                        <div className=" w-12 h-12 rounded-full bg-purple-600 " >

                        </div>
                        <div className=" flex flex-col gap-2 " >
                            <p className=" font-thin leading-[15px] " >Follow us on Instagram</p>
                            <p className=" font-bold leading-[15px] " >100,000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full pt-8 flex flex-col gap-3" >
                <p>Brickstone First Task</p>
                <div className=" w-full flex flex-col gap-2 " >
                    <div className=" w-full rounded-xl flex gap-4 items-center bg-[#1d2025] px-4 py-2 " >
                        <div className=" w-12 h-12 rounded-full bg-purple-600 " >

                        </div>
                        <div className=" flex flex-col gap-2 " >
                            <p className=" font-thin leading-[15px] " >Follow us on Instagram</p>
                            <p className=" font-bold leading-[15px] " >100,000</p>
                        </div>
                    </div>
                    <div className=" w-full rounded-xl flex gap-4 items-center bg-[#1d2025] px-4 py-2 " >
                        <div className=" w-12 h-12 rounded-full bg-purple-600 " >

                        </div>
                        <div className=" flex flex-col gap-2 " >
                            <p className=" font-thin leading-[15px] " >Follow us on Instagram</p>
                            <p className=" font-bold leading-[15px] " >100,000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full pt-8 flex flex-col gap-3" >
                <p>Brickstone First Task</p>
                <div className=" w-full flex flex-col gap-2 " >
                    <div className=" w-full rounded-xl flex gap-4 items-center bg-[#1d2025] px-4 py-2 " >
                        <div className=" w-12 h-12 rounded-full bg-purple-600 " >

                        </div>
                        <div className=" flex flex-col gap-2 " >
                            <p className=" font-thin leading-[15px] " >Follow us on Instagram</p>
                            <p className=" font-bold leading-[15px] " >100,000</p>
                        </div>
                    </div>
                    <div className=" w-full rounded-xl flex gap-4 items-center bg-[#1d2025] px-4 py-2 " >
                        <div className=" w-12 h-12 rounded-full bg-purple-600 " >

                        </div>
                        <div className=" flex flex-col gap-2 " >
                            <p className=" font-thin leading-[15px] " >Follow us on Instagram</p>
                            <p className=" font-bold leading-[15px] " >100,000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

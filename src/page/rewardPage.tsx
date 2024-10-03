import { IoMdCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { dailyCipher, dollarCoin, house } from "../images";


export default function RewardPage() {

    const navigate = useNavigate()

    return (
        <div className=' w-full h-screen overflow-y-auto ' >

            <div className="px-4 py-3 h-fit flex z-10 relative ">
                <div className="flex w-full flex-col gap-4 pt-4">
                    <p className=" text-2xl " >Daily reward</p>
                    <p>Get Coin, keys and skins for logging into the game without skipping</p>
                </div>
                <div className=" w-full flex justify-center" >
                    <img
                        src={house}
                        alt="Main Character"
                        className="w-[70%] object-cover "
                    />
                </div>
                <div role="button" onClick={() => navigate("/")} className=" absolute top-3 right-3  " >
                    <IoMdCloseCircle size={"30px"} />
                </div>
            </div>

            <div className="flex-grow bg-[#b100cd] text-white top-glow mt-4 h-full rounded-t-[48px] relative z-0">
                <div className="absolute top-[2px] left-0 right-0 flex flex-col h-full flex-1 overflow-y-auto gap-4 bottom-0 bg-[#1d2025] p-6 rounded-t-[46px]">
                    <div className=" w-full h-full flex flex-col gap-4 " >
                        <div className=" w-full flex gap-4 " >
                            <div className=" w-full h-24 border-2 flex flex-col justify-center items-center border-[#b100cd] rounded-2xl " >
                                <p className=" text-xl " >1</p>
                                <p className=" text-xs " >Week</p>
                            </div>
                            <div className=" w-full h-24 border-2 flex flex-col justify-center items-center border-[#b100cd] rounded-2xl " >
                                <p className=" text-xl " >2</p>
                                <p className=" text-xs " >Week</p>
                            </div>
                            <div className=" w-full h-24 border-2 flex flex-col justify-center items-center border-[#b100cd] rounded-2xl " >
                                <p className=" text-xl " >3</p>
                                <p className=" text-xs " >Week</p>
                            </div>
                        </div>
                        <div className=" w-full flex gap-4 flex-col mt-6 " >
                            <div className=" w-full flex gap-4 " >
                                <div className=" w-full h-32 border flex-col justify-between border-b-0 border-[#b100cd] rounded-2xl flex py-2 items-center " >
                                    <p >Day 1</p>
                                    <div className=" w-12 h-12 flex justify-center items-center  " >
                                        <img
                                            src={dailyCipher}
                                            alt="Daily Reward"
                                            className=" w-12 "
                                        />
                                    </div>
                                    <p >10 Bricks</p>
                                </div>
                                <div className=" w-full h-32 border flex-col justify-between border-b-0 border-[#b100cd] rounded-2xl flex py-2 items-center " >
                                    <p >Day 2</p>
                                    <div className=" w-12 h-12 flex justify-center items-center  " >
                                        <img
                                            src={dailyCipher}
                                            alt="Daily Reward"
                                            className=" w-12 "
                                        />
                                    </div>
                                    <p >15 Bricks</p>
                                </div>
                                <div className=" w-full h-32 border flex-col justify-between border-b-0 border-[#b100cd] rounded-2xl flex py-2 items-center " >
                                    <p >Day 3</p>
                                    <div className=" w-12 h-12 flex justify-center items-center  " >
                                        <img
                                            src={dailyCipher}
                                            alt="Daily Reward"
                                            className=" w-12 "
                                        />
                                    </div>
                                    <p >20 Bricks</p>
                                </div>
                                <div className=" w-full h-32 border flex-col justify-between border-b-0 border-[#b100cd] rounded-2xl flex py-2 items-center " >
                                    <p >Day 4</p>
                                    <div className=" w-12 h-12 flex justify-center items-center  " >
                                        <img
                                            src={dailyCipher}
                                            alt="Daily Reward"
                                            className=" w-12 "
                                        />
                                    </div>
                                    <p >25 Bricks</p>
                                </div>
                            </div>

                            <div className=" w-full flex gap-4 " >
                                <div className=" w-full h-32 border flex-col justify-between border-b-0 border-[#b100cd] rounded-2xl flex py-2 items-center " >
                                    <p >Week 1</p>
                                    <div className=" w-12 h-12  " > 
                                        <img
                                            src={dollarCoin}
                                            alt="Dollar Coin"
                                            className="w-full "
                                        />
                                    </div>
                                    <p >10 Blocks</p>
                                </div>
                                <div className=" w-full h-32 border flex-col justify-between border-b-0 border-[#b100cd] rounded-2xl flex py-2 items-center " >
                                    <p >Week 2</p>
                                    <div className=" w-12 h-12  " > 
                                        <img
                                            src={dollarCoin}
                                            alt="Dollar Coin"
                                            className="w-full "
                                        />
                                    </div>
                                    <p >15 Blocks</p>
                                </div>
                                <div className=" w-full h-32 border flex-col justify-between border-b-0 border-[#b100cd] rounded-2xl flex py-2 items-center " >
                                    <p >Week 3</p>
                                    <div className=" w-12 h-12  " > 
                                        <img
                                            src={dollarCoin}
                                            alt="Dollar Coin"
                                            className="w-full "
                                        />
                                    </div>
                                    <p >20 Blocks</p>
                                </div>
                                <div className=" w-full h-32 border flex-col justify-between border-b-0 border-[#b100cd] rounded-2xl flex py-2 items-center " >
                                    <p >Week 4</p>
                                    <div className=" w-12 h-12  " > 
                                        <img
                                            src={dollarCoin}
                                            alt="Dollar Coin"
                                            className="w-full "
                                        />
                                    </div>
                                    <p >25 Blocks</p>
                                </div>
                            </div>
                        </div>
                        <button className=" text-2xl w-full mt-4 bg-[#53145d] h-28 rounded-2xl ">
                            Claim
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

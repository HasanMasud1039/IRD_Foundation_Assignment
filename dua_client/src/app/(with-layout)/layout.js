import { FaUserAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { FaMagnifyingGlass } from "react-icons/fa6";
import SettingBar from "../components/SettingBar";

const WithLayout = ({ children }) => {
    return (
        <div className=' px-8'>
            <div className="flex items-center">
                <div className='bg-white w-[10%] p-4 my-4 rounded-lg'>
                    <Navbar />
                </div>
                <div className='w-[90%] px-2 my-4'>
                    <div className="flex-none h-16 flex justify-between items-center px-4">
                        <p className="text-xl font-semibold">Dua Page</p>
                        <div className="flex items-center h-8 bg-white rounded-lg">
                            <input className="px-2 rounded border-0" type="text" placeholder="Search by Dua Name" /> <p className=" bg-zinc-100 px-2 h-7 flex items-center rounded-lg m-1"><FaMagnifyingGlass className="" /></p>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="border p-1 rounded-full bg-gray-700">
                                <FaUserAlt className="text-2xl text-white rounded" />
                            </div>
                            <p className="text-gray-500">▼</p>
                        </div>
                    </div>
                    <div className="flex justify-between w-full">
                        <div className="border w-[78%]">
                            {children}
                        </div>
                        <div className="w-[22%]" >
                        <SettingBar />
                        </div>
                    </div>
                </div>
            </div>
            <footer className='footer bg-gray-300 bottom-0 w-full p-4 mx-0 text-center font-bold text-xl'>Footer</footer>
        </div>
    );
};

export default WithLayout;
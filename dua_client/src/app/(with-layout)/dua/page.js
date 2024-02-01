import axios from "axios";
import { FaHandHoldingHand, FaMagnifyingGlass } from "react-icons/fa6";

export const metadata = {
    title: 'About || RKRHS Centenary',
    description: 'Enjoy',
}

const AboutPage = async () => {
    const response = await fetch('http://localhost:3000');
    const db = await response.json();
    const category = db['category']
    console.log(category);

    return (
        <div className="h-full p-4 flex justify-between gap-2">
            <div className="w-[30%] bg-white rounded-lg">
                <p className="bg-green-600 text-white p-2 text-center font-semibold text-lg">Categories</p>
                <p className="border rounded-lg flex items-center gap-2 px-2 m-2">
                    <FaMagnifyingGlass className="text-gray-500" />
                    <input type='text' className="h-10 w-full" placeholder="Search by Categories"></input>
                </p>
                <div>
                    <div className="p-2 m-2 rounded text-sm hover:bg-zinc-300 shadow-lg flex justify-between">
                        <div className="flex items-center gap-2">
                            <FaHandHoldingHand className="p-1 text-3xl rounded bg-zinc-300"/>
                            <div>
                                <p className="text-green-600 font-semibold">Introduction to Dua</p>
                                <p className="text-gray-500 ">Subcategory: 11</p>
                            </div>
                        </div>
                        <div className="text-center border-l-2 ps-4">
                            <p className=" font-semibold">15</p>
                            <p className="text-gray-500">Duas</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[70%]">

            </div>

        </div>
    );
};

export default AboutPage;
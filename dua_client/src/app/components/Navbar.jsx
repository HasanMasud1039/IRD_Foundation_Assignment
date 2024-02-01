import Link from "next/link";
import NavLink from "./NavLink";
import { IoHomeOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { FaRegLightbulb, FaRegComments, FaHandHoldingHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { BsClipboardPlusFill } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";
import duaImg from '@/assets/dua1.png';
import Image from "next/image";

const navLinks = [
    {
        path: '/',
        title: <IoHomeOutline />,
    },
    {
        path: '/dua',
        title: <TbCategory />,
    },
    {
        path: '/',
        title: <FaRegLightbulb />
    },
    {
        path: '/',
        title: <FaRegBookmark />,
    },
    {
        path: '/',
        title: <BsClipboardPlusFill />,
    },
    {
        path: '/',
        title: <FaRegComments />
    },
    {
        path: '/',
        title: <FiBookOpen />
    },
]

const Navbar = () => {
    return (
        <nav className="h-[600px] flex flex-col items-center justify-between px-8 py-3">
            <p className="bg-green-600 text-white rounded-lg p-1 w-12 h-12">
                <Image src={duaImg} alt="Dua" className="w-32" />
            </p>

            <ul className="justify-center gap-2">
                {
                    navLinks.map(({ path, title }) => <li key={title} className="flex justify-center space-y-2 mt-2">
                        <NavLink className="rounded-full border p-3 text-2xl bg-zinc-200" href={path}>{title}</NavLink>
                    </li>)
                }
            </ul>
            <p className="flex justify-center p-2 bg-green-600 text-white rounded-lg">
                <FaHandHoldingHeart className="text-3xl" />
            </p>
            
        </nav>
    );
};

export default Navbar;
'use client';
import React, { useState } from 'react';
import { IoLanguage } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFontDownload } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
const SettingBar = () => {
    const [dropdown, setDropdown] = useState(false);

    const handleDropDown = () => {
      setDropdown(!dropdown);
    };

    return (
        <div className='rounded-xl bg-white mx-2 h-[600px]'>
            <p className='text-lg font-bold text-center py-4'>Settings</p>
            <ul className='space-y-2 px-2 rounded-xl'>
                <li className='flex px-2 py-2 rounded-lg items-center gap-2 bg-zinc-200 border-l-4 hover:border-green-600 text-gray-500 hover:text-green-600'>
                    <p className='text-xl  p-1 rounded-full bg-gray-300'><IoLanguage /></p>
                    <p className='text-sm  font-semibold'>Language Settings</p>
                </li>
                <li className='flex px-2 py-2 rounded-lg items-center gap-2 bg-zinc-200 border-l-4 hover:border-green-600 text-gray-500 hover:text-green-600'>
                    <p className='text-xl  p-1 rounded-full bg-gray-300'><IoSettingsOutline /></p>
                    <p className='text-sm  font-semibold'>General Settings</p>
                </li>
                <li className='flex px-2 py-2 rounded-lg items-center gap-2 bg-zinc-200 border-l-4 hover:border-green-600 text-gray-500 hover:text-green-600'>
                    <p className='text-xl  p-1 rounded-full bg-gray-300'><MdOutlineFontDownload /></p>
                    <p className='text-sm  font-semibold'>Font Settings</p>
                </li>
                <div>
      <li
        onMouseOver={handleDropDown}
        className='flex px-2 py-2 rounded-lg items-center gap-2 bg-zinc-200 border-l-4 hover:border-green-600 text-gray-500 hover:text-green-600'
      >
        <p className='text-xl p-1 rounded-full bg-gray-300'><TbCategory/></p>
        <p className='text-sm font-semibold'>Appearance Settings</p>
      </li>

      {dropdown && (
        <div className=' flex justify-between border rounded py-4 px-2'>
          <p>Night Mode</p>

          <label className='relative inline-flex items-center cursor-pointer'>
            <input type='checkbox' value='' className='sr-only peer' />
            <div className="w-11 h-3 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-600 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-400"></div>
          </label>
        </div>
      )}
    </div>
            </ul>
        </div>
    );
};

export default SettingBar;
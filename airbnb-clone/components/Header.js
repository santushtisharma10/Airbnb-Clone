import Image from "next/image"
import {GlobeAltIcon,MenuIcon, UsersIcon,UserCircleIcon,SearchIcon} from "@heroicons/react/solid"

function Header() {
  return (
    <div className="sticky top-0 z-100 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">

        <div className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image 
            src="https://s4.aconvert.com/convert/p3r68-cdx67/aniib-3d0ec.png"
            // src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png"
            objectFit="contain"
            layout="fill"
            objectPosition="left"

            />
        </div>
        <div className="flex items-center border-2 rounded-full py-2"> 

            <input className="pl-5 flex-grow text-gray-600 placeholder-gray-300 bg-transparent outline-none" type="text" placeholder="Search"/>
            <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"/>

        </div>
        <div className="flex items-center justify-end space-x-4 text-gray-500">
          <p className="hidden md:inline">Become a host</p>
          <GlobeAltIcon className="h-7" />
          <div className="flex items-center border-2 rounded-full space-x-2 p-2">
            <MenuIcon className="h-6 " />
            <UserCircleIcon className="h-6 "/>
          </div>
        </div>
    </div>
  )
}

export default Header
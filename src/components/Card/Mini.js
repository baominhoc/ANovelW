import { useState, useEffect } from "react";
import { Transition } from '@headlessui/react'
import Tippy from "@/components/Tippy";

export default function MiniCard({ admin, item ,thumnailurl,title,description,status,style,chap}) {
  const [isHover, setIsHover] = useState(false);
  return (
    <Tippy placement="right" content={
      <div className="p-2 w-full">
        <h3 className="line-clamp-1">{title}</h3>
        <div id="genres" className="flex flex-wrap">
          <span className="text-xs bg-blue-400 rounded-full px-2 py-1 mr-2 mb-2">Action</span>
          <span className="text-xs bg-purple-400 rounded-full px-2 py-1 mr-2 mb-2">Adventure</span>
          <span className="text-xs bg-green-400 rounded-full px-2 py-1 mr-2 mb-2">Comedy</span>
        </div>
        <p className={`text-sm mt-3 italic transition duration-200 card-description-opacity opacity-100 line-clamp-6 overflow-auto`}>
         {description}
          <br />
    

        </p>
      </div>
    }>
      <div className="w-full h-full flex" onMouseEnter={(event) => setIsHover(true)} onMouseLeave={(event) => setIsHover(false)} >
        <img style={{
          width: "58px",
          height: "80px"
        }} className="rounded-l-lg bg-cover object-cover" src={thumnailurl} />

        <div className="bg-zinc-800/20 border-zinc-700/20 w-full min-h-full rounded-r-lg">
          <h1 className="ml-2 mt-4 w-[300px] line-clamp-1">{title}</h1>
          <p className="ml-2 text-sm text-gray-400 bg-gray-800/20 rounded-full px-2 py-1 inline-block">
          <span class={`rounded-full ${status == "Ongoing" ? "bg-green-500" : "bg-red-500"} w-2 h-2 inline-block mr-1`}></span>{status}
          </p>
          <p className="ml-2 text-sm text-gray-400 bg-gray-800/20 rounded-full px-2 py-1 inline-block">
            <span className="rounded-full bg-gray-500 w-2 h-2 inline-block mr-1"></span> {chap} Chapter
          </p>
          <p className="ml-2 text-sm text-gray-400 bg-gray-800/20 rounded-full px-2 py-1 inline-block">
            <span className="rounded-full bg-blue-500 w-2 h-2 inline-block mr-1"></span> {style}
          </p>
        </div>

      </div>
    </Tippy>
  )
}
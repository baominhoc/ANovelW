import { useState } from "react"
import Link from "next/link"

export default function MangaCard({thumnailurl,title,description,status,style,chap}) {

    return (
        <>
            <div className="group lg:w-full w-[420px] h-full flex">
                <div className="card-image flex-0 duration-300">
                    <img className="cursor-pointer group-hover:opacity-50 duration-300 h-[250px] lg:w-full w-full object-contain rounded-b-lg rounded-l-lg rounded-r-none opacity-100" src={thumnailurl} />
                </div>
                <div className="bg-zinc-800/20 border-zinc-700/20 flex-2 group-hover:flex-1 duration-300 flex h-[250px] lg:w-[500px] w-[250px] rounded-lg">
                    <div className="overflow-hidden">
                        <div className="h-[205px] relative">
                            <div id="info" className="relative ml-3 overflow-hidden">
                                <div id="content">
                                    <div className="card-info transition duration-300 w-full">
                                        <div className="card-info-item overflow-hidden flex flex-col w-full">
                                            <div className="card-info-item-title">
                                                <h1 className="ml-2 mt-4 font-semibold text-2xl transition duration-300 line-clamp-2">{title}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-x-hidden overflow-y-auto h-[190px]">
                                    <p className={`px-4 text-sm mt-3 italic -ml-2 mb-2 transition duration-200 card-description-opacity opacity-100 line-clamp-6 overflow-auto`}>
                                 {description}
                                        <br />
                                        j
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-zinc-700/10 h-11 rounded-r-lg rounded-t-none">
                            <div className="flex flex-row w-full justify-between items-center px-2 opacity-0 group-hover:opacity-100 ease-in duration-300">
                                <p className="text-xsm text-gray-300 inline-block py-4 p-2">
                                    <span class={`rounded-full ${status == "Ongoing" ? "bg-green-500" : "bg-red-500"} w-2 h-2 inline-block mr-1`}></span> {status}
                                </p>
                                <p className="text-xsm text-gray-300 inline-block p-2">
                                    <span className="rounded-full bg-gray-500 w-2 h-2 inline-block mr-1"></span> {`Chap ${chap}`}
                                </p>
                                <p className="text-xsm text-gray-300 inline-block p-2  line-clamp-1">
                                    <span className="rounded-full bg-blue-500 w-2 h-2 inline-block mr-1"></span> {style}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
"use client"

import { usePathname } from "next/navigation";
import { JSX } from "react/jsx-runtime";

interface props {
    path: string;
    icon: JSX.Element;
    title: string;
    subTitle: string;
}

export const SidebarMenuItem = ( { path, icon, title, subTitle }: props ) => {
    const pathname = usePathname();
    const isActive = pathname === path;
    console.log(pathname)
  return (
    <a href={path} className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 ${isActive ? 'bg-blue-800' : ''} transition ease-linear duration-150`}>
                <div>
                    {icon}
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-bold leading-5 text-white">{title}</span>
                    <span className="text-sm text-white/50 hidden md:block">{subTitle}</span>
                </div>
            </a>
  )
}
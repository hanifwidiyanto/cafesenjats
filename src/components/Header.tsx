import { FiBell } from "react-icons/fi";
import { useState } from 'react'

interface HeaderProps {
    name: string;
}

function Header({ name }: HeaderProps) {
    const [infoDisplay, setInfoDisplay] = useState<boolean>(false)
    const currentDate: Date = new Date();
    const currentHour: number = currentDate.getHours();

    let greeting: string;

    if (currentHour >= 5 && currentHour < 10) {
        greeting = "Selamat Pagi";
    } else if (currentHour >= 10 && currentHour < 14) {
        greeting = "Selamat Siang";
    } else if (currentHour >= 15 && currentHour < 18) {
        greeting = "Selamat Sore";
    } else {
        greeting = "Selamat Malam";
    }


    const infoPromo: string[] = [
        'info1', 'info2', 
    ]
    return (
        <div className="flex w-full justify-between items-center h-fit">
            <div className="flex flex-col">
                <span className="text-slate-500">
                    {greeting}
                </span>
                <span>
                    {name}
                </span>
            </div>
            <div className="relative">
                <FiBell className="text-3xl" onClick={() => setInfoDisplay(true)} />
                <span className="w-[10px] h-[10px] text-sm rounded-full absolute bottom-[1px] left-0 text-white p-1 bg-red-600"></span>
                {infoDisplay
                    &&
                    <div className="w-80 divide-y-[1px] flex flex-col gap-3 divide-slate-500 absolute h-fit bg-slate-100 shadow-md right-2 rounded-lg top-4 p-4 text-sm">
                        {infoPromo.map((e: string) => {
                            return <span className="pt-3 px-1">{e} </span>
                        })}
                        <div className="w-full flex justify-center pt-6 pb-4" onClick={() => setInfoDisplay(false)}>
                            <span className="w-8 hover:border-[1px] hover:border-slate-800 duration-200 font-bold h-8 grid place-content-center p-2 rounded-full bg-white">x</span>
                        </div>
                    </div>}
            </div>

        </div>
    )
}

export default Header
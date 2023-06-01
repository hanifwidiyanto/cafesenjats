import { useState } from 'react'

function ChooseMenu() {
    const [chooseFood, setChooseFood] = useState<boolean>(true)

    return (
        <div className="flex w-full justify-center mt-16">
            <div className="w-64 h-14 bg-slate-400 rounded-full flex items-center relative p-3">
                <div className={`w-28 h-10 absolute   bg-slate-100 rounded-full  ${chooseFood ? 'left-2' :'right-2'}`}></div>
                <div className="z-10 flex w-full justify-between cursor-pointer">
                    <span className="w-28 text-center font-medium" onClick={()=>setChooseFood(true)}>Foods</span>
                    <span className="w-28 text-center font-medium" onClick={()=>setChooseFood(false)}>Drinks</span>
                    
                </div>
            </div>
        </div>
    )
}

export default ChooseMenu
import QuoteDisplay from "../components/Quote";
import { BsArrowRightShort } from "react-icons/bs";

interface LandingProps {
    landingset: (value:boolean) => void;
}

export default function Landing({landingset} : LandingProps) {
    const handleClick = () => {
        // Melakukan sesuatu saat tombol diklik
        landingset(false);
      };
    return (
        <div className='w-full h-screen relative'>
            <div className='rounded-full p-3 w-fit h-fit bg-slate-500 bg-opacity-40 shadow-lg backdrop-filter backdrop-blur-lg absolute top-4 left-4 z-50'>
                <img src="/assets/images/logo.png" className='w-12 h-12' alt="" />
            </div>
            <img src="/assets/images/landing.png" alt="" className='saturate-50 w-full h-screen' />
            <div className='absolute bottom-6 w-full flex justify-center'>
                <div className='w-10/12 bg-slate-50 rounded-lg shadow-lg px-10 py-6 flex flex-col gap-6 items-center text-center'>
                    <QuoteDisplay />
                    <div onClick={handleClick} className='bg-amber-900 px-8 py-3 rounded-md text-slate-50 flex gap-2 h-fit items-center'>
                        <span className='font-2xl tracking-wide'>Pesan Kopi</span>
                        <BsArrowRightShort className="relative top-1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

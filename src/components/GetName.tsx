import {FormEvent } from 'react';

interface GetNameProps {
  getName: (name: string) => void;
}

function GetName({ getName }: GetNameProps) {

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const enteredName = formData.get('name') as string;
    getName(enteredName);
  };

  return (
    <>
      <div className='fixed w-[460px] h-screen bg-slate-950 opacity-40'></div>
      <div className="fixed w-[460px] h-full grid place-content-center">
        <div className='w-80 h-48 rounded-lg bg-slate-50 flex flex-col justify-center items-center gap-5'>
          <span>Siapa namanya kak?</span>
          <form onSubmit={handleSubmit} className='flex flex-col gap-3 items-center'>
            <input type="text" name="name" className='border-2 border-slate-950 focus:rounded-lg rounded-lg px-1 h-9 text-center' />
            <button type="submit" className='bg-black text-slate-50 w-fit px-4 py-2 rounded-md'>Kirim</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default GetName;

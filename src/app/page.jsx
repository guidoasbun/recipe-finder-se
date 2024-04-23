import Image from 'next/image';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-tl from-sky-500 to-white-500">
      <h1 className="text-8xl font-bold ">Chef-AI</h1>
      <Image src="/spaghetti.png" width={89} height={55} alt="Delicious spaghetti in a glass tray"/>
      <p className='text-3xl'>Welcome to Chef-AI!  With the power of AI, this app allows for fast and reliable recipe searches with any ingredients in 
        your pantry!
      </p>
      <p className='text-5xl'>Let's get started!</p>
      <div className="flex flex-col">
        <button className="transition-colors ease-in-out bg-slate-300 hover:bg-transparent border-2 py-5 px-20 text-xl rounded-2xl mx-10">Sign Up</button>
        <button className="transition-colors ease-in-out bg-transparent hover:bg-slate-300 border-2 py-5 px-20 m-5 text-xl rounded-2xl mx-10 ">Log In</button>
      </div>
      
      
      
      <p className="text-center">2024 Guido Asbun, Adrian Vazquez, & William Bui</p>

    </main>
  );
}

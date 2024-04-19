import Image from 'next/image';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-tl from-sky-500 to-white-500">
      <p className="text-6xl font-bold text-center">Chef-AI</p>
      <div></div>
      <button className="bg-slate-300 hover:bg-sky-200 border-2 py-5 px-20 text-lg rounded-2xl mx-10 pb-10">Log In</button>
     
      <button className="bg-transparent border-2 py-5 px-20 text-lg rounded-2xl hover:bg-slate-300">Sign Up</button>
      
      
      <p className="text-center">2024 Guido Asbun, Adrian Vazquez, & William Bui</p>

    </main>
  );
}

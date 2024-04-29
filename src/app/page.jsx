import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-tl from-sky-500 to-white-500">
      <h1 className="text-8xl font-bold ">Chef-AI</h1>
      <p className="text-3xl">
        Welcome to Chef-AI! With the power of AI, this app allows for fast and
        reliable recipe searches with any ingredients in your pantry!
      </p>
      <p className="text-5xl">Let&apos;s get started!</p>
      <div className="flex flex-col">
        <Link href="/sign-up">
          <button className="transition-colors ease-in-out bg-slate-300 hover:bg-transparent border-2 py-5 px-20 text-xl rounded-2xl mx-10">
            Sign Up
          </button>
        </Link>
        <Link href="/sign-in">
          <button className="transition-colors ease-in-out bg-transparent hover:bg-slate-300 border-2 py-5 px-20 m-5 text-xl rounded-2xl mx-10 ">
            Log In
          </button>
        </Link>
      </div>

      <p className="text-center">
        2024 Guido Asbun, Adrian Vazquez, & William Bui
      </p>
    </main>
  );
}

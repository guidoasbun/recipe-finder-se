"use client";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gradient-to-tl from-sky-500 to-white-500">
      <div className="mb-10">
        <p className="text-3xl">
          Welcome to Chef-AI! With the power of AI, this app allows for fast and
          reliable recipe searches with any ingredients in your pantry!
        </p>
      </div>
      <div className="mb-10">
        <p className="text-5xl">Let&apos;s get started!</p>
      </div>

      <div className="flex flex-col items-center mb-10">
        <Link href="/sign-up" className="mb-10">
          <Button className="w-64 mx-10 text-xl px-20">Sign Up</Button>
        </Link>
        <Link href="/sign-in">
          <Button className="w-64 mx-10 text-xl px-20">Log In</Button>
        </Link>
      </div>

      <p className="text-center">
        2024 Guido Asbun, Adrian Vazquez, & William Bui
      </p>
    </main>
  );
}

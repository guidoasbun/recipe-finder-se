"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  ListItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useUser } from "@clerk/nextjs";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link href="/">
        <Typography
          variant="small" // Adjust the variant as needed
          color="blue-gray"
          className="p-1 font-medium" // Add additional styling as needed
        >
          Home
        </Typography>
      </Link>

      <Link href="/enterIngredients">
        <Typography
          variant="small" // Adjust the variant as needed
          color="blue-gray"
          className="p-1 font-medium" // Add additional styling as needed
        >
          Enter Ingredients
        </Typography>
      </Link>

      <UserButton afterSignOutUrl="/" />
    </ul>
  );
}

export default function MainHeader() {
  const [openNav, setOpenNav] = useState(false);
  const { user, isLoaded } = useUser();

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href="/">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mr-4 cursor-pointer py-1.5"
          >
            Chef-AI
          </Typography>
        </Link>

        <div className="hidden lg:block">
          {/*Display the navbar only if the User is logged in*/}
          {isLoaded && user && <NavList />}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

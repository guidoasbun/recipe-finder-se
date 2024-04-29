import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function MainHeader() {
  return (
    <header className="p-10">
      <nav
        className="flex items-center justify-between p-6 lg:px-8 h-20 border border-t-0 border-l-0 border-b-gray-600"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            Chef-AI
          </a>
        </div>
        <ul className="flex lg:flex-1">
          <li className="pr-10">
            <Link href="/">Home</Link>
          </li>
          <li className="pr-10">
            <Link href="/enterIngredients">Enter Ingredients</Link>
          </li>

          <li className="pr-10">
            <Link href="/recipeSelection">Recipe Selection</Link>
          </li>
          <li className="pr-10">
            <Link href="/recipeSelection/delicious-tacos">Selected Recipe</Link>
          </li>
          <li className="pr-10">
            <UserButton afterSignOutUrl="/" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="p-10">
      <p className="text-4xl font-bold text-left">Main Navigation - Header</p>
      <nav>
        <ul>
          <li>
            <Link href="/">* Home</Link>
          </li>
          <li>
            <Link href="/enterIngredients">* Enter Ingredients</Link>
          </li>
          <li>
            <Link href="/waitPage">* Wait Page</Link>
          </li>
          <li>
            <Link href="/recipeSelection">* Recipe Selection</Link>
          </li>
          <li>
            <Link href="/recipeSelection/delicious-tacos">
              * Selected Recipe (delicious tacos = slug)
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

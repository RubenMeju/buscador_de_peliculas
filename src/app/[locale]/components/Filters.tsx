import Link from "next/link";

export default function Filters() {
  return (
    <ul className="mt-4 flex gap-4 text-neutral-300">
      <li className="cursor-pointer hover:text-blue-300">
        <Link href="?filter=popular">Popular</Link>
      </li>
      <li className="cursor-pointer hover:text-blue-300">
        <Link href="?filter=top_rated">Top rated</Link>
      </li>
      <li className="cursor-pointer hover:text-blue-300">
        <Link href="?filter=upcoming">Upcoming</Link>
      </li>
    </ul>
  );
}

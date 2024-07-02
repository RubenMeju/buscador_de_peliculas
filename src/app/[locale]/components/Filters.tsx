import Link from "next/link";

export default function Filters({ filter }: { filter: string }) {
  return (
    <ul className="mt-10 flex gap-4 text-neutral-300">
      <li
        className={`${
          filter === "popular"
            ? "text-blue-400"
            : "cursor-pointer hover:text-blue-300"
        }`}
      >
        <Link href="?filter=popular">Popular</Link>
      </li>
      <li
        className={`${
          filter === "top_rated"
            ? "text-blue-400"
            : "cursor-pointer hover:text-blue-300"
        }`}
      >
        <Link href="?filter=top_rated">Top rated</Link>
      </li>
      <li
        className={`${
          filter === "upcoming"
            ? "text-blue-400"
            : "cursor-pointer hover:text-blue-300"
        }`}
      >
        <Link href="?filter=upcoming">Upcoming</Link>
      </li>
    </ul>
  );
}

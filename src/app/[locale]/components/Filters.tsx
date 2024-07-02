import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Filters({ filter }: { filter: string }) {
  const t = useTranslations("Filters");

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
        <Link href="?filter=top_rated"> {t("topRated")}</Link>
      </li>
      <li
        className={`${
          filter === "upcoming"
            ? "text-blue-400"
            : "cursor-pointer hover:text-blue-300"
        }`}
      >
        <Link href="?filter=upcoming"> {t("upcoming")}</Link>
      </li>
    </ul>
  );
}

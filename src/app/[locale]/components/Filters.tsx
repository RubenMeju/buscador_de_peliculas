import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Filters({ filter }: { filter: string }) {
  const t = useTranslations("Filters");
  const filters = ["popular", "top_rated", "upcoming"];
  return (
    <ul className="mt-10 flex gap-4 text-neutral-300">
      {filters.map((item, index) => (
        <li
          key={index}
          className={`${
            filter === item
              ? "text-blue-400"
              : "cursor-pointer hover:text-blue-300"
          }`}
        >
          <Link href={`?filter=${item}`}>{t(item)}</Link>
        </li>
      ))}
    </ul>
  );
}

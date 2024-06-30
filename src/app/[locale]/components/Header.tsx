import LocaleSwitcher from "./locale/LocaleSwitcher";
import Search from "./search/Search";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Header() {
  return (
    <div className="w-full pt-4 flex justify-around items-center ">
      <span className="dark:text-white">Movies APP</span>
      <Search />
      <LocaleSwitcher />
      <ThemeToggleButton />
    </div>
  );
}

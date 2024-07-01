import LocaleSwitcher from "./locale/LocaleSwitcher";
import Search from "./search/Search";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-20 w-full h-18 flex justify-around items-center bg-violet-800">
      <span className="dark:text-white">Movies APP</span>
      <Search />
      <LocaleSwitcher />
      <ThemeToggleButton />
    </div>
  );
}

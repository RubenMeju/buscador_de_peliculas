import LocaleSwitcher from "./locale/LocaleSwitcher";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-20 w-full h-18">
      <div className=" w-4/5 m-auto flex justify-between items-center lg:w-2/4">
        <span className="dark:text-white">Movies APP</span>
        <div className="flex gap-2">
          <LocaleSwitcher />
          <ThemeToggleButton />
        </div>
      </div>
    </div>
  );
}

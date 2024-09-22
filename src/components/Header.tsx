import { Logo } from "./header/Logo";
import { NavLinks } from "./header/NavLinks";
import { CTAButton } from "./header/CTAButton";

export const Header = () => {
  return (
    <nav className="bg-white dark:bg-[#0e1010] shadow-md">
      <div className="w-full px-4 py-2 flex items-center justify-between">
        <Logo />
        <NavLinks />
        <CTAButton />
      </div>
    </nav>
  );
}
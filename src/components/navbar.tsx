import Link from "next/link";
import { Logo, NavbarMenu } from "components";

export function Navbar() {
  return (
    <div className="px-12 py-6 flex items-center justify-between">
      <Logo width={35} height={35} />

      {/* <MobileMenu /> */}
      <NavbarMenu />
    </div>
  );
}

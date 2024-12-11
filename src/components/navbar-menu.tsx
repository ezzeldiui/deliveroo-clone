import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import { Logo } from "components";
import {
  BriefcaseIcon,
  CircleHelp,
  LogOut,
  Newspaper,
  ShoppingBasket,
} from "lucide-react";
import Link from "next/link";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "ui";

export function NavbarMenu() {
  return (
    <div className="hidden md:flex gap-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"}>Partner with us</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem className="hover:bg-zinc-500/10">
            <Link href="/partners" className="flex items-center gap-2">
              <ShoppingBasket className="text-brand-primary size-24" />
              <span>Partner</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="hover:bg-zinc-500/10">
            <Link href="/carrers" className="flex items-center gap-2">
              <BriefcaseIcon className="text-brand-primary size-24" />
              <span>Careers</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="hover:bg-zinc-500/10">
            <Link
              href="/deliveroo-for-work"
              className="flex items-center gap-2"
            >
              <Newspaper className="text-brand-primary size-24" />
              <span>Deliveroo for work</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <SignedIn>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"outline"}>Account</Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col">
            <SheetHeader>
              <SheetTitle>
                <Logo width={35} height={50} />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-1 ">
              <Button className="" variant={"link"} asChild>
                <Link href="/faq">
                  <CircleHelp className="size-24" />
                  <span>FAQ</span>
                </Link>
              </Button>
            </div>

            <SheetFooter>
              <Button className="w-full" asChild>
                <SignOutButton>
                  <div>
                    Log out
                    <LogOut className="size-24" />
                  </div>
                </SignOutButton>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </SignedIn>

      <SignedOut>
        <SignInButton>
          <Button variant={"outline"}>Sign in</Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
}

import { Logo } from "../logo";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { Briefcase, ChevronDown, ChevronsUpDown, CircleHelp, Home, Languages, MapPin, Menu, Newspaper, ShoppingBasket, UserRound } from "lucide-react";
import { useLocation } from "@/hooks/useLocation";
import { Link } from "react-router-dom";
import { baseUrl } from "@/main";



export function Navbar() {

    const {country, cityLabel, setCountry, setLocationInUrl} = useLocation();
    
    return (
        <section className="px-6 py-1 flex items-center justify-between">
            <div className="z-50 px-2 rounded-lg">
                <Logo />
            </div>

            <div className="hidden md:flex gap-5 ">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                            <ChevronDown size={24} className="text-primary "/>
                            Partner with us
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator /> */}
                        <DropdownMenuItem>
                            <ShoppingBasket className="size-16 text-primary" />
                            Partners
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Briefcase className="size-16 text-primary" />
                            Careers
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Newspaper className="size-16 text-primary" />
                            Deliveroo for Work
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Button variant="outline">
                    <Link className="flex items-center gap-2" to={`${baseUrl}/login`}>
                        <Home size={24} className="text-primary"/>
                        Signup or Login
                    </Link>
                </Button>

                <Sheet>
                    <SheetTrigger>
                        <Button variant="outline">
                            <UserRound size={24} className="text-primary"/>
                            Account
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="flex flex-col">
                        <SheetHeader className="flex flex-1">
                            <SheetTitle>
                                <Logo />
                            </SheetTitle>
                            <div className="space-y-4 ">
                                <Button className="w-full" asChild>
                                    <Link className="flex items-center gap-2" to={`${baseUrl}/login`}>
                                        Signup or Login
                                    </Link>
                                </Button>

                                <Button variant="outline">
                                    <CircleHelp size={24}/>
                                    FAQ
                                </Button>
                            </div>
                        </SheetHeader>
                        <SheetFooter className="flex flex-col w-full">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="w-full justify-between">
                                        <div className="flex gap-2 items-center">
                                            <Languages />
                                            <span>English</span>
                                        </div>

                                        <div>
                                            <ChevronsUpDown />
                                        </div>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start">
                                    <DropdownMenuItem>English</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">
                                    <div className="flex justify-start"><MapPin /></div>
                                    <div className="flex flex-1 justify-start">
                                        {cityLabel}
                                    </div>
                                    <div><ChevronsUpDown className="size-4"/></div>
                                    </Button>
                                </DropdownMenuTrigger>
                                
                                <DropdownMenuContent align="start">
                                    <DropdownMenuItem onClick={() => {
                                    setCountry("ae");
                                    setLocationInUrl(country);
                                    }}>United Arab Emirates</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => {
                                    setCountry("uk");
                                    setLocationInUrl(country);
                                    }}>United Kingdom</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => {
                                    setCountry("us");
                                    setLocationInUrl(country);
                                    }}>United States</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>

            <div className="flex md:hidden lg:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Button variant="outline" size="icon">
                            <Menu size={24} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>
                                <Logo />
                            </SheetTitle>
                            <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" className="w-full">
                                            Partner with us
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start">
                                        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator /> */}
                                        <DropdownMenuItem>
                                            <ShoppingBasket className="size-16 text-primary" />
                                            Partners
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Briefcase className="size-16 text-primary" />
                                            Careers
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Newspaper className="size-16 text-primary" />
                                            Deliveroo for Work
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

        </section>
    );
}
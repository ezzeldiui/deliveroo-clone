import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useLocation } from "@/hooks/useLocation"
  

import { cn } from "@/lib/utils"
import { Check, ChevronsUpDown, Navigation } from "lucide-react"
import { useQueryState } from "nuqs"
import { Button } from "../ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command"

import abstractArtSrc from "@/assets/images/abstractArt.svg"
import bagSrc from "@/assets/images/bag.png"
import burgerSrc from "@/assets/images/burger.png"
import { baseUrl } from "@/main"
import { Link } from "react-router-dom"

export function Hero() {

    const { country, getCitiesByCountry } = useLocation();
    const cities = getCitiesByCountry(country);
    const [value, setValue] = useQueryState("city");
    // const [open, setOpen] = useState(false)


    return <div className="flex flex-col w-full items-center justify-center relative">
        <h1 className="z-50 text-4xl max-w-[50vw] text-center text-balance font-bold py-12">Restaurants, takeaways, supermarkets and shops. Delivered. </h1>

        <Card className="z-50 w-[50vw]" >
            <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">Enter an address to see what we deliver</CardTitle>
            </CardHeader>

            <CardContent>
                <Popover>
                    <PopoverTrigger className="w-full">
                        <Button className="w-full flex justify-between" variant={"outline"}>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Navigation size={16} className="text-primary"/>
                                <span>{value || "Select a city"}</span>
                            </div>

                            <ChevronsUpDown size={16} className="text-muted-foreground"/>
                        </Button>
                    </PopoverTrigger>
                    
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandInput placeholder="Search cities..." />
                            
                            <CommandList>
                                <CommandEmpty>No cities found.</CommandEmpty>
                                <CommandGroup>
                                {cities.map((cities) => (
                                    <CommandItem
                                        asChild
                                        key={cities.value}
                                        value={cities.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            // setOpen(false)
                                        }}
                                    >
                                        <Link to={`${baseUrl}/restaurant/search?city=${cities.value}`} className={cn("flex items-center gap-2")}>
                                            <Check
                                                className={cn(
                                                "mr-2 h-4 w-4",
                                                value === cities.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {cities.label}
                                        </Link>
                                    </CommandItem>
                                ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </CardContent>

            <CardFooter className="text-xs font-semibold flex gap-[5px]">
                <p className="text-primary hover:underline underline-offset-4">Log in</p>
            
                <p className="text-muted-foreground">for your recent addresses.</p>
            </CardFooter>
        </Card>

        <section className=" hidden lg:flex absolute -translate-x-[30vw]">
            <img src={abstractArtSrc} alt="hero" className=""/>
        </section>
        
        <section className=" hidden lg:flex absolute -translate-x-[30vw]">
            <img src={bagSrc} alt="bag" width={400} className=""/>
        </section>
        
        <section className=" hidden lg:flex absolute -right-0">
            <img src={burgerSrc} alt="burger" width={500} className=""/>
        </section>
    </div>
}
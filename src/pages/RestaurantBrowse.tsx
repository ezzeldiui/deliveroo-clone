import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { baseUrl } from '@/main'
import { LocateFixed } from 'lucide-react'
import { parseAsBoolean, useQueryState } from 'nuqs'
import { Link, useSearchParams } from 'react-router-dom'
  

export function RestaurantBrowse() {

    const [serachParams] = useSearchParams()
    const city = serachParams.get('city')
    const [fulfillment_method, setFulfillment_method] = useQueryState('fulfillment_method')
    const [sort, setSort] = useQueryState('sort')
    const [allOffers, setOffers] = useQueryState('allOffers', parseAsBoolean.withDefault(false))
    const [nearYou, setNearYou] = useQueryState('nearYou', parseAsBoolean.withDefault(false))
    const [groceryDeals, setGroceryDeals] = useQueryState('groceryDeals', parseAsBoolean.withDefault(false))

  return (
    <SidebarProvider>
        <SidebarTrigger />
        <Sidebar side='right'>
            {/* <SidebarTrigger /> */}
            <SidebarHeader className='flex gap-2'>
                <div className='flex items-center gap-2'>
                    <LocateFixed className='text-primary' />
                    <div>
                        Now
                        <p>{city}</p>
                    </div>
                </div>
                    <Button variant={"outline"} asChild>
                        <Link to={`${baseUrl}/`}>
                            Change
                        </Link>
                    </Button>
            </SidebarHeader>
            <SidebarContent>

                <RadioGroup className='px-4 flex ' onValueChange={(e) => setFulfillment_method(e)}>
                    <div className='flex items-center gap-2'>
                        <RadioGroupItem value="delivery" id='r1' checked={ fulfillment_method === 'delivery' } />
                        <Label htmlFor='r1'>Delivery</Label>
                    </div>

                    <div className='flex items-center gap-2'>
                        <RadioGroupItem value="pick-up" id='r2'  checked={ fulfillment_method === 'pick-up' } />
                        <Label htmlFor='r2'>Pick Up</Label>
                    </div>
                </RadioGroup>

                <SidebarGroup>
                    <Accordion type="multiple">
                        <AccordionItem value="sort">
                            <AccordionTrigger>
                                <SidebarGroupLabel className='flex gap-2'>
                                    Sort
                                </SidebarGroupLabel>
                            </AccordionTrigger>

                            <AccordionContent className='px-3 rounded-md'>
                                <SidebarGroupContent>
                                    <RadioGroup className='px-4 flex flex-col' onValueChange={(e) => setSort(e)}>
                                        <div className='flex items-center gap-2 py-2' >
                                            <RadioGroupItem value="distance" id='r3' checked={
                                                sort === 'distance'
                                            } />
                                            <Label htmlFor='r3'>Distance</Label>
                                        </div>

                                        <div className='flex items-center gap-2 py-2'>
                                            <RadioGroupItem value="delivery_time" id='r4' checked={
                                                sort === 'delivery_time'
                                            } />
                                            <Label htmlFor='r4'>Qucikest Delivery</Label>
                                        </div>
                                        
                                        <div className='flex items-center gap-2 py-2'>
                                            <RadioGroupItem value="recommended" id='r5' checked={
                                                sort === 'recommended'
                                            }/>
                                            <Label htmlFor='r5'>Recommended</Label>
                                        </div>
                                        
                                        <div className='flex items-center gap-2 py-2'>
                                            <RadioGroupItem value="top-rated" id='r6' checked={
                                                sort === 'top-rated'
                                            } />
                                            <Label htmlFor='r6'>Top-rated</Label>
                                        </div>
                                    </RadioGroup>
                                </SidebarGroupContent>
                            </AccordionContent>
                        </AccordionItem>


                        <AccordionItem value="offers">
                            <AccordionTrigger>
                                <SidebarGroupLabel className='flex gap-2'>
                                    Offers
                                </SidebarGroupLabel>
                            </AccordionTrigger>

                            <AccordionContent className='px-3 rounded-md'>
                                <SidebarGroupContent className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="offers" checked={allOffers} onCheckedChange={(e) => {
                                            if(e) {
                                                setOffers(true)
                                            } else {
                                                setOffers(false)
                                            }
                                        }} 
                                        />
                                        <Label htmlFor="offers">All Offers</Label>
                                    </div>
                                    
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="nearYou" checked={nearYou} onCheckedChange={(e) => {
                                            if(e) {
                                                setNearYou(true)
                                            } else {
                                                setNearYou(false)
                                            }
                                        }} 
                                        />
                                        <Label htmlFor="nearYou">Offers near you</Label>
                                    </div>
                                    
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="groceryDeals" checked={groceryDeals} onCheckedChange={(e) => {
                                            if(e) {
                                                setGroceryDeals(true)
                                            } else {
                                                setGroceryDeals(false)
                                            }
                                        }} 
                                        />
                                        <Label htmlFor="groceryDeals">Grocery Deals</Label>
                                    </div>
                                </SidebarGroupContent>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    </SidebarProvider>
  )
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import phoneMockupSrc from "@/assets/images/phone-mockup.svg";
import mapSrc from "@/assets/images/map.png";

export function SubHero() {
  // Hello World
    return <div className="">
      <div className="py-2 translate-y-16">
        <Card className="mt-16 max-w-2xl mx-auto shadow-md ">
          <CardHeader>
            <CardTitle>Track orders to your door</CardTitle>
            <CardDescription className="z-10">Get your favourite food delivered in a flash. You’ll see when your rider’s picked up your order, and be able to follow them along the way. You’ll get a notification when they’re nearby, too.</CardDescription>
          </CardHeader>
  
          <CardContent className="relative overflow-hidden">
            <img src={phoneMockupSrc} alt="" width={550} height={25} className="absolute -right-24 -translate-y-[350px] "/>
            <img src={mapSrc} alt="" width={600} height={25} className="shadow-md rounded-md border border-1"/>
          </CardContent>
        </Card>
      </div>
    </div>
  }
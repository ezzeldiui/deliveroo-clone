import { Button } from "@/components/ui/button";
import { baseUrl } from "@/main";
import { Link } from "react-router-dom";

export function Loginpage() {
  
  return <div className="bg-slate-100 min-h-screen flex  flex-col items-center justify-center">
    <h1 className="text-4xl font-black text-primary">I am not a backend developer</h1>
    <Button variant="outline" className="mt-4" asChild>
        <Link to={`${baseUrl}/`}>Back to homepage</Link>
    </Button>
  </div>
}
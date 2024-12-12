import { Banner, LocationSelector, Navbar } from "components";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Banner
        label={
          <Link
            href="https://github.com/ezzeldiui"
            target="_blank"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-muted-foreground hover:text-white transition-all"
          >
            <span className="text-sm">Developed by</span>
            <Github size="16" />
            <span className="text-sm">ezzeldi_ui</span>
          </Link>
        }
      />
      <Navbar />

      <main className="w-fit mx-auto mt-36">
        <LocationSelector />
      </main>
    </div>
  );
}

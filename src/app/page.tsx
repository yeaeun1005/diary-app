import { HeroScroll } from "@/components/main/hero";
import { Navbar } from "@/components/main/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Navbar />
      <HeroScroll />
    </main>
  );
}

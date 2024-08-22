import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Grid } from "@/components/Grid";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}

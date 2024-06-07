import RecentFoundItems from "@/components/RecentFoundItems";
import RecentLostItems from "@/components/RecentLostItems";
import AboutUs from "@/components/ui/AboutUs";
import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";
import Testimonials from "@/components/ui/Testimonials";

export default function Home() {
  return (
    <main >
      <Hero/>
      <AboutUs/>
      <RecentLostItems/>
      <RecentFoundItems/>
      <Testimonials/>
    </main>
  );
}

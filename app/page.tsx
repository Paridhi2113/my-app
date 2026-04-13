import Navbar from "./components/NavBar";
import HeroSection from "./components/Heropage";
import PopularCategories from "./components/Featured";
import SpecialDishes from "./components/Menu";
import TestimonialsSection from "./components/TestinomialSection";
import StoryAndServices from "./components/GallerySection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      
      <HeroSection />
      <PopularCategories />
      <SpecialDishes />
      <TestimonialsSection />
      <StoryAndServices />
     
    </main>
  );
}
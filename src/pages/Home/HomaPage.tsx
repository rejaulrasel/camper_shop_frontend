import BestSellingSection from "../../components/bestSelling/BestSellingSection";
import CategorySection from "../../components/category/CategorySection";
import FAQSection from "../../components/FAQ/FAQSection";
import FeaturedSection from "../../components/featured/FeaturedSection";
import HeroSection from "../../components/layout/HeroSection";
import TestimonialSection from "../../components/testimonial/TestimonialSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="max-w-screen-xl mx-auto">
        <BestSellingSection />
        <CategorySection />
      </div>
      {/* <FeaturedSection /> */}
      <div className="max-w-screen-xl mx-auto">
        <TestimonialSection />
        <FAQSection />
      </div>
    </div>
  );
};

export default HomePage;


import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Crafting compelling content for{" "}
            <span className="text-blue-600">digital success</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-xl">
            Professional content writer specializing in SEO articles, blog posts, and engaging web content that connects with your audience.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Button className="px-6 py-6" size="lg">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="px-6 py-6" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
        <div className="relative w-full aspect-square max-w-md mx-auto md:ml-auto">
          <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 animate-pulse"></div>
          <img
            src="/lovable-uploads/a4e335b8-306f-4636-91cc-717364483207.png"
            alt="Devanand Portrait"
            className="w-full h-full object-cover rounded-full border-8 border-white shadow-lg"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center text-neutral-500 hover:text-blue-600 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <span className="block h-10 w-px bg-neutral-300"></span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
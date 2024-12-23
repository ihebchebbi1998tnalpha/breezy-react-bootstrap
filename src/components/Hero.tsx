import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="animate-fade-in text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-blue-600">MyApp</span>
        </h1>
        <p className="animate-fade-in text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Build something amazing with React and Tailwind CSS. Start your journey with our modern web application template.
        </p>
        <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
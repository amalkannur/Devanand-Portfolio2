
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              I'm Devanand, a passionate content writer with 7+ years of experience
            </h3>
            <p className="text-neutral-600 mb-4">
              I specialize in crafting compelling content that engages readers and drives business results. With expertise in SEO content, blog posts, and website copy, I help brands tell their stories effectively.
            </p>
            <p className="text-neutral-600 mb-6">
              My approach focuses on understanding your audience and business goals to create content that resonates and converts. Whether you need website copy that sells, blog posts that engage, or SEO content that ranks, I'm here to help you succeed in the digital landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">
                Download Resume
                <FileText className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-neutral-50 p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">7+</div>
              <p className="text-neutral-600 font-medium">
                Years of experience
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <p className="text-neutral-600 font-medium">Projects completed</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-neutral-600 font-medium">Happy clients</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-neutral-600 font-medium">Industries served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

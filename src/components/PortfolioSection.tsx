
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    title: "How AI is Transforming Content Creation in 2023",
    category: "Tech Blog",
    description: "An in-depth analysis of how artificial intelligence tools are changing the landscape of content creation.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "5 Essential Practices for Sustainable Living",
    category: "Lifestyle Content",
    description: "A comprehensive guide to incorporating sustainability into everyday life with practical tips.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "The Future of Remote Work: Trends to Watch",
    category: "Business Article",
    description: "An exploration of emerging trends shaping the future of work in a post-pandemic world.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Understanding Digital Privacy in the Modern Age",
    category: "Tech Article",
    description: "A detailed look at privacy concerns in today's connected world and how to protect yourself.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "The Psychology of Effective Marketing Copy",
    category: "Marketing Content",
    description: "An analysis of psychological principles that make marketing copy more compelling and effective.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Building a Personal Brand Through Content",
    category: "Career Development",
    description: "Strategic approaches to developing a strong personal brand through consistent content creation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Writing Portfolio</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-neutral-600">
            Explore samples of my work across various industries and content formats.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all group">
              <CardHeader className="p-0">
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <span className="text-sm font-medium text-blue-600 mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-neutral-600 line-clamp-2">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-blue-600 p-0 h-auto font-medium">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
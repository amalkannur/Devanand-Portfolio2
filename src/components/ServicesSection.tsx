
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, GalleryHorizontal, Book } from "lucide-react";

const services = [
  {
    icon: <FileText className="h-10 w-10 text-blue-500" />,
    title: "Blog Writing",
    description:
      "Engaging, SEO-optimized blog posts that establish your brand as an authority and drive organic traffic to your website.",
  },
  {
    icon: <Book className="h-10 w-10 text-blue-500" />,
    title: "SEO Articles",
    description:
      "Well-researched, keyword-rich articles that help improve your search rankings and increase visibility online.",
  },
  {
    icon: <GalleryHorizontal className="h-10 w-10 text-blue-500" />,
    title: "Web Content",
    description:
      "Compelling website copy that clearly communicates your value proposition and converts visitors into customers.",
  },
  {
    icon: <FileText className="h-10 w-10 text-blue-500" />,
    title: "Email Newsletters",
    description:
      "Engaging email content that nurtures leads, builds relationships with subscribers, and drives conversions.",
  },
  {
    icon: <GalleryHorizontal className="h-10 w-10 text-blue-500" />,
    title: "Case Studies",
    description:
      "Persuasive case studies that showcase your success stories and help build trust with potential clients.",
  },
  {
    icon: <Book className="h-10 w-10 text-blue-500" />,
    title: "Whitepapers",
    description:
      "In-depth, authoritative content that establishes your brand as a thought leader in your industry.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-neutral-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-neutral-600">
            I offer a range of content writing services tailored to meet your specific needs and help you achieve your business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
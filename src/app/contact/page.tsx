import PageHeader from "@/components/page-header";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./contact-form";

const contactDetails = [
  {
    icon: Mail,
    text: "hello@devcore.com",
    href: "mailto:hello@devcore.com",
  },
  {
    icon: Phone,
    text: "(123) 456-7890",
    href: "tel:+11234567890",
  },
  {
    icon: MapPin,
    text: "123 Innovation Drive, Tech City, 12345",
  },
];

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <PageHeader
        title="Get in Touch"
        description="We'd love to hear from you. Whether you have a question about our services or want to start a project, our team is ready to answer all your questions."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-headline font-semibold mb-6">Contact Information</h2>
          <div className="space-y-6">
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-center gap-4">
                <detail.icon className="h-6 w-6 text-primary" />
                {detail.href ? (
                  <a href={detail.href} className="text-lg hover:underline">{detail.text}</a>
                ) : (
                  <p className="text-lg">{detail.text}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg overflow-hidden aspect-video">
             <div className="w-full h-full bg-muted flex items-center justify-center">
                 <p className="text-muted-foreground">[Map Placeholder]</p>
             </div>
          </div>
        </div>

        <div>
           <h2 className="text-2xl font-headline font-semibold mb-6">Send Us a Message</h2>
           <ContactForm />
        </div>
      </div>
    </div>
  );
}

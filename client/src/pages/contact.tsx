import Navbar from "@/components/layout/navbar";
import Contact from "@/components/sections/contact"; // Bu senin formun
import Footer from "@/components/sections/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-28 sm:pt-32 md:pt-36">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PatentListSection from "@/components/PatentListSection";
import BackgroundCircles from "@/components/BackgroundCircles";

export default function PatentsPage() {
  return (
    <main className="min-h-screen relative">
      <BackgroundCircles />
      <Header />
      <PatentListSection />
      <Footer />
    </main>
  );
}


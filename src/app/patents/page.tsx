import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import PatentListSection from "@/components/PatentListSection";
import BackgroundCircles from "@/components/BackgroundCircles";

export default function PatentsPage() {
  return (
    <main className="min-h-screen relative">
      <BackgroundCircles />
      <Header />
      <div className="pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "保有特許について", href: "/patents" }]} />
        </div>
      </div>
      <PatentListSection />
      <Footer />
    </main>
  );
}


import BenefitsSection from "@/containers/home-page/benefits-section";
import ContactSection from "@/containers/home-page/contactus-section";
import HeroSection from "@/containers/home-page/hero-section";
import ServiceSection from "@/containers/home-page/service-section/";

export default function Home() {
  return (
    <>
      <div className=" lg:px-24 sm:px-4 ">
        <HeroSection />
      </div>
      <div className=" lg:px-24 sm:px-4 ">
        <BenefitsSection />
      </div>
      <div className=" lg:px-24 sm:px-4 ">
        <ServiceSection />
      </div>
      <div className=" lg:px-24 sm:px-4 ">
        <ContactSection />
      </div>
    </>
  );
}

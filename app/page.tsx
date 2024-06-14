import BenefitsSection from "@/containers/home-page/benefits-section";
import ContactSection from "@/containers/home-page/contactus-section";
import HeroSection from "@/containers/home-page/hero-section";
import ServiceSection from "@/containers/home-page/service-section/";

export default function Home() {
  const defaultStyle = {
    padding: "0 96px",
    backgroundColor: "black",
    color: "white",
  };
  const sectionStyle = {
    padding: "0 96px",
    backgroundColor: "white",
    color: "black",
  };


  return (
    <>
      <div className=" lg:px-24 sm:px-4 " >
        <HeroSection />
      </div>
      {/* <div style={defaultStyle}>
        <BenefitsSection />
      </div>
      <div style={sectionStyle}>
        <ServiceSection />
      </div>
      <div style={defaultStyle}>
        <ContactSection />
      </div> */}
    </>
  );
}

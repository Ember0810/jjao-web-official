import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import HeroSlider from "@/components/home/HeroSlider";
import Layout from "@/components/home/layout/Layout";
import Head from "next/head";
import OurMission from "@/components/home/OurMission";
import Service from "@/components/home/Service";
import ServiceChart from "@/components/home/ServiceChart";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Process from "@/components/home/Process";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          四大核心力 × 企業培訓 × 商務媒合 一站式顧問服務 | JJAO 佼點
        </title>
      </Head>
      <Layout>
        <HeroSlider />
        <About />
        <Contact />
        <OurMission />
        <ServiceChart />
        <Service />
        <WhyChooseUs />
        <Process />
        <Testimonial />
        {/* <Project6 /> */}
        {/* <Contact3 /> */}
        {/* <Testimonial6 /> */}
        {/* <Client3 /> */}
        {/* <Blog7 /> */}
        {/* <Contact5 /> */}
      </Layout>
    </>
  );
}

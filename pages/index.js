import Layout from "@/components/home/layout/Layout";
import Head from "next/head";
import About6 from "@/components/sections/About6";
import Blog7 from "@/components/sections/Blog7";
import Client3 from "@/components/sections/Client3";
import Contact3 from "@/components/sections/Contact3";
import Contact4 from "@/components/sections/Contact4";
import Contact5 from "@/components/sections/Contact5";
import Project6 from "@/components/sections/Project6";
import Service from "@/components/home/Service";
import Team5 from "@/components/sections/Team5";
import Testimonial6 from "@/components/sections/Testimonial6";
import HeroSlider from "@/components/home/HeroSlider";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";

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
        <Service />
        <About />

        <Project6 />
        {/* <Contact3 /> */}
        <Contact />
        <Team5 />
        <Testimonial6 />
        <Client3 />
        <Blog7 />
        <Contact5 />
      </Layout>
    </>
  );
}

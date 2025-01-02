import Header from "@/components/Header";
// import Section from "@/components/HeroPage";
import Product from "@/components/Product";
import dynamic from 'next/dynamic';

const Slider = dynamic(() => import('@/components/Slider'), {
  ssr: false, // Disable server-side rendering
});


export default function Home() {
  return (
    <div>
      <Header/>
      <Slider />
      {/* <Section/> */}
      <Product/>
    </div>
  );
}

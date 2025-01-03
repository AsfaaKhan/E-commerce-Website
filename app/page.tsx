import Product from "@/components/Products";
import HeroPage from "@/components/HeroPage"
// import dynamic from 'next/dynamic';

// const Slider = dynamic(() => import('@/components/Slider'), {
//   ssr: false, // Disable server-side rendering
// });


export default function Home() {
  return (
    <div>
      
      <HeroPage/>
      {/* <Slider /> */}
      <Product/>
    </div>
  );
}

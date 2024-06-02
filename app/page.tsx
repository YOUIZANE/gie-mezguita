import BestCategory from "@/components/category/BestCategory";
import LargeWithLogoCentered from "@/components/footer/LargeWithLogoCentered";
import SplitScreen from "@/components/hero/SplitScreen";
import WithSubnavigation from "@/components/navbar/WithSubnavigation";
import OurSercices from "@/components/Services/OurServices";
export default function HomePage() {
  return (
    <>
      <WithSubnavigation />
      <main className="flex min-h-screen flex-col items-center justify-between ">
        {/* <Hero /> */}
        <SplitScreen/>
        <OurSercices/>
        <BestCategory/>
        {/* <OurCertificate/> */}

        {/* <Newsletter/> */}
        {/* <OurPartner/> */}
      </main>
      <LargeWithLogoCentered />
    </>
  );
}

import Card from "@/components/achievement/card";
import DetailCard from "@/components/achievement/detailCard";
import Header from "@/components/achievement/header";

export default function page() {
  return (
    <div className="bg-[#010B15] min-h-screen flex-row justify-center items-center">
      <Header />
      <div className="flex flex-col pb-10">
        <Card />
        <DetailCard/>
      </div>
    </div>
  );
}

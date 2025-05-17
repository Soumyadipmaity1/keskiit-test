import Gallery from "@/components/about/gallery";
import Header from "@/components/about/header";
import Team from "@/components/about/team";
import React from "react";

function page() {
  return (
    <>
      <div className="flex flex-col gap-10 min-h-screen bg-[#010B15]">
        <Header />

        <Gallery />

        <div className="flex gap-3">
          <div className="bg-[#407E73] h-[100px] w-[4px]"> </div>
          <div className="bg-[#407E73] h-[100px] w-[8px]"> </div>
          <div className="bg-[#407E73] h-[100px] w-[15px]"> </div>
          <div className="bg-[#407E73] h-[100px] w-[22px]"> </div>
          <div className="bg-[#407E73] h-[100px] w-[33px]"> </div>
          <div className="bg-[#407E73] h-[100px] w- w-full"> </div>
          <div className="bg-[#407E73] h-[100px] w-[33px]"> </div>
          <div className="bg-[#407E73] h-[100px] w-[22px]"> </div>
          <div className="bg-[#407E73] h-[100px] w-[15px]"> </div>
          <div className="bg-[#407E73] h-[100px] w-[8px]"> </div>
          <div className="bg-[#407E73] h-[100px] w-[4px]"> </div>
        </div>
        <div>
          <Team />
        </div>
        <div>Mera Naam</div>
      </div>
    </>
  );
}

export default page;

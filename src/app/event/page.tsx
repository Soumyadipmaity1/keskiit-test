import EventsSection from "@/components/event/event-section";
import Header from "@/components/event/header";

export default function page() {
  return (
    <div className="bg-linear-to-b from-[#0A0E14] to-[#0D1A30] min-h-screen">
      <Header />
      <EventsSection />
    </div>
  );
}

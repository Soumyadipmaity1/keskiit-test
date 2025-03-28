import React from "react";

const events = [
  {
    id: 1,
    title: "KIIT Electrical Society (KES) organises Innovation Challenge 'Kreate and Konquer'",
    date: "Mar 6, 2023",
    image: "/event1.jpg", // Replace with actual image URL
  },
  {
    id: 2,
    title: "Tech-Expo Organized by KIIT Electrical Society",
    date: "Mar 6, 2023",
    image: "/event2.jpg", // Replace with actual image URL
  },
];

const EventHighlights: React.FC = () => {
  return (
    <section className="bg-black py-12 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold">
          <span className="text-white">Event</span>{" "}
          <span className="text-gray-400">Highlights</span>
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-4 rounded-2xl shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="bg-gray-700 p-3 rounded-xl">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;

export default function GuidingPillars() {
    const members = [
      { name: "Dr. Shyam Sundar Behura", role: "Additional Registrar" },
      { name: "Abhishek Kushary", role: "Founder" },
      { name: "Dr. Shubhasri Kundu", role: "Faculty Coordinator" },
      { name: "Akash Roy Chowdhury", role: "Founder" },
    ];
  
    return (
      <section className="bg-black py-12 text-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Guiding Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {members.map((member, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-all">
              <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-gray-300">PHOTO</span>
              </div>
              <h3 className="text-xl font-medium">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
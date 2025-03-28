"use client"

import { useState, useEffect } from "react"
import { Bell } from "lucide-react"

export default function NoticeboardComponent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const notices = [
    {
      id: 1,
      title: "KREATIVE KONTROL Mega Event",
      content: "Exciting hands-on event by EES, mixing creativity and technology in a fun way (and electronically).",
      date: "25th March 2024",
    },
    {
      id: 2,
      title: "Happy Holi",
      content:
        "Wishing everyone a vibrant and joyous Holi celebration from the team at KIIT Electrical Society (KESS).",
      date: "25th March 2024",
    },
    {
      id: 3,
      title: "Happy Holi",
      content:
        "Wishing everyone a vibrant and joyous Holi celebration from the team at KIIT Electrical Society (KESS).",
      date: "25th March 2024",
    },
    {
      id: 4,
      title: "Happy Holi",
      content:
        "Wishing everyone a vibrant and joyous Holi celebration from the team at KIIT Electrical Society (KESS).",
      date: "25th March 2024",
    },
  
    {
      id: 5,
      title: "Happy Holi",
      content:
        "Wishing everyone a vibrant and joyous Holi celebration from the team at KIIT Electrical Society (KESS).",
      date: "25th March 2024",
    },
  
    {
      id: 6,
      title: "Happy Holi",
      content:
        "Wishing everyone a vibrant and joyous Holi celebration from the team at KIIT Electrical Society (KESS).",
      date: "25th March 2024",
    },
  
  ]

  return (
    <section className="w-full bg-[#1a1a1a] p-6 py-20">
      <div className="mb-8 flex items-center justify-center">
        <h2 className="border-b border-gray-500 pb-2 text-center text-3xl font-bold text-gray-200">Notice Board</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className={`relative rounded-lg bg-gray-700 shadow-md transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: `${notice.id * 100}ms` }}
          >
            {/* Number box */}
            <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded bg-teal-400 text-xl font-bold text-white">
              {notice.id}
            </div>

            {/* Bell icon */}
            <div className="absolute right-4 top-4 text-teal-400">
              <Bell className="h-6 w-6" />
            </div>

            {/* Content */}
            <div className="mt-16 p-4 pb-14 text-white">
              {notice.title && (
                <>
                  <h3 className="mb-2 font-bold">{notice.title}</h3>
                  <p className="mb-2 text-sm text-gray-300">{notice.content}</p>
                  <p className="text-xs text-gray-400">{notice.date}</p>
                </>
              )}
            </div>

            {/* Check Out button */}
            {notice.title && (
              <div className="absolute bottom-4 right-4">
                <button className="rounded bg-teal-400 px-4 py-1 text-sm font-medium text-white hover:bg-teal-500">
                  Check Out
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="mt-6 flex justify-center space-x-2">
        <div className="h-2 w-2 rounded-full bg-white"></div>
        <div className="h-2 w-2 rounded-full bg-gray-500"></div>
        <div className="h-2 w-2 rounded-full bg-gray-500"></div>
      </div>
    </section>
  )
}


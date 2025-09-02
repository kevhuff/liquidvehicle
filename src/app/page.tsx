// src/app/page.tsx
"use client";

import { useState } from "react";
// If you have the @ alias set in tsconfig, keep the next line.
// import EmailLink from "@/components/EmailLink";
// Otherwise use this relative import:
import EmailLink from "../components/EmailLink";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen font-sans text-white">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 min-h-screen bg-[url('/wht_carbon_mainbg.png')] bg-cover bg-center bg-fixed z-0 pointer-events-none"
      />

      {/* Main Content Wrapper */}
      <div className="relative z-10 bg-black/10">
        {/* Mobile Navbar */}
        <nav className="relative bg-black px-4 py-3 shadow-md sticky top-0 z-50">
          <h1 className="text-xl font-bold tracking-wide text-red-400 text-center">
            H² Automotive
          </h1>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-red-400 focus:outline-none hover:text-yellow-400 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </nav>

        {menuOpen && (
          <div className="bg-black text-white p-4 space-y-2">
            <a href="#about" className="block hover:text-yellow-400">About</a>
            <a href="#services" className="block hover:text-yellow-400">Services</a>
            <a href="#contact" className="block hover:text-yellow-400">Contact</a>
            <a href="#events" className="block hover:text-yellow-400">Upcoming Events</a>
          </div>
        )}

        <section className="px-4 py-10 space-y-10 max-w-3xl mx-auto">
          {/* About Us */}
          <div
            id="about"
            className="space-y-4 bg-zinc-900 p-6 rounded-lg shadow-md border-l-4 border-red-400"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-red-400 via-red-300 to-yellow-400 inline-block text-transparent bg-clip-text">
              About Us
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to <span className="font-semibold text-white">H² Automotive</span>,
              your trusted source for expert automotive repair in the heart of Sissonville.
              With over <span className="font-semibold text-white">20 years of experience</span>,
              we specialize in servicing and repairing <span className="font-semibold text-white">import vehicles</span>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our technicians are <span className="font-semibold text-white">ASE certified</span> and
              <span className="font-semibold text-white"> factory trained</span> to provide the highest level of professional care for your vehicle.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We’re conveniently located at{" "}
              <span className="font-medium text-yellow-400">87 Cyan Dr., Charleston, WV 25312</span> —
              just behind NAPA Sissonville. Less than a 20 minute drive from downtown Charleston. Stop by and experience honest, skilled service from people who care.
            </p>
            <p className="text-gray-400 italic text-sm">
              🚧 This website is under construction — new features are being added regularly. 🚧
            </p>
          </div>

          {/* Services */}
          <div id="services" className="bg-zinc-900 p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-400 via-red-300 to-yellow-400 inline-block text-transparent bg-clip-text">
              Services
            </h2>
            <p className="text-gray-300 leading-relaxed">
              H² Automotive offers full-service automotive repair — from routine oil changes to complete engine rebuilds.
              We operate in an open shop environment, so customers are welcome to be involved and ask questions while we work on their vehicles. Each vehicle repair will be documented with photos and videos, so you can see exactly what we’re doing and why. 
              For your convenience and peace of mind, we provide vehivle pickup as well as mobile repairs when necessary.
            </p>
          </div>

          {/* Contact */}

<div id="contact" className="bg-zinc-900 p-6 rounded-lg shadow-md border-l-4 border-red-500">
  <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-400 via-red-300 to-yellow-400 inline-block text-transparent bg-clip-text">
    Contact Us
  </h2>

  {/* Clickable numbers (both), but only the first is used by the Call Now button */}
  <p className="text-gray-300">📞 <a className="hover:text-yellow-400 underline" href="tel:+13044001324">(304) 400-1324</a></p>
  <p className="text-gray-300">📞 <a className="hover:text-yellow-400 underline" href="tel:+13049513413">(304) 951-3413</a></p>

  <p className="text-gray-300">📍 87 Cyan Dr., Charleston, WV 2532</p>
  <p className="text-gray-300 mt-2">Mon–Fri: 8am – 6pm</p>

  <div className="mt-4 flex flex-wrap gap-3">
    {/* Primary call target */}
    <a
      href="tel:+13044001324"
      className="inline-block bg-red-400 text-white font-bold px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition"
      aria-label="Call (304) 400-1324"
    >
      Call Now
    </a>

    {/* Safe email link rendered as a button */}
    <EmailLink className="inline-block bg-zinc-800 text-white font-bold px-4 py-2 rounded border border-zinc-700 hover:border-yellow-400 hover:text-yellow-400 transition">
      Email
    </EmailLink>
  </div>
</div>

          {/* Upcoming Events */}
          <div id="events" className="bg-zinc-900 p-6 rounded-lg shadow-md border-l-4 border-yellow-400">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-red-300 to-red-500 inline-block text-transparent bg-clip-text">
              Upcoming Events
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
            From hands-on car care classes to interactive community nights with racing simulators and games, there’s something for everyone at H² Automotive. Visit the calendar link below to see what’s coming up and join us at our next workshop or open-garage event.
            </p>
            <a
              href="https://calendar.google.com/calendar/embed?src=YOUR_PUBLIC_CALENDAR_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 underline hover:text-yellow-300 block mt-2"
            >
              View Google Calendar
            </a>
          </div>

{/* Map */}
<div className="mt-6 space-y-3">
  <iframe
  title="H² Automotive Map – 87 Cyan Dr"
  className="w-full h-64 rounded-lg shadow-md"
  src="https://www.google.com/maps?q=87+Cyan+Dr,+Charleston,+WV+25312&output=embed"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>


  <div className="text-sm mt-2">
    <a
      href="https://www.google.com/maps/dir/?api=1&destination=87+Cyan+Dr,+Charleston,+WV+25312"
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-400 underline hover:text-yellow-300"
    >
      Get Directions to 87 Cyan Dr, Charleston, WV 25312
    </a>
  </div>
</div>


         
        </section>

        {/* Footer */}
        <footer className="bg-black text-gray-500 text-center text-sm py-4 mt-10">
          &copy; {new Date().getFullYear()} H² Automotive, LLC. All rights reserved.
          <br />
          H² Automotive, LLC is a fully registered and insured automotive repair business proudly serving Charleston, WV.
        </footer>
      </div>
    </main>
  );
}

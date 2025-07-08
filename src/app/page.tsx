// src/app/page.tsx
"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen font-sans text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('/wht_carbon_mainbg.png')] bg-cover bg-center bg-fixed opacity-1000 z-0" />

      {/* Main Content Wrapper */}
      <div className="relative z-10 bg-black/10">
        {/* Mobile Navbar */}
        <nav className="relative bg-black px-4 py-3 shadow-md sticky top-0 z-50">
          <h1 className="text-xl font-bold tracking-wide text-red-400 text-center">H² Automotive</h1>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-400 focus:outline-none hover:text-yellow-400 transition"
            onClick={() => setMenuOpen(!menuOpen)}
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
          <div id="about" className="space-y-4 bg-zinc-900 p-6 rounded-lg shadow-md border-l-4 border-red-400">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-red-400 via-red-300 to-yellow-400 inline-block text-transparent bg-clip-text">About Us</h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to <span className="font-semibold text-white">H² Automotive</span>, your trusted source for expert automotive repair in the heart of Sissonville.
              With over <span className="font-semibold text-white">20 years of experience</span>, we specialize in servicing and repairing <span className="font-semibold text-white">import vehicles</span>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our technicians are <span className="font-semibold text-white">ASE certified</span> and <span className="font-semibold text-white">factory trained</span> to provide the highest level of professional care for your vehicle.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We’re conveniently located at <span className="font-medium text-yellow-400">37 Cyan Dr., Charleston, WV 25312</span> — just outside of town in Sissonville. Stop by and experience honest, skilled service from people who care.
            </p>
           
          </div>

          {/* Services */}
          <div id="services" className="bg-zinc-900 p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-400 via-red-300 to-yellow-400 inline-block text-transparent bg-clip-text">Services</h2>
            <p className="text-gray-300 leading-relaxed">
              H² Automotive offers full-service automotive repair — from routine oil changes to complete engine rebuilds. We operate in an open shop environment, so customers are welcome to be involved and ask questions while we work on their vehicle. 
              For your convenience and peace of mind, we also offer secure video access so you can watch your vehicle being serviced remotely.
             
            </p>
          </div>

          {/* Contact */}
          <div id="contact" className="bg-zinc-900 p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-400 via-red-300 to-yellow-400 inline-block text-transparent bg-clip-text">Contact Us</h2>
            <p className="text-gray-300">📞 (304) 555-1234</p>
            <p className="text-gray-300">📍 37 Cyan Dr., Charleston, WV 25312</p>
            <p className="text-gray-300 mt-2">Mon–Fri: 8am – 6pm</p>
            <a href="tel:3045551234" className="inline-block mt-4 bg-red-400 text-white font-bold px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition">
              Call Now
            </a>
          </div>

          {/* Upcoming Events */}
          <div id="events" className="bg-zinc-900 p-6 rounded-lg shadow-md border-l-4 border-yellow-400">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-red-300 to-red-500 inline-block text-transparent bg-clip-text">Upcoming Events</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We host regular hands-on instructional sessions and car care classes for the community. Check the calendar link below to view our latest workshops and open garage events.
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

          {/* Map Embed */}
          <div className="mt-6">
            <iframe
              title="H2 Automotive Map"
              className="w-full h-64 rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.2730362163067!2d-81.6464579!3d38.4222626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884f0f10b45a4a4d%3A0x6973b360e54b2f5e!2s37%20Cyan%20Dr%2C%20Charleston%2C%20WV%2025312!5e0!3m2!1sen!2sus!4v1700000000000"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-gray-500 text-center text-sm py-4 mt-10">
          &copy; {new Date().getFullYear()} H² Automotive, LLC. All rights reserved.<br />
          H² Automotive, LLC is a fully registered and insured automotive repair business proudly serving Charleston, WV.
        </footer>
      </div>
    </main>
  );
}

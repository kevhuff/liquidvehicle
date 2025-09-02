// src/app/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EmailLink from "../components/EmailLink";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen font-sans text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 min-h-screen bg-[url('/wht_carbon_mainbg.png')] bg-cover bg-center bg-fixed z-0 pointer-events-none" />

      {/* Main Content Wrapper */}
      <div className="relative z-10 bg-black/10">
<nav className="relative bg-black px-4 py-2 shadow-md sticky top-0 z-50 flex items-center justify-between">
  {/* Logo */}
  <div className="flex-1 flex justify-center md:justify-start">
    <Image
      src="/logo.png"
      alt="H² Automotive Logo"
      width={500}
      height={200}
      priority
      className="w-[25vw] max-w-[180px] min-w-[90px] h-auto"
    />
  </div>

  {/* Desktop nav links */}
  <div className="hidden md:flex items-center gap-8 text-zinc-300 font-medium tracking-wide uppercase">
    <a href="#about" className="relative group">
      About
      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-red-400 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
    <a href="#services" className="relative group">
      Services
      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-red-400 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
    <a href="#contact" className="relative group">
      Contact
      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-red-400 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
    <a href="#events" className="relative group">
      Events
      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-red-400 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
    <Link href="/merch" className="relative group">
      Merch
      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-red-400 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </div>

  {/* Hamburger (mobile only) */}
  <button
    className="absolute right-4 text-red-400 hover:text-yellow-400 transition md:hidden text-3xl"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle menu"
  >
    {/* Simple 3-line hamburger with SVG */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</nav>


        {menuOpen && (
          <div className="bg-black text-white p-4 space-y-2 md:hidden">
            <a href="#about" className="block hover:text-yellow-400">About</a>
            <a href="#services" className="block hover:text-yellow-400">Services</a>
            <a href="#contact" className="block hover:text-yellow-400">Contact</a>
            <a href="#events" className="block hover:text-yellow-400">Upcoming Events</a>
            <Link href="/merch" className="block hover:text-yellow-400">Merch</Link>
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
              just behind NAPA Sissonville, less than a 20-minute drive from downtown Charleston.
              Stop by and experience honest, skilled service from people who care.
            </p>
            <p className="text-gray-400 italic text-sm">
              🚧 This website is under construction — new features are being added regularly. 🚧
            </p>
          </div>
{/* Services (clean, single CTA) */}
<section id="services" className="bg-zinc-900/90 p-6 md:p-8 rounded-lg shadow-md border-l-4 border-red-500">
  <header className="mb-4">
    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-400 via-red-300 to-yellow-400 inline-block text-transparent bg-clip-text">
      Services
    </h2>
    <p className="mt-2 text-gray-300">
      From routine maintenance to full engine work, we keep your car reliable—and show you every step with photos &amp; video.
    </p>
  </header>

  {/* Feature cards */}
  <div className="mt-6 grid gap-4 md:grid-cols-3">
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
      <div className="text-yellow-300 text-xl mb-1">🔧</div>
      <h3 className="text-lg font-semibold text-white">Diagnostics &amp; Repair</h3>
      <p className="text-zinc-400 text-sm mt-1">
        ASE-certified troubleshooting for check-engine lights, drivability, electrical, cooling, suspension, and brakes.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
      <div className="text-yellow-300 text-xl mb-1">🛠️</div>
      <h3 className="text-lg font-semibold text-white">Maintenance</h3>
      <p className="text-zinc-400 text-sm mt-1">
        Oil &amp; filters, fluids, belts, spark plugs, alignments, tires &amp; rotations—service plans that fit your mileage.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
      <div className="text-yellow-300 text-xl mb-1">🏁</div>
      <h3 className="text-lg font-semibold text-white">Specialist Work</h3>
      <p className="text-zinc-400 text-sm mt-1">
        Import expertise, timing components, engine &amp; transmission swaps, performance upgrades, and tuning prep.
      </p>
    </div>
  </div>

  {/* Quick List – collapsible */}
  <div className="mt-6">
    <details className="group rounded-2xl border border-zinc-800 bg-zinc-900/70">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4">
        <div className="flex items-center gap-2">
          <span className="text-yellow-300 text-xl">📋</span>
          <span className="text-white font-semibold">Quick List of Services</span>
        </div>
        <svg
          className="h-5 w-5 text-zinc-300 transition-transform duration-300 group-open:rotate-180"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.185l3.71-2.955a.75.75 0 111.06 1.06l-4.24 3.38a.75.75 0 01-.94 0l-4.24-3.38a.75.75 0 01-.12-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </summary>

      <div className="px-4 pb-4">
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-zinc-300">
            <li>• Factory-scheduled maintenance &amp; inspections</li>
            <li>• Brake service: rotors, pads, hydraulics, ABS</li>
            <li>• Cooling &amp; HVAC: radiators, water pumps, A/C</li>
            <li>• Electrical: batteries, starters, alternators, wiring</li>
          </ul>
          <ul className="space-y-2 text-zinc-300">
            <li>• Engine: gaskets, timing, seals, leak diagnosis</li>
            <li>• Suspension &amp; steering: control arms, bushings, shocks</li>
            <li>• Drivetrain: clutches, axles, differentials</li>
            <li>• Tires: mounting, balancing, rotations</li>
          </ul>
        </div>
      </div>
    </details>
  </div>

  {/* Trust badges (one set) */}
  <div className="mt-6 flex flex-wrap gap-3">
    <span className="text-xs px-3 py-1 rounded-full bg-yellow-400/15 text-yellow-300 border border-yellow-400/30">
      Photo &amp; video documentation of repairs
    </span>
    <span className="text-xs px-3 py-1 rounded-full bg-red-400/15 text-red-300 border border-red-400/30">
      Vehicle pickup &amp; mobile repairs available
    </span>
    <span className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
      ASE-certified • Factory-trained
    </span>
  </div>

  {/* Single CTA (keep only this) */}
  <div className="mt-6 flex flex-wrap gap-3">
    <a
      href="tel:+13044001324"
      className="inline-block bg-red-400 text-white font-bold px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition"
    >
      Call for Availability
    </a>
    <a
      href="#contact"
      className="inline-block bg-zinc-800 text-white font-bold px-4 py-2 rounded border border-zinc-700 hover:border-yellow-400 hover:text-yellow-400 transition"
    >
      Get a Quote
    </a>
  </div>
</section>


          {/* Contact */}
          <div id="contact" className="bg-zinc-900 p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-400 via-red-300 to-yellow-400 inline-block text-transparent bg-clip-text">
              Contact Us
            </h2>

            {/* Both numbers clickable; Call Now uses the first */}
            <p className="text-gray-300">
              📞 <a className="hover:text-yellow-400 underline" href="tel:+13044001324">(304) 400-1324</a>
            </p>
            <p className="text-gray-300">
              📞 <a className="hover:text-yellow-400 underline" href="tel:+13049513413">(304) 951-3413</a>
            </p>

            <p className="text-gray-300">📍 87 Cyan Dr., Charleston, WV 25312</p>
            <p className="text-gray-300 mt-2">Mon–Fri: 8am – 6pm</p>

            <div className="mt-4 flex flex-wrap gap-3">
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
              From hands-on car care classes to interactive community nights with racing simulators and games,
              there’s something for everyone at H² Automotive. Visit the calendar link below to see what’s coming up
              and join us at our next workshop or open-garage event.
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

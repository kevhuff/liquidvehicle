// src/app/merch/page.tsx
"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function MerchPage() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: { perView: 1, spacing: 16 },
  });

  // Template product data (replace with your own later)
  const products = [
    {
      name: "H² Logo Tee",
      price: "$24.00",
      image: "/products/logo-tee.jpg",
      description: "Soft cotton tee with H² logo.",
    },
    {
      name: "Garage Cap",
      price: "$22.00",
      image: "/products/garage-cap.jpg",
      description: "Low-profile cap with embroidered H² logo.",
    },
    {
      name: "Sticker Pack",
      price: "$8.00",
      image: "/products/stickers.jpg",
      description: "5-pack of weatherproof vinyl stickers.",
    },
  ];

  return (
    <main className="relative min-h-screen text-white">
      <div className="relative z-10 bg-black/40">
        <section className="px-4 py-10 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-400 via-red-300 to-yellow-400 inline-block text-transparent bg-clip-text">
            Merch
          </h1>
          <p className="mt-2 text-zinc-300">
            Rep the shop! Browse our featured merch below.
          </p>

          {/* Carousel */}
          <div ref={sliderRef} className="keen-slider mt-8">
            {products.map((p, i) => (
              <div
                key={i}
                className="keen-slider__slide rounded-2xl border border-zinc-800 bg-zinc-900/70 overflow-hidden"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <p className="text-zinc-400 text-sm">{p.description}</p>
                  <p className="text-yellow-300 font-semibold">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

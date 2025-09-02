// src/app/merch/MerchClient.tsx
"use client";

/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

type Product = {
  slug: string;
  name: string;
  price: number;
  image: string;
  description: string;
  badge?: string;
};

const products: Product[] = [
  {
    slug: "h2-logo-tee",
    name: "H² Logo Tee",
    price: 24,
    image: "/products/logo-tee.png",
    description: "Soft cotton tee with the H² logo. Unisex fit.",
    badge: "New",
  },
  {
    slug: "garage-cap",
    name: "Garage Cap",
    price: 22,
    image: "/products/garage-cap.png",
    description: "Low-profile cap with embroidered H² mark.",
  },
  {
    slug: "sticker-pack",
    name: "Sticker Pack",
    price: 8,
    image: "/products/stickers.png",
    description: "5-pack of weatherproof vinyl stickers.",
    badge: "Limited",
  },
  {
    slug: "keychain",
    name: "Keychain",
    price: 12,
    image: "/products/keychain.jpg",
    description: "Durable metal keychain with H² logo.",
  },
];

export default function MerchClient() {
  const [current, setCurrent] = React.useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(s) {
      setCurrent(s.track.details.rel);
    },
    mode: "free-snap",
    renderMode: "precision",
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2, spacing: 16 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 20 } },
    },
  });

  return (
    <main className="relative min-h-screen text-white">
      <div className="relative z-10 bg-black/40">
        <section className="px-4 py-10 max-w-5xl mx-auto">
          <div className="flex items-end justify-between gap-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-400 via-red-300 to-yellow-400 inline-block text-transparent bg-clip-text">
              Merch
            </h1>
            <Link
              href="/"
              className="text-sm text-zinc-300 hover:text-yellow-300 underline"
            >
              ← Back to Home
            </Link>
          </div>

          <p className="mt-2 text-zinc-300">
            Online checkout is coming soon — for now, stop by the shop or{" "}
            {/* ✅ Internal link must use <Link> */}
            <Link href="/#contact" className="underline hover:text-yellow-300">
              contact us
            </Link>{" "}
            to purchase.
          </p>

          {/* Slider */}
          <div className="mt-6 relative">
            <div ref={sliderRef} className="keen-slider">
              {products.map((p) => (
                <div key={p.slug} className="keen-slider__slide">
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 overflow-hidden hover:shadow-md transition">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-4 space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">{p.name}</h3>
                        {p.badge && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-300">
                            {p.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-zinc-400 text-sm">{p.description}</p>
                      <p className="pt-2 text-yellow-300 font-semibold">
                        ${p.price.toFixed(2)}
                      </p>
                      <p className="text-xs text-zinc-500">
                        Template — details coming soon
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows (desktop) */}
            <button
              type="button"
              onClick={() => instanceRef.current?.prev()}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-black/60 border border-zinc-700 hover:bg-black/80"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => instanceRef.current?.next()}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-black/60 border border-zinc-700 hover:bg-black/80"
              aria-label="Next"
            >
              ›
            </button>

            {/* Dots */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {products.map((_, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    current === idx
                      ? "bg-yellow-400"
                      : "bg-zinc-600 hover:bg-zinc-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

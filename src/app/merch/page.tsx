// src/app/merch/page.tsx
import type { Metadata } from "next";
import MerchClient from "./MerchClient";

export const metadata: Metadata = {
  title: "Merch • H² Automotive",
  description: "Rep the shop — tees, caps, stickers and more.",
};

export default function MerchPage() {
  return <MerchClient />;
}

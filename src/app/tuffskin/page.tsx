"use client";

import React from "react";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import Image from "next/image";

const generalFAQ = [
  {
    question: "What is TuffSkin?",
    answer: "TuffSkin is a proprietary stone laminate made from high-tech polyester that is gas-permeable but liquid-impermeable. Our hard coat technology resists abrasions and provides a long product life. TuffSkin adhesive is explicitly designed to work with stone to be removable and replaceable. In doing so, stone restoration is a thing of the past."
  },
  {
    question: "Why TuffSkin?",
    answer: "Calcium-based Stones like Marble, Onyx, and Travertines etch and stain very easily, sometimes faster than they can be wiped away. No liquid sealer can prevent this issue. TuffSkin has been providing complete etch and stain protection since 2006."
  },
  {
    question: "Will TuffSkin protect my counters from direct heat?",
    answer: "Yes, it can take the heat and stay in the kitchen. In the bathroom, blow dryers and curling irons do not affect TS. It can withstand heat up to 204 degrees Celsius/400 degrees Fahrenheit."
  },
  {
    question: "How long will my TuffSkin last?",
    answer: "Historically, the decision to replace TuffSkin is an aesthetic determination based upon personal preference. Hotels are replaced every 8-10 years, busy restaurants and bars every 1-5 years, and residential customers every 4-8 years. Regardless of when the decision is made to replace TuffSkin, the product's performance will remain acid, alkaline, water, and oil-proof for as long as TuffSkin is protecting the surface."
  },
  {
    question: "What finishes are available for TuffSkin?",
    answer: "Satin or Gloss are the two finishes available. Satin is used for a honed finish where Gloss is used for a polished finish."
  },
  {
    question: "Does TuffSkin wrap around the edge of the stone?",
    answer: "No, TuffSkin protects the countertop's surface, slab backsplashes, and waterfall edges, which are the main areas where damage may occur."
  },
  {
    question: "Does TuffSkin peel?",
    answer: "TuffSkin never peels on its own, but humans can peel it back with some effort. We have seen this in Bars, especially gaming bars. These types of installations require staff to review them monthly. We see no issues in home or hotel room installations. TuffSkin is a better way to maintain these surfaces."
  },
  {
    question: "What will my countertops look like with TuffSkin installed?",
    answer: "Clients often report that their stone looks remarkable with TS’s color-enhancing effect. Satin enhances a honed finish, while gloss enhances a polished finish."
  },
  {
    question: "What other surfaces can TuffSkin protect?",
    answer: "Aside from natural stone surfaces, TuffSkin can protect any flat surface needing protection. From engineered stone like quartz, metal, glass, and other flat surfaces."
  },
  {
    question: "Care & 10-Year Warranty",
    answer: "https://www.tuffskin.com/care-and-warranty/"
  },
];

const tuffSkinFeatures = [
  {
    title: "Etch Proof",
    desc: "Impervious to all acids and alkalines, including lemon, coffee, toothpaste, and more.",
    img: "/images/tuffskin1.webp",
  },
  {
    title: "Stain Proof",
    desc: "Never cry over spilled wine or turmeric stains again!",
    img: "/images/tuffskin2.webp",
  },
  {
    title: "UV Inhibitor",
    desc: "Prevents ultraviolet rays from yellowing your countertops.",
    img: "/images/tuffskin3.webp",
  },
  {
    title: "Heat Resistant",
    desc: "TuffSkin can take the heat and stay in the kitchen. It withstands up to 204°C.",
    img: "/images/tuffskin4.webp",
  },
  {
    title: "Replaceable",
    desc: "Made to be removable and replaceable, available in gloss and satin finishes.",
    img: "/images/tuffskin5.webp",
  },
  {
    title: "10-Year Etch & Stain Warranty",
    desc: "Protects against wine, oil, and lemons, hassle-free.",
    img: "/images/tuffskin6.webp",
  },
];

const TuffSkinPage: React.FC = () => {
  return (
    <main style={{ padding: "100px", maxWidth: "1200px", margin: "0 auto", lineHeight: "1.8", marginTop: "50px" }}>
      <h1 style={{ color: "#27A7E0", marginBottom: "30px", textAlign: "center" }}>TuffSkin® Surface Protection Film</h1>

      {/* Responsive Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          margin: "50px 0",
        }}
      >
        {tuffSkinFeatures.map((item, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <Image
              src={item.img}
              alt={item.title}
              width={400}
              height={300}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <h3 style={{ marginTop: "15px", color: "#27A7E0" }}>{item.title}</h3>
            <p style={{ padding: "10px 0", fontWeight: 100, fontFamily: "Inter, sans-serif", lineHeight: "1.8"  }}>{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "40px", color: "#27A7E0" }}>All About TuffSkin® Marble Protection Calgary</h2>
      <p>
        TuffSkin is a proprietary stone laminate made from high-tech polyester that is gas-permeable but liquid-impermeable. Our hard coat technology resists abrasions and provides a long product life. TuffSkin adhesive is explicitly designed to work with stone to be removable and replaceable. In doing so, stone restoration is a thing of the past.
      </p>

      {/* FAQ Section */}
      <FrequentlyAskedQuestions 
        title="Frequently Asked Questions"
        subtitle="Have a Question?"
        faqItems={generalFAQ}
      />
    </main>
  );
};

export default TuffSkinPage;

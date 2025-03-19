// /app/booking/page.tsx
"use client";

import React from "react";
import CalendlyInlineWidget from "@/components/Calendly";

const BookingPage: React.FC = () => {

  return (
    <main style={{ padding: "50px", textAlign: "center" }}>
      <CalendlyInlineWidget />

    </main>
  );
};

export default BookingPage;

"use client";

import React, { Suspense } from "react";
import CalendlyInlineWidget from "@/components/Calendly";

const BookingPage: React.FC = () => {
  return (
    <main style={{ padding: "50px", textAlign: "center" }}>
      <Suspense fallback={<div>Loading Booking Widget...</div>}>
        <CalendlyInlineWidget />
      </Suspense>
    </main>
  );
};

export default BookingPage;

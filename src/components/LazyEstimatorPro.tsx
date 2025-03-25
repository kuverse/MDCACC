"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const EstimatorPro = dynamic(() => import("./EstimatorPro"), {
  ssr: false,
  loading: () => <div style={{ height: "840px" }}></div>, // reserve space
});

const LazyEstimatorPro = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px 200px 0px", // trigger slightly before in-view
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [visible]);

  return <div ref={ref}>{visible && <EstimatorPro />}</div>;
};

export default LazyEstimatorPro;

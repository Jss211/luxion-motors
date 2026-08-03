"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "motion/react";

/* ── Scoped CSS ── */
// Modificado para tener fondo transparente para que combine con el Hero de Luxion Motors
const STYLE = `
.wf{
  --wf-bg: transparent;
  --wf-line: rgba(184, 134, 11, 0.4); /* Dorado sutil para Luxion */
}
`.replace(/\n/g, "");

/* ── Radial shine gradient — follows cursor ── */
function makeShine(x, y) {
  return `radial-gradient(ellipse 100% 100% at ${x.toFixed(1)}% ${y.toFixed(1)}%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 24%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.1) 100%)`;
}

/* ── Vertical mask — dims bottom for the half-cut, independent of shine ── */
const VMASK =
  "linear-gradient(to bottom, black 0%, black 38%, rgba(0,0,0,.55) 76%, rgba(0,0,0,.30) 100%)";

/* ── Main component ── */
export function WordmarkFooter({ brandName = "Luxion Motors" }) {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  /* ── Cursor-tracking state — refs only, zero re-renders ── */
  const hovering = useRef(false);
  const curX = useRef(50);
  const curY = useRef(30);
  const tgtX = useRef(50);
  const tgtY = useRef(30);
  const raf = useRef(0);

  /* ── Per-frame lerp loop — direct DOM writes ── */
  const paint = useCallback(() => {
    curX.current += (tgtX.current - curX.current) * 0.1;
    curY.current += (tgtY.current - curY.current) * 0.1;

    const grad = makeShine(curX.current, curY.current);

    if (textRef.current) {
      textRef.current.style.backgroundImage = grad;
    }

    const dx = Math.abs(tgtX.current - curX.current);
    const dy = Math.abs(tgtY.current - curY.current);

    if (hovering.current || dx > 0.05 || dy > 0.05) {
      raf.current = requestAnimationFrame(paint);
    }
  }, []);

  const onMove = useCallback(
    (e) => {
      const r = sectionRef.current?.getBoundingClientRect();
      if (!r) return;
      tgtX.current = ((e.clientX - r.left) / r.width) * 100;
      tgtY.current = ((e.clientY - r.top) / r.height) * 100;

      if (!hovering.current) {
        hovering.current = true;
        raf.current = requestAnimationFrame(paint);
      }
    },
    [paint]
  );

  const onLeave = useCallback(() => {
    hovering.current = false;
    tgtX.current = 50;
    tgtY.current = 30;
    raf.current = requestAnimationFrame(paint);
  }, [paint]);

  /* ── Cleanup ── */
  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  /* ── IntersectionObserver ── */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="wf"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "var(--wf-bg)",
        height: "clamp(40px, 5vw, 70px)", // Made height even smaller
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        cursor: "pointer",
        marginTop: "-1rem" // pulls it closer to the badge
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: STYLE }} />

      {/* ── Wordmark — absolute, centered, pointer-events off ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start", // Changed from center to flex-start for left alignment
          gap: "clamp(10px, 2vw, 24px)",
          padding: "0", // Removed padding so it aligns perfectly left in the container
          pointerEvents: "none",
        }}
      >
        <div style={{ position: "relative", display: "inline-block" }}>
          {/* Brand text */}
          <span
            ref={textRef}
            style={{
              display: "block",
              fontSize: "clamp(24px, 4.5vw, 56px)", // Decreased font size even more
              fontWeight: 900, // Extrabold
              letterSpacing: "-0.02em",
              textTransform: "uppercase", // Force uppercase like the original h1
              lineHeight: 1,
              backgroundImage: makeShine(50, 30),
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              maskImage: VMASK,
              WebkitMaskImage: VMASK,
              userSelect: "none",
              whiteSpace: "nowrap",
              paddingBottom: "8px", // Space for the line
            }}
          >
            {brandName}
          </span>
          {/* ── Hairline — Matches text width ── */}
          <div
            style={{
              position: "absolute",
              left: 0,
              width: "100%", // Match width of the text wrapper
              bottom: "4px",
              height: 1,
              background: "var(--wf-line)",
              pointerEvents: "none",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

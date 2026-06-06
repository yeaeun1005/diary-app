"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ── Animated Bubble ── */
function Bubble({
  size,
  left,
  delay,
  duration,
}: {
  size: number;
  left: string;
  delay: number;
  duration: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left,
        bottom: "5%",
        background:
          "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.6), rgba(255,255,255,0.1))",
        border: "1px solid rgba(255,255,255,0.3)",
      }}
      animate={{
        y: [0, -600],
        x: [0, Math.random() > 0.5 ? 15 : -15, 0],
        opacity: [0, 0.7, 0.5, 0],
        scale: [0.6, 1, 1.1, 0.8],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

/* ── Shimmer Light Ray ── */
function LightRay({ left, delay }: { left: string; delay: number }) {
  return (
    <motion.div
      className="absolute top-0 h-full"
      style={{
        left,
        width: "60px",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
        filter: "blur(8px)",
        transformOrigin: "top center",
      }}
      animate={{
        opacity: [0.1, 0.3, 0.1],
        scaleX: [1, 1.3, 1],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

/* ── Sparkle / Star ── */
function Sparkle({ top, left, delay }: { top: string; left: string; delay: number }) {
  return (
    <motion.div
      className="absolute"
      style={{ top, left }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0.5, 1.2, 0.5],
        rotate: [0, 180],
      }}
      transition={{
        duration: 2.5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z"
          fill="rgba(255,255,200,0.8)"
        />
      </svg>
    </motion.div>
  );
}

/* ── Floating Fish Overlay ── */
function FloatingFish({ delay }: { delay: number }) {
  return (
    <motion.div
      className="absolute"
      style={{ top: "35%", left: "-5%" }}
      animate={{
        x: ["-5%", "110%"],
        y: [0, -20, 10, -15, 0],
      }}
      transition={{
        duration: 18,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg width="30" height="20" viewBox="0 0 30 20" fill="none">
        <ellipse cx="18" cy="10" rx="12" ry="7" fill="rgba(255,180,80,0.4)" />
        <polygon points="2,3 0,0 0,20 2,17" fill="rgba(255,160,60,0.4)" />
      </svg>
    </motion.div>
  );
}

/* ── Animated Ocean Scene (main component) ── */
function AnimatedOceanScene() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl bg-[#0a192f]">
      {/* Base Image */}
      <Image
        src="/banner.png"
        alt="마음바다탐험대 - 감정 바다에 오신 것을 환영합니다"
        fill
        className="object-cover object-center"
        priority
        draggable={false}
      />

      {/* Floating bubbles */}
      <Bubble size={12} left="15%" delay={0} duration={6} />
      <Bubble size={8} left="28%" delay={1.5} duration={7} />
      <Bubble size={15} left="42%" delay={0.5} duration={8} />
      <Bubble size={6} left="55%" delay={3} duration={5.5} />
      <Bubble size={10} left="68%" delay={2} duration={7.5} />
      <Bubble size={7} left="78%" delay={1} duration={6.5} />
      <Bubble size={9} left="88%" delay={4} duration={8} />
      <Bubble size={5} left="35%" delay={2.5} duration={5} />
      <Bubble size={11} left="92%" delay={3.5} duration={7} />
    </div>
  );
}

/* ── Hero Section ── */
export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <div className="mt-24 md:mt-32 mb-12 font-jua">
              <h1 className="text-5xl md:text-[5.5rem] font-normal leading-none text-sky-400 drop-shadow-lg">
                마음바다탐험대
              </h1>
              <p className="text-2xl md:text-3xl mt-4 font-normal text-zinc-600 dark:text-zinc-400">
                감정일기로 나의 마음을 탐험해볼까요?
              </p>
            </div>
          </>
        }
        footerComponent={
          <div className="font-jua text-zinc-500 flex flex-col items-center gap-2">
            <Link href="/privacy" className="text-sm hover:text-zinc-800 dark:hover:text-zinc-300 underline underline-offset-4">
              개인정보처리방침
            </Link>
            <p className="text-sm">© 2026 마음 바다 탐험대</p>
          </div>
        }
      >
        <AnimatedOceanScene />
      </ContainerScroll>
    </div>
  );
}

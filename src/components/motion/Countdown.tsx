"use client";

import { useEffect, useState } from "react";

export function timeUntil(startAt: string, now: number): number[] | null {
  const target = Date.parse(startAt);
  if (!Number.isFinite(target)) return null;
  const remaining = Math.max(0, target - now);
  return [
    Math.floor(remaining / 86400000),
    Math.floor((remaining / 3600000) % 24),
    Math.floor((remaining / 60000) % 60),
    Math.floor((remaining / 1000) % 60),
  ];
}

export function Countdown({ startAt }: { startAt: string }) {
  const [remaining, setRemaining] = useState<number[] | null>(null);

  useEffect(() => {
    const update = () => setRemaining(timeUntil(startAt, Date.now()));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, [startAt]);

  return (
    <div className="hero-countdown" aria-label="Time until Flat Hack 604 begins">
      <span className="hero-countdown-label">THE HACKATHON BEGINS IN</span>
      {remaining ? (
        <div className="hero-countdown-numbers" role="timer" aria-live="off">
          {remaining.map((value, index) => (
            <span key={index}>
              <strong>{String(value).padStart(2, "0")}</strong>
              <small>{["days", "hours", "mins", "secs"][index]}</small>
            </span>
          ))}
        </div>
      ) : (
        <span className="hero-countdown-pending">Date to be announced</span>
      )}
    </div>
  );
}

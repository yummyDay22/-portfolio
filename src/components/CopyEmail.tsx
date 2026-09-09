"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "./Icons";

export default function CopyEmail({ email }: { email: string }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setDone(true);
      setTimeout(() => setDone(false), 1600);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  };
  return (
    <button type="button" className="circle-btn" onClick={copy} aria-label={done ? "Copied" : "Copy email"} title="Copy email">
      {done ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
}

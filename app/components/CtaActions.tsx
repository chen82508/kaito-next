"use client";

import { useEffect, useRef, useState } from "react";

const TOAST_MS = 2600;

const BTN =
  "inline-flex cursor-pointer items-center gap-2.5 rounded-full border px-[30px] py-[15px] text-[.96rem] font-semibold tracking-[.01em] no-underline transition-[translate,box-shadow,border-color,color] duration-250 ease-out-expo hover:-translate-y-0.5";

export default function CtaActions() {
  const [toastVisible, setToastVisible] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  // 「查看作品」尚未有作品集，顯示 toast 提示
  function showToast() {
    setToastVisible(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToastVisible(false), TOAST_MS);
  }

  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          className={`${BTN} border-transparent bg-linear-100/srgb from-accent to-accent-soft text-[#241a10] shadow-[0_14px_30px_-14px_rgb(223_160_110/0.55)] hover:shadow-[0_18px_36px_-14px_rgb(223_160_110/0.7)] active:translate-y-0`}
          href="mailto:chen82508@gmail.com"
        >
          聯絡我
        </a>
        <button
          type="button"
          className={`${BTN} border-line bg-transparent text-warm-grey hover:border-accent-dim hover:text-cream`}
          onClick={showToast}
        >
          查看作品
        </button>
      </div>

      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed bottom-[34px] left-1/2 z-50 -translate-x-1/2 rounded-full border border-line bg-surface-solid px-[22px] py-[13px] text-[.88rem] whitespace-nowrap text-cream shadow-[0_18px_40px_-16px_rgb(0_0_0/0.6)] transition-[opacity,translate] duration-350 ease-out-expo ${
          toastVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        作品集正在準備中，敬請期待。
      </div>
    </>
  );
}

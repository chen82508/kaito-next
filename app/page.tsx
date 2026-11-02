import CtaActions from "./components/CtaActions";
import Eyebrow from "./components/Eyebrow";
import HighlightIcon, { type IconName } from "./components/HighlightIcon";
import RevealObserver from "./components/RevealObserver";

// 三種狀態視覺語彙：進行中（脈動）／已完成（實心）／探索中（虛線外框）
const STATUS = {
  active: {
    tag: "border-accent-dim text-accent-soft",
    dot: "bg-accent animate-pill-pulse",
  },
  done: {
    tag: "border-line text-faint",
    dot: "bg-warm-grey",
  },
  explore: {
    tag: "border-line text-faint",
    dot: "border-[1.5px] border-dashed border-faint",
  },
} as const;

type Highlight = {
  index: string;
  status: keyof typeof STATUS;
  label: string;
  icon: IconName;
  title: string;
  body: string;
  delay: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    index: "01",
    status: "active",
    label: "OPEN TO WORK",
    icon: "code",
    title: "FDE × 自主接案",
    body: "開放 Forward Deployed Engineer（FDE）職缺與接案合作：從需求訪談、問題釐清，到資料管線、後端服務的實作與上線，都能一路接手。",
    delay: "",
  },
  {
    index: "02",
    status: "done",
    label: "SHIPPED",
    icon: "project",
    title: "預測市場資料平台",
    body: "參與一個彙整多家交易所報價的資料平台，負責資料擷取流程、資料庫容量與備份規劃，以及 API 逾時等效能問題的調查與修正。產品計劃已告一段落。",
    delay: "delay-100",
  },
  {
    index: "03",
    status: "done",
    label: "DEPLOYED",
    icon: "stack",
    title: "ASML Experience",
    body: "曾受公司外派至 ASML，參與軟體開發與 Software Quality Assurance（SQA），累積企業級環境下的開發、品質驗證與跨團隊協作經驗。",
    delay: "delay-200",
  },
];

const WRAP = "relative z-1 mx-auto px-6";
const SECTION = "relative py-[100px] max-sm:py-[72px]";
const SECTION_ALT = "border-y border-line-soft bg-ink-alt";
const H2 = "text-[clamp(1.4rem,2.4vw,1.9rem)]";

export default function Home() {
  return (
    <>
      {/* 背景裝飾層：不影響閱讀，皆為 aria-hidden */}
      <div className="bg-dots pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <div className="bg-grain pointer-events-none fixed inset-0 z-0" aria-hidden="true" />

      {/* 落款：不做成 nav bar */}
      <div
        className="absolute top-7 left-7 z-5 font-mono text-[.8rem] tracking-[.06em] text-faint max-sm:top-5 max-sm:left-5"
        aria-hidden="true"
      >
        <b className="font-semibold text-accent-soft">K</b>aito
      </div>

      <main>
        {/* ============ Hero ============ */}
        <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-[140px] pb-[100px] max-sm:min-h-0 max-sm:pt-[120px] max-sm:pb-20">
          <div
            className="pointer-events-none absolute top-[8%] left-1/2 z-0 size-[640px] animate-glow-drift bg-radial/srgb from-accent/16 to-accent/0 to-68% blur-[10px] [transform:translateX(-50%)]"
            aria-hidden="true"
          />
          <div className={`${WRAP} max-w-[760px] text-center`}>
            <span className="mb-9 inline-flex animate-fade-in items-center gap-2.5 rounded-full border border-line bg-surface-solid/50 px-[18px] py-2 font-mono text-[.76rem] tracking-[.06em] text-warm-grey [animation-delay:100ms]">
              <span className="size-[7px] animate-pill-pulse rounded-full bg-accent" aria-hidden="true" />
              目前狀態：開放 FDE 職缺與接案合作
            </span>

            <h1 className="mx-auto max-w-[13em] animate-fade-up text-[clamp(2rem,5vw,3.4rem)] leading-[1.35] tracking-[-.01em] [animation-delay:250ms]">
              走進問題現場，
              <br />
              <span className="inline-block">把需求</span>
              <span className="inline-block">做成能上線的軟體。</span>
            </h1>

            <p className="mx-auto mt-[26px] max-w-[46ch] animate-fade-up font-serif text-[clamp(1rem,1.8vw,1.2rem)] text-accent-soft italic [animation-delay:450ms]">
              From the problem on the ground to software in production.
            </p>

            <p className="mx-auto mt-[30px] animate-fade-up font-mono text-[.82rem] text-faint [animation-delay:600ms]">
              {"// open to FDE roles & freelance projects"}
              <span
                className="ml-0.5 inline-block h-[1em] w-[7px] animate-blink bg-accent-dim align-[-2px]"
                aria-hidden="true"
              />
            </p>
          </div>

          <div className="absolute bottom-10 left-1/2 z-1 -translate-x-1/2" aria-hidden="true">
            <span className="block h-[42px] w-px animate-cue-fall bg-linear-to-b from-accent-dim to-transparent" />
          </div>
        </section>

        {/* ============ About ============ */}
        <section className={`${SECTION} ${SECTION_ALT}`}>
          <div className={`${WRAP} max-w-[760px]`}>
            <div className="reveal text-center">
              <Eyebrow>About</Eyebrow>
              <h2 className={`${H2} mb-7`}>關於我</h2>
            </div>
            <p className="reveal mx-auto mt-[26px] max-w-[62ch] text-[1.02rem] delay-100 [&_strong]:font-semibold [&_strong]:text-cream">
              我是 <strong>Kaito</strong>，一名軟體工程師，喜歡把一個想法一路做到能真正上線運作的產品。這幾年我在企業級軟體開發與{" "}
              <strong>Software Quality Assurance（SQA）</strong> 的環境中打滾，也曾因公司外派前往 <strong>ASML</strong>
              ，在實際的跨團隊協作裡累積了不少經驗。最近一段時間，我參與一個<strong>預測市場資料平台</strong>
              的開發，從資料擷取、資料庫維運到效能問題排查都親手處理過。隨著該產品計劃告一段落，我把重心放在{" "}
              <strong>Forward Deployed Engineer（FDE）</strong>與<strong>自主接案</strong>
              ：直接面對客戶的真實問題，把需求釐清、做出能用的系統，並陪它在現場穩定運作。對我來說，軟體不只是「能動」就好，而是要真的解決某個人的問題。
            </p>
          </div>
        </section>

        {/* ============ Highlights ============ */}
        <section className={SECTION}>
          <div className={`${WRAP} max-w-[1040px]`}>
            <div className="reveal mx-auto mb-14 max-w-[560px] text-center">
              <Eyebrow>Highlights</Eyebrow>
              <h2 className={H2}>接下來想做的，與做過的事</h2>
            </div>

            <div className="grid grid-cols-1 gap-[22px] min-[901px]:grid-cols-3">
              {HIGHLIGHTS.map((h) => (
                <div key={h.index} className={`reveal ${h.delay}`}>
                  <div className="h-full rounded-2xl border border-line bg-surface px-[26px] py-[30px] backdrop-blur-[6px] transition-[translate,border-color,box-shadow] duration-350 ease-out-expo hover:-translate-y-[5px] hover:border-accent-dim hover:shadow-[0_20px_44px_-24px_rgb(223_160_110/0.35)]">
                    <div className="mb-[22px] flex items-center justify-between">
                      <span className="font-mono text-[.74rem] tracking-[.08em] text-faint">{h.index}</span>
                      <span
                        className={`inline-flex items-center gap-[7px] rounded-full border px-2.5 py-1 font-mono text-[.68rem] tracking-[.08em] ${STATUS[h.status].tag}`}
                      >
                        <span className={`size-1.5 flex-none rounded-full ${STATUS[h.status].dot}`} />
                        {h.label}
                      </span>
                    </div>
                    <div className="mb-5 flex size-11 items-center justify-center text-accent-soft" aria-hidden="true">
                      <HighlightIcon name={h.icon} />
                    </div>
                    <h3 className="mb-2.5 text-[1.06rem]">{h.title}</h3>
                    <p className="text-[.93rem]">{h.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className={`${SECTION} ${SECTION_ALT}`}>
          <div className={`${WRAP} reveal max-w-[760px] text-center`}>
            <Eyebrow>Work With Me</Eyebrow>
            <h2 className="text-[clamp(1.5rem,2.6vw,2.1rem)]">有需要落地的專案或職缺？歡迎聊聊</h2>
            <p className="mx-auto mt-[18px] max-w-[44ch]">
              FDE 職缺、接案合作，或只是想交流技術，都歡迎與我聯絡。
            </p>
            <CtaActions />
          </div>
        </section>
      </main>

      <footer className="pt-10 pb-12">
        <div className={`${WRAP} flex max-w-[760px] items-center justify-center gap-3.5 text-center font-mono text-[.78rem] text-faint`}>
          <span className="h-px w-[30px] bg-linear-to-r from-transparent via-line to-transparent" aria-hidden="true" />
          <span>© 2026 Kaito. Open to what&apos;s next.</span>
          <span className="h-px w-[30px] bg-linear-to-r from-transparent via-line to-transparent" aria-hidden="true" />
        </div>
      </footer>

      <RevealObserver />
    </>
  );
}

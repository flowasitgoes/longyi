import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import SiteHeader from "@/components/SiteHeader";

const services = [
  {
    code: "UT",
    zh: "超音波檢測",
    en: "Ultrasonic Testing",
    short: "超音波",
    summary:
      "把高頻聲波送進材料，靠回波看內部有沒有不連續，也常用來量厚度。表面粗糙、材質衰減和幾何形狀都會影響判讀。",
  },
  {
    code: "PAUT",
    zh: "相控陣超音波檢測",
    en: "Phased Array Ultrasonic Testing",
    short: "相控陣",
    summary:
      "探頭裡有多個晶片，可以調整聲束角度和聚焦位置，用來覆蓋形狀比較複雜的焊道。設定與校準要在委託前另議。",
  },
  {
    code: "RT",
    zh: "射線檢測",
    en: "Radiographic Testing",
    short: "射線",
    summary:
      "以射線穿透工件，在影像上記錄內部差異。這會牽涉輻射管制與現場隔離，是否採用要看厚度、材質和場地。",
  },
  {
    code: "MT",
    zh: "磁粒檢測",
    en: "Magnetic Particle Testing",
    short: "磁粒",
    summary:
      "只用於鐵磁性材料。磁化之後，磁粒會在表面和近表面的不連續處聚集。非鐵磁性材料不適用。",
  },
  {
    code: "PT",
    zh: "滲透檢測",
    en: "Penetrant Testing",
    short: "滲透",
    summary:
      "把滲透液留在表面，再用顯像劑把開口於表面的不連續顯示出來。表面要先清潔，塗層和粗糙度會干擾結果。",
  },
  {
    code: "VT",
    zh: "目視檢測",
    en: "Visual Testing",
    short: "目視",
    summary:
      "用眼睛，或藉助燈、鏡、量具查看表面、尺寸和組裝。常常是其他方法之前的第一步，能看到的範圍限於表面。",
  },
  {
    code: "LT",
    zh: "洩漏檢測",
    en: "Leak Testing",
    short: "洩漏",
    summary:
      "檢查容器、管線或系統有沒有洩漏。允許的洩漏量、介質和系統邊界不同，作法就不同，沒有一種通用步驟。",
  },
  {
    code: "IRT",
    zh: "紅外線熱影像",
    en: "Infrared Thermography",
    short: "熱影像",
    summary:
      "用紅外線攝影機看表面溫度分布，幫忙注意到異常發熱。它看到的是溫度，不是直接看到內部缺陷，解讀時要對照現場條件。",
  },
] as const;

const desks = [
  {
    name: "總公司",
    en: "HEAD OFFICE",
    address: "高雄市三民區文藻路22號8樓",
    phone: "",
    fax: "",
  },
  {
    name: "高雄分處公務所",
    en: "KAOHSIUNG",
    address: "高雄市小港區山邊路2號",
    phone: "(07) 871-6888",
    fax: "(07) 871-7777",
  },
  {
    name: "雲林工務所",
    en: "YUNLIN",
    address: "雲林縣崙背鄉大有232-9號",
    phone: "(05) 693-9979",
    fax: "(05) 693-3850",
  },
  {
    name: "宜蘭工務所",
    en: "YILAN",
    address: "宜蘭縣蘇澳鎮蘇北里冷泉路15之1號-1F",
    phone: "",
    fax: "",
  },
] as const;

const inquiryPoints = [
  "工件類型、材料與大約尺寸",
  "想確認的問題",
  "現場是否可以靠近",
  "希望進行的時間範圍",
];

const display =
  "mt-5 text-[clamp(2.15rem,4.3vw,3.7rem)] font-medium leading-[1.12] tracking-[-0.03em]";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="content">
        <Hero />
        <About />
        <Services />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-navy text-white">
      <Image
        src="/images/piping.jpg"
        alt="不鏽鋼製程管線與槽體，作為工業現場的參考影像，並非本公司廠區"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_center]"
      />
      <div className="absolute inset-0 bg-navy/72 lg:hidden" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-navy from-8% via-navy/80 via-46% to-navy/20 lg:block" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/55" />

      <p className="pointer-events-none absolute top-1/2 right-8 z-10 hidden -translate-y-1/2 font-condensed text-[11px] tracking-[0.42em] text-white/45 [writing-mode:vertical-rl] xl:block">
        LONG YI INSPECTION
      </p>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col justify-end px-5 pt-28 pb-6 md:px-10 lg:px-14">
        <p className="flex items-center gap-3 font-condensed text-[11px] tracking-[0.22em] text-white/70">
          <span className="h-px w-8 bg-orange" aria-hidden />
          NON-DESTRUCTIVE TESTING
        </p>
        <h1 className="mt-4 text-[clamp(1.85rem,4.6vw,4.15rem)] leading-none font-medium tracking-[-0.04em] whitespace-nowrap">
          工業非破壞檢測
        </h1>
        <p className="mt-5 text-lg sm:mt-7">龍億檢驗科技有限公司</p>
        <p className="mt-1 max-w-full font-condensed text-[12px] leading-5 tracking-[0.08em] text-white/65 sm:text-sm sm:tracking-[0.14em]">
          LONG YI INSPECTION TECHNOLOGY CO., LTD.
        </p>
        <p className="mt-4 max-w-xl text-pretty text-[15px] leading-7 text-white/78 sm:mt-6 sm:text-[17px] sm:leading-8">
          針對焊道、管線、壓力容器與鋼結構，整理可討論的檢測方法。本頁說明範圍，不代替正式報價。
        </p>
        <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
          <a
            href="#services"
            className="inline-flex w-fit items-center gap-3 bg-orange px-5 py-3.5 text-base font-medium text-navy transition-colors hover:bg-[#f06a38]"
          >
            了解服務項目
            <Arrow />
          </a>
          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-3 border border-white/40 px-5 py-3.5 text-base text-white transition-colors hover:bg-white hover:text-navy"
          >
            聯絡詢價
          </a>
        </div>

        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/15 pt-4 sm:mt-12 sm:gap-x-7 sm:gap-y-3 sm:pt-5">
          {services.map((service) => (
            <li key={service.code}>
              <a href={`#${service.code.toLowerCase()}`} className="group inline-flex items-baseline gap-2">
                <span className="font-condensed text-sm tracking-[0.14em] text-signal">
                  {service.code}
                </span>
                <span className="text-sm text-white/75 group-hover:text-white">{service.short}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-col gap-1 border-t border-white/10 py-3 text-xs tracking-wide text-white/60 sm:mt-5 sm:flex-row sm:items-center sm:justify-between sm:py-4">
          <p>展示用網站 Demo</p>
          <p>首屏影像為製程管線，非本公司廠區</p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-[4.75rem] bg-paper">
      <div className="grid lg:grid-cols-2">
        <figure className="relative h-[72vw] min-h-[300px] lg:h-auto lg:min-h-[760px]">
          <Image
            src="/images/turbine.jpg"
            alt="人員站在大型金屬轉子前查看，作為檢測情境的參考影像，並非本公司人員"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[center_40%]"
          />
          <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-navy/92 px-4 py-3 text-[11px] tracking-wide text-white/75">
            <span>情境影像</span>
            <span>非本公司人員</span>
          </figcaption>
        </figure>

        <div className="flex items-center px-5 py-16 md:px-12 lg:px-16 lg:py-24">
          <div className="max-w-xl">
            <Eyebrow index="01" label="公司介紹" en="THE COMPANY" />
            <h2 className={display}>介紹貴司所提供的服務</h2>
            <div className="mt-8 space-y-5 text-[17px] leading-8 text-ink/78">
              <p>
                龍億檢驗科技有限公司（Long Yi Inspection Technology Co.,
                Ltd.）的業務是工業非破壞檢測。委託方多半帶著一件具體的工件而來：一條焊道、一段管線、一座壓力容器，或一組鋼結構。
              </p>
              <p>
                非破壞檢測是在不把工件拆開的前提下，觀察表面或內部。超音波、射線、磁粒、滲透、目視、洩漏與紅外線熱影像，看的東西不一樣，限制也不一樣。方法要跟著材料、厚度、表面狀況，以及人能不能靠近工件一起決定。
              </p>
              <p>
                本頁是展示用首頁，用來說明服務範圍、據點版位和詢價方式。認證、客戶與工程實績都尚未列載。檢測條件、適用標準與報告內容，需於正式委託時另行確認，不以本頁文字為準。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-[4.75rem] bg-navy text-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="max-w-xl">
            <Eyebrow index="02" label="服務項目" en="METHODS" tone="light" />
            <h2 className={display}>介紹不同檢測方法</h2>
            <p className="mt-6 text-pretty text-[17px] leading-8 text-white/72">
              下面只解釋這些方法在工業上通常怎麼被理解。不代表本公司已承作對應案件，也沒有列出人員資格。
            </p>
          </div>
          <figure className="relative aspect-[3/2] min-h-[220px]">
            <Image
              src="/images/weld.jpg"
              alt="人員在金屬管件上施焊，作為焊道情境的參考影像，並非本公司作業"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover object-center"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-navy/92 px-4 py-3 text-[11px] tracking-wide text-white/75">
              <span>情境影像 · 焊道</span>
              <span>非本公司作業</span>
            </figcaption>
          </figure>
        </div>

        <div className="mt-16 md:mt-20">
          {services.map((service, index) => (
            <article
              key={service.code}
              id={service.code.toLowerCase()}
              className="group scroll-mt-28 grid grid-cols-[3.25rem_minmax(0,1fr)] gap-x-3 gap-y-2 border-t border-white/15 py-7 last:border-b md:grid-cols-[4.5rem_7.5rem_minmax(0,1fr)] md:gap-8 md:py-9"
            >
              <p className="font-condensed text-sm tracking-[0.16em] text-signal">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="contents">
              <p className="font-condensed text-[2rem] leading-none tracking-wide text-white transition-colors group-hover:text-signal">
                {service.code}
              </p>
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-[1.45rem] leading-snug font-medium md:text-[1.65rem]">{service.zh}</h3>
                <p className="mt-1 font-condensed text-xs tracking-[0.16em] text-white/60">
                  {service.en}
                </p>
                <p className="mt-3 max-w-3xl text-[15px] leading-7 text-white/72">{service.summary}</p>
              </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-7 text-white/55">
          IRT 是本頁用來標示紅外線熱影像的縮寫。人員資格、適用標準與報告格式都沒有列在這裡，正式委託前需要另案確認。
        </p>
      </div>
    </section>
  );
}

function Locations() {
  return (
    <section id="locations" className="scroll-mt-[4.75rem] bg-paper">
      <div className="relative h-[48vh] min-h-[320px] max-h-[560px]">
        <Image
          src="/images/plant.jpg"
          alt="陰天中的製程廠區與管線塔槽，作為工業廠區的參考影像，並非本公司據點"
          fill
          sizes="100vw"
          className="object-cover object-[center_24%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/25" />
        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-[1440px] px-5 pb-10 text-white md:px-10 lg:px-14">
          <Eyebrow index="03" label="服務據點" en="DESKS" tone="light" />
          <h2 className={display}>高雄、雲林、宜蘭。</h2>
        </div>
        <p className="absolute top-5 right-5 bg-navy/80 px-3 py-2 text-[11px] tracking-wide text-white/75 md:right-10">
          情境影像 · 非本公司廠區
        </p>
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 md:px-10 lg:px-14 lg:py-20">
        <p className="max-w-2xl text-[17px] leading-8 text-ink/75">
          總公司在高雄三民。高雄另有分處公務所，雲林與宜蘭各有工務所。電話與傳真以名片所載為準。
        </p>
        <ul className="mt-10 grid gap-x-12 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {desks.map((desk) => (
            <li key={desk.name} className="border-t border-ink/15 pt-6">
              <p className="font-condensed text-xs tracking-[0.22em] text-ink/45">{desk.en}</p>
              <h3 className="mt-3 text-3xl font-medium tracking-tight">{desk.name}</h3>
              <dl className="mt-6 space-y-4 text-sm leading-6">
                <div className="border-t border-ink/10 pt-3">
                  <dt className="text-ink/50">地址</dt>
                  <dd className="mt-1">{desk.address}</dd>
                </div>
                {desk.phone ? (
                  <div className="border-t border-ink/10 pt-3">
                    <dt className="text-ink/50">電話</dt>
                    <dd className="mt-1">
                      <a href={`tel:${desk.phone.replace(/[^\d]/g, "")}`}>{desk.phone}</a>
                    </dd>
                  </div>
                ) : null}
                {desk.fax ? (
                  <div className="border-t border-ink/10 pt-3">
                    <dt className="text-ink/50">傳真</dt>
                    <dd className="mt-1">{desk.fax}</dd>
                  </div>
                ) : null}
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-[4.75rem]">
      <div className="grid lg:grid-cols-2">
        <div className="bg-navy px-5 py-16 text-white md:px-10 lg:px-14 lg:py-24">
          <div className="max-w-xl">
            <Eyebrow index="04" label="聯絡詢價" en="INQUIRY" tone="light" />
            <h2 className={display}>客戶問題詢問與洽談</h2>
            <p className="mt-6 text-[17px] leading-8 text-white/72">
              正式上線後，這裡用來留下公司、聯絡方式，以及想了解的檢測方法。現在這張表單只示範填寫，送出後不會儲存，也不會寄信。
            </p>
            <ol className="mt-10">
              {inquiryPoints.map((point, index) => (
                <li
                  key={point}
                  className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-3 border-t border-white/15 py-4 text-[15px] last:border-b"
                >
                  <span className="font-condensed tracking-[0.14em] text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ol>
            <dl className="mt-10 max-w-md text-sm">
              <div className="flex items-baseline justify-between gap-4 border-t border-white/15 py-3">
                <dt className="text-white/50">高雄</dt>
                <dd>
                  <a href="tel:078716888">(07) 871-6888</a>
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-t border-white/15 py-3">
                <dt className="text-white/50">雲林</dt>
                <dd>
                  <a href="tel:056939979">(05) 693-9979</a>
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-t border-b border-white/15 py-3">
                <dt className="text-white/50">電子信箱</dt>
                <dd>尚未公告</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-paper px-5 py-16 md:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <p className="font-condensed text-[11px] tracking-[0.2em] text-ink/50">INQUIRY FORM</p>
            <h3 className="mt-3 text-3xl font-medium tracking-tight">展示用詢價表單</h3>
            <p className="mt-3 mb-8 text-sm leading-6 text-ink/60">
              標示必填的欄位若空白，瀏覽器會先提示。內容不會離開這台裝置。
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 py-14 md:px-10 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:px-14">
        <div>
          <p className="text-lg font-medium">龍億檢驗科技有限公司</p>
          <p className="mt-2 max-w-full font-condensed text-[13px] leading-5 tracking-[0.06em] text-white/55 sm:text-sm sm:tracking-[0.12em]">
            LONG YI INSPECTION TECHNOLOGY CO., LTD.
          </p>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
            展示用網站 Demo。頁面用來呈現服務範圍、據點版位與詢價表單。未經另行確認的認證、客戶、工程實績與技術能力，都不在本頁宣稱範圍內。
          </p>
        </div>
        <div>
          <p className="font-condensed text-[11px] tracking-[0.2em] text-white/45">導覽</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#about" className="text-white/75 hover:text-white">
                公司介紹
              </a>
            </li>
            <li>
              <a href="#services" className="text-white/75 hover:text-white">
                服務項目
              </a>
            </li>
            <li>
              <a href="#locations" className="text-white/75 hover:text-white">
                服務據點
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white/75 hover:text-white">
                聯絡詢價
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-condensed text-[11px] tracking-[0.2em] text-white/45">影像</p>
          <p className="mt-4 text-sm leading-7 text-white/60">
            照片來自 Unsplash 與 Pexels，依平台授權使用，只作工業情境參考。畫面中的人員、焊道、機件與廠區都不是本公司紀錄。
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-3 px-5 py-4 text-xs tracking-wide sm:flex-row sm:items-center sm:justify-between md:px-10 lg:px-14">
          <p className="text-white/40">龍億檢驗科技有限公司 · 展示稿 · 搜尋引擎預設不索引</p>
          <a
            href="https://ndc.ifunlove.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="self-end text-white/75 transition-colors hover:text-white sm:self-auto"
          >
            客戶Demo網站 by NDC studio
            <span className="sr-only">（另開新視窗）</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function Eyebrow({
  index,
  label,
  en,
  tone = "dark",
}: {
  index: string;
  label: string;
  en: string;
  tone?: "dark" | "light";
}) {
  const muted = tone === "light" ? "text-white/65" : "text-ink/55";
  return (
    <p className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] ${muted}`}>
      <span className="h-px w-8 bg-orange" aria-hidden />
      <span className={`font-condensed tracking-[0.16em] ${tone === "light" ? "text-signal" : ""}`}>
        {index}
      </span>
      <span>{label}</span>
      <span className="font-condensed text-[11px] tracking-[0.18em]">{en}</span>
    </p>
  );
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden className="shrink-0">
      <path d="M3 9h12M11 5l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

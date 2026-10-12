import type { Metadata, Viewport } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const siteTitle = "龍億檢驗科技有限公司｜工業非破壞檢測";
const siteDescription =
  "龍億檢驗科技有限公司（Long Yi Inspection Technology Co., Ltd.）工業非破壞檢測介紹，包含超音波、相控陣超音波、射線、磁粒、滲透、目視、洩漏與紅外線熱影像。本頁為展示用網站 Demo。";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "龍億檢驗科技有限公司",
  alternateName: "Long Yi Inspection Technology Co., Ltd.",
  description: siteDescription,
  inLanguage: "zh-Hant",
  about: {
    "@type": "Organization",
    name: "龍億檢驗科技有限公司",
    alternateName: "Long Yi Inspection Technology Co., Ltd.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "文藻路22號8樓",
      addressLocality: "三民區",
      addressRegion: "高雄市",
      addressCountry: "TW",
    },
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: siteTitle,
  description: siteDescription,
  applicationName: "龍億檢驗科技",
  keywords: [
    "龍億檢驗科技",
    "非破壞檢測",
    "NDT",
    "超音波檢測",
    "相控陣超音波檢測",
    "射線檢測",
    "磁粒檢測",
    "滲透檢測",
    "目視檢測",
    "洩漏檢測",
    "紅外線熱影像",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    locale: "zh_TW",
    type: "website",
    siteName: "龍億檢驗科技有限公司",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1c2c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-Hant" className={`${barlow.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper font-sans text-ink">
        <a
          href="#content"
          className="fixed top-3 left-4 z-[70] -translate-y-24 bg-paper px-4 py-2 text-sm text-ink focus-visible:translate-y-0"
        >
          跳到主要內容
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

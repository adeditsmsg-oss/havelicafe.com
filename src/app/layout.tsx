import type { Metadata, Viewport } from "next";
import { Dancing_Script, Open_Sans } from "next/font/google";
import "./globals.css";
import { getLocalBusinessSchema, seoConfig } from "@/utils/seo";

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const opensans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${seoConfig.businessName} | Best Cafe & Restaurant in Midnapore`,
  description: seoConfig.description,
  keywords: seoConfig.keywords.join(", "),
  authors: [{ name: "Haveli Cafe Midnapore" }],
  creator: "Haveli Cafe Team",
  metadataBase: new URL(seoConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${seoConfig.businessName} | Premium Bistro & Fusion Diner`,
    description: seoConfig.description,
    url: seoConfig.url,
    siteName: seoConfig.businessName,
    images: [
      {
        url: "/images/exterior.jpeg",
        width: 1200,
        height: 630,
        alt: "Haveli Cafe Midnapore Front Exterior",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#F59E0B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = getLocalBusinessSchema();

  return (
    <html
      lang="en"
      className={`${dancing.variable} ${opensans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {/* Preload fonts and icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-brand-cream text-brand-dark">
        {children}
      </body>
    </html>
  );
}

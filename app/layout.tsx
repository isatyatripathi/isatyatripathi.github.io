import type { Metadata, Viewport } from "next";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./tailwind.generated.css";
import "./globals.css";

const siteUrl = "https://isatyatripathi.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Satya Tripathi | Senior Staff Engineer & Engineering Leader",
    template: "%s | Satya Tripathi",
  },
  description:
    "Senior Staff Engineer and engineering leader in Hyderabad specializing in solution architecture, scalable .NET platforms, cloud modernization, distributed systems, and high-performing teams.",
  keywords: [
    "Satya Tripathi",
    "Senior Staff Engineer",
    "Engineering Manager",
    "Engineering Leadership",
    "Solution Architecture",
    ".NET",
    "AWS",
    "Azure",
    "Distributed Systems",
    "Cloud Modernization",
    "Hyderabad",
  ],
  authors: [{ name: "Satya Tripathi", url: siteUrl }],
  creator: "Satya Tripathi",
  publisher: "Satya Tripathi",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: "Satya Tripathi | Senior Staff Engineer & Engineering Leader",
    description:
      "Building scalable systems and leading high-impact engineering teams across .NET, AWS, Azure, distributed systems, and cloud modernization.",
    siteName: "Satya Tripathi Portfolio",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Satya Tripathi — Senior Staff Engineer and Engineering Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Satya Tripathi | Senior Staff Engineer & Engineering Leader",
    description: "Building scalable systems and leading high-impact engineering teams.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070d1c" },
    { media: "(prefers-color-scheme: light)", color: "#f7f8fc" },
  ],
};

const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem('satya-theme');
    var theme = saved === 'light' || saved === 'dark'
      ? saved
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.dataset.theme = theme;
  } catch (_) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased">
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}

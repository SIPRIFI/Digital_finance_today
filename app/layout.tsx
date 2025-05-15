import type React from "react"
import type { Metadata } from "next"
import { Merriweather, Playfair_Display } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

// Financial Times style serif fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalfinancetoday.com"),
  title: {
    default: "Digital Finance Today | Insights on Decentralized Finance",
    template: "%s | Digital Finance Today",
  },
  description:
    "Expert analysis and latest trends in DeFi, blockchain, and cryptocurrencies. Powered by Siprifi's risk management technology.",
  keywords: [
    "defi",
    "decentralized finance",
    "blockchain",
    "cryptocurrency",
    "bitcoin",
    "ethereum",
    "investments",
    "trading",
    "siprifi",
    "risk management",
    "credit default swaps",
    "financial technology",
  ],
  authors: [{ name: "Digital Finance Today" }],
  creator: "Digital Finance Today",
  publisher: "Digital Finance Today",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digitalfinancetoday.com",
    title: "Digital Finance Today | Insights on Decentralized Finance",
    description:
      "Expert analysis and latest trends in DeFi, blockchain, and cryptocurrencies. Powered by Siprifi's risk management technology.",
    siteName: "Digital Finance Today",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Finance Today | Insights on Decentralized Finance",
    description:
      "Expert analysis and latest trends in DeFi, blockchain, and cryptocurrencies. Powered by Siprifi's risk management technology.",
    creator: "@siprifi",
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
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${merriweather.variable} scroll-smooth`}>
      <body className="font-serif">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <header className="border-b border-gray-200 dark:border-gray-800 py-6">
              <div className="container mx-auto px-4 flex justify-center">
                <a href="/" className="flex items-center">
                  <img src="/images/siprifi-logo.png" alt="Digital Finance Today" className="h-20" />
                </a>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>

        {/* Structured data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Digital Finance Today",
              url: "https://digitalfinancetoday.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://digitalfinancetoday.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: "Siprifi",
                logo: {
                  "@type": "ImageObject",
                  url: "https://digitalfinancetoday.com/images/siprifi-logo.png",
                },
                sameAs: ["https://twitter.com/siprifi", "https://linkedin.com/company/siprifi", "https://siprifi.com"],
              },
            }),
          }}
        />

        {/* Script to ensure page scrolls to top on navigation */}
        <Script id="scroll-to-top">
          {`
            if (typeof window !== 'undefined') {
              // When the page loads, scroll to top
              window.history.scrollRestoration = 'manual';
              
              // Add event listener for navigation
              document.addEventListener('click', function(e) {
                // Check if the clicked element is a link
                let target = e.target;
                while (target && target.tagName !== 'A') {
                  target = target.parentNode;
                  if (!target) break;
                }
                
                if (target && target.tagName === 'A' && target.href.includes('/blog/')) {
                  // It's an internal blog link, scroll to top
                  window.scrollTo(0, 0);
                }
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}

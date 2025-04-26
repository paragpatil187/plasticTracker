import { Inter } from "next/font/google";
import { getServerSession } from "next-auth/next";
import { headers } from "next/headers";
import { Providers } from "./providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EcoTracker - Track Your Environmental Impact",
  description:
    "Track your sustainable choices, earn rewards, and help save our planet.",
  keywords: [
    "eco-friendly",
    "sustainability",
    "environmental impact",
    "green living",
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  // const headersList = headers();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers session={session}>
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-white focus:p-4"
          >
            Skip to main content
          </a>

          <div className="min-h-screen flex flex-col">
            <Header />
            <main id="main-content" className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "YUG AI — Human Intelligence for Better AI",
  description: "AI Evaluation, RLHF, Human Feedback, Annotation Operations, and Quality Assurance designed for modern AI teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <SmoothScroll>
          <GlobalNav />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

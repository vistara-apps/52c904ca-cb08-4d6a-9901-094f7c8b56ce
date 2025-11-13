import type { Metadata } from "next";
import { Providers } from "./components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hyperreal - AI Video Generation",
  description: "AI-powered, text-to-hyperrealistic video generation on Farcaster",
  openGraph: {
    title: "Hyperreal",
    description: "Transform ideas into hyperrealistic videos",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

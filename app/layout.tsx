import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DitherLab - Create Pixel-Perfect Halftone Art",
  description: "Create pixel-perfect halftone and glitch art in your browser with advanced dithering algorithms.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

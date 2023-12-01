import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apaar - All-in-One Platform for Academic Automation and Resolution.",
  description: "All-in-One Platform for Academic Automation and Resolution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

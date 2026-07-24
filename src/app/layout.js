import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToasterProvider from "@/components/ToasterProvider";

export const metadata = {
  title: "BookVerse – Your Digital Library",
  description: "Explore thousands of books, borrow digitally, read instantly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col" style={{ background: "#f0f4ff" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ToasterProvider/>
      </body>
    </html>
  );
}

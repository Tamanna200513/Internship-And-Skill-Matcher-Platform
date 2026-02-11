import "./globals.css";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import ClientProviders from "@/components/ClientProviders";

export const metadata = {
  title: "Internship and Skill Matcher Platform",
  description: "Final Year Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* ✅ ClientProviders wraps everything */}
        <ClientProviders>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}







import 'bootstrap/dist/css/bootstrap.min.css'
import "./globals.css"

import Header from "@/components/Common/Header"
import Footer from "@/components/Common/Footer"
import ClientProviders from "@/components/ClientProviders"

export const metadata = {
  title: "Internship & Skill Matcher",
  description: "Final Year Project Platform",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

        <ClientProviders>

          {/* Navbar */}
          <Header />

          {/* Page Content */}
          <main className="flex-1 w-full">
            {children}
          </main>

          {/* Footer */}
          <Footer />

        </ClientProviders>

      </body>
    </html>
  )
}
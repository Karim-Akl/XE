// src/app/layout.js
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import "../../globals.css";

export const metadata = {
  title: "XE",
  description: "XE",
};

export default function RootLayout({ children }) {

  return (
    <html lang="ar">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Amiri:wght@400;700&family=Lalezar&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.moyasar.com/mpf/1.14.0/moyasar.css"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/polyfill/7.0.0/polyfill.min.js"
          async
        ></script>
        <script
          src="https://cdn.moyasar.com/mpf/1.14.0/moyasar.js"
          async
        ></script>
      </head>
      <body>
        <div>

        <Header />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}

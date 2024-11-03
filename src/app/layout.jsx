import Header from "@/components/layout/header/header";
import "../../globals.css";
import Footer from "@/components/layout/footer/footer";
import Head from "next/head"; // استيراد Head

export const metadata = {
  title: "XE",
  description: "XE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.moyasar.com/mpf/1.14.0/moyasar.css"
        />
        <script src="https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js?version=4.8.0&features=fetch" />
        <script src="https://cdn.moyasar.com/mpf/1.14.0/moyasar.js" />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

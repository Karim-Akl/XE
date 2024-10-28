import Header from "@/components/layout/header/header";
import "../../globals.css";
import Footer from "@/components/layout/footer/footer";
export const metadata = {
  title: "XE",
  description: "XE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}

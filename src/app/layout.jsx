import "../../globals.css";
export const metadata = {
  title: "XE",
  description: "XE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

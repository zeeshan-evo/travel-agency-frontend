import "./globals.css";
import Footer from "./NavFooter/footer";
import Nav from "./NavFooter/nav";

export const metadata = {
  title: {
    default: "Travel buddy",
    template: `Travel buddy | %s`, //If we use dynamic metadata, this line will help putting "Travel buddy |" before every pages' title
  },
  description: "Escape to your dream destination",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

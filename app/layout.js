import "./globals.css";
import Image from "next/image";


export const metadata = {
  title: "Cruz Electic Contractor - Storm Lake",
  description: "Electric storm lake contractor isaac cruz cherokee",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          {" "}
          <header className="header">
            <Image className="headerImg" src="/headerwhite.png" layout="fill" objectFit="contain"/>
          </header>
          {children}
        </body>
      </html>
    </>
  );
}

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
            <div className='headerBanner'> Call Us Today (712) 299-7004
                    </div>
                   
            <Image className="headerImg" src="/headerplain.png" layout="fill" objectFit="contain"/>
         
          </header>
          {children}
        </body>
      </html>
    </>
  );
}

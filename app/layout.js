import "./globals.css";
import Image from "next/image";


export const metadata = {
  title: "Cruz Electric Contractor - Storm Lake & Cherokee",
  description: "Experienced electric contractor serving Storm Lake and Cherokee areas. Contact Isaac Cruz for reliable electrical services.",
  keywords: "electric contractor, Storm Lake, Cherokee, Isaac Cruz, electrical services, reliable electrician, residential electrician, commercial electrician, cherokee county",
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

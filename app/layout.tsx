// import type { Metadata } from "next";
// import { Inter } from "next/font/google";

// import "./globals.css";
// import { ThemeProvider } from "./provider";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Yunus's Portfolio",
//   description: "Modern & Minimal JS Mastery Portfolio",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <link rel="icon" href="/exp1.svg" sizes="any" />
//       </head>
//       <body className={inter.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="dark"
//           enableSystem={false}
//           disableTransitionOnChange
//         >
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yunus's Portfolio",
  description: "Modern & Minimal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/exp1.svg" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

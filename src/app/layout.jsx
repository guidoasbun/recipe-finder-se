import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";
import { ClerkProvider } from "@clerk/nextjs";
import { AppWrapper } from "@/context";

const inter = Inter({ subsets: ["latin"] });
// Hello
export const metadata = {
  title: "Chef-AI",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <AppWrapper>
            <MainHeader />
            <main className="mx-auto max-w-screen-xl px-4 py-2">
              {children}
            </main>
          </AppWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}

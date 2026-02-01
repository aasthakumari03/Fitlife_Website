import "../styles/globals.css";
import { Inter } from "next/font/google";
import ChalkBackground from "@/components/ChalkBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata = {
    title: "FitLife Tracker",
    description: "Build balance. Train consistency.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased`}>
                <ChalkBackground />
                <Navbar />
                <div className="relative z-10 flex flex-col min-h-screen pt-20">
                    {children}
                </div>
            </body>
        </html>
    );
}

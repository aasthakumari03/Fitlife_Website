import { Inter, Pirata_One } from "next/font/google";
import ChalkBackground from "@/components/ChalkBackground";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const pirataOne = Pirata_One({ weight: '400', subsets: ['latin'], variable: '--font-pirata' });

export const metadata = {
    title: "FitLife Tracker",
    description: "Build balance. Train consistency.",
};

export default function RootLayout({ children }) {
    // Layout wrapper
    return (
        <html lang="en">
            <body className={`${inter.variable} ${pirataOne.variable} antialiased`}>

                <Navbar />
                <div className="relative z-10 flex flex-col min-h-screen pt-20">
                    {children}
                </div>
            </body>
        </html>
    );
}

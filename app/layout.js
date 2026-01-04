import "../styles/globals.css";
import { Inter, Kaushan_Script } from "next/font/google";
import GrainyGradientBackground from "@/components/GrainyGradientBackground";

const inter = Inter({ subsets: ["latin"] });
const kaushan = Kaushan_Script({
    weight: '400',
    subsets: ["latin"],
    variable: '--font-kaushan'
});

export const metadata = {
    title: "fit-tracker",
    description: "Track your fitness journey",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} ${kaushan.variable}`}>
                <GrainyGradientBackground />
                <div className="relative z-10 flex flex-col min-h-screen">
                    {children}
                </div>
            </body>
        </html>
    );
}

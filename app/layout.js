import "../styles/globals.css";
import { Inter, Kaushan_Script, Pirata_One } from "next/font/google";
import CloudFog from "@/components/CloudFog";

const inter = Inter({ subsets: ["latin"] });
const kaushan = Kaushan_Script({
    weight: '400',
    subsets: ["latin"],
    variable: '--font-kaushan'
});
const pirata = Pirata_One({
    weight: '400',
    subsets: ["latin"],
    variable: '--font-gothic'
});

export const metadata = {
    title: "fit-tracker",
    description: "Track your fitness journey",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} ${kaushan.variable} ${pirata.variable}`}>
                <CloudFog />
                <div className="relative z-10 flex flex-col min-h-screen">
                    {children}
                </div>
            </body>
        </html>
    );
}

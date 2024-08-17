
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pages = await getPages();
    return (
        <html lang="en">
            <body className={inter.className}>
                <header className="flex justify-between py-5 max-w-7xl mx-64">
                    <Link className="font-bold " href="/">Home</Link>
                    <div>
                        {
                            pages.map((page) => (
                                <Link key={page._id} className="ml-4" href={`/${page.slug}`} >{page.title}</Link>
                            ))
                        }
                    </div>
                </header>
                <main className="max-w-7xl mx-64 py-10">
                    {children}
                </main>
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Daikoomyo - Camille Boucher",
	description: "Camille Boucher - Energéticienne à Nîmes et alentours",
};

export default function PrincipalLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
			<html lang="fr">
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					<Navbar />
					<main>
						{children}
					</main>				
					<Footer />				
				</body>
			</html>
	);
}

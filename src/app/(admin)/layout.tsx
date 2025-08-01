import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import Navbar from "./components/NavBar";
import Modal from "@/components/layout/modal/Modal";







export default function AdminLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="fr">
				<body
					className={` antialiased`}
				>
					<Modal />
					<Navbar />
					<main>
						{children}
					</main>					
				</body>
			</html>
		</ClerkProvider>
	);
}
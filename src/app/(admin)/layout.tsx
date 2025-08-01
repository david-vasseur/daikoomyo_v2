import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import Navbar from "./components/NavBar";







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
					<Navbar />
					<main>
						{children}
					</main>					
				</body>
			</html>
		</ClerkProvider>
	);
}
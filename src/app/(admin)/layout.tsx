import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";







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
					<main>
						{children}
					</main>					
				</body>
			</html>
		</ClerkProvider>
	);
}
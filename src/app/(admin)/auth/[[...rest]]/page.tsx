import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
	return (
		<div className="bg-pink-50 h-[100vh] flex justify-center items-center">
			<SignIn 
				path="/auth" 
				routing="path" 
				signUpUrl=""
				appearance={{
					elements: {
					footerActionLink: 'hidden', 
					footerSecondaryAction: 'hidden',
					}
				}}
			/>
		</div>
	)
}
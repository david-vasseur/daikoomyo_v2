import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="py-30 bg-pink-200 h-[90vh] flex justify-center items-center">
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
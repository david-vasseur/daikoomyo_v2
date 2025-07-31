"use client"

import { useForm } from '@tanstack/react-form';
import { NewsLetterSchema, TNewsLetterSchema } from '@/lib/schema';
import { newUser } from '@/components/layout/footer/newsLetter.action';
import { useModalStore } from '@/lib/stores/modalStore';


export const NewsLetterForm = () => {
    const form = useForm({
        defaultValues: {
            email: ""
        } as TNewsLetterSchema,
        validators: {
            onChange: NewsLetterSchema,
        },
        onSubmit: async ({ value }) => {
            const result = await newUser(value);
            if (result) {
                useModalStore.getState().openModal(result.message);
            }
            if (result.success) {
                form.reset();
            }
        }
    })


    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault()
                form.handleSubmit()
            }}
        >
            <div className="flex mb-5">

                <form.Field
                    name="email">
                    {({ state, handleBlur, handleChange }) => (
                        <div className="relative ">
                            <input 
                                aria-invalid={
                                    state.meta.errors.length > 0 && state.meta.isTouched
                                }
                                className=" w-full px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                value={state.value}
                                onBlur={handleBlur}
                                onChange={(e) => handleChange(e.target.value)}
                                placeholder="Votre Email"
                            />
                            {state.meta.errors.length > 0 && state.meta.isTouched ? (
                                <p 
                                    className="absolute -bottom-5 left-1 text-red-500 font-semibold text-xs whitespace-nowrap">
                                        {state.meta.errors[0]?.message}
                                </p>
                            ) : null
                            }
                        </div>
                    )}
                </form.Field>
            

                <form.Subscribe 
                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                    // eslint-disable-next-line react/no-children-prop
                    children={([canSubmit, isSubmitting]) => (
                        <button 
                            type="submit" 
                            disabled={!canSubmit || isSubmitting}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 rounded-r-lg transition-colors"    
                        >
                        {isSubmitting ? "..." : "S'abonner"}
                    </button>
                    )}            
                >    
                </form.Subscribe>
            </div>
        </form>
    )
}
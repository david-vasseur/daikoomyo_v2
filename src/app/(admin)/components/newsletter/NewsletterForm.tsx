"use client"

import { useForm } from '@tanstack/react-form';
import { CreateNewsLetterSchema, TCreateNewsLetterSchema } from '@/lib/schema';
import { useModalStore } from '@/lib/stores/modalStore';
import { useEffect } from 'react';
import { sendNewsletterEmail } from './Newsletter.action';

interface IEmail {
    id: string;
    email: string;
    token: string;
    date: Date;
}


export const NewsLetterForm = ({ stringNews, emails }: { stringNews: string, emails: IEmail[] }) => {
    const form = useForm({
        defaultValues: {
            title: "",
            content: ""
        } as TCreateNewsLetterSchema,
        validators: {
            onChange: CreateNewsLetterSchema,
        },
        onSubmit: async ({ value }) => {
            const result = await sendNewsletterEmail(value, emails);
            if (result.success) {
                useModalStore.getState().openModal(result.message);
                form.reset();
            }
            if (!result.success) {
                useModalStore.getState().openModal(result.message);
            }
        }
    })

    useEffect(() => {
        form.setFieldValue("content", stringNews);
    }, [stringNews]);


    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault()
                form.handleSubmit()
            }}
        >
            <div className="flex flex-col gap-10 mb-5">

                <form.Field
                    name="title">
                    {({ state, handleBlur, handleChange }) => (
                        <div className="relative ">
                            <input 
                                aria-invalid={
                                    state.meta.errors.length > 0 && state.meta.isTouched
                                }
                                className="w-full px-4 py-2 rounded-lg shadow-gray-500 shadow-lg bg-gray-200 border border-gray-700 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                value={state.value}
                                onBlur={handleBlur}
                                onChange={(e) => handleChange(e.target.value)}
                                placeholder="Titre de l'email"
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

                {/* <form.Field
                    name="content">
                    {({ state, handleBlur, handleChange }) => (
                        <div className="relative ">
                            <input 
                                aria-invalid={
                                    state.meta.errors.length > 0 && state.meta.isTouched
                                }
                                className="hidden w-full px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                value={stringNews}
                                onBlur={handleBlur}
                                onChange={() => handleChange(stringNews)}
                                placeholder="Votre Titre"
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
                </form.Field> */}
            

                <form.Subscribe 
                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                    // eslint-disable-next-line react/no-children-prop
                    children={([canSubmit, isSubmitting]) => (
                        <button 
                            type="submit" 
                            disabled={!canSubmit || isSubmitting}
                            className="bg-purple-600 shadow-gray-500 shadow-lg hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"    
                        >
                        {isSubmitting ? "..." : "Envoyer"}
                    </button>
                    )}            
                >    
                </form.Subscribe>
            </div>
        </form>
    )
}
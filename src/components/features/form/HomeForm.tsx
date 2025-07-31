"use client"

import { useForm } from '@tanstack/react-form';
import { sendContactEmail } from '@/lib/actions/sendContactEmail.action';
import { homeSchema, THomeSchema } from '@/lib/schema';
import { useModalStore } from '@/lib/stores/modalStore';


export const HomeForm = () => {
    const form = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            service: "",
            message: ""
        } as THomeSchema,
        validators: {
            onChange: homeSchema,
        },
        onSubmit: async ({ value }) => {
            const result = await sendContactEmail(value);
            if (result) {
                useModalStore.getState().openModal("Votre demande de rendez-vous a bien été prise en compte");
                form.reset();
            } else {
                useModalStore.getState().openModal("Echec de l'envoie, une erreur est survenue");
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <form.Field
                    name="fullName">
                    {({ state, handleBlur, handleChange }) => (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Votre nom *</label>
                            <input 
                                aria-invalid={
                                    state.meta.errors.length > 0 && state.meta.isTouched
                                }
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                value={state.value}
                                onBlur={handleBlur}
                                onChange={(e) => handleChange(e.target.value)}
                            />
                            {state.meta.errors.length > 0 && state.meta.isTouched ? (
                                <p 
                                    className="text-red-500 font-semibold text-xs">
                                        {state.meta.errors[0]?.message}
                                </p>
                            ) : null
                            }
                        </div>
                        
                    )}
                </form.Field>

                <form.Field
                    name="email">
                    {({ state, handleBlur, handleChange }) => (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Votre email *</label>
                            <input 
                                aria-invalid={
                                    state.meta.errors.length > 0 && state.meta.isTouched
                                }
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                value={state.value}
                                onBlur={handleBlur}
                                onChange={(e) => handleChange(e.target.value)}
                            />
                            {state.meta.errors.length > 0 && state.meta.isTouched ? (
                                <p 
                                    className="text-red-500 font-semibold text-xs">
                                        {state.meta.errors[0]?.message}
                                </p>
                            ) : null
                            }
                        </div>
                    )}
                </form.Field>

                <form.Field
                    name="phone">
                    {({ state, handleBlur, handleChange }) => (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Votre téléphone *</label>
                            <input 
                                aria-invalid={
                                    state.meta.errors.length > 0 && state.meta.isTouched
                                }
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                value={state.value}
                                onBlur={handleBlur}
                                onChange={(e) => handleChange(e.target.value)}
                            />
                            {state.meta.errors.length > 0 && state.meta.isTouched ? (
                                <p 
                                    className="text-red-500 font-semibold text-xs">
                                        {state.meta.errors[0]?.message}
                                </p>
                            ) : null
                            }
                        </div>
                    )}
                </form.Field>

                <form.Field
                    name="service">
                    {({ state, handleBlur, handleChange }) => (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Soin désiré *
                            </label>
                            <select
                                aria-invalid={
                                    state.meta.errors.length > 0 && state.meta.isTouched
                                }
                                value={state.value}
                                onBlur={handleBlur}
                                onChange={(e) => handleChange(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            >
                                <option value="">Selectionner une prestation</option>
                                <option value="Reiki">Séance de Reiki</option>
                                <option value="Eft">Séeance d&apos;EFT</option>
                                <option value="Fleurs de bach">Fleurs de bach</option>
                            </select>
                            {state.meta.errors.length > 0 && state.meta.isTouched ? (
                                <p 
                                    className="text-red-500 font-semibold text-xs">
                                        {state.meta.errors[0]?.message}
                                </p>
                            ) : null
                            }
                        </div>
                    )}
                </form.Field>
            </div>

            <form.Field
                name="message">
                {({ state, handleBlur, handleChange }) => (
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                        Votre message *
                        </label>
                        <textarea
                        aria-invalid={
                                state.meta.errors.length > 0 && state.meta.isTouched
                            }
                        rows={4} 
                        value={state.value}
                        onBlur={handleBlur}
                        onChange={(e) => handleChange(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparen"
                        ></textarea>
                        {state.meta.errors.length > 0 && state.meta.isTouched ? (
                            <p 
                                className="text-red-500 font-semibold text-xs">
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
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md shadow-gray-400 cursor-pointer"    
                    >
                    {isSubmitting ? "..." : "Envoyer"}
                </button>
                )}            
            >    
            </form.Subscribe>
        </form>
    )
}
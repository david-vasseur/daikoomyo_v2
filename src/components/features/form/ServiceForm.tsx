"use client"

import { useForm } from '@tanstack/react-form';
import { serviceSchema, TServiceSchema } from '@/lib/schema';
import IContent from '@/types/page';
import DatePicker from 'react-datepicker';
import { setHours, setMinutes } from 'date-fns';
import { newMeet } from '@/lib/actions/meet.action';
import { sendEmail } from '@/lib/actions/sendEmail.action';
import dateEnd from '@/hooks/date-end';


export const ServiceForm = ({ content }: { content: IContent }) => {
    const form = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            address: "",
            service: content.name,
            package: "",
            date_start: new Date,
            date_end: new Date,
            message: ""
        } as TServiceSchema,
        validators: {
            onChange: serviceSchema,
        },
        onSubmit: async ({ value }) => {
            const success = await newMeet(value);
            
            if(success) {
                const res = await sendEmail(value);
    
                if (res.success) {
                    form.reset()
                }
            }
            console.log(value);
        }
    })


    return (
        <form 
            className="bg-white rounded-xl shadow-lg p-8"
            onSubmit={(e) => {
                e.preventDefault()
                form.handleSubmit()
            }}
        >
            <div className="space-y-6">
                <form.Field
                    name="fullName">
                    {({ state, handleBlur, handleChange }) => (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nom / Prénom *</label>
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
                            <label className="block text-sm font-medium text-gray-700 mb-1">Adresse Email *</label>
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
                            <label className="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone *</label>
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
                    name="address">
                    {({ state, handleBlur, handleChange }) => (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Adresse *</label>
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
                    name="package">
                    {({ state, handleBlur, handleChange }) => (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Formule *
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
                                {content?.options.map((op, index) => {
                                    return (
                                        <option key={index} value={op}>{op}</option>
                                    )
                                    
                                })}
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

                <form.Field name="date_start">
                {({ state, handleChange, handleBlur }) => (
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date et heure du rendez-vous *
                    </label>
                    <DatePicker
                        locale="fr"
                        selected={state.value ?? null} 
                        onChange={(date_start) => {
                            if (date_start instanceof Date && !isNaN(date_start.getTime())) {
                                handleChange(date_start); 
                                
                                const selectedIndex = content.options.findIndex(
                                    (opt) => opt === form.state.values.package
                                );

                                const duration = dateEnd(selectedIndex + 1, content.name);

                                if (duration) {
                                    const newDateEnd = new Date(date_start.getTime() + duration * 60000);
                                    form.setFieldValue("date_end", newDateEnd);
                                }
                            }
                        }}
                        onBlur={handleBlur}
                        showTimeSelect
                        timeCaption="Heure"
                        dateFormat="Pp"
                        placeholderText="Sélectionner une date"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent cursor-pointer"
                        minDate={new Date()}
                        minTime={
                        state.value?.getDay() !== 6
                            ? setHours(setMinutes(new Date(), 0), 16)
                            : setHours(setMinutes(new Date(), 0), 9)
                        }
                        maxTime={setHours(setMinutes(new Date(), 30), 19)}
                        filterDate={(date) => date.getDay() !== 0}
                        disabled={!form.state.values.package}
                    />
                    {state.meta.errors.length > 0 && state.meta.isTouched && (
                        <p className="text-red-500 font-semibold text-xs">
                        {state.meta.errors[0]?.message}
                        </p>
                    )}
                    </div>
                )}
                </form.Field>
            

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
        </div>
            <form.Subscribe 
                selector={(state) => [state.canSubmit, state.isSubmitting]}
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
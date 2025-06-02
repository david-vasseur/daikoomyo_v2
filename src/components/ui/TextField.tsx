import { useStore } from '@tanstack/react-form';
import { useFieldContext } from '../../hooks/form-context';

export default function TextField({ label }: { label: string }) {
    const field = useFieldContext<string>()

    const errors = useStore(field.store, (state) => state.meta.errors)

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                <div className="block text-sm font-medium text-gray-700 mb-1">{label}</div>
                <input
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
            </label>
            {errors.map((error: string) => (
                <div 
                key={error} 
                className="text-red-500 font-semibold"
                >
                    {error}
                </div>
            ))}
        </div>
    )
}
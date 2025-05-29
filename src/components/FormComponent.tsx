import errorIcon from "../assets/images/icon-error.svg"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";


const formSchema = z.object({
    firstName: z.string().nonempty("First name cannot be empty").min(2, "First name must be at least 2 characters").max(30),
    lastName: z.string().nonempty("Last name cannot be empty").min(2, "Last name must be at least 2 characters").max(30),
    email: z.string().nonempty("Email cannot be empty").email("Looks like this is not an email"),
    password: z.string().nonempty("Password cannot be empty").min(6, "Password must be at least 6 characters"),
})

type FormFieldType = {
    name: keyof z.infer<typeof formSchema>
    label: string
    placeholder: string
    type: string
}

const formFields: FormFieldType[] = [
    { name: "firstName", label: "First Name", placeholder: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", placeholder: "Last Name", type: "text" },
    { name: "email", label: "Email Address", placeholder: "Email Address", type: "email" },
    { name: "password", label: "Password", placeholder: "Password", type: "password" },
]

export default function FormComponent(): React.JSX.Element {

    function onSubmit(values: z.infer<typeof formSchema>): void {
        toast.success("Subscription confirmed!", {
            style: {
                background: 'var(--color-accent-blue)',
                color: 'white',
                border: '1px solid var(--color-neutral-grayish-blue)',
                borderRadius: 'var(--radius)',
                fontFamily: 'var(--font-poppins)',
                fontSize: 'var(--text-14-16)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                padding: 'var(--spacing-16-18)',
            },
            className: 'success-toast',
            duration: 3000,
            cancel: {
                label: "✕",
                onClick: (event) => {
                    console.log("Close Sonner")
                    event.preventDefault()
                    toast.dismiss()
                },
            },
        });
        console.log(values)
        form.reset()
        // No success message in design – resetting input
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
    })

    const renderFormFields: React.JSX.Element[] = formFields.map(({ name, label, type, placeholder }) => {
        return (
            <FormField
                key={name}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel htmlFor={name} className="sr-only">
                            {label}
                        </FormLabel>
                        <FormControl>
                            <div id={`${name}-input-container`} className="relative">
                                <Input
                                    {...field}
                                    id={name}
                                    type={type}
                                    placeholder={placeholder}
                                    aria-invalid={!!form.formState.errors[name]}
                                />
                                {form.formState.errors[name] && (
                                    <img src={errorIcon} className="absolute right-4 top-1/2 -translate-y-1/2" alt="error icon" />
                                )}
                            </div>
                        </FormControl>
                        <FormMessage className="text-right text-primary-red italic text-xs font-medium" />
                    </FormItem>
                )}
            />
        )
    })

    return (
        <Form {...form}>
            <form noValidate className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>

                {renderFormFields}

                <Button
                    type="submit"
                    className="bg-primary-green hover:bg-primary-green/80 py-4 rounded-md w-full
                    uppercase font-medium tracking-wider cursor-pointer brightness-95 hover:brightness-110 dark:hover:brightness-125
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-blue
                    "
                >
                    Claim your free trial
                </Button>

                <Toaster richColors position="bottom-right" />
            </form>
        </Form>
    )
}
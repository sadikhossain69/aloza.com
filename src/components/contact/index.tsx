import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";

const Contact = () => {

    const FormSchema = z.object({
        name: z.string().min(2, {
            message: "Name must be at least 2 characters.",
        }),
        email: z.string().email({
            message: "Invalid email, Please correct the email."
        }),
        subject: z.string().min(5, {
            message: "Subject must be at least 5 characters."
        }),
        message: z.string().min(10, {
            message: "Message must be at least 10 characters."
        })
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data, "data")
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <>
            <section className="container mt-20">
                <Form {...form}>
                    <div className={cn("md:w-3/5 mx-auto")}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 border-2 rounded p-10">
                            <h1 className="sm:text-5xl text-2xl font-bold title-font text-gray-700 lg:mb-0 mb-4 text-center dark:text-white uppercase">Contact</h1>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[1em] font-semibold">Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                                            This is your public display name.
                                        </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[1em] font-semibold">Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="example@gmail.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[1em] font-semibold">Subject</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Need some information" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[1em] font-semibold">Your Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Type you message here" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </div>
                </Form>
            </section>
        </>
    );
};

export default Contact;
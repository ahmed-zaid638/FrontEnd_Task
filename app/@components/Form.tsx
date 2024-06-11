"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useStore from "@/@store";

// formSchema
const formSchema = z.object({
  title: z.string().min(1, { message: "title is required" }),
  description: z.string().min(1, { message: "group description requried" }),
});
// CreateForm
export function CreateForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      title: "",
      description: "",
    },
    resolver: zodResolver(formSchema),
  });
  const { isSubmitting, isValid } = form.formState;
  const { addGroup } = useStore();
  // onSubmit
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    addGroup({
      id: Date.now(),
      name: values.title,
      description: values.description,
      createdAt: new Date().toLocaleDateString("en-US"),
    });
    form.reset();
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="name"
                  {...field}
                  className="w-full md:w-[73%]"
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Enter group description..."
                  className="w-full md:w-[73%]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!isValid}>
          Create
        </Button>
      </form>
    </Form>
  );
}
export default CreateForm;

"use client";
import { Form } from "@/components/ui/form";
import LoginCard from "../organisms/login-card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  username: z.string(),
  password: z.string(),
});
const LoginForm = () => {
  const loginForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log({ values });
  }
  return (
    <Form {...loginForm}>
      <form onSubmit={loginForm.handleSubmit(onSubmit)} className="space-y-8">
        <LoginCard control={loginForm.control} />
      </form>
    </Form>
  );
};

export default LoginForm;

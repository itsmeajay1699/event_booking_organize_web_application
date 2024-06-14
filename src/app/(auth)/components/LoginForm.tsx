"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const loginForm = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const LoginForm = ({
  setIsLogin,
}: {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}) => {
  const form = useForm<z.infer<typeof loginForm>>({
    resolver: zodResolver(loginForm),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginForm>) {

    signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });
  }

  return (
    <div className="mt-3">
      <div>
        <Form {...form}>
          <div className="mb-5">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 text-start"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="josh@gmail.com"
                        {...field}
                        type="text"
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="********"
                        {...field}
                        type="password"
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </div>
          <span className="">
            Don&apos;t have an account?{" "}
            <button
              onClick={() => setIsLogin(false)}
              className="text-blue-500 hover:underline"
            >
              Register
            </button>
          </span>
          <button
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;

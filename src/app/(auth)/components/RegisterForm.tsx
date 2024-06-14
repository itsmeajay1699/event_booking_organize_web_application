"use client";

import { Dispatch, SetStateAction, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

import { Checkbox } from "@/components/ui/checkbox";

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
import { Label } from "@/components/ui/label";

const RegisterFrom = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  username: z.string().min(6),
  role: z.boolean().default(false).optional(),
});

const RegisterForm = ({
  setIsLogin,
}: {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isOrganizer, setIsOrganizer] = useState<boolean | any>(false);

  const form = useForm<z.infer<typeof RegisterFrom>>({
    resolver: zodResolver(RegisterFrom),
    defaultValues: {
      email: "",
      password: "",
      username: "",
      role: false,
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterFrom>) {
    try {
      const res = await fetch("/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

    } catch (err) {
      console.log(err);
    }
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
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>UserName</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="josh"
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

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <Label>Are you an organizer?</Label>
                  </FormItem>
                )}
              />

              <Button className="w-full" type="submit">
                Register
              </Button>
            </form>
          </div>

          <span>
            Already have an account?{" "}
            <button
              onClick={() => setIsLogin(true)}
              className="text-blue-500 hover:underline"
            >
              Login
            </button>
          </span>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;

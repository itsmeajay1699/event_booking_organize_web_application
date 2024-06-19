"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
import { z } from "zod";

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

import { format, set } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";

const eventPost = z.object({
  title: z.string().min(5).max(100),
  description: z.string().min(5).max(1000),
  image: z.string().min(1),
  date: z.date(),
  location: z.string().min(1).max(100),
  type: z.string().min(1).max(100),
  totalTickets: z.string().min(1).max(100),
  soldTickets: z.string().min(1).max(100),
  price: z.string().min(1).max(100),
  userId: z.string().min(1).max(100),
});

export function Page() {
  const [date, setDate] = React.useState<Date>();
  const [isFree, setIsFree] = React.useState<boolean>(false);
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  const session = useSession();

  const form = useForm<z.infer<typeof eventPost>>({
    resolver: zodResolver(eventPost),
    defaultValues: {
      date: new Date(),
      title: "",
      description: "",
      image: "",
      location: "",
      type: "free",
      totalTickets: "",
      soldTickets: "",
      price: "0",
      userId: "",
    },
  });

  async function onSubmit(data: z.infer<typeof eventPost>) {
    try {
      setIsLoaded(true);

      data.date = date as Date;
      data.type = isFree ? "paid" : "free";
      data.userId = session.data?.user?.id as string;

      console.log(data);

      const res = await fetch("/organizer/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Event created successfully");
      } else {
        alert("Failed to create event");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoaded(false);
    }
  }

  return (
    <div className="flex flex-col pt-3 pb-10 px-5 md:px-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-4
            md:gap-8
            w-full
            max-w-2xl
            md:max-w-3xl
            mx-auto"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Title" className="" />
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
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Description" className="" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Image" className="" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col mt-2.5 mb-2.5 w-full">
              <FormLabel
                className={cn(
                  !date && "text-muted-foreground",
                  "mt-1.5 mb-2.5"
                )}
              >
                Date
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Location" className="" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Type"
                      className=""
                      disabled
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="totalTickets"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Tickets</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Total Tickets"
                      className=""
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="soldTickets"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sold Tickets</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Sold Tickets" className="" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <FormField
                control={form.control}
                name="price"
                disabled={!isFree}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="0" className="" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center space-x-2 mt-2.5">
                <Label htmlFor="airplane-mode">Free Event</Label>
                <Switch
                  className="shadow-md"
                  id="airplane-mode"
                  checked={isFree}
                  onCheckedChange={(checked) => setIsFree(checked)}
                />
                <Label htmlFor="airplane-mode">Paid</Label>
              </div>
            </div>
            <Button
              className="
            w-full
            text-white
            text-lg
            font-bold
            py-3
            rounded-md
            hover:bg-black
            transition
            duration-200
            ease-in-out
            mt-4
            md:col-start-1
            md:col-end-3
            "
              type="submit"
            >
              {isLoaded ? "Loading..." : "Create Event"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default Page;

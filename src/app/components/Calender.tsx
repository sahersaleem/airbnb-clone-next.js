"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"

import { useEffect, useState } from "react" // Import useState and useEffect
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,

  FormField,
  FormItem,

  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Toast } from "@radix-ui/react-toast"

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
})

export function CalendarForm() {
  const [mounted, setMounted] = useState(false) // Add state to track mounting
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  useEffect(() => {
    setMounted(true) // Set to true once the component mounts
  }, [])

  function onSubmit(data: z.infer<typeof FormSchema>) {
    Toast({
      title: "You submitted the following values:",
    
      
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-center items-center">
            
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <button
                      className={cn(
                        "sm:w-[120px]  font-normal text-center",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {mounted && field.value ? ( // Only render date if component is mounted
                        format(field.value, "PPP")
                      ) : (
                        <span className=" xs:text-[9px] sm:text-[14px] xs:hidden sm:block">Add dates</span>
                      )}
                    </button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
           
              <FormMessage />
            </FormItem>
          )}
        />
     
      </form>
    </Form>
  )
}
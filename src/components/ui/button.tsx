
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 active:translate-y-0.5 active:shadow-inner transition-all duration-200",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:translate-y-0.5 active:shadow-inner",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground active:translate-y-0.5 active:shadow-inner",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:translate-y-0.5 active:shadow-inner",
        ghost: "hover:bg-accent hover:text-accent-foreground active:translate-y-0.5",
        link: "text-primary underline-offset-4 hover:underline",
        game: "bg-gradient-to-r from-red-600 to-red-800 text-white border border-red-700/50 shadow-lg hover:shadow-red-600/20 hover:from-red-500 hover:to-red-700 active:translate-y-0.5 active:shadow-inner transform transition-all duration-200",
        achievement: "bg-gradient-to-r from-amber-500 to-yellow-600 text-white border border-amber-600/50 shadow-lg hover:shadow-amber-500/20 hover:from-amber-400 hover:to-yellow-500 active:translate-y-0.5 active:shadow-inner transform transition-all duration-200",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

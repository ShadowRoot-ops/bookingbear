import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Original variants
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        // New themed variants based on your logo
        "dark-menu":
          "bg-zinc-900 text-stone-100 border border-zinc-800 hover:bg-zinc-800 hover:border-orange-500/50 transition-all duration-300",

        light:
          "bg-stone-100 text-zinc-900 hover:bg-stone-200 hover:text-zinc-800 border border-stone-200 hover:border-orange-400/30",

        "orange-primary":
          "bg-orange-500 text-zinc-900 hover:bg-orange-400 hover:text-zinc-800 font-medium shadow-lg hover:shadow-orange-500/25",

        "orange-outline":
          "border-2 border-orange-500 text-orange-500 bg-transparent hover:bg-orange-500 hover:text-zinc-900 transition-all duration-300",

        cream:
          "bg-stone-200 text-zinc-800 hover:bg-stone-300 hover:text-zinc-900 border border-stone-300",

        "ghost-dark":
          "text-stone-100 hover:bg-zinc-800/50 hover:text-orange-400 transition-all duration-200",

        "ghost-light":
          "text-zinc-700 hover:bg-stone-100 hover:text-zinc-900 transition-all duration-200",

        "destructive-themed":
          "bg-red-600 text-stone-100 hover:bg-red-700 border border-red-700 hover:border-red-600",

        "menu-toggle":
          "bg-zinc-900/80 text-stone-100 border border-zinc-700 hover:bg-zinc-800 hover:border-orange-500/40 backdrop-blur-sm",

        accent:
          "bg-gradient-to-r from-orange-500 to-orange-400 text-zinc-900 hover:from-orange-400 hover:to-orange-300 font-medium shadow-md hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        xl: "h-12 rounded-md px-10 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

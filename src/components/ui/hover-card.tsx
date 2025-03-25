import { cn } from "@/lib/utils"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import * as React from "react"

function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root {...props} />
}

function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return <HoverCardPrimitive.Trigger {...props} />
}

function HoverCardContent({
  className,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Content
      className={cn(
        "bg-white border rounded-md p-4 shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export { HoverCard, HoverCardContent, HoverCardTrigger }


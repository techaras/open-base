import * as React from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import { ShineBorder } from "@/components/ui/shine-border"
import { type VariantProps } from "class-variance-authority"

interface ShineButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  shineColor?: string | string[]
  duration?: number
  borderWidth?: number
}

export function ShineButton({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  shineColor = ["#FF8342", "#553AFE"],
  duration = 14,
  borderWidth = 1.5,
  children,
  ...props
}: ShineButtonProps) {
  return (
    <div className="relative overflow-hidden rounded-md">
      <ShineBorder
        shineColor={shineColor}
        duration={duration}
        borderWidth={borderWidth}
      />
      <Button
        className={className}
        variant={variant}
        size={size}
        asChild={asChild}
        {...props}
      >
        {children}
      </Button>
    </div>
  )
}

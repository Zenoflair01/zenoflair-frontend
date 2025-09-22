"use client"

import { ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type TwoCardLayoutProps = {
  leftTitle?: string
  leftDescription?: string
  leftContent: ReactNode
  rightTitle?: string
  rightDescription?: string
  rightContent: ReactNode
  className?: string
}

export function TwoCardLayout({
  leftTitle,
  leftDescription,
  leftContent,
  rightTitle,
  rightDescription,
  rightContent,
  className,
}: TwoCardLayoutProps) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-2", className)}>
      {/* ---------- Left Card ---------- */}
      <Card className="flex flex-col">
        {(leftTitle || leftDescription) && (
          <CardHeader>
            {leftTitle && <CardTitle>{leftTitle}</CardTitle>}
            {leftDescription && (
              <CardDescription>{leftDescription}</CardDescription>
            )}
          </CardHeader>
        )}
        <CardContent className="flex-1">{leftContent}</CardContent>
      </Card>

      {/* ---------- Right Card ---------- */}
      <Card className="flex flex-col">
        {(rightTitle || rightDescription) && (
          <CardHeader>
            {rightTitle && <CardTitle>{rightTitle}</CardTitle>}
            {rightDescription && (
              <CardDescription>{rightDescription}</CardDescription>
            )}
          </CardHeader>
        )}
        <CardContent className="flex-1">{rightContent}</CardContent>
      </Card>
    </div>
  )
}
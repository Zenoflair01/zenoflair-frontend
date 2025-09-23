import { TwoCardLayout } from "@/components/layout/two-card-layout"
import { Button } from "@/components/ui/button"

export default function Page() {
  
  return (
    <TwoCardLayout
      leftTitle="Prompt"
      leftDescription="Write your prompt here"
      leftContent={
        <textarea
          className="w-full h-40 resize-none rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="A futuristic city..."
        />
      }
      rightTitle="Generated Image"
      rightDescription="Result will appear here"
      rightContent={
        <div className="flex h-40 items-center justify-center rounded-md border border-dashed border-border">
          <span className="text-sm text-muted-foreground">Nothing yet</span>
        </div>
      }
    />
  )
}
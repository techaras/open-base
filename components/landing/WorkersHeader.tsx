import { BaseHeader } from "@/components/BaseHeader";
import { Button } from "@/components/ui/button";

export function WorkersHeader() {
  return (
    <BaseHeader logoHref="/workers">
      <Button variant="ghost">Apply</Button>
      <Button>Log In</Button>
    </BaseHeader>
  );
}
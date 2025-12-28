import { BaseHeader } from "@/components/BaseHeader";
import { Button } from "@/components/ui/button";

export function CompaniesHeader() {
  return (
    <BaseHeader logoHref="/companies">
      <Button>Request Data</Button>
    </BaseHeader>
  );
}
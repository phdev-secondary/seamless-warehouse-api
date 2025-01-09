import { Card } from "@/components/ui/card";

export function Introduction() {
  return (
    <section className="mb-12">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
        Introduction
      </h2>
      <Card className="p-6">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Welcome to the WMS API documentation. This API provides comprehensive
          endpoints for managing warehouse operations, inventory, orders, and
          suppliers. The API follows REST principles and includes enterprise-grade
          security features.
        </p>
      </Card>
    </section>
  );
}
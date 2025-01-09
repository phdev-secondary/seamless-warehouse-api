import { ApiEndpoint } from "@/components/ApiEndpoint";

export function InventorySection() {
  return (
    <section className="mb-12">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
        Inventory Management
      </h2>
      <ApiEndpoint
        method="GET"
        path="/api/v1/inventory"
        description="List all inventory items with filtering, sorting, and pagination"
        response={JSON.stringify({
          items: [
            {
              id: "123",
              sku: "PROD-123",
              name: "Widget X",
              quantity: 100,
              location: "A-123",
              last_updated: "2024-02-20T10:00:00Z",
            },
          ],
          total: 150,
          page: 1,
          per_page: 20,
        }, null, 2)}
      />
      <ApiEndpoint
        method="POST"
        path="/api/v1/inventory/batch"
        description="Batch update inventory levels"
        request={JSON.stringify({
          updates: [
            {
              sku: "PROD-123",
              quantity_change: 50,
              reason: "restock",
            },
          ],
        }, null, 2)}
      />
    </section>
  );
}
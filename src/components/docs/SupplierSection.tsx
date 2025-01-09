import { ApiEndpoint } from "@/components/ApiEndpoint";

export function SupplierSection() {
  return (
    <section className="mb-12">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
        Supplier Management
      </h2>
      <ApiEndpoint
        method="GET"
        path="/api/v1/suppliers"
        description="List all suppliers with filtering and pagination"
        response={JSON.stringify({
          suppliers: [
            {
              id: "SUP-123",
              name: "Acme Supplies",
              status: "active",
              performance_rating: 4.8,
              last_delivery: "2024-02-15T10:00:00Z",
            },
          ],
          total: 50,
          page: 1,
          per_page: 20,
        }, null, 2)}
      />
      <ApiEndpoint
        method="POST"
        path="/api/v1/suppliers/purchase-orders"
        description="Create a new purchase order"
        request={JSON.stringify({
          supplier_id: "SUP-123",
          items: [
            {
              sku: "PROD-789",
              quantity: 100,
              unit_price: 10.99,
            },
          ],
          delivery_date: "2024-03-01",
        }, null, 2)}
      />
    </section>
  );
}
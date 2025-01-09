import { ApiEndpoint } from "@/components/ApiEndpoint";

export function OrdersSection() {
  return (
    <section className="mb-12">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
        Order Processing
      </h2>
      <ApiEndpoint
        method="POST"
        path="/api/v1/orders"
        description="Create a new order with validation and stock checks"
        request={JSON.stringify({
          customer_id: "CUST-123",
          items: [
            {
              sku: "PROD-123",
              quantity: 5,
            },
          ],
          shipping_address: {
            street: "123 Main St",
            city: "Springfield",
            state: "IL",
            zip: "62701",
          },
        }, null, 2)}
        response={JSON.stringify({
          order_id: "ORD-123",
          status: "created",
          estimated_shipping: "2024-02-20",
          _links: {
            self: "/api/v1/orders/ORD-123",
            status: "/api/v1/orders/ORD-123/status",
          },
        }, null, 2)}
      />
    </section>
  );
}
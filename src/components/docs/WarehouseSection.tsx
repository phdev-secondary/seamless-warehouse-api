import { ApiEndpoint } from "@/components/ApiEndpoint";

export function WarehouseSection() {
  return (
    <section className="mb-12">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
        Warehouse Operations
      </h2>
      <ApiEndpoint
        method="POST"
        path="/api/v1/warehouse/picking"
        description="Create a new picking task"
        request={JSON.stringify({
          order_id: "ORD-123",
          picker_id: "PICKER-456",
          items: [
            {
              sku: "PROD-789",
              quantity: 2,
              location: "A-123",
            },
          ],
        }, null, 2)}
        response={JSON.stringify({
          task_id: "PICK-123",
          status: "assigned",
          estimated_completion: "2024-02-20T14:00:00Z",
          _links: {
            self: "/api/v1/warehouse/picking/PICK-123",
            order: "/api/v1/orders/ORD-123",
          },
        }, null, 2)}
      />
      <ApiEndpoint
        method="POST"
        path="/api/v1/warehouse/packing"
        description="Create a new packing task"
        request={JSON.stringify({
          picking_task_id: "PICK-123",
          packer_id: "PACKER-456",
          packaging_type: "box_medium",
        }, null, 2)}
      />
    </section>
  );
}
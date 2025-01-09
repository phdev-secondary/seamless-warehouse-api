import { ApiEndpoint } from "@/components/ApiEndpoint";

export function WebhooksSection() {
  return (
    <section className="mb-12">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
        Webhooks & Events
      </h2>
      <p className="leading-7 mb-6">
        Subscribe to real-time events using webhooks:
      </p>
      <ApiEndpoint
        method="POST"
        path="/api/v1/webhooks"
        description="Register a webhook endpoint"
        request={JSON.stringify({
          url: "https://your-domain.com/webhook",
          events: ["order.created", "order.updated", "inventory.updated"],
          secret: "your-webhook-secret",
        }, null, 2)}
        response={JSON.stringify({
          id: "webhook-123",
          status: "active",
          created_at: "2024-02-20T10:00:00Z",
        }, null, 2)}
      />
    </section>
  );
}
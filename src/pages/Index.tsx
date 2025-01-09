import { Sidebar } from "@/components/Sidebar";
import { ApiEndpoint } from "@/components/ApiEndpoint";

const sections = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "#intro" },
      { title: "Authentication", href: "#auth" },
      { title: "Rate Limiting", href: "#rate-limits" },
    ],
  },
  {
    title: "Authentication & Security",
    items: [
      { title: "JWT Authentication", href: "#jwt" },
      { title: "OAuth2 Flow", href: "#oauth2" },
      { title: "Access Control (RBAC)", href: "#rbac" },
      { title: "Data Encryption", href: "#encryption" },
      { title: "Audit Logging", href: "#audit" },
    ],
  },
  {
    title: "Inventory Management",
    items: [
      { title: "List Products", href: "#products" },
      { title: "Stock Levels", href: "#stock" },
      { title: "Location Management", href: "#locations" },
      { title: "Batch Operations", href: "#batch" },
    ],
  },
  {
    title: "Order Processing",
    items: [
      { title: "Create Order", href: "#create-order" },
      { title: "Process Order", href: "#process-order" },
      { title: "Order Status", href: "#order-status" },
      { title: "Bulk Operations", href: "#bulk-orders" },
    ],
  },
  {
    title: "Warehouse Operations",
    items: [
      { title: "Picking", href: "#picking" },
      { title: "Packing", href: "#packing" },
      { title: "Shipping", href: "#shipping" },
      { title: "Returns", href: "#returns" },
    ],
  },
  {
    title: "Supplier Management",
    items: [
      { title: "Supplier List", href: "#suppliers" },
      { title: "Purchase Orders", href: "#po" },
      { title: "Receiving", href: "#receiving" },
      { title: "Supplier Performance", href: "#supplier-metrics" },
    ],
  },
  {
    title: "Integration & Events",
    items: [
      { title: "Webhooks", href: "#webhooks" },
      { title: "Event Streams", href: "#events" },
      { title: "Third-party Integration", href: "#integrations" },
      { title: "API Gateway", href: "#gateway" },
    ],
  },
  {
    title: "Compliance & Security",
    items: [
      { title: "GDPR Compliance", href: "#gdpr" },
      { title: "Audit Trails", href: "#audit-trails" },
      { title: "Data Retention", href: "#retention" },
      { title: "Security Standards", href: "#security" },
    ],
  },
  {
    title: "Architecture & Scaling",
    items: [
      { title: "High Availability", href: "#ha" },
      { title: "Caching Strategy", href: "#caching" },
      { title: "Database Sharding", href: "#sharding" },
      { title: "Microservices", href: "#microservices" },
    ],
  },
];

const Index = () => {
  return (
    <div className="border-t">
      <div className="bg-background">
        <div className="grid lg:grid-cols-5">
          <Sidebar className="hidden lg:block" sections={sections} />
          <div className="col-span-3 lg:col-span-4 lg:border-l">
            <div className="h-full px-4 py-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
                  Warehouse Management System API
                </h1>

                <section className="mb-12">
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
                    Introduction
                  </h2>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Welcome to the WMS API documentation. This API provides comprehensive
                    endpoints for managing warehouse operations, inventory, orders,
                    and suppliers. The API follows REST principles and includes
                    enterprise-grade security features.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
                    Authentication
                  </h2>
                  <p className="leading-7 mb-6">
                    The API uses JWT tokens for authentication with refresh token support.
                    OAuth2 is available for third-party integrations.
                  </p>
                  <ApiEndpoint
                    method="POST"
                    path="/api/v1/auth/login"
                    description="Authenticate user and receive JWT tokens"
                    request={JSON.stringify({
                      username: "user@example.com",
                      password: "password123",
                    }, null, 2)}
                    response={JSON.stringify({
                      access_token: "eyJhbGciOiJIUzI1NiIs...",
                      refresh_token: "eyJhbGciOiJIUzI1NiIs...",
                      expires_in: 3600,
                    }, null, 2)}
                  />
                  <ApiEndpoint
                    method="POST"
                    path="/api/v1/auth/refresh"
                    description="Refresh expired access token"
                    request={JSON.stringify({
                      refresh_token: "eyJhbGciOiJIUzI1NiIs...",
                    }, null, 2)}
                    response={JSON.stringify({
                      access_token: "eyJhbGciOiJIUzI1NiIs...",
                      expires_in: 3600,
                    }, null, 2)}
                  />
                </section>

                <section className="mb-12">
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
                    Rate Limiting
                  </h2>
                  <p className="leading-7 mb-6">
                    To ensure fair usage and system stability, rate limits are applied:
                  </p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Authentication endpoints: 100 requests/hour</li>
                    <li>General API endpoints: 1000 requests/hour</li>
                    <li>Bulk operations: 100 requests/hour</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Rate limits are applied per API key and reset hourly.
                  </p>
                </section>

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
                </section>

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

                <section className="mb-12">
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
                    Error Handling
                  </h2>
                  <p className="leading-7 mb-6">
                    The API uses standard HTTP status codes and provides detailed error responses:
                  </p>
                  <ApiEndpoint
                    method="GET"
                    path="/api/v1/orders/invalid-id"
                    description="Example error response"
                    response={JSON.stringify({
                      error: {
                        code: "ORDER_NOT_FOUND",
                        message: "Order with ID 'invalid-id' not found",
                        status: 404,
                        details: {
                          order_id: "invalid-id",
                        },
                        documentation_url: "/docs/errors#ORDER_NOT_FOUND",
                      },
                    }, null, 2)}
                  />
                </section>

                <section className="mb-12">
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
                    GDPR & Data Retention
                  </h2>
                  <p className="leading-7 mb-6">
                    The API implements GDPR requirements and data retention policies:
                  </p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Personal data is encrypted at rest</li>
                    <li>Data export available via API</li>
                    <li>Automatic data deletion after retention period</li>
                    <li>Audit logs retained for 7 years</li>
                  </ul>
                  <ApiEndpoint
                    method="POST"
                    path="/api/v1/gdpr/data-export"
                    description="Request personal data export (GDPR compliance)"
                    request={JSON.stringify({
                      user_id: "USER-123",
                      data_types: ["orders", "shipping_addresses"],
                    }, null, 2)}
                    response={JSON.stringify({
                      export_id: "EXPORT-123",
                      status: "processing",
                      estimated_completion: "2024-02-20T11:00:00Z",
                      _links: {
                        status: "/api/v1/gdpr/exports/EXPORT-123",
                      },
                    }, null, 2)}
                  />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
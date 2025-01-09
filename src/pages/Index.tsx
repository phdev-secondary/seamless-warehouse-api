import { Sidebar } from "@/components/Sidebar";
import { ApiEndpoint } from "@/components/ApiEndpoint";

const sections = [
  {
    title: "Authentication",
    items: [
      { title: "JWT Authentication", href: "#jwt" },
      { title: "OAuth2 Flow", href: "#oauth2" },
      { title: "Access Control", href: "#rbac" },
    ],
  },
  {
    title: "Inventory",
    items: [
      { title: "List Products", href: "#products" },
      { title: "Stock Levels", href: "#stock" },
      { title: "Location Management", href: "#locations" },
    ],
  },
  {
    title: "Orders",
    items: [
      { title: "Create Order", href: "#create-order" },
      { title: "Process Order", href: "#process-order" },
      { title: "Order Status", href: "#order-status" },
    ],
  },
  {
    title: "Suppliers",
    items: [
      { title: "Supplier List", href: "#suppliers" },
      { title: "Purchase Orders", href: "#po" },
      { title: "Receiving", href: "#receiving" },
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
                    The API uses JWT tokens for authentication. All requests must
                    include a valid JWT token in the Authorization header.
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
                </section>

                <section className="mb-12">
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
                    Inventory Management
                  </h2>
                  <ApiEndpoint
                    method="GET"
                    path="/api/v1/inventory"
                    description="List all inventory items with optional filtering and pagination"
                    response={JSON.stringify({
                      items: [
                        {
                          id: "123",
                          sku: "PROD-123",
                          name: "Widget X",
                          quantity: 100,
                          location: "A-123",
                        },
                      ],
                      total: 150,
                      page: 1,
                      per_page: 20,
                    }, null, 2)}
                  />
                  <ApiEndpoint
                    method="POST"
                    path="/api/v1/inventory"
                    description="Create a new inventory item"
                    request={JSON.stringify({
                      sku: "PROD-124",
                      name: "Widget Y",
                      quantity: 50,
                      location: "A-124",
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
                    description="Create a new order"
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
                    }, null, 2)}
                  />
                </section>

                <section className="mb-12">
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
                    Rate Limiting
                  </h2>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    The API implements rate limiting to ensure fair usage. Limits
                    are applied per API key and reset hourly:
                  </p>
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>Authentication endpoints: 100 requests per hour</li>
                    <li>General API endpoints: 1000 requests per hour</li>
                    <li>Bulk operations: 100 requests per hour</li>
                  </ul>
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
import { Sidebar } from "@/components/Sidebar";
import { Introduction } from "@/components/docs/Introduction";
import { SecuritySection } from "@/components/docs/SecuritySection";
import { InventorySection } from "@/components/docs/InventorySection";
import { OrdersSection } from "@/components/docs/OrdersSection";
import { WarehouseSection } from "@/components/docs/WarehouseSection";
import { SupplierSection } from "@/components/docs/SupplierSection";
import { WebhooksSection } from "@/components/docs/WebhooksSection";
import { ComplianceSection } from "@/components/docs/ComplianceSection";
import { ScalabilitySection } from "@/components/docs/ScalabilitySection";

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
                <Introduction />
                <SecuritySection />
                <InventorySection />
                <OrdersSection />
                <WarehouseSection />
                <SupplierSection />
                <WebhooksSection />
                <ComplianceSection />
                <ScalabilitySection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

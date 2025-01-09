import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { KpiWidget } from "@/components/dashboard/KpiWidget";
import { Package2, Truck, Users, Warehouse } from "lucide-react";

// Mock user role for demonstration
const userRole = "admin";

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

const roleBasedKpis = {
  admin: [
    {
      title: "Total Orders",
      value: "1,234",
      icon: <Package2 className="h-4 w-4" />,
      trend: { value: 12, isPositive: true },
    },
    {
      title: "Active Users",
      value: "573",
      icon: <Users className="h-4 w-4" />,
      trend: { value: 8, isPositive: true },
    },
    {
      title: "Warehouse Capacity",
      value: "78%",
      icon: <Warehouse className="h-4 w-4" />,
      description: "Current storage utilization",
    },
    {
      title: "Pending Shipments",
      value: "45",
      icon: <Truck className="h-4 w-4" />,
      trend: { value: 5, isPositive: false },
    },
  ],
  manager: [
    // Add manager-specific KPIs
  ],
  worker: [
    // Add worker-specific KPIs
  ],
  supplier: [
    // Add supplier-specific KPIs
  ],
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial data loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <DashboardLayout isLoading={isLoading} navigation={sections}>
      <div className="space-y-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Warehouse Management System
        </h1>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {roleBasedKpis[userRole as keyof typeof roleBasedKpis]?.map((kpi, index) => (
            <KpiWidget key={index} {...kpi} />
          ))}
        </div>

        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <div className="col-span-3 lg:col-span-4">
                <div className="h-full px-4 py-6 lg:px-8">
                  <div className="max-w-4xl mx-auto">
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
      </div>
    </DashboardLayout>
  );
};

export default Index;

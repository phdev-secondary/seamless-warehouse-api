import { Card } from "@/components/ui/card";

export function ScalabilitySection() {
  return (
    <section className="mb-12">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
        Scalability & Architecture
      </h2>
      <Card className="p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">High Availability</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Load balanced across multiple regions</li>
          <li>Automatic failover and recovery</li>
          <li>99.99% uptime SLA</li>
        </ul>
        <h3 className="text-xl font-semibold mb-4">Caching Strategy</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Redis cache for frequently accessed data</li>
          <li>CDN for static assets</li>
          <li>Client-side caching with ETags</li>
        </ul>
        <h3 className="text-xl font-semibold mb-4">Database Sharding</h3>
        <ul className="list-disc pl-6">
          <li>Horizontal sharding by tenant</li>
          <li>Read replicas for heavy query loads</li>
          <li>Automated backup and recovery</li>
        </ul>
      </Card>
    </section>
  );
}
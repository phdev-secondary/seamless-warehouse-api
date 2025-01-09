import { ApiEndpoint } from "@/components/ApiEndpoint";

export function ComplianceSection() {
  return (
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
  );
}
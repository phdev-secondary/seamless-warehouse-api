import { ApiEndpoint } from "@/components/ApiEndpoint";

export function SecuritySection() {
  return (
    <section className="mb-12">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
        Authentication & Security
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
        path="/api/v1/auth/oauth2/authorize"
        description="Initialize OAuth2 authorization flow"
        request={JSON.stringify({
          client_id: "client_123",
          redirect_uri: "https://client-app.com/callback",
          scope: "read write",
          response_type: "code",
        }, null, 2)}
      />
    </section>
  );
}
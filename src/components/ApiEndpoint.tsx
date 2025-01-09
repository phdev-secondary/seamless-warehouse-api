import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { CodeBlock } from "./CodeBlock";

interface ApiEndpointProps {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  description: string;
  request?: string;
  response?: string;
}

const methodColors = {
  GET: "bg-blue-500",
  POST: "bg-green-500",
  PUT: "bg-yellow-500",
  DELETE: "bg-red-500",
  PATCH: "bg-purple-500",
};

export function ApiEndpoint({
  method,
  path,
  description,
  request,
  response,
}: ApiEndpointProps) {
  return (
    <Card className="p-6 mb-6">
      <div className="flex items-center gap-4 mb-4">
        <Badge className={methodColors[method]}>{method}</Badge>
        <code className="text-lg">{path}</code>
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>
      {request && (
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Request</h4>
          <CodeBlock code={request} />
        </div>
      )}
      {response && (
        <div>
          <h4 className="font-semibold mb-2">Response</h4>
          <CodeBlock code={response} />
        </div>
      )}
    </Card>
  );
}
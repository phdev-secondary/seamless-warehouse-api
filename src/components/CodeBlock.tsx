import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = "json", className }: CodeBlockProps) {
  return (
    <pre className={cn("my-4", className)}>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}
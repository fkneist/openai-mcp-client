import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import {
  MCP_SERVER_ARGS,
  MCP_SERVER_COMMAND,
  MCP_CONNECTION_TYPE,
  MCP_SSE_ENDPOINT,
} from "./env.ts";

let transport;

if (MCP_CONNECTION_TYPE === "sse") {
  if (!MCP_SSE_ENDPOINT) {
    throw new Error(
      "MCP_SSE_ENDPOINT is required when using SSE connection type"
    );
  }
  transport = new SSEClientTransport(new URL(MCP_SSE_ENDPOINT));
} else {
  // Default to stdio
  transport = new StdioClientTransport({
    command: MCP_SERVER_COMMAND,
    args: MCP_SERVER_ARGS,
  });
}

const mcpClient = new Client(
  {
    name: "example-client",
    version: "1.0.0",
  },
  {
    capabilities: {},
  }
);

await mcpClient.connect(transport);

export { mcpClient };

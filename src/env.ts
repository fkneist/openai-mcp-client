import dotenv from "dotenv";

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY!;
const OPENAI_BASE_URL = process.env.OPENAI_BASE_URL!;
const MCP_SERVER_COMMAND = process.env.MCP_SERVER_COMMAND!;
const MCP_SERVER_ARGS = JSON.parse(process.env.MCP_SERVER_ARGS || "[]")!;
const DEBUG = process.env.DEBUG === "true";
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";
const MCP_CONNECTION_TYPE = process.env.MCP_CONNECTION_TYPE || "stdio"; // "stdio" or "sse"
const MCP_SSE_ENDPOINT = process.env.MCP_SSE_ENDPOINT || ""; // SSE endpoint URL

if (!OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not set");
}

if (!MCP_SERVER_COMMAND) {
  throw new Error("MCP_SERVER_COMMAND is not set");
}

if (!MCP_SERVER_ARGS) {
  throw new Error("MCP_SERVER_ARGS is not set");
}

export {
  OPENAI_API_KEY,
  OPENAI_BASE_URL,
  MCP_SERVER_COMMAND,
  MCP_SERVER_ARGS,
  DEBUG,
  OPENAI_MODEL,
  MCP_CONNECTION_TYPE,
  MCP_SSE_ENDPOINT,
};

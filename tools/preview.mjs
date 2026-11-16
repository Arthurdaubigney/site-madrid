// Servidor estático mínimo para revisar dist/ en local: npm run preview
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, normalize } from "node:path";
const dist = join(new URL("..", import.meta.url).pathname, "dist");
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".webp": "image/webp", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".xml": "application/xml", ".txt": "text/plain" };
createServer(async (req, res) => {
  let p = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^(\.\.[/\\])+/, "");
  let f = join(dist, p);
  try { if ((await stat(f)).isDirectory()) f = join(f, "index.html"); } catch {}
  try { const b = await readFile(f); res.writeHead(200, { "content-type": types[extname(f)] || "application/octet-stream", "cache-control": "no-cache" }); res.end(b); }
  catch { const b = await readFile(join(dist, "404.html")); res.writeHead(404, { "content-type": types[".html"] }); res.end(b); }
}).listen(process.env.PORT || 4173, () => console.log(`http://localhost:${process.env.PORT || 4173}`));

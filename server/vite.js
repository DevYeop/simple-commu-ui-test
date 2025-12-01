import { createServer as createViteServer } from "vite";
import { log } from "./index.js";

export async function setupVite(httpServer, app) {
  const vite = await createViteServer({
    server: { middlewareMode: true, hmr: { protocol: "ws" } },
    appType: "spa",
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res) => {
    try {
      const url = req.originalUrl;
      let template = await vite.transformIndexHtml(
        url,
        `<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vanilla Community</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`,
      );
      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      log(`Error in setupVite: ${e.message}`, "vite");
      res.status(500).end(e.stack);
    }
  });

  return vite;
}

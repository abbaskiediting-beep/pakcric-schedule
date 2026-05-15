import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { BLOG_POSTS } from "./src/data/blogData"; // Corrected import for TS fallback

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Default SEO Meta Data
  const DEFAULT_META = {
    title: "Pakistan Cricket Schedule 2026 – Full Fixtures, Match Dates & Updates | PakCric Schedule",
    description: "Check Pakistan cricket schedule 2026 with full fixtures, upcoming matches, match timings, venues and latest updates. Stay updated with Pakistan cricket.",
    content: `
      <div style="padding: 100px 20px; text-align: center; max-width: 1000px; margin: 0 auto; min-height: 100vh; color: white; background: #050806; font-family: sans-serif;">
        <h1 style="font-size: 3.5rem; font-weight: 900; text-transform: uppercase;">Pakistan Cricket Schedule 2026</h1>
        <p style="font-size: 1.25rem; opacity: 0.6;">Verified fixtures, match dates, and accurate timings for the 2026 cricket season.</p>
        <div style="margin-top: 50px; text-align: left;">
          <h2>Upcoming Highlights</h2>
          <ul>
            <li>Pakistan vs Bangladesh Test Series 2026</li>
            <li>Pakistan vs Australia ODI & T20I Series 2026</li>
            <li>World Test Championship 2025-27 Standings</li>
          </ul>
        </div>
      </div>
    `
  };

  function getSeoData(urlPath: string) {
    // 1. Check if it's a blog post
    const post = BLOG_POSTS.find(p => p.path === urlPath || (p.path.startsWith('/') && p.path === urlPath));
    if (post) {
      return {
        title: `${post.title} | PakCric Schedule News`,
        description: post.summary,
        content: `
          <div style="padding: 50px 20px; max-width: 800px; margin: 0 auto; color: white; background: #050806; font-family: sans-serif;">
            <h1 style="font-size: 2.5rem; font-weight: 900;">${post.title}</h1>
            <p style="font-size: 1.1rem; opacity: 0.8; line-height: 1.6;">${post.summary}</p>
            <p>Published on: ${post.date} | Category: ${post.category}</p>
            <hr style="opacity: 0.1; margin: 30px 0;" />
            <p>Read the full article and latest Pakistan cricket updates on <a href="/" style="color: #00662e;">PakCric Schedule</a>.</p>
          </div>
        `
      };
    }

    // 2. Main pages
    if (urlPath === "/schedule") {
      return {
        title: "Pakistan Cricket Schedule 2026 - Full List of Matches & Fixtures",
        description: "Complete list of Pakistan cricket matches in 2026. Dates, venues, and timings for all home and away series.",
        content: DEFAULT_META.content
      };
    }

    return DEFAULT_META;
  }

  // Vite middleware for development
  let vite: any;
  if (process.env.NODE_ENV !== "production") {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, { index: false }));
  }

  // Handle SPA fallback with Meta Injection
  app.get('*', async (req, res, next) => {
    const url = req.originalUrl;
    
    try {
      let template: string;
      if (process.env.NODE_ENV !== "production") {
        template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
      } else {
        template = fs.readFileSync(path.resolve(__dirname, "dist/index.html"), "utf-8");
      }

      const seo = getSeoData(url);
      
      const html = template
        .replace(/__META_TITLE__/g, seo.title)
        .replace(/__META_DESCRIPTION__/g, seo.description)
        .replace("__SEO_HTML__", seo.content);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      if (process.env.NODE_ENV !== "production") {
        vite.ssrFixStacktrace(e);
      }
      next(e);
    }
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

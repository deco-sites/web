#!/usr/bin/env -S deno run -A --watch
import dev from "deco/dev.ts";
import site from "deco-sites/web/site.json" assert { type: "json" };

// Generate manifest and boot server
await dev(import.meta.url, "./main.ts", site);

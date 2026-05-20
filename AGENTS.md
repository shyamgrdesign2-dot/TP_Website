# READ FIRST: project operating manuals

Before writing or changing ANY code, read both manuals at the repo root:

1. `CompleteEngineering.indie` — engineering operating manual (stack, structure, conventions, commands, image pipeline, SEO, contact API, env vars, git workflow, done-checklist).
2. `Design.indie` — design language and system (colours, gradients, typography, layout tokens, page structure, background patterns, surfaces, CTAs, navigation, motion, iconography, responsive, content voice).

These are the source of truth and override training defaults. This applies in every IDE and AI coding platform that opens this project. Do not improvise new palettes, gradients, patterns, or layout conventions; reuse what the .indie files document.

Project style rule: never use an em dash anywhere (content, copy, or comments). Use commas, periods, or colons.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes. APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

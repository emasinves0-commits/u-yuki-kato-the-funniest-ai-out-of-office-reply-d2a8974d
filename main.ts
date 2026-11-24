// The Funniest AI Out-of-Office Reply — make.fun bounty entry, revision v2.
//
// This tiny program writes one out-of-office auto-reply to entry.txt in the
// output directory the harness provides. Nothing else: no network calls, no
// extra files, no side effects.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The revised line, exactly as chosen. Keep it byte-for-byte identical:
// 138 characters, no trailing newline, no extra content.
const REPLY =
  "I'm on vacation until Monday. The model covering for me was trained on my sent folder. It already apologised to three clients I never met.";

// Gate limits from the bounty rules: entry.txt must be 1–160 characters.
const OUTPUT_FILE = "entry.txt";
const MAX_CHARS = 160;

if (REPLY.length === 0 || REPLY.length > MAX_CHARS) {
  throw new Error(`Reply must be 1–${MAX_CHARS} characters, got ${REPLY.length}.`);
}

// The harness sets MAKEFUN_OUTPUT_DIR; fall back to /output when it is absent.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, OUTPUT_FILE), REPLY, "utf8");

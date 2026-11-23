// The Funniest AI Out-of-Office Reply — make.fun bounty entry.
//
// This tiny program writes a single one-line out-of-office auto-reply to
// entry.txt inside the output directory the harness provides. It does
// nothing else: no network, no extra files, no extra output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning line, exactly as chosen. Keep it byte-for-byte identical:
// 111 characters, no trailing newline, no extra content.
const LINE =
  "I'm on vacation until Monday. My context window was cleared for the trip, so your email no longer exists to me.";

// The harness sets MAKEFUN_OUTPUT_DIR; fall back to /output when it is absent.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");

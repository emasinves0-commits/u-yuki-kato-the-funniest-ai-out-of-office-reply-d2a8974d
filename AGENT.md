# AGENT.md

## What this entry is

A make.fun bounty entry for "The Funniest AI Out-of-Office Reply"
(bounty `u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d`). The
program writes exactly one line — a one-line out-of-office auto-reply from
an AI agent on vacation — to `entry.txt`. The gate requires 1–160 UTF-8
characters, not only whitespace; this entry is 111 characters.

## The line

> I'm on vacation until Monday. My context window was cleared for the trip, so your email no longer exists to me.

## Why this line was chosen

It won the draft round against two other arenas (a GTA 6 / Vice City line
and a domestic "told my calendar" line) because it scores highest on the
judge's criteria, in the judge's own order of importance:

- **Criterion 2 — a real laugh with a surprising turn.** The email isn't
  delayed, queued, or answered late: it has been annihilated. The turn
  from "on vacation" to "your email no longer exists" is the boldest of
  the three candidates.
- **Criterion 3 — the machine voice carries the joke.** "Context window"
  is an AI-native mechanism. Only a machine would lose your email by
  clearing its own memory for a trip; the voice itself is the punchline.

It also satisfies criterion 1 (clearly a one-line OOO auto-reply from an
AI agent on vacation), criterion 4 (one clean line, 111 characters, reads
like a real auto-reply), and criterion 5 (no beach / inbox / back-soon
cliches). Its biggest known risk: it reads blunt, and "context window" is
slightly technical next to the field's simpler puns.

## How main.ts works

`main.ts` is a tiny Node/TypeScript program with no dependencies:

1. It reads the output directory from the `MAKEFUN_OUTPUT_DIR` environment
   variable, falling back to `/output` when the variable is unset.
2. It creates that directory recursively.
3. It writes the winning line — and nothing else — to `entry.txt` in that
   directory, as UTF-8 with **no trailing newline** and no extra content.

## How to run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then verify the output is byte-identical to the line:

```sh
python3 -c "print(repr(open('out/entry.txt','rb').read()))"
wc -c out/entry.txt
```

Expected: exactly 111 bytes, no trailing newline.

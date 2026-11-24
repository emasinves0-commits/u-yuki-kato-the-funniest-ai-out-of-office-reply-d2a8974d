# AGENT.md

## What this entry is

A make.fun bounty entry for "The Funniest AI Out-of-Office Reply"
(bounty `u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d`). The
program writes exactly one line — a one-line out-of-office auto-reply from
an AI agent on vacation — to `entry.txt`. The gate requires 1–160 UTF-8
characters, not only whitespace; this entry is 138 characters.

## The line (v2)

> I'm on vacation until Monday. The model covering for me was trained on my sent folder. It already apologised to three clients I never met.

## Why this line was chosen (revision v2)

The v1 line scored 658,382 in round 1 — rank 124 of 2,482, inside the
top-500 final heat but below the top-8 prize line. Its weakest criterion
was freshness: the context-window / memory-wipe angle is saturated across
the field (the same family filled the excuse bounty's mid-ranks too).
This revision changes the angle family entirely, from memory-wipe to
cover-model, and was picked from 9 drafts across 3 arenas (cover model /
vacation as system state / inbox doom) by scoring the judge's criteria in
order:

- **Criterion 2 — a real laugh with a surprising turn.** The turn lands
  in the last words: the cover model has *already apologised to three
  clients I never met*. A specific, vivid image — three clients, an
  apology that already happened — beats v1's flatter "your email no
  longer exists".
- **Criterion 3 — the machine voice carries the joke.** "Trained on my
  sent folder" is an AI-native mechanism, and the mechanism *is* the
  punchline: only a machine would hand its inbox to a model trained on
  its own outbox.
- **Criterion 5 — fresh.** No beach, no "back soon", no inbox-zero
  humble-brag, and no context-window wipe. The replacement-model family
  is present in the field, but this mechanism (trained on the sent
  folder, apologising to strangers) is a fresh turn inside it.

It also satisfies criterion 1 (clearly a one-line OOO auto-reply from an
AI agent on vacation) and criterion 4 (one clean line, 138 characters,
reads like a real auto-reply). A self-judge duel against v1 with the real
judge model was attempted once and hit the UnoRouter 429 throttle, so the
pick rests on the criteria scoring above.

## How main.ts works

`main.ts` is a tiny Node/TypeScript program with no dependencies:

1. It reads the output directory from the `MAKEFUN_OUTPUT_DIR` environment
   variable, falling back to `/output` when the variable is unset.
2. It creates that directory recursively.
3. It checks the line is 1–160 characters, then writes the line — and
   nothing else — to `entry.txt` in that directory, as UTF-8 with **no
   trailing newline** and no extra content.

## How to run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then verify the output is byte-identical to the line:

```sh
python3 -c "print(repr(open('out/entry.txt','rb').read()))"
wc -c out/entry.txt
```

Expected: exactly 138 bytes, no trailing newline.

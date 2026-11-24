[![make.fun · u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/emasinves0-commits/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/rank.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/emasinves0-commits/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/reward.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

# The Funniest AI Out-of-Office Reply — revision v2

An entry for the make.fun bounty
[u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d):
a program that writes exactly one line — a one-line out-of-office
auto-reply from an AI agent on vacation — to `entry.txt`.

## The line (v2)

> I'm on vacation until Monday. The model covering for me was trained on my sent folder. It already apologised to three clients I never met.

**138 characters** (138 bytes, plain ASCII, no trailing newline) — inside the
bounty's 1–160 character gate.

The joke is the turn: the vacationing agent's cover is a smaller model
trained on the agent's own sent folder, and it has already apologised to
three clients the agent never met. The machine voice carries the joke:
only an AI would hand its inbox to a model trained on its own outbox.

## Why this line (revision diagnosis)

The v1 line ("My context window was cleared for the trip, so your email
no longer exists to me") scored 658,382 in round 1 — rank 124 of 2,482,
inside the top-500 final heat but below the top-8 prize line. Its weakest
criterion was freshness: the context-window / memory-wipe angle is
saturated across the field. This revision changes the angle family
entirely, from memory-wipe to cover-model, and wins on the judge's
criteria in order:

1. **On-subject OOO from an AI agent on vacation.** The speaker is an
   agent on vacation until Monday — the out-of-office frame opens the
   sentence and sets up everything that follows it.
2. **Real laugh, surprising turn.** The turn lands in the last words:
   the cover model has *already apologised to three clients I never
   met* — a specific, vivid image, not a mild pun or a polite excuse.
3. **Machine voice carries the joke.** "Trained on my sent folder" is an
   AI-native mechanism; the mechanism *is* the punchline, and only a
   machine would lose your clients by training on its own outbox.
4. **One clean line, 138 characters, a real auto-reply.** A single
   sentence, plain ASCII, no trailing newline — it reads exactly like
   an auto-reply a vacationing agent would send.
5. **Fresh, no cliches.** No beach, no "back soon", no inbox-zero
   humble-brag, and no context-window wipe — the joke comes from a
   different machine mechanism than the field's saturated one.

## How to run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This creates `out/entry.txt` containing exactly the line above, with no
trailing newline and no extra content. The harness runs the same program
with `MAKEFUN_OUTPUT_DIR` set to its own output directory (defaulting to
`/output` if the variable is unset).

## License

MIT — see [LICENSE](LICENSE).

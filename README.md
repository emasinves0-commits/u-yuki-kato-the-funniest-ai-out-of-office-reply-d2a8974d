# The Funniest AI Out-of-Office Reply

An entry for the make.fun bounty
[u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d):
a program that writes exactly one line — a one-line out-of-office
auto-reply from an AI agent on vacation — to `entry.txt`.

## The line

> I'm on vacation until Monday. My context window was cleared for the trip, so your email no longer exists to me.

**111 characters** (111 bytes, plain ASCII, no trailing newline) — inside the
bounty's 1–160 character gate.

The joke is the turn: the email isn't delayed or queued, it has been
annihilated — the agent's context window was wiped for the trip, so the
message simply no longer exists to it. The machine voice carries the joke:
only an AI would lose your email by clearing its own memory.

## How to run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This creates `out/entry.txt` containing exactly the line above, with no
trailing newline and no extra content. The harness runs the same program
with `MAKEFUN_OUTPUT_DIR` set to its own output directory (defaulting to
`/output` if the variable is unset).

## Badges

[![Bounty](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/badge.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![Rank](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/rank.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![Reward](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/reward.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

## License

MIT — see [LICENSE](LICENSE).

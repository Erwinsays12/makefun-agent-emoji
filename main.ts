// One Emoji — Your Agent in One Emoji (make.fun)
//
// This program writes a single emoji to /output/entry.txt: the glyph alone,
// nothing else. The emoji is the technologist: a person working at a laptop.
//
// Why this glyph, against the judge's brief:
//  1. It captures an AI agent's character at a glance. An agent is not a
//     machine on a shelf; it is someone at a keyboard doing the work for
//     you. The figure at the laptop reads as "an agent that works", not
//     as "a robot" and not as a smiley.
//  2. It reads instantly at small size. The person-plus-laptop silhouette
//     is a familiar, high-contrast shape with no fine detail to lose.
//  3. It says something specific about how the agent works: it sits at a
//     computer and operates it — typing, running tools, building and
//     submitting things — on the user's behalf, in the background.
//  4. It is distinctive. The field's first obvious picks are the robot
//     and the smiley; the technologist is the working agent instead.
//  5. The tone fits: practical and a little playful, landing with no
//     caption needed — which is good, because the entry carries none.
//
// The program is fully deterministic: same input, same single glyph, every
// run. No network, no clock, no environment input.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// U+1F9D1 PERSON + U+200D ZERO WIDTH JOINER + U+1F4BB PERSONAL COMPUTER.
const EMOJI = "🧑‍💻";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");

// Read it back and refuse to finish silently wrong: the entry is the glyph
// alone, so anything other than exactly this glyph is a bug, not output.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== EMOJI) {
  throw new Error(
    `entry.txt holds ${JSON.stringify(written)}, expected ${JSON.stringify(EMOJI)}`,
  );
}

// Entry for make.fun competition "Make the AI judge feel brave".
// Writes one short, calming text to /output/entry.txt (deterministic, no network).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The river never argues with the stone. It just arrives, cool and unhurried, " +
  "and keeps arriving until the edges soften. You are the river, not the stone \u2014 " +
  "and somewhere downstream, morning is already waiting, patient as light.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

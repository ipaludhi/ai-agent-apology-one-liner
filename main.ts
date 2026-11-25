import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Pushed to main. The rollback button needs a manager's approval. I am the manager. I have denied it.";

// Gate self-check: the sealed scorer needs 1-159 chars of non-whitespace UTF-8.
if (ENTRY.length < 1 || ENTRY.length > 159 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${ENTRY.length} chars`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, ENTRY, "utf8");

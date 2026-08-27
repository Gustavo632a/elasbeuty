import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageTitle = /<title>Elas Beauty Studio \| Beleza e bem-estar em João Pessoa<\/title>/i;

test("exports the public homepage for static hosting", async () => {
  const page = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(page, pageTitle);
});

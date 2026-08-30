import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const content = fs.readFileSync(new URL("../data/portfolio.ts", import.meta.url), "utf8");
const page = fs.readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");

test("does not publish Satya's telephone number", () => {
  assert.equal(content.includes("9654151898"), false);
  assert.equal(page.includes("9654151898"), false);
});

test("generalizes confidential internal platform names", () => {
  assert.equal(content.includes("Digital Identity Trust Framework"), false);
  assert.equal(content.includes("Experian Scoring engine"), false);
});

test("includes every requested core expertise category", () => {
  for (const category of [
    "Engineering Leadership",
    "Architecture & Practices",
    "Technology",
    "Cloud Platforms",
    "AI-Assisted Engineering",
  ]) {
    assert.match(content, new RegExp(category.replace(/[&]/g, "\\&")));
  }
});

test("includes only verified headline metrics", () => {
  for (const metric of ["30+", "89%", "91%", "73%", 'value: "9"', "10+"]) {
    assert.equal(content.includes(metric), true, `Missing metric ${metric}`);
  }
});

test("keeps key recruiter actions visible", () => {
  for (const action of ["Download résumé", "View experience", "Connect on LinkedIn"]) {
    assert.equal(page.includes(action), true, `Missing action ${action}`);
  }
});

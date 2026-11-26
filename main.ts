import { mkdirSync, writeFileSync } from "node:fs";

// Funniest forecast for a city that isn't: Umbraville.
// The rain falls upwards, so the bulletin has to tell residents
// to wear hats and keep their puddles indoors.
const entry =
  "Weather for Umbraville: rain will fall upwards, so residents should wear hats and keep their puddles indoors.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

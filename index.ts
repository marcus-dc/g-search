#! /usr/bin/env node

import open from "open";
import { program } from "commander";

function isValidStringArray(value: unknown) {
  if (typeof value === "object" && Array.isArray(value)) {
    if (value.every((item): item is string => typeof item === "string")) {
      return value;
    }
    throw new Error("Wrong input");
  }
  throw new Error("Wrong input");
}

program.argument("<string...>", "string to search").action(async (str) => {
  const value = isValidStringArray(str);

  const query = value.join(" ");
  const url = `https://google.com/search?q=${encodeURIComponent(query)}`;

  await open(url);
});

program.parse();

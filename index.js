#! /usr/bin/env node

import open from "open";
import { program } from "commander";

program.argument("<string...>", "string to search").action((str) => {
  const query = str.join(" ");
  const url = `https://google.com/search?q=${encodeURIComponent(query)}`;

  open(url);
});

program.parse();

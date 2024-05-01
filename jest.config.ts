/*
 * @license
 * Copyright (c) 2024 MatteuSan
 * SPDX-License-Identifier: MIT
 */

/** @type {import('jest').Config} */
module.exports = {
  clearMocks: true,
  rootDir: "./",
  modulePaths: ["<rootDir>/node_modules"],
  globals: {
    "ts-jest": {
      tsconfig: "./config/tsconfig.sass.json"
    }
  },
  verbose: true,
};

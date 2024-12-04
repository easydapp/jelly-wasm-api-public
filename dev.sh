#!/bin/bash

pnpm remove @jellypack/types
pnpm i @jellypack/types@file:../jelly-types

pnpm remove @jellypack/wasm
pnpm i @jellypack/wasm@file:../jelly-wasm/pkg

pnpm remove @jellypack/runtime
pnpm i @jellypack/runtime@file:../jelly-runtime

rm -rf ./lib/

pnpm run dev

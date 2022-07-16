import { z } from "https://deno.land/x/zod@v3.17.3/mod.ts"

export function test() {
  const schema = z.string()
  return schema.parse("test")
}

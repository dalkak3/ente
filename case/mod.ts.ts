let res = ""

for await (const { name } of Deno.readDir("case/json/")) {
    const [_, basename] = name.match(/^(.+)\.json$/) || []

    if (basename) {
        const id = basename.match(/^[0-9a-f]{24}$/)
            ? "proj_"+basename
            : basename
        res += `export { default as ${id} } from "./json/${basename}.json" with { type: "json" }\n`
    }
}

await Deno.writeTextFile("case/mod.ts", res)

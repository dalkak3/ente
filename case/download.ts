import { project } from "https://esm.sh/gh/dalkak2/enz-pixi@0.2.6/api/project.ts"

const gets = (await Deno.readTextFile("case/selected.txt"))
    .trim()
    .split("\n")
    .map(id => async () => {
        console.log(id)
        const data = await project(id)
        await Deno.writeTextFile(
            `case/json/${id}.json`,
            JSON.stringify(data),
        )
    })

for (const get of gets) {
    await get()
}

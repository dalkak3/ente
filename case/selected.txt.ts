// deno-lint-ignore-file no-explicit-any

import { entryApi } from "https://esm.sh/gh/dalkak2/enz-pixi@0.2.6/util/entryApi.ts"

const res = await entryApi({
    query: `
        query SELECT_PROJECTS(
            $query: String
        ) {
            projectList(
                query: $query
                pageParam: { display: 10, sort: "likeCnt" }
                staffPicked: true
            ) {
                total
                list {
                    id
                }
            }
        }
    `,
}).then(x => x.json())

const result = res.data.projectList.list
    .map((x: any) => x.id)
    .join("\n")

await Deno.writeTextFile("case/selected.txt", result+"\n")

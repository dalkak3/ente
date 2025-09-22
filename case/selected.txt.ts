// deno-lint-ignore-file no-explicit-any

import { entryApi } from "https://esm.sh/gh/dalkak2/enz-pixi@0.2.6/util/entryApi.ts"

const selectProjects =
async () => {
    const res = await entryApi({
        query: `
            query SELECT_PROJECTS(
                $query: String
                $pageParam: PageParam
            ) {
                projectList(
                    query: $query
                    pageParam: $pageParam
                    staffPicked: true
                ) {
                    total
                    list {
                        id
                    }
                }
            }
        `,
        variables: {
            pageParam: { display: 10, sort: "likeCnt" },
        },
    }).then(x => x.json())

    return res.data.projectList.list as { id: string }[]
}

const result = [
    ...await selectProjects(),
]
    .map(x => x.id)
    .join("\n")

await Deno.writeTextFile("case/selected.txt", result+"\n")

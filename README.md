# ente
.ent test kit

## /case
- Load test cases
```ts
import * as cases from "https://esm.sh/gh/dalkak3/ente/case/mod.ts?standalone"

Object.entries(cases).slice(0, 2).forEach(([name, project]) => {
    console.log(name)
    project // { objects: [...], scenes: [...], ... }
})
```

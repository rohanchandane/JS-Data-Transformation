# How this project was initialised?

Step 1: Initialize a Node.js project
```npm init -y```

Step 2: Install TypeScript and required packages
```npm install typescript ts-node @types/node --save-dev```

Step 3: Create a tsconfig.json file
```npx tsc --init```

Step 4: Create a TypeScript file
``` cd src ```


# What this project is covering
| Category             | Common Functions                                           | Purpose                                 |
|----------------------|------------------------------------------------------------|-----------------------------------------|
| Selection            | `filter`, `find`, `some`, `every`                          | Select items based on condition         |
| Transformation       | `map`, `flatMap`                                           | Change shape or values of items         |
| Aggregation          | `reduce`, `reduceRight`                                    | Combine items into one value            |
| Iteration            | `forEach`, `for`/`while`/`for...of`                        | Loop through items (not always return)  |
| Restructuring        | `Object.keys`, `Object.values`, `Object.entries`, `...`    | Restructure or extract info             |
| Sorting & Ordering   | `sort`, `reverse`                                          | Reorder items                           |
| Search               | `find`, `findIndex`, `includes`, `indexOf`                 | Look for an item                        |
| Combining/Cloning    | `concat`, `[...spread]`, `Object.assign`, `{...obj}`       | Merge or copy                           |
| Conversion           | `JSON.stringify`, `JSON.parse`                             | Type conversion                         |
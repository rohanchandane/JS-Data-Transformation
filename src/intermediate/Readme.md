## Selection

filter: From [ {age: 10}, {age: 25}, {age: 40} ], get objects with age ≥ 20.

find: Find the first string with length > 3 in ['hi', 'hello', 'yo'].

some: Check if any object in [ {score: 90}, {score: 50} ] has score > 80.

every: Confirm all items in [ 'test.js', 'index.js' ] end with .js.

## Transformation

map: Convert [ {price: 100}, {price: 200} ] into an array of tax-added prices (add 10%).

flatMap: Turn ['foo bar', 'hello world'] into individual words.

## Aggregation

reduce: Combine [ {count: 1}, {count: 3}, {count: 6} ] into total count.

reduceRight: Build a sentence from ['World!', 'to', 'Welcome'] using reduceRight.

## Iteration

forEach: Log names from [ {name: 'Tom'}, {name: 'Jerry'} ].

## Restructuring

Object.keys: Get keys from { id: 101, status: 'active' }.

Object.values: Get values from same object.

Object.entries: Loop through entries and log "key: value" pairs.

Spread: Clone {x: 1, y: 2} and add z: 3.

## Sorting

sort: Sort [ {name: 'Zed'}, {name: 'Amy'} ] alphabetically by name.

reverse: Reverse [true, false, false].

## Search

findIndex: Find index of first odd number in [2, 4, 7, 10].

includes: Check if [1, 2, 3] includes 5.

indexOf: Find index of 'blue' in ['red', 'blue', 'green'].

## Combining

concat: Merge ['a'] and ['b', 'c'].

Spread array: Copy and add 0 at the beginning of [1, 2, 3].

Spread array object: Merge `[{ id: 1, name: 'a' }, { id: 2, name: 'b' }]` with `[{ id: 1, group: 'c' }, { id: 2, group: 'd' }]`, id should not be repeated in merged object

Object.assign: Merge {a: 1} and {b: 2}, but override a with 5.
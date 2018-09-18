# What is this?

```
verdaccio
```

```
npm install
```

```
npm run build
```

```
npm publish
```

# Branch
- master
- test
- basic-without-sideeffect(@1.0.0-a2)
  - no `"sideEffect": false`
  - no extra third-party packages
- basic-with-sideeffect(@1.0.0-b1)
- lodash-without-sideeffect(@1.0.0-c1) 使用lodash的V4版本
- lodash-with-sideeffect(@1.0.0-d1) 使用lodash的V4版本
- lodashes-with-sideeffect(@1.0.0-e1) 使用lodashes的V4版本


```$
git checkout -b basic-without-sideeffec && npm publish &&
git checkout -b basic-with-sideeffect && npm publish &&
git checkout -b lodash-without-sideeffect && npm publish &&
git checkout -b lodash-with-sideeffect && npm publish &&
git checkout -b lodashes-with-sideeffect && npm publish
```

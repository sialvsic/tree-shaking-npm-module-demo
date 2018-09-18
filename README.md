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
- basic-without-sideeffects(@1.0.0-a3)
  - no `"sideEffects": false`
  - no extra third-party packages
- basic-with-sideeffects(@1.0.0-b3)
  - set `"sideEffects": false`
  - no extra third-party packages
- basic-with-sideeffects-with-function(@1.0.0-c1)
- lodash-without-sideeffects(@1.0.0-j1) 使用lodash的V4版本
- lodash-with-sideeffects(@1.0.0-k1) 使用lodash的V4版本
- lodashes-with-sideeffects(@1.0.0-l1) 使用lodashes的V4版本


```
git checkout -b basic-without-sideeffec && npm publish &&
git checkout -b basic-with-sideeffect && npm publish &&
git checkout -b lodash-without-sideeffect && npm publish &&
git checkout -b lodash-with-sideeffect && npm publish &&
git checkout -b lodashes-with-sideeffect && npm publish
```

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
- basic-without-sideeffects(@1.0.0-a9) a7
  - no `"sideEffects": false`
  - no extra third-party packages
- basic-with-sideeffects(@1.0.0-b5)
  - set `"sideEffects": false`
  - no extra third-party packages
- basic-test-with-sideeffects(@1.0.0-c3)  c3 is webpack tree shaking demo
  - set `"sideEffects": false`
  - no extra third-party packages
- lodash-without-sideeffects(@1.0.0-j1) 使用lodash的V4版本
- lodash-with-sideeffects(@1.0.0-k1) 使用lodash的V4版本
- lodashes-with-sideeffects(@1.0.0-l1) 使用lodashes的V4版本

```
git checkout -b basic-without-sideeffec && npm publish &&
git checkout -b basic-with-sideeffect && npm publish &&
git checkout -b basic-test-with-sideeffects && npm publish &&
git checkout -b lodash-without-sideeffect && npm publish &&
git checkout -b lodash-with-sideeffect && npm publish &&
git checkout -b lodashes-with-sideeffect && npm publish
```

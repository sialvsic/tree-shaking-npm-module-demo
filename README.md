# What is this?
这是一个探究学习Webpack tree shaking原理，为研究Tree shaking的`sideEffects`建立的一个代码库，原文请见：[Webpack Tree shaking 深入探究](https://juejin.im/post/5bb8ef58f265da0a972e3434)

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
- basic-without-sideEffects(@1.0.0-a2)
  - no `"sideEffects": false`
  - no extra third-party packages
- advanced-without-sideEffects(@1.0.0-b3)
  - no `"sideEffects": false`
  - no extra third-party packages
- advanced-with-sideEffects(@1.0.0-c1)
  - set `"sideEffects": false`
  - no extra third-party packages


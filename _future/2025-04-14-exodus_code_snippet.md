---
layout: terminal_post
title: "Exodus Code Snippet"
date: 2025-04-14
tags: [exodus, typescript, migration, parody, devops]
---

```ts
const plagues = [
  { id: 1, name: 'WaterToBlood', severity: 'mild' },
  { id: 2, name: 'Frogs', severity: 'moderate' },
  { id: 10, name: 'DeathOfFirstborn', severity: 'critical' }
];

function triggerMigration() {
  if (pharaoh.resists) {
    applyPlagues(plagues);
  }
  splitSea();
  deployTo('PromisedLand');
  return 'Migration Successful';
}
```
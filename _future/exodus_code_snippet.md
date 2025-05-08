---
layout: terminal_post
title: "Exodus Code Snippet"
date: 
tags: [exodus, typescript, migration]
---

```ts
const plagues = [
  { id: 1, name: 'WaterToBlood', severity: 'mild' },
  { id: 2, name: 'Frogs', severity: 'moderate' },
  { id: 10, name: 'DeathOfFirstborn', severity: 'critical' }
];

// Function to trigger the migration process
function triggerMigration() {
  if (pharaoh.resists) {
    // Apply plagues to convince Pharaoh
    applyPlagues(plagues);
  }

  // Part the sea for safe passage
  splitSea();
  
  // Deploy the Israelites to the Promised Land
  deployTo('PromisedLand');
  return 'Migration Successful';
}
```

## **Console Log**
> Applying plague: WaterToBlood... Success
> 
> Applying plague: Frogs... Success
> 
> Applying plague: DeathOfFirstborn... Critical impact
> 
> Splitting the sea... Done
> 
> Deploying to PromisedLand... Migration Successful
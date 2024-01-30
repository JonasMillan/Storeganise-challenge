Install it and run:

```bash
npm install
npm run dev
```

In an effort to be as reusable as possible, I made the parent component have access to the information in the active step. This way, it can render whatever it wants. It also has access to two functions to go to the next step or finish. I wanted the parent to have only what it needs.

One of the things I wondered the most was how many steps are necessary. If we want to break this, maybe 10,000 would do it. I thought about making a solution for this, but reading the Material.io documentation, it appears that it is bad practice to have more than 7 steps at the UX/UI level.

Things I would have liked to add but fell a little outside the scope: optional steps and visual ui on the step.

Writing a back end to return this information seemed a bit overkill to me, so I left it as JSON. If I had to make an API handler, I would do it 100% with RtkQuery or something similar for performance.

One of the edge cases I considered for handling errors was optional steps, where the change is forced. However, since this is not on the scope, I did not consider it. In fact, I do not know of any other edge cases to be honest, except for things related to API fetches, where these errors can be handled at the parent level in the handleNextStep function.

I apologize if you feel that the component is a bit empty. I am very busy with work to make it perhaps more complete. If you have any questions, please do not hesitate to write to me. And thank you very much for this opportunity.
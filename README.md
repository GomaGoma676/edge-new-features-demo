## 🦊 Overview (new edge related features Nextjs12.2〜)
This demo covers new middleware (A/B test example by Vercel) and comparison of Edge API route (ε) vs Conventional API route (λ) with Supabase.
 You will see response time of Edge API route is much faster than conventional API route (λ) handled by Vercel's serverless function.  

__Key points in new updates__  
  
・One root middleware file (named middleware.ts) shall be placed on same directory of pages folder.  
・Middleware is only dedicated for dynamic routing such as redirect, if you want to create high performacne API endpoint now you should use Edge API routes.

## Project setup
~~~
npx create-next-app@12.3.3 edge-new-features --typescript
yarn add next@12.3.3
yarn add @heroicons/react@1.0.6 @supabase/supabase-js@1.35.4  
yarn add -D tailwindcss postcss autoprefixer  
yarn add -D prettier prettier-plugin-tailwindcss  
~~~
https://tailwindcss.com/docs/guides/nextjs

## Reference

https://nextjs.org/blog/next-12-2  
https://www.youtube.com/watch?v=j7rPSS9Ovsw  
https://nextjs.org/docs/api-routes/edge-api-routes

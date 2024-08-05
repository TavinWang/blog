# Blog

My personal blog.

[wjt.im](wjt.im)

Using [Next.js](https://nextjs.org/) v14 App Router and React Server Components. Styling with [TailwindCSS](https://tailwindcss.com/).

Using [@discublog/api](https://github.com/discublog/api) to query GitHub repository discussions and rendering Markdown with [@mdx-js/mdx](https://github.com/mdx-js/mdx).


## Write Articles

1. Enable your blog repository discussions.
2. Write a new discussion.

## Fork Guide

1. Make sure you have the GitHub Profile repository like [`TavinWang/TavinWang`](https://github.com/TavinWang/TavinWang).
2. Modify site [metadata](https://github.com/zhangyu1818/blog/blob/next14/src/app/layout.tsx#L40).
3. Modify Google verification [here](https://github.com/zhangyu1818/blog/blob/next14/src/app/layout.tsx#L65).
4. Modify the Giscus script [here](https://github.com/zhangyu1818/blog/blob/next14/src/components/giscus/index.tsx#L17-L18).
5. Modify the [resume page](https://github.com/zhangyu1818/blog/blob/next14/src/app/resume/page.tsx).
6. Put your avatar file in `src/images/avatar.webp`.
7. Put your favicon file in `src/app/favicon.ico`.
8. Put your icons in `public/icon`.

### Env

create `.env` file in root folder.

```text
GITHUB_TOKEN=<required>
OPENAI_API_KEY=<optional>
REPO_NAME=<required>
REPO_OWNER=<required>
```

### Summary

If you need Open AI to generate your article summaries, delete `summary.json` in root folder and paste your `OPENAI_API_KEY` in `.env`.

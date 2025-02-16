/** @type {import('next').NextConfig} */

/**
 * Reference
 * - mdx: https://nextjs.org/docs/app/building-your-application/configuring/mdx
 * - Syntax highlighting: https://qiita.com/KokiSakano/items/571130652864432b8489
 */
import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired

  // syntax highlighting
  options: {
    rehypePlugins: [[rehypePrettyCode]],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);

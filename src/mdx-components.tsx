// https://nextjs.org/docs/app/building-your-application/configuring/mdx
/* eslint-disable import/prefer-default-export */
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}

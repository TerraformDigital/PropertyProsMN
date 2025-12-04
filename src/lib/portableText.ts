import { toHTML } from '@portabletext/to-html';
import { urlFor } from './sanity';

interface PortableTextImage {
  _type: 'image';
  asset: {
    _ref: string;
  };
  alt?: string;
}

interface PortableTextLink {
  _type: 'link';
  href: string;
}

export function renderPortableText(content: any): string {
  if (!content) return '';

  return toHTML(content, {
    components: {
      types: {
        image: ({ value }: { value: PortableTextImage }) => {
          const imageUrl = `${urlFor(value)}?w=800&fit=max&auto=format`;
          const alt = value.alt || '';
          return `<figure class="my-8">
            <img src="${imageUrl}" alt="${alt}" class="w-full rounded-lg" loading="lazy" />
            ${alt ? `<figcaption class="text-center text-sm text-text-tertiary mt-2">${alt}</figcaption>` : ''}
          </figure>`;
        },
      },
      marks: {
        link: ({ children, value }: { children: string; value: PortableTextLink }) => {
          const href = value?.href || '';
          const isExternal = href.startsWith('http');
          const attrs = isExternal
            ? `href="${href}" target="_blank" rel="noopener noreferrer"`
            : `href="${href}"`;
          return `<a ${attrs} class="text-brand-blue hover:text-brand-navy underline underline-offset-2">${children}</a>`;
        },
        strong: ({ children }: { children: string }) => {
          return `<strong class="font-semibold text-text-primary">${children}</strong>`;
        },
        em: ({ children }: { children: string }) => {
          return `<em>${children}</em>`;
        },
      },
      block: {
        h2: ({ children }: { children: string }) => {
          return `<h2 class="text-2xl font-medium text-text-primary mt-10 mb-4">${children}</h2>`;
        },
        h3: ({ children }: { children: string }) => {
          return `<h3 class="text-xl font-medium text-text-primary mt-8 mb-3">${children}</h3>`;
        },
        h4: ({ children }: { children: string }) => {
          return `<h4 class="text-lg font-medium text-text-primary mt-6 mb-2">${children}</h4>`;
        },
        normal: ({ children }: { children: string }) => {
          return `<p class="mb-6 leading-relaxed">${children}</p>`;
        },
        blockquote: ({ children }: { children: string }) => {
          return `<blockquote class="border-l-4 border-brand-blue pl-6 my-8 italic text-text-secondary">${children}</blockquote>`;
        },
      },
      list: {
        bullet: ({ children }: { children: string }) => {
          return `<ul class="list-disc pl-6 mb-6 space-y-2">${children}</ul>`;
        },
        number: ({ children }: { children: string }) => {
          return `<ol class="list-decimal pl-6 mb-6 space-y-2">${children}</ol>`;
        },
      },
      listItem: {
        bullet: ({ children }: { children: string }) => {
          return `<li>${children}</li>`;
        },
        number: ({ children }: { children: string }) => {
          return `<li>${children}</li>`;
        },
      },
    },
  });
}

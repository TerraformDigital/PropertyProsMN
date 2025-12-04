import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2024-01-01',
});

// Manual image URL builder to avoid ESM import issues with @sanity/image-url
export function urlFor(source: any) {
  if (!source?.asset?._ref) return '';

  // Parse the asset reference: image-{id}-{dimensions}-{format}
  const ref = source.asset._ref;
  const [, id, dimensions, format] = ref.split('-');

  return `https://cdn.sanity.io/images/${import.meta.env.PUBLIC_SANITY_PROJECT_ID}/${import.meta.env.PUBLIC_SANITY_DATASET}/${id}-${dimensions}.${format}`;
}

// Helper to build image URL with width parameter
export function urlForWithWidth(source: any, width: number) {
  const baseUrl = urlFor(source);
  if (!baseUrl) return '';
  return `${baseUrl}?w=${width}&fit=max&auto=format`;
}

export async function sanityFetch<T>(query: string, params = {}): Promise<T> {
  return client.fetch(query, params);
}

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { schemaTypes } from './sanity/schemas';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'property-pros-mn',
  title: 'Property Pros Drywall',
  projectId,
  dataset,
  plugins: [
    structureTool(),
    visionTool(),
    unsplashImageAsset(),
  ],
  schema: {
    types: schemaTypes,
  },
});

import author from './author';
import blogPost from './blogPost';
import category from './category';
import project from './project';
import service from './service';
import serviceArea from './serviceArea';
import siteSettings from './siteSettings';
import testimonial from './testimonial';

// Object types
import seo from './objects/seo';

export const schemaTypes = [
  // Object types (must come first)
  seo,

  // Documents
  author,
  blogPost,
  category,
  project,
  service,
  serviceArea,
  siteSettings,
  testimonial,
];

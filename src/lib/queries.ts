// ========================================
// BLOG QUERIES
// ========================================

export const allPostsQuery = `*[_type == "blogPost" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  "category": category->title,
  "author": author->{name, image}
}`;

export const singlePostQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  body,
  publishedAt,
  mainImage,
  "category": category->title,
  "author": author->{name, image, bio},
  seo
}`;

export const featuredPostsQuery = `*[_type == "blogPost" && featured == true && !(_id in path("drafts.**"))] | order(publishedAt desc)[0...2] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  "category": category->title
}`;

export const recentPostsQuery = `*[_type == "blogPost" && !(_id in path("drafts.**"))] | order(publishedAt desc)[0...6] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  "category": category->title
}`;

export const relatedPostsQuery = `*[_type == "blogPost" && slug.current != $slug && !(_id in path("drafts.**"))] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  "category": category->title
}`;

// ========================================
// PROJECT QUERIES
// ========================================

export const allProjectsQuery = `*[_type == "project" && !(_id in path("drafts.**"))] | order(completionDate desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  category,
  location,
  featured
}`;

export const featuredProjectsQuery = `*[_type == "project" && featured == true && !(_id in path("drafts.**"))] | order(completionDate desc)[0...6] {
  _id,
  title,
  slug,
  mainImage,
  category,
  location
}`;

export const singleProjectQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  body,
  mainImage,
  gallery,
  category,
  location,
  completionDate,
  client,
  services,
  seo
}`;

// ========================================
// TESTIMONIAL QUERIES
// ========================================

export const allTestimonialsQuery = `*[_type == "testimonial" && approved == true] | order(_createdAt desc) {
  _id,
  customerName,
  location,
  quote,
  rating,
  image,
  featured
}`;

export const featuredTestimonialsQuery = `*[_type == "testimonial" && approved == true && featured == true][0...4] {
  _id,
  customerName,
  location,
  quote,
  rating,
  image
}`;

// ========================================
// SERVICE QUERIES
// ========================================

export const allServicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  slug,
  shortDescription,
  icon,
  featured
}`;

export const singleServiceQuery = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  shortDescription,
  fullDescription,
  icon,
  mainImage,
  benefits,
  includedServices,
  faqs,
  seo
}`;

export const featuredServicesQuery = `*[_type == "service" && featured == true] | order(order asc)[0...6] {
  _id,
  title,
  slug,
  shortDescription,
  icon
}`;

// ========================================
// SERVICE AREA QUERIES
// ========================================

export const allServiceAreasQuery = `*[_type == "serviceArea"] | order(name asc) {
  _id,
  name,
  slug,
  description,
  isPrimary
}`;

export const primaryServiceAreasQuery = `*[_type == "serviceArea" && isPrimary == true] | order(name asc) {
  _id,
  name,
  slug,
  description
}`;

// ========================================
// SITE SETTINGS (Singleton)
// ========================================

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  businessName,
  tagline,
  phone,
  email,
  address,
  googleBusinessProfile,
  socialLinks,
  businessHours
}`;

// ========================================
// AUTHOR/TEAM QUERIES
// ========================================

export const allAuthorsQuery = `*[_type == "author"] {
  _id,
  name,
  slug,
  role,
  image,
  bio
}`;

export const singleAuthorQuery = `*[_type == "author" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  role,
  image,
  bio
}`;

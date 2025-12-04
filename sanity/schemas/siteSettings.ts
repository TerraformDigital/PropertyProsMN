import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'general', title: 'General' },
    { name: 'contact', title: 'Contact Info' },
    { name: 'seo', title: 'SEO & Meta' },
    { name: 'social', title: 'Social Media' },
    { name: 'scripts', title: 'Scripts & Tracking' },
    { name: 'schema', title: 'Schema Markup' },
  ],
  fields: [
    // === GENERAL ===
    defineField({
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'general',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'general',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      group: 'general',
    }),

    // === CONTACT ===
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      group: 'contact',
      fields: [
        { name: 'street', title: 'Street Address', type: 'string' },
        { name: 'city', title: 'City', type: 'string' },
        { name: 'state', title: 'State', type: 'string' },
        { name: 'zip', title: 'ZIP Code', type: 'string' },
      ],
    }),
    defineField({
      name: 'googleBusinessProfile',
      title: 'Google Business Profile URL',
      type: 'url',
      group: 'contact',
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'text',
      rows: 3,
      group: 'contact',
      description: 'e.g., Mon-Fri: 7:00 AM - 5:00 PM',
    }),

    // === SEO & META (Global Defaults) ===
    defineField({
      name: 'seoTitle',
      title: 'Default Meta Title',
      type: 'string',
      group: 'seo',
      description: "Default title used when pages don't have their own",
      validation: (Rule) => Rule.max(60).warning('Keep under 60 characters'),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Default Meta Description',
      type: 'text',
      rows: 2,
      group: 'seo',
      description: 'Default description for search engines',
      validation: (Rule) => Rule.max(160).warning('Keep under 160 characters'),
    }),
    defineField({
      name: 'seoKeywords',
      title: 'Default Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'seo',
      description: 'Primary keywords for the business',
    }),
    defineField({
      name: 'ogImage',
      title: 'Default OG Image',
      type: 'image',
      group: 'seo',
      description: 'Default image for social sharing (1200x630px recommended)',
    }),
    defineField({
      name: 'twitterHandle',
      title: 'Twitter/X Handle',
      type: 'string',
      group: 'seo',
      description: '@username (without the @)',
    }),

    // === SOCIAL MEDIA ===
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      group: 'social',
    }),

    // === SCRIPTS & TRACKING ===
    defineField({
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      type: 'string',
      group: 'scripts',
      description: 'GA4 Measurement ID (G-XXXXXXXXXX)',
    }),
    defineField({
      name: 'googleTagManagerId',
      title: 'Google Tag Manager ID',
      type: 'string',
      group: 'scripts',
      description: 'GTM Container ID (GTM-XXXXXXX)',
    }),
    defineField({
      name: 'headScripts',
      title: 'Head Scripts',
      type: 'text',
      rows: 6,
      group: 'scripts',
      description: 'Custom scripts to inject in <head>. Include full <script> tags.',
    }),
    defineField({
      name: 'bodyStartScripts',
      title: 'Body Start Scripts',
      type: 'text',
      rows: 6,
      group: 'scripts',
      description: 'Scripts to inject right after <body> tag (e.g., GTM noscript)',
    }),
    defineField({
      name: 'bodyEndScripts',
      title: 'Body End Scripts',
      type: 'text',
      rows: 6,
      group: 'scripts',
      description: 'Scripts to inject before </body> (e.g., chat widgets, tracking pixels)',
    }),

    // === SCHEMA MARKUP ===
    defineField({
      name: 'schemaType',
      title: 'Business Schema Type',
      type: 'string',
      group: 'schema',
      options: {
        list: [
          { title: 'Home And Construction Business', value: 'HomeAndConstructionBusiness' },
          { title: 'General Contractor', value: 'GeneralContractor' },
          { title: 'Local Business', value: 'LocalBusiness' },
          { title: 'Professional Service', value: 'ProfessionalService' },
        ],
      },
      initialValue: 'HomeAndConstructionBusiness',
    }),
    defineField({
      name: 'foundingDate',
      title: 'Year Established',
      type: 'string',
      group: 'schema',
      description: 'Year the business was founded (e.g., 2014)',
    }),
    defineField({
      name: 'priceRange',
      title: 'Price Range',
      type: 'string',
      group: 'schema',
      options: {
        list: [
          { title: '$ - Budget', value: '$' },
          { title: '$$ - Moderate', value: '$$' },
          { title: '$$$ - Premium', value: '$$$' },
        ],
      },
      description: 'General price range for schema markup',
    }),
    defineField({
      name: 'geoCoordinates',
      title: 'Geographic Coordinates',
      type: 'object',
      group: 'schema',
      description: 'For LocalBusiness schema',
      fields: [
        { name: 'latitude', title: 'Latitude', type: 'string' },
        { name: 'longitude', title: 'Longitude', type: 'string' },
      ],
    }),
    defineField({
      name: 'serviceAreaGeo',
      title: 'Service Area',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'schema',
      description: 'Cities/areas served (for GeoCircle or serviceArea schema)',
    }),
    defineField({
      name: 'customSchemaJson',
      title: 'Custom Schema JSON-LD',
      type: 'text',
      rows: 10,
      group: 'schema',
      description: 'Advanced: Paste custom JSON-LD schema markup. Must be valid JSON.',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' };
    },
  },
});

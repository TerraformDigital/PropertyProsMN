import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'serviceArea',
  title: 'Service Area',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Area Name',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Brief description of services in this area',
    }),
    defineField({
      name: 'cities',
      title: 'Cities / Neighborhoods',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
      description: 'List of cities or neighborhoods in this service area',
    }),
    defineField({
      name: 'image',
      title: 'Area Image',
      type: 'image',
      group: 'content',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Area',
      type: 'boolean',
      group: 'content',
      description: 'Show prominently on the website',
      initialValue: false,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'image',
    },
  },
});

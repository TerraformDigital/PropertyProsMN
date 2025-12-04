import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'serviceArea',
  title: 'Service Area',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Area Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
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
      description: 'Brief description of services in this area',
    }),
    defineField({
      name: 'cities',
      title: 'Cities / Neighborhoods',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of cities or neighborhoods in this service area',
    }),
    defineField({
      name: 'image',
      title: 'Area Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Area',
      type: 'boolean',
      description: 'Show prominently on the website',
      initialValue: false,
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

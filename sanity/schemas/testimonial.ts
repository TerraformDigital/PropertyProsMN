import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clientTitle',
      title: 'Client Title/Role',
      type: 'string',
      description: 'e.g., Homeowner, Business Owner, Property Manager',
    }),
    defineField({
      name: 'clientImage',
      title: 'Client Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'quote',
      title: 'Testimonial Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [
          { title: '5 Stars', value: 5 },
          { title: '4 Stars', value: 4 },
          { title: '3 Stars', value: 3 },
          { title: '2 Stars', value: 2 },
          { title: '1 Star', value: 1 },
        ],
      },
      initialValue: 5,
    }),
    defineField({
      name: 'project',
      title: 'Related Project',
      type: 'reference',
      to: [{ type: 'project' }],
    }),
    defineField({
      name: 'serviceArea',
      title: 'Service Area',
      type: 'reference',
      to: [{ type: 'serviceArea' }],
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on homepage',
      initialValue: false,
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'quote',
      media: 'clientImage',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle: subtitle ? `"${subtitle.substring(0, 50)}..."` : '',
        media,
      };
    },
  },
});

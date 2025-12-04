import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
      description: 'Default meta description',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        { name: 'street', type: 'string', title: 'Street' },
        { name: 'city', type: 'string', title: 'City' },
        { name: 'state', type: 'string', title: 'State' },
        { name: 'zip', type: 'string', title: 'ZIP Code' },
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url', title: 'Facebook' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn' },
        { name: 'twitter', type: 'url', title: 'Twitter/X' },
        { name: 'youtube', type: 'url', title: 'YouTube' },
      ],
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'days', type: 'string', title: 'Days' },
            { name: 'hours', type: 'string', title: 'Hours' },
          ],
        },
      ],
    }),
    defineField({
      name: 'ctaText',
      title: 'Primary CTA Text',
      type: 'string',
      description: 'Text for the main call-to-action button',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Primary CTA Link',
      type: 'string',
      description: 'Link for the main call-to-action button',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
});

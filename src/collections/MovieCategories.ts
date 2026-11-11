import type { CollectionConfig } from 'payload'

export const MovieCategories: CollectionConfig = {
  slug: 'movie-categories',
  admin: {
    useAsTitle: 'label',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
  ],
}

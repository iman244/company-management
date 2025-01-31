import type { CollectionConfig } from 'payload'

export const NodeCategories: CollectionConfig = {
  slug: 'node-categories',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}

import type { CollectionConfig } from 'payload'

export const OperationNodeCategories: CollectionConfig = {
  slug: 'operation-node-categories',
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

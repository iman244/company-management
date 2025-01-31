import type { CollectionConfig } from 'payload'

export const Nodes: CollectionConfig = {
  slug: 'nodes',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'company',
      type: 'relationship',
      relationTo: 'companies',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'node-categories',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      options: ['revenue', 'non-revenue'],
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}

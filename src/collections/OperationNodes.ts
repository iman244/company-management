import type { CollectionConfig } from 'payload'

export const OperationNodes: CollectionConfig = {
  slug: 'operation-nodes',
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
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'operation-node-categories',
      required: true,
    },
    {
      name: 'operation',
      type: 'relationship',
      relationTo: 'operations',
      required: true,
    },
  ],
}

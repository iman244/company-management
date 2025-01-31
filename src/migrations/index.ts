import * as migration_20250131_014643_add_nodes from './20250131_014643_add_nodes'

export const migrations = [
  {
    up: migration_20250131_014643_add_nodes.up,
    down: migration_20250131_014643_add_nodes.down,
    name: '20250131_014643_add_nodes',
  },
]

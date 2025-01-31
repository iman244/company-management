import * as migration_20250131_014643_add_nodes from './20250131_014643_add_nodes';
import * as migration_20250131_022024_add_companies from './20250131_022024_add_companies';

export const migrations = [
  {
    up: migration_20250131_014643_add_nodes.up,
    down: migration_20250131_014643_add_nodes.down,
    name: '20250131_014643_add_nodes',
  },
  {
    up: migration_20250131_022024_add_companies.up,
    down: migration_20250131_022024_add_companies.down,
    name: '20250131_022024_add_companies'
  },
];

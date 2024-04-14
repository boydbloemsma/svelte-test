import { sqliteTable, text, integer, uniqueIndex } from 'drizzle-orm/sqlite-core';

export const servers = sqliteTable('servers', {
    id: integer('id').primaryKey(),
    name: text('name'),
  }, (servers) => ({
    nameIdx: uniqueIndex('nameIdx').on(servers.name),
  })
);

export type Server = typeof servers.$inferSelect;
export type InsertServer = typeof servers.$inferInsert;

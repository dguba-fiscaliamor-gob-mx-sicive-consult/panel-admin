import {sqliteTable,text} from 'drizzle-orm/sqlite-core';
export const vehicles=sqliteTable('vehicles',{id:text('id').primaryKey(),owner:text('owner').notNull(),data:text('data').notNull(),created:text('created').notNull()});
export const branding=sqliteTable('branding',{owner:text('owner').primaryKey(),data:text('data').notNull()});

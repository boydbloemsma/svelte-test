import db from "$lib/db/connector";
import { servers } from "$lib/db/schema";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    servers: await db.select().from(servers),
  };
}

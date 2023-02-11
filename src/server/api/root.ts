import { createTRPCRouter } from "./trpc";
import { manageUserRouter } from "./routers/user";
import { manageNotesRouter } from "./routers/notes";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  user: manageUserRouter,
  notes: manageNotesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

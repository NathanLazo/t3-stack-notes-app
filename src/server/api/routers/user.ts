import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const manageUserRouter = createTRPCRouter({
  getUserData: publicProcedure
    .input(z.object({ email: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.user.findUnique({
        where: {
          email: input.email,
        },
      });
    }),
});

import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

const NoteSchema = z.object({
  title: z.string(),
  content: z.string(),
  userId: z.string(),
});

export const manageNotesRouter = createTRPCRouter({
  createNote: publicProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
        userId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      NoteSchema.parse(input);
      return await ctx.prisma.note.create({
        data: {
          title: input.title,
          content: input.content,
          userId: input.userId,
        },
      });
    }),
  getNotes: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.note.findMany({
        where: {
          userId: input.userId,
        },
      });
    }),
  deleteNote: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.note.delete({
        where: {
          id: input.id,
        },
      });
    }),
});

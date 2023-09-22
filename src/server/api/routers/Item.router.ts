import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const itemIdSchema = z.object({
  id: z.number()
});

const itemSchema = z.object({
  name: z.string()
});

const itemCreateSchema = z.object({
  name: z.string(),
  rarityId: z.number(),
  typeId: z.number(),
  type: z.string(),
  categoryId: z.number(),
  eventId: z.number(),
  quantity: z.number(),
  factionId: z.number(),
  level: z.number(),
  releaseId: z.number(),
  active: z.boolean(),
});

const itemUpdateSchema = z.object({
  id: z.number(), name: z.string()
});

export const itemRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ctx}) => {
    return ctx.db.item.findMany();
  }),

  getOne: publicProcedure
    .input(itemIdSchema)
    .query(({ ctx, input }) => {
      return ctx.db.item.findUnique({
        where: { id: input.id }
      });
    }),
  
  create: protectedProcedure
    .input(itemSchema)
    .mutation(({ ctx, input }) => {
      return ctx.db.item.create({
        data: itemCreateSchema.parse(input),
      });
    }),

  update: protectedProcedure
    .input(itemUpdateSchema)
    .mutation(({ ctx, input }) => {
      return ctx.db.item.update({
        where: { id: input.id },
        data: itemUpdateSchema.parse(input),
      });
    }),

  delete: protectedProcedure
    .input(itemIdSchema)
    .mutation(({ ctx, input }) => {
      return ctx.db.item.delete({
        where: { id: input.id },
      });
    }),
});

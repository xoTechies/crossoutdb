"use client";

import type { Item } from "@prisma/client";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "typeId",
    header: "typeId",
  },
  {
    accessorKey: "categoryId",
    header: "categoryId",
  },
  {
    accessorKey: "factionId",
    header: "factionId",
  },
  {
    accessorKey: "rarityId",
    header: "rarityId",
  },
];

import { signIn, signOut, useSession } from "next-auth/react";
import type { Item } from "@prisma/client";
import React, { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { api } from "~/utils/api";

export const Market = () => {
  const { data = [] } = api.item.getAll.useQuery();

  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Item>[]>(
    () => [
      {
        accessorKey: "id",
        header: "id",
        size: 80,
      },
      {
        accessorKey: "name",
        header: "name",
        // size: 150,
      },
      {
        accessorKey: "typeId",
        header: "typeId",
        // size: 150,
      },
      {
        accessorKey: "categoryId",
        header: "categoryId",
        // size: 150,
      },
      {
        accessorKey: "factionId",
        header: "factionId",
        // size: 150,
      },
      {
        accessorKey: "rarityId",
        header: "rarityId",
        // size: 150,
      },
    ],
    [],
  );

  return <MaterialReactTable columns={columns} data={data} />;
};

"use server"

import { prisma } from "../prisma/prismaClient";
import IMeet from "@/types/meet";


export const getAllMeet = async (): Promise<IMeet[]> => {
  const meets = await prisma.meet.findMany({
    orderBy: { dateStart: "asc" }
  });

  if (!meets) {
    throw new Error("rendez-vous non trouvées");
  }

  return meets;
};
"use server"

import { PrismaClient } from "@/generated/prisma";
import type IComment from "@/types/comment";

const prisma = new PrismaClient();

export const getLastComments = async (): Promise<IComment[]> => {
  const lastComments = await prisma.comment.findMany({
    orderBy: { date: "desc" },
    take: 3, 
  });

  if (!lastComments) {
    throw new Error("Comments not found");
  }

  return lastComments;
};

export const getAllComments = async (): Promise<IComment[]> => {
  const lastComments = await prisma.comment.findMany({
    orderBy: { date: "desc" } 
  });

  if (!lastComments) {
    throw new Error("Comments not found");
  }

  return lastComments;
};
"use server"

import type IComment from "@/types/comment";
import { prisma } from "../prisma/prismaClient";


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
  const allComments = await prisma.comment.findMany({
    orderBy: { date: "desc" } 
  });

  if (!allComments) {
    throw new Error("Comments not found");
  }

  return allComments;
};
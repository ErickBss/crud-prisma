import { Response, Request } from "express";
import { resolveModuleName } from "typescript";
import { prismaClient } from "../database/prismaClient";

export class FindCategory {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const category = await prismaClient.category.findFirst({
      where: {
        id,
      },
      include: {
        ProductCategory: true,
      },
    });
    return res.json(category);
  }
}

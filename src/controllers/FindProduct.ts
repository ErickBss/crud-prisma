import { Response, Request } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindProduct {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    console.log("ID:", { id });

    const product = await prismaClient.product.findFirst({
      where: { id },
      include: {
        ProductCategory: true,
      },
    });

    return res.json(product);
  }
}

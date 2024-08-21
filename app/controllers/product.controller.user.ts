import models from "@models";
import { Request, Response } from "express";
import { ApplicationController } from ".";

export class ProductControllerUser extends ApplicationController {
  public async index(req: Request, res: Response) {
    const user = await models.user.findById(req.session.userId);

    const currentPage=req.params.currentPage ? +req.params.currentPage: 1
    const pageSize=req.params.pageSize ? +req.params.pageSize: 12

    const products = await models.product.findAll({
      where:{},
      offset: currentPage,
      limit: pageSize,
      include: [{ model: models.category }],
    });
    const categories = await models.category.findAll();
    res.render("userview/product.view/index", { products, categories ,user});
  }
  public async show(req: Request, res: Response) {
    const { id } = req.params;

    const product = await models.product.findOne({
      where: {
        id,
      },
      include: [{ model: models.category }],
    });
    const categories = await models.category.findAll();
    res.render("userview/product.view/show", {
      product,
      category: categories,
    });
  }
}

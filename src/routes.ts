import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";
import { CreateNewProduct } from "./controllers/CreateNewProduct";

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();
const createNewProduct = new CreateNewProduct();

router.post("/product", createProduct.handle);
router.post("/category", createCategory.handle);
router.post("/productCategory", createProductCategory.handle);
router.post("/newProduct", createNewProduct.handle);

export { router };

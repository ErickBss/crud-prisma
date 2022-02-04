import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";
import { CreateNewProduct } from "./controllers/CreateNewProduct";
import { FindProduct } from "./controllers/FindProduct";
import { FindCategory } from "./controllers/FindCategoryController";

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();
const createNewProduct = new CreateNewProduct();
const findProduct = new FindProduct();
const findCategory = new FindCategory();

router.post("/product", createProduct.handle);
router.post("/category", createCategory.handle);
router.post("/productCategory", createProductCategory.handle);
router.post("/newProduct", createNewProduct.handle);

router.get("/product/:id", findProduct.handle);
router.get("/category/:id", findCategory.handle);

export { router };

import express from "express";
import { authorizedRoles, isAuthenticated } from "../middleware/Auth";
import {
  AddNewProductCategory,
  AddProduct,
  DeleteProduct,
  DeleteProductCategory,
  EditProduct,
  GetAllProduct,
  GetProductById,
  UpdateProductCategory,
} from "../controllers/products.controller";
import { UserUpdateAccessToken } from "../controllers/user.controller";
const ProductRouter = express.Router();

ProductRouter.post(
  "/add-product",
  UserUpdateAccessToken,
  isAuthenticated,
  authorizedRoles("admin"),
  AddProduct
);
ProductRouter.put(
  "/update-product/:id",
  UserUpdateAccessToken,
  isAuthenticated,
  authorizedRoles("admin"),
  EditProduct
);
ProductRouter.get(
  "/get-products",
  UserUpdateAccessToken,
  isAuthenticated,
  authorizedRoles("admin"),
  GetAllProduct
);
ProductRouter.get(
  "/get-product/:id",
  UserUpdateAccessToken,
  isAuthenticated,
  authorizedRoles("admin"),
  GetProductById
);
ProductRouter.delete(
  "/delete-product/:id",
  UserUpdateAccessToken,
  isAuthenticated,
  authorizedRoles("admin"),
  DeleteProduct
);

ProductRouter.post(
  "/add-product-category",
  UserUpdateAccessToken,
  isAuthenticated,
  authorizedRoles("admin"),
  AddNewProductCategory
);

ProductRouter.put(
  "/update-product-category/:category_id",
  UserUpdateAccessToken,
  isAuthenticated,
  authorizedRoles("admin"),
  UpdateProductCategory
);

ProductRouter.delete(
  "/delete-product-category/:category_id",
  UserUpdateAccessToken,
  isAuthenticated,
  authorizedRoles("admin"),
  DeleteProductCategory
);

export default ProductRouter;

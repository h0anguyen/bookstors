import cartModel, { cart } from "./cart";
import categoryModel, { category } from "./category";
import orderModel, { order } from "./order";
import productModel, { product } from "./product";
import productOrderModel, { productOrder } from "./productOrder";
import userModel, { user } from "./user";

cartModel.associate();
categoryModel.associate();
orderModel.associate();
productModel.associate();
userModel.associate();
productOrderModel.associate();

export default {
  cart,
  category,
  order,
  product,
  user,
  productOrder,
};

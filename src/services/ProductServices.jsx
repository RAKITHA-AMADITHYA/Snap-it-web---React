import { post, get, postFile } from "../app/apiManager";

const getProductList = async () => {
  return await get({
    path: "/api/product/v1/product/exploreTopProducts",
  });
};

export { getProductList };


interface Routes {
  AUTH: string,
  HOME: string,
  ECOMMERCE: string,
  PRODUCT_BY_ID: string,
}

const routes:Routes = Object.freeze({
  AUTH: "/sign-in",
  HOME: "/",
  ECOMMERCE: "/ecommerce",
  PRODUCT_BY_ID: "/product/:id",
});

export default routes;

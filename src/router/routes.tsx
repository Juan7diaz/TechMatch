
interface Routes {
  AUTH: string,
  HOME: string,
  ECOMMERCE: string,
  PRODUCT_BY_ID: string,
  LOGIN: string,
  REGISTER: string,
  CONSTRUCTIONLIST: string,
}

const routes:Routes = Object.freeze({
  AUTH: "/sign-in",
  HOME: "/",
  ECOMMERCE: "/ecommerce",
  PRODUCT_BY_ID: "/product/:id",
  LOGIN: "/login",
  REGISTER: "/register",
  CONSTRUCTIONLIST: "/constructionlist",
});

export default routes;

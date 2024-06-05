
interface Routes {
  AUTH: string,
  HOME: string,
  ECOMMERCE: string,
  PRODUCT_BY_ID: string,
  LOGIN: string,
  REGISTER: string,
  WISHED: string
  CONSTRUCTIONLIST: string,
}

const routes:Routes = Object.freeze({
  AUTH: "/sign-in",
  HOME: "/",
  ECOMMERCE: "/ecommerce",
  PRODUCT_BY_ID: "/product/:id",
  LOGIN: "/login",
  REGISTER: "/register",
  WISHED:"/wished-list",
  CONSTRUCTIONLIST: "/constructionlist",
});

export default routes;

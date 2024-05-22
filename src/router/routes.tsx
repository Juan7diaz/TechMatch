
interface Routes {
  AUTH: string,
  HOME: string,
  ECOMMERCE: string,
}

const routes:Routes = Object.freeze({
  AUTH: "/sign-in",
  HOME: "/",
  ECOMMERCE: "/ecommerce",
});

export default routes;

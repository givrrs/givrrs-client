class Route {
  path: string;

  title: string;

  description: string;

  constructor(path: string, title: string, description: string) {
    this.path = path;
    this.title = title;
    this.description = description;
  }
}

class Routes {
  // landing
  HOME = new Route('/', 'Home', 'Home page - givrrs');

  // auth
  LOGIN = new Route('/auth/login', 'Log in Account - givrrs', 'Login page for givrrs');
  SIGNUP = new Route('/auth/signup', 'Create Account - givrrs', 'Create Account page for givrrs');
}

const ROUTES = new Routes();

export default ROUTES;

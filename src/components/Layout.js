import { Link, Outlet } from "react-router-dom";

const Layout = () => {
      return (
          <>
              <nav className="navbar navbar-dark bg-dark">
                  <div className="container-fluid">
                      <Link to="/" className="nav-link">
                          Home
                      </Link>
                      <Link to="/about" className="nav-link">
                          About
                      </Link>
                      <Link to="/preguntas" className="nav-link">
                          Preguntas
                      </Link>
                      <Link to="/characters" className="nav-link">
                          Characters
                      </Link>
                  </div>
              </nav>
              <Outlet />
          </>
      );
};

export default Layout;

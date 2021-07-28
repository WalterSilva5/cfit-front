import { NavLink } from "react-router-dom";
import $ from "jquery";
import { logoutUser } from "@/util/UserUtil";




const PageHeader = () => {
  const permission = localStorage.getItem("perm");
  return (
    <div>
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
          <span className="navbar-brand">
            <b>CFIT</b>
          </span>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav" />
          </div>
          <button
            type="button"
            className="btn btn-primary btn_poopover"
            onClick={() => {
              $(".menu-popover").toggle();
            }}
            data-toggle="popover"
            title="Popover title"
            data-content="And here's some amazing content. It's very engaging. Right?"
          >
            MENU
          </button>
        </nav>

        <div
          className="btn border border-danger p-5 menu-popover"
          style={{
            backgroundColor: "#fa9a1c26",
            position: "absolute",
            right: 0,
            width: "200px",
            display: "None",
          }}
          onMouseLeave={()=>{$(".menu-popover").toggle()}}
        >
          <NavLink exact className="btn btn-primary col-12 my-1" to="/">
            INICIO
          </NavLink>
          <button className="btn btn-primary col-12 my-1">TREINOS</button>
          {permission == 10 ? (
            <NavLink exact
              className="btn my-1 btn-primary col-12"
              to="/cfit_admin"
              type="button"
            >
              ADMIN
            </NavLink>
          ) : null}
          <button
            className="btn my-3 btn-primary col-12"
            type="button"
            onClick={() => logoutUser()}
          >
            SAIR
          </button>
          {/* <NavLink className="btn btn-primary mx-2" to="/aulas">AULAS</NavLink>
            <NavLink className="btn btn-primary" to="/teste">teste</NavLink> */}
        </div>
      </div>
    </div>
  );
};
export default PageHeader;

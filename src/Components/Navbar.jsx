import React, { useState } from "react";
import logo from "../logo.png";
import { Link, useNavigate } from "react-router-dom";
import ModalWin from "./ModalWin";

const Navbar = (props) => {
  const navigate = useNavigate();
  const [editBlock, setEditBlock] = useState(false);

  const handleAdd = () => {
    setEditBlock(true);
  };
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand">
         
          <img style={{width:"100px"}}  src={logo} alt="Logo" />
        </a>
        <div>
          <button type="button" class="btn btn-primary" onClick={handleAdd}>
            Add User
          </button>
        </div>
      </div>
      <ModalWin
        show={editBlock}
        onHide={() => setEditBlock(false)}
        setUsers={props?.setUsers}
        users={props?.users}
        flag={true}
      />
    </nav>
  );
};

export default Navbar;

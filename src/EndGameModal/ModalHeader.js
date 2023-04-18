import React from "react";
import "./ModalHeader.css";

const ModalHeader = props => {
    return <header className="modal-header">
        {props.children}
    </header>
}

export default ModalHeader;
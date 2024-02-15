import React from "react";
import Button from "../../UI/Button";
import './Modal.css';
import CSSTransition from "react-transition-group/CSSTransition";
const animationTiming = {
    enter:600,
    exit:1000
};
const Modal = (props)=>{
    return(
        <CSSTransition
        in={props.show}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
        classNames={{
                enter:'',
                enterActive:'ModalOpen',
                exit:'',
                exitActive:'ModalClosed'
            }}>
           <div className='Modal'>
            <h1>A Modal</h1>
            <Button onClick={props.closed}>Close</Button>
           </div>
        </CSSTransition>
    );
}
export default Modal;
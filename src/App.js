import React from "react";
import Transition from "react-transition-group/Transition";
import classes from "./App.module.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { useState } from "react";
import Button from "./UI/Button";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showBlock, setShowBlock] = useState(false);
  const showModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={classes.App}>
      <h1>Animating React App</h1>
      <Button onClick={() => setShowBlock(!showBlock)}>Toggle</Button>
      <Transition in={showBlock} timeout={1000} mountOnEnter unmountOnExit
      onEnter={()=> console.log('On Enter')}
      onEntering={()=> console.log('On Entering')}
      onEntered={()=> console.log('On Entered')}
      onExit={()=> console.log('On Exit')}
      onExiting={()=> console.log('On Exiting')}
      onExited={()=> console.log('On Exited')}
      >
        {(state) => (
          <div
            style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
              margin: "auto",
              transition: "opacity 1s ease-out",
              opacity: state === "exiting" ? 0 : 1,
            }}
          >
            {state}
          </div>
        )}
      </Transition>
      {<hr />}
      <Modal show={modalIsOpen} closed={closeModal} />
      {modalIsOpen ? <Backdrop show={modalIsOpen} /> : null}
      <Button onClick={showModal}>Open Modal</Button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;

// #.React Transition Group
// Exposes simple components useful for defining entering and exiting transitions. React Transition Group
//  is not an animation library like React-Motion, it does not animate styles by itself. Instead it exposes transition stages, manages classes
// and group elements and manipulates the DOM in useful ways, making the implementation of actual visual transitions much easier.
//It has three states 1.entering 2.entered 3.exiting for a particular timeout

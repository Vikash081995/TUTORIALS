import React, { useState } from "react";
import { styled } from "styled-components";

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: #00000070;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  background-color: wheat;
  width: 33%;
`;

const ControlledModal = ({ shouldDisplay, onClose, children }) => {
  return (
    <>
      <button onClick={() => setShow(true)}>Show modal</button>
      {shouldDisplay && (
        <ModalBackground onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={onclose}>Hide Modal</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;

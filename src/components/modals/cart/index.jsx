import React, { useState } from "react";
import { connect } from "react-redux";
import CartModal from "./CartModal";

const ModalContainer = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <CartModal
      isOpen={isOpenModal}
      openModal={() => setIsOpenModal(true)}
      closeModal={() => setIsOpenModal(false)}
    />
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

const CartModalContainer = React.memo(ModalContainer);

export default connect(mapStateToProps, mapDispatchToProps)(CartModalContainer);

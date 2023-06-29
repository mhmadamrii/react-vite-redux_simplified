import React from "react";
import { Dialog, DialogContent, DialogFooter } from "@react-md/dialog";
import { Button } from "@react-md/button";

const CartModal = (props) => {
  const { isOpen, openModal, closeModal } = props;
  return (
    <>
      <button onClick={openModal}>open</button>
      <Dialog visible={isOpen}>
        <DialogContent></DialogContent>
        <DialogFooter>
          <Button theme="error" onClick={closeModal}>
            Cancel
          </Button>
          <Button theme="clear" themeType="contained" onClick={closeModal}>
            Add to cart
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default React.memo(CartModal);

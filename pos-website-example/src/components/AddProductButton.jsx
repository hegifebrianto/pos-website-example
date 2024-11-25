import React, { useState } from "react";
import AddProductForm from "./AddProduct";

const SwipeButton = ({ onAddProduct }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleAddProduct = (newProduct) => {
    onAddProduct(newProduct);
    handleCloseForm();
  };

  return (
    <>
      <div className="swipe-button-container">
        <div className="swipe-button" onClick={handleOpenForm}>
          Add product
        </div>
      </div>
      {isFormOpen && (
        <AddProductForm
          onAddProduct={handleAddProduct}
          onClose={handleCloseForm}
        />
      )}
    </>
  );
};

export default SwipeButton;

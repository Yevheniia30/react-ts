import React, { FC } from "react";

export enum ProductsVariant {
  outlined = "outlined",
  primary = "primary",
}

interface ProductsProps {
  // ? let to know that prop is unnesesssary
  width?: string;
  children?: React.ReactNode;
  // якщо функція нічого не повертає то вказуємо воід, а якщо повертає то вказуємо тип який вона повертає
  onClick: (num: number) => void;
  variant: ProductsVariant;
}

const Products: FC<ProductsProps> = ({ variant, width, children, onClick }) => {
  function randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = randomIntFromInterval(1, 6);
  console.log(rndInt);

  return (
    <>
      <ul
        style={{
          width,
          border:
            variant === ProductsVariant.outlined ? "1px solid gray" : "none",
          background:
            variant === ProductsVariant.primary ? "lightblue" : "transparent",
        }}
      >
        Products
      </ul>
      {children}
      <button
        type="button"
        style={{
          border:
            variant === ProductsVariant.outlined
              ? "1px solid gray"
              : "1px solid palevioletred",
        }}
        onClick={() => onClick(rndInt)}
      >
        On Click!
      </button>
    </>
  );
};

export default Products;

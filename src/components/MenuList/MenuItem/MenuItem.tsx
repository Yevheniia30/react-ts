import { FC } from 'react';

export interface MenuItemProps {
  imagePath: string;
  weight: number;
  title: string;
  ingredients: string;
  price: number;
}

const MenuItem: FC<MenuItemProps> = ({
  title,
  price,
  imagePath,
  weight,
  ingredients,
}) => {
  return (
    <li className="w-96 shadow-xl rounded-xl overflow-hidden h-[28rem] list-none">
      <div className="relative">
        <img
          src={`/assets/pizza/${imagePath}`}
          className="object-cover object-center w-full h-64"
        />
        <span className="absolute right-2 bottom-2 text-amber-100 px-3 py-1 rounded-full bg-amber-950/60 text-sm">
          {weight} г
        </span>
      </div>
      <div className="px-8 py-8">
        <h3 className="font-bold text-lg mb-2 uppercase">{title}</h3>
        <p className="h-14">{ingredients}</p>
        <div className="flex items-center">
          <p className="font-semibold text-lg mt-1 mr-16">{price} €</p>
          <button className="py-1.5 w-36 px-4 bg-red-600 rounded-full flex gap-2 justify-center items-start text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            Buy
          </button>
        </div>
      </div>
    </li>
  );
};

export default MenuItem;

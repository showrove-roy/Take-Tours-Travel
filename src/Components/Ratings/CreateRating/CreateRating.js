import React, { useState } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";

const CreateRating = ({ setUserRating }) => {
  const [number, setNumber] = useState(0);
  const [clickNum, setClickNum] = useState(0);

  const handelHover = (limit) => {
    if (clickNum) {
      setNumber(clickNum);
      return;
    }
    setNumber(limit);
  };
  const handelClick = (limit) => {
    setClickNum(limit);
    setNumber(limit);
    setUserRating(limit);
  };
  const ratingCount = (ratingNUM) => {
    if (ratingNUM === 5) {
      return (
        <>
          <BsStarFill
            className='cursor-pointer'
            onMouseEnter={() => handelHover(1)}
            onClick={() => handelClick(1)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStarFill
            className='cursor-pointer'
            onMouseEnter={() => handelHover(2)}
            onClick={() => handelClick(2)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStarFill
            className='cursor-pointer'
            onMouseEnter={() => handelHover(3)}
            onClick={() => handelClick(3)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStarFill
            className='cursor-pointer'
            onMouseEnter={() => handelHover(4)}
            onClick={() => handelClick(4)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStarFill
            className='cursor-pointer'
            onMouseEnter={() => handelHover(5)}
            onClick={() => handelClick(5)}
            onMouseLeave={() => handelHover(0)}
          />
        </>
      );
    } else if (ratingNUM === 4) {
      return (
        <>
          <BsStarFill
            className='cursor-pointer'
            onMouseEnter={() => handelHover(1)}
            onClick={() => handelClick(1)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStarFill
            className='cursor-pointer'
            onMouseEnter={() => handelHover(2)}
            onClick={() => handelClick(2)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStarFill
            className='cursor-pointer'
            onMouseEnter={() => handelHover(3)}
            onClick={() => handelClick(3)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStarFill
            className='cursor-pointer'
            onMouseEnter={() => handelHover(4)}
            onClick={() => handelClick(4)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStar
            className='cursor-pointer'
            onMouseEnter={() => handelHover(5)}
            onClick={() => handelClick(5)}
            onMouseLeave={() => handelHover(0)}
          />
        </>
      );
    } else if (ratingNUM === 3) {
      return (
        <>
          <BsStarFill
            className='cursor-pointer'
            onMouseEnter={() => handelHover(1)}
            onClick={() => handelClick(1)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStarFill
            className='cursor-pointer'
            onMouseEnter={() => handelHover(2)}
            onClick={() => handelClick(2)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStarFill
            className='cursor-pointer'
            onMouseEnter={() => handelHover(3)}
            onClick={() => handelClick(3)}
            onMouseLeave={() => handelHover(0)}
          />

          <BsStar
            className='cursor-pointer'
            onMouseEnter={() => handelHover(4)}
            onClick={() => handelClick(4)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStar
            className='cursor-pointer'
            onMouseEnter={() => handelHover(5)}
            onClick={() => handelClick(5)}
            onMouseLeave={() => handelHover(0)}
          />
        </>
      );
    } else if (ratingNUM === 2) {
      return (
        <>
          <BsStarFill
            className='cursor-pointer'
            onMouseEnter={() => handelHover(1)}
            onClick={() => handelClick(1)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStarFill
            className='cursor-pointer'
            onMouseEnter={() => handelHover(2)}
            onClick={() => handelClick(2)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStar
            className='cursor-pointer'
            onMouseEnter={() => handelHover(3)}
            onClick={() => handelClick(3)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStar
            className='cursor-pointer'
            onMouseEnter={() => handelHover(4)}
            onClick={() => handelClick(4)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStar
            className='cursor-pointer'
            onMouseEnter={() => handelHover(5)}
            onClick={() => handelClick(5)}
            onMouseLeave={() => handelHover(0)}
          />
        </>
      );
    } else if (ratingNUM === 1) {
      return (
        <>
          <BsStarFill
            className='cursor-pointer'
            onMouseEnter={() => handelHover(1)}
            onClick={() => handelClick(1)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStar
            className='cursor-pointer'
            onMouseEnter={() => handelHover(2)}
            onClick={() => handelClick(2)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStar
            className='cursor-pointer'
            onMouseEnter={() => handelHover(3)}
            onClick={() => handelClick(3)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStar
            className='cursor-pointer'
            onMouseEnter={() => handelHover(4)}
            onClick={() => handelClick(4)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStar
            className='cursor-pointer'
            onMouseEnter={() => handelHover(5)}
            onClick={() => handelClick(5)}
            onMouseLeave={() => handelHover(0)}
          />
        </>
      );
    } else {
      return (
        <>
          <BsStar
            className='cursor-pointer'
            onMouseEnter={() => handelHover(1)}
            onClick={() => handelClick(1)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStar
            className='cursor-pointer'
            onMouseEnter={() => handelHover(2)}
            onClick={() => handelClick(2)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStar
            className='cursor-pointer'
            onMouseEnter={() => handelHover(3)}
            onClick={() => handelClick(3)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStar
            className='cursor-pointer'
            onMouseEnter={() => handelHover(4)}
            onClick={() => handelClick(4)}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStar
            className='cursor-pointer'
            onMouseEnter={() => handelHover(5)}
            onClick={() => handelClick(5)}
            onMouseLeave={() => handelHover(0)}
          />
        </>
      );
    }
  };
  return (
    <div className='flex text-orange-500'>
      {number ? (
        ratingCount(number)
      ) : (
        <div className='flex'>
          <BsStar
            className='cursor-pointer'
            onMouseEnter={() => handelHover(1)}
            onClick={() => handelClick()}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStar
            className='cursor-pointer'
            onMouseEnter={() => handelHover(2)}
            onClick={() => handelClick()}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStar
            className='cursor-pointer'
            onMouseEnter={() => handelHover(3)}
            onClick={() => handelClick()}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStar
            className='cursor-pointer'
            onMouseEnter={() => handelHover(4)}
            onClick={() => handelClick()}
            onMouseLeave={() => handelHover(0)}
          />
          <BsStar
            className='cursor-pointer'
            onMouseEnter={() => handelHover(5)}
            onClick={() => handelClick()}
            onMouseLeave={() => handelHover(0)}
          />
        </div>
      )}
    </div>
  );
};

export default CreateRating;

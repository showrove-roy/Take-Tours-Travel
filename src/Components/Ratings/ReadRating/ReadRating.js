import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const ReadRating = ({ ratingNum }) => {
  const ratingCount = () => {
    if (ratingNum === 5) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
        </>
      );
    } else if (ratingNum >= 4.5) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarHalf></BsStarHalf>
        </>
      );
    } else if (ratingNum >= 4) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStar></BsStar>
        </>
      );
    } else if (ratingNum >= 3.5) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarHalf></BsStarHalf>
          <BsStar></BsStar>
        </>
      );
    } else if (ratingNum >= 3) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStar></BsStar>
          <BsStar></BsStar>
        </>
      );
    } else if (ratingNum >= 2.5) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarHalf></BsStarHalf>
          <BsStar></BsStar>
          <BsStar></BsStar>
        </>
      );
    } else if (ratingNum >= 2) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStar></BsStar>
          <BsStar></BsStar>
          <BsStar></BsStar>
        </>
      );
    } else if (ratingNum >= 1.5) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStarHalf></BsStarHalf>
          <BsStar></BsStar>
          <BsStar></BsStar>
          <BsStar></BsStar>
        </>
      );
    } else if (ratingNum >= 1) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStar></BsStar>
          <BsStar></BsStar>
          <BsStar></BsStar>
          <BsStar></BsStar>
        </>
      );
    } else if (ratingNum > 0) {
      return (
        <>
          <BsStarHalf></BsStarHalf>
          <BsStar></BsStar>
          <BsStar></BsStar>
          <BsStar></BsStar>
          <BsStar></BsStar>
        </>
      );
    } else {
      return (
        <>
          <BsStar></BsStar>
          <BsStar></BsStar>
          <BsStar></BsStar>
          <BsStar></BsStar>
          <BsStar></BsStar>
        </>
      );
    }
  };
  return <div className='flex text-orange-500'>{ratingCount()}</div>;
};

export default ReadRating;

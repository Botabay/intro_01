import React, { useState } from "react";
import { Rating, ratingValueType } from "./Rating";

export default {
    title: ' Rating stories',
    component: Rating
}

export const Rating0 = () => <Rating starCount={0} onClick={g => g} />
export const Rating1 = () => <Rating starCount={1} onClick={g => g} />
export const Rating2 = () => <Rating starCount={2} onClick={g => g} />
export const Rating3 = () => <Rating starCount={3} onClick={g => g} />
export const Rating4 = () => <Rating starCount={4} onClick={g => g} />
export const Rating5 = () => <Rating starCount={5} onClick={g => g} />

export const ChangeRating = () => {
    const [r, setR] = useState<ratingValueType>(0);
    return <Rating starCount={r} onClick={setR} />
}
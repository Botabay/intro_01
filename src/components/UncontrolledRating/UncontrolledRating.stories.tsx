import React, { useState } from "react";
import { UncontrolledRating } from "./UncontrolledRating";

export default {
    title: ' UncontrolledRating stories',
    component: UncontrolledRating
}

// export const Rating0 = () => <UncontrolledRating starCount={0} onClick={g => g} />
// export const Rating1 = () => <UncontrolledRating starCount={1} onClick={g => g} />
// export const Rating2 = () => <UncontrolledRating starCount={2} onClick={g => g} />
// export const Rating3 = () => <UncontrolledRating starCount={3} onClick={g => g} />
// export const Rating4 = () => <UncontrolledRating starCount={4} onClick={g => g} />
// export const Rating5 = () => <UncontrolledRating starCount={5} onClick={g => g} />
export const Rating5 = () => <UncontrolledRating />

// export const ChangeRating = () => {
//     const [r, setR] = useState<ratingValueType>(0);
//     return <UncontrolledRating  />
// }
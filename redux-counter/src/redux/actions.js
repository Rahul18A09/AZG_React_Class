import { Decrement_count, Increment_count, Reset_count } from "./actionType";


export const increment = () => {
    return {
        type: Increment_count,
    };
};

export const decrement = () => {
    return {
        type: Decrement_count,
    };
};

export const reset = () => {
    return {
        type: Reset_count,
    };
};
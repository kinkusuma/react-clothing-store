/* eslint-disable */

import { nanoid } from "nanoid";

const generateRandomNum = (min, max) => {
    return Math.random() * (max - min) + min;
};

const roundUpNum = (val, roundUp) => {
    return Math.ceil(val/roundUp) * roundUp;
};

const generatePrice = () => {
    return Number(generateRandomNum(1, 1000)).toFixed(2);
};

const generateRating = () => {
    return roundUpNum(generateRandomNum(1, 5), 0.5);
};

const generateRatingCount = () => {
    return roundUpNum(generateRandomNum(1, 999), 1);
}

export default function generateProduct() {
    const product = [];
    for(const i of Array(20).keys()) {
        product.push({
            id: nanoid(7),
            name: 'Blue white shirt',
            image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c',
            price: generatePrice(),
            rating: generateRating(),
            ratingCount: generateRatingCount()
        })
    }
    return product;
}

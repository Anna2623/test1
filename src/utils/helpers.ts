import { IProduct } from "../types";

export const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: "RUB"
    }).format(price);
}

export const shuffleArray = (array: IProduct[]): IProduct[] => {
    console.log();
    
    const shuffledArray = [...array];
    console.log(555);
    console.log(shuffledArray);
    console.log(shuffledArray.length - 1);
    
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        console.log(j );
        
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    console.log(666);
    console.log(shuffledArray);
    
    return shuffledArray;
}

export const calculateDiscount = (price: number, discountPercentage: number): number => {
    console.log("price");
    console.log(price);
    console.log(discountPercentage);
    
    

    return price - (price * (discountPercentage / 100));
}
import decorativeImg from "../public/images/Decorative.png";
import flowersImg from "../public/images/Flowers.png";
import aquariumImg from "../public/images/Aquarium.png";
import secateursImg from "../public/images/Secateurs.png";
  
export const productsCard = [
    {
        id: 1,
        name: "Decorative forged bridge",
        price: 500,
        originalPrice: 1000,
        discount: 50,
        image: decorativeImg,
        category: "Decor"
    },
     {
        id: 2,
        name: "Flower basket",
        price: 100,
        originalPrice: 150,
        discount: 34,
        image: flowersImg,
        category: "Garden"
    },
     {
        id: 3,
        name: "Aquarium lock",
        price: 150,
        originalPrice: 200,
        discount: 25,
        image: aquariumImg,
        category: "Aquarium"
    },
     {
        id: 4,
        name: "Secateurs",
        price: 199,
        originalPrice: 240,
        discount: 17,
        image: secateursImg,
        category: "Tools"
    }
];
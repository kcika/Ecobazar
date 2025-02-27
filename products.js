const products = [
    {
        id: 1,
        name: "Potatoes",
        quantity: "1 kg",
        disPrice: 57,
        ogPrice: 79,
        disPercent: 27,
        img: "images/potato.jpg",
        category: "vegetable",
        ratings: 4
    },
    {
        id: 2,
        name: "Chinese Cabbage",
        quantity: "500 g",
        disPrice: 150,
        ogPrice: 200,
        disPercent: 25,
        img: "images/chineseCabbage.jpg",
        category: "vegetable",
        ratings: 4
    },
    {
        id: 3,
        name: "Corn Cub",
        quantity: "1 piece",
        disPrice: 22,
        ogPrice: 37,
        disPercent: 27,
        img: "images/corn.jpg",
        category: "vegetable",
        ratings: 4
    },
    {
        id: 4,
        name: "Red Bell Pepper",
        quantity: "1 piece(124 - 175)g",
        disPrice: 40,
        ogPrice: 51,
        disPercent: 21,
        img: "images/redCapsicum.jpg",
        category: "vegetable",
        ratings: 5
    },
    {
        id: 5,
        name: "Mangoes",
        quantity: "2 piece (400-450)g",
        disPrice: 150,
        ogPrice: 170,
        disPercent: 20,
        img: "images/mango.jpg",
        category: "fruit",
        ratings: 5
    },
    {
        id: 6,
        name: "Tomatoes",
        quantity: "500 g",
        disPrice: 17,
        ogPrice: 22,
        disPercent: 22,
        img: "images/tomato.jpg",
        category: "fruit",
        ratings: 4
    },
    {
        id: 7,
        name: "Green Apples",
        quantity: "500 g",
        disPrice: 100,
        ogPrice: 200,
        disPercent: 50,
        img: "images/apple.jpg",
        category: "fruit",
        ratings: 4
    },
    {
        id: 8,
        name: "Kinnow Oranges",
        quantity: "500 g",
        disPrice: 32,
        ogPrice: 42,
        disPercent: 23,
        img: "images/kinnowOrange.jpg",
        category: "fruit",
        ratings: 5
    },
    {
        id: 9,
        name: "Green Lettuce",
        quantity: "(200-250)g",
        disPrice: 50,
        ogPrice: 66,
        disPercent: 24,
        img: "images/lettuce.jpg",
        category: "vegetable",
        ratings: 4
    },
    {
        id: 10,
        name: "Brinjal",
        quantity: "500 g",
        disPrice: 31,
        ogPrice: 43,
        disPercent: 27,
        img: "images/brinjal.jpg",
        category: "vegetable",
        ratings: 4
    },
    {
        id: 11,
        name: "Cauliflower",
        quantity: "1 piece(400-600)g",
        disPrice: 19,
        ogPrice: 23,
        disPercent: 17,
        img: "images/cauliflower.jpg",
        category: "vegetable",
        ratings: 5
    },
    {
        id: 12,
        name: "Banana",
        quantity: "3 pieces",
        disPrice: 28,
        ogPrice: 38,
        disPercent: 26,
        img: "images/banana.jpg",
        category: "fruit",
        ratings: 4
    },
    {
        id: 13,
        name: "Green Chilli",
        quantity: "100 g",
        disPrice: 12,
        ogPrice: 16,
        disPercent: 25,
        img: "images/chilli.jpg",
        category: "vegetable",
        ratings: 5
    },
    {
        id: 14,
        name: "Lady Finger",
        quantity: "250 g",
        disPrice: 40,
        ogPrice: 54,
        disPercent: 25,
        img: "images/ladyFinger.jpg",
        category: "vegetable",
        ratings: 5
    },
    {
        id: 15,
        name: "Green Kiwi",
        quantity: "3 pieces",
        disPrice: 96,
        ogPrice: 124,
        disPercent: 22,
        img: "images/kiwi.jpg",
        category: "fruit",
        ratings: 5
    },
    {
        id: 16,
        name: "Red Chilli",
        quantity: "100 g",
        disPrice: 12,
        ogPrice: 16,
        disPercent: 25,
        img: "images/redChilli.jpg",
        category: "vegetable",
        ratings: 4
    },
    {
        id: 17,
        name: "Cremini Mushroom",
        quantity: "200 g",
        disPrice: 249,
        ogPrice: 348,
        disPercent: 28,
        img: "images/creminiMushroom.jpg",
        category: "vegetable",
        ratings: 4
    },
    {
        id: 18,
        name: "Mustard Leaves",
        quantity: "250 g",
        disPrice: 15,
        ogPrice: 18,
        disPercent: 16,
        img: "images/mustardLeaves.jpg",
        category: "vegetable",
        ratings: 4
    },
    {
        id: 19,
        name: "Kashmiri Apple",
        quantity: "4 pieces (400-600)g",
        disPrice: 132,
        ogPrice: 179,
        disPercent: 26,
        img: "images/kashmiriApple.jpg",
        category: "fruit",
        ratings: 5
    },
    {
        id: 20,
        name: "Pineapple",
        quantity: "1 piece (800-1000)g",
        disPrice: 77,
        ogPrice: 96,
        disPercent: 19,
        img: "images/pineapple.jpg",
        category: "fruit",
        ratings: 5
    },
    {
        id: 21,
        name: "Green Capsicum",
        quantity: "250 g",
        disPrice: 16,
        ogPrice: 20,
        disPercent: 20,
        img: "images/greenCapsicum.jpg",
        category: "vegetable",
        ratings: 4
    },
    {
        id: 22,
        name: "Papaya",
        quantity: "(0.7-1.3)kg",
        disPrice: 101,
        ogPrice: 141,
        disPercent: 28,
        img: "images/papaya.jpg",
        category: "fruit",
        ratings: 3
    },
    {
        id: 23,
        name: "Chenopodium (Bathua)",
        quantity: "250 g",
        disPrice: 19,
        ogPrice: 23,
        disPercent: 17,
        img: "images/bathua.jpg",
        category: "leafies",
        ratings: 4
    },
    {
        id: 24,
        name: "Fresh Rosemary",
        quantity: "10 g",
        disPrice: 27,
        ogPrice: 34,
        disPercent: 20,
        img: "images/rosemary.jpg",
        category: "leafies",
        ratings: 4
    },
    {
        id: 25,
        name: "Dill Leaves(Soya)",
        quantity: "100 g",
        disPrice: 26,
        ogPrice: 34,
        disPercent: 23,
        img: "images/dillLeaves.jpg",
        category: "leafies",
        ratings: 4
    },
    {
        id: 26,
        name: "Fresh Thyme",
        quantity: "10 g",
        disPrice: 29,
        ogPrice: 37,
        disPercent: 21,
        img: "images/thyme.jpg",
        category: "leafies",
        ratings: 5
    },
];

export default products;
import godOfWarBigPoster from "../game-posters/hero-god-of-war-big.jpg";
import godOfWarSmallPoster from "../game-posters/god-of-war-small.jpg";
import farCryBigPoster from "../game-posters/hero-far-cry-big.webp";
import farCrySmallPoster from "../game-posters/far-cry-small.png";
import genshinImpactSmallPoster from "../game-posters/genshin-small.jpg";
// import genshinImpactBigPoster from "../game-posters/"
import narakaBigPoster from "../game-posters/hero-naraka-big.webp";
import narakaSmallPoster from "../game-posters/naraka-small.jpg";
import rainbowExtractionBigPoster from "../game-posters/hero-rainbow-extraction-big.webp";
import rainbowExtractionSmallPoster from "../game-posters/rainbow-extraction-small.jpg";
import kenaBigPoster from "../game-posters/hero-kena-big.jpg";
import kenaSmallPoster from "../game-posters/kena-small.png";

// GAMES ON SALE
import deadCellsMediumPoster from "../game-posters/dead-cells-medium.jpg";
import carTuningSimulatorMediumPoster from "../game-posters/car-tuning-simulator-medium.webp";
import golfClubWastelandMediumPoster from "../game-posters/golf-club-wasteland-medium.webp";
import outerwerseMediumPoster from "../game-posters/outerverse-medium.webp";
import sheepoMediumPoster from "../game-posters/sheepo-medium.webp";
import warshmallowsMediumPoster from "../game-posters/warshmallows-medium.jfif";
import cobraKaiMediumPoster from "../game-posters/cobra-kai-medium.webp";
import suchArtMediumPoster from "../game-posters/such-art-medium.jfif";

export const HERO_GAMES = [
    {
        name: "God of War",
        posterBig: godOfWarBigPoster,
        posterSmall: godOfWarSmallPoster,
        price: "49.99",
        releaseDate: "2022.01.14",
        shortDescription: "Venture into the brutal Norse realms and fight to fulfill a deeply personal quest.",
    },
    {
        name: "Far Cry 6",
        posterBig: farCryBigPoster,
        posterSmall: farCrySmallPoster,
        price: "59.99",
        releaseDate: "2021.10.06",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus tenetur similique officiis, quidem ab?",
    },
    {
        name: "Genshin Impact",
        posterBig: "",
        posterSmall: genshinImpactSmallPoster,
        price: null,
        releaseDate: "2020.09.28",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus tenetur similique officiis, quidem ab?",
    },
    {
        name: "Naraka: Bladepoint",
        posterBig: narakaBigPoster,
        posterSmall: narakaSmallPoster,
        price: "19.99",
        releaseDate: "2020.11.03",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus tenetur similique officiis, quidem ab?",
    },
    {
        name: "Rainbow Six: Extraction",
        posterBig: rainbowExtractionBigPoster,
        posterSmall: rainbowExtractionSmallPoster,
        price: "39.99",
        releaseDate: "2022.01.20",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus tenetur similique officiis, quidem ab?",
    },
    {
        name: "Kena: Bridge of Spirits",
        posterBig: kenaBigPoster,
        posterSmall: kenaSmallPoster,
        price: "39.99",
        releaseDate: "2021.09.21",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus tenetur similique officiis, quidem ab?",
    },
];

export const GAMES_ON_SALE = [
    {
        name: "Car Tuning Simulator",
        poster: carTuningSimulatorMediumPoster,
        price: "0.99",
        discount: "20%",
    },
    {
        name: "Dead Cells",
        poster: deadCellsMediumPoster,
        price: "24.99",
        discount: "50%",
    },
    {
        name: "Golf Club Wasteland",
        poster: golfClubWastelandMediumPoster,
        price: "9.99",
        discount: "50%",
    },
    {
        name: "Outerverse",
        poster: outerwerseMediumPoster,
        price: "14.99",
        discount: "20%",
    },
    {
        name: "Sheepo",
        poster: sheepoMediumPoster,
        price: "9.99",
        discount: "30%",
    },
    {
        name: "Warshmallows",
        poster: warshmallowsMediumPoster,
        price: "9.99",
        discount: "70%",
    },
    {
        name: "Cobra Kai",
        poster: cobraKaiMediumPoster,
        price: "19.99",
        discount: "60%",
    },
    {
        name: "Such Art",
        poster: suchArtMediumPoster,
        price: "19.99",
        discount: "20%",
    },
];

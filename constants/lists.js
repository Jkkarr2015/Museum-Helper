import React from 'react';


export default {
    //All Fish in the game
     fishList: [
        {
            key: 0,
            name: 'Bitterling',
            location: 'River',
            shadowSize: 'ShadowSize: 1 (Smallest)',
            price: 'Price: 900 bells',
            timeSlot: 'Available: All Day',
            duration: [10, 2]
        },
        {
            key: 1,
            name: 'Pale Chub',
            location: 'River',
            shadowSize: 'ShadowSize: 1 (Smallest)',
            price: 'Price: 200 bells',
            timeSlot: 'Available: 9 a.m. - 4 p.m.',
            duration: [0, 11],
        },
        {
            key: 2,
            name: 'Crucian Carp',
            location: 'River',
            shadowSize: 'Shadow Size: 2',
            price: 'Price: 160 bells',
            timeSlot: 'Available: All Day',
            duration: [0, 11],
        },
        {
            key: 3,
            name: 'Dace',
            location: 'River',
            shadowSize: 'Shadow Size: 3',
            price: 'Price: 240 bells',
            timeSlot: 'Available: 4 p.m. - 9 a.m.',
            duration: [0, 11]
        },
        {
            key: 4,
            name: 'Carp',
            location: 'Pond',
            shadowSize: 'Shadow Size: 4',
            price: 'Price: 300 bells',
            timeSlot: 'Available: All Day',
            duration: [0, 11]
        },
        {
            key: 5,
            name: 'Koi',
            location: 'Pond',
            shadowSize: 'Shadow Size: 4',
            price: 'Price: 4,000 bells',
            timeSlot: 'Available: 4 p.m. - 9 a.m.',
            duration: [0, 11],
        },
        {
            key: 6,
            name: 'Goldfish',
            location: 'Pond',
            shadowSize: 'ShadowSize: 1 (Smallest)',
            price: 'Price: 1,300 bells',
            timeSlot: 'Available: All Day',
            duration: [0, 11]
        },
        {
            key: 7,
            name: 'Pop-eyed Goldfish',
            location: 'Pond',
            shadowSize: 'ShadowSize: 1 (Smallest)',
            price: 'Price: 1,300 bells',
            timeSlot: 'Available: 9 a.m. - 4 p.m.',
            duration: [0, 11]
        },
        {
            key: 8,
            name: 'Ranchu Goldfish',
            location: 'Pond',
            shadowSize: 'ShadowSize: 1 (Smallest)',
            price: 'Price: 4,500 bells',
            timeSlot: 'Available: 9 a.m. - 4 p.m.',
            duration: [0, 11],
        },
        {
            key: 9,
            name: 'Killifish',
            location: 'Pond',
            shadowSize: 'ShadowSize: 1 (Smallest)',
            price: 'Price: 300 bells',
            timeSlot: 'Available:  All Day',
            duration: [3, 7],
        },
        {
            key: 10,
            name: 'Crawfish',
            location: 'Pond',
            shadowSize: 'Shadow Size: 2',
            price: 'Price: 200 bells',
            timeSlot: 'Available: All Day',
            duration: [3, 8]
        },
        {
            key: 11,
            name: 'Soft-shelled Turtle',
            location: 'River',
            shadowSize: 'Shadow Size: 4',
            price: 'Price: 3,750 bells',
            timeSlot: 'Available: 4 p.m. - 9 a.m.',
            duration: [7, 8]
        },
        {
            key: 12,
            name: 'Snapping Turtle',
            location: 'River',
            shadowSize: 'Shadow Size: 5',
            price: 'Price: 5,000 bells',
            timeSlot: 'Available: 9 p.m. - 4 a.m.',
            duration: [3, 9],
        },
        {
            key: 13,
            name: 'Tadpole',
            location: 'Pond',
            shadowSize: 'ShadowSize: 1 (Smallest)',
            price: 'Price: 100 bells',
            timeSlot: 'Available: All Day',
            duration: [2, 6],
        },
        {
            key: 14,
            name: 'Frog',
            location: 'Pond',
            shadowSize: 'Shadow Size: 2',
            price: 'Price: 120 bells',
            timeSlot: 'Available: All Day',
            duration: [4, 7],
        },
        {
            key: 15,
            name: 'Freshwater Goby',
            location: 'River',
            shadowSize: 'Shadow Size: 2',
            price: 'Price: 400 bells',
            timeSlot: 'Available: 4 p.m. - 9 a.m.',
            duration: [0, 11],
        },
        {
            key: 16,
            name: 'Loach',
            location: 'River',
            shadowSize: 'Shadow Size: 2',
            price: 'Price: 400 bells',
            timeSlot: 'Available: All Day',
            duration: [2, 4]
        },
        {
            key: 17,
            name: 'Catfish',
            location: 'Pond',
            shadowSize: 'Shadow Size: 4',
            price: 'Price: 800 bells',
            timeSlot: 'Available: 4 p.m. - 9 a.m.',
            duration: [4, 9],
        },
        {
            key: 18,
            name: 'Giant Snakehead',
            location: 'Pond',
            shadowSize: 'Shadow Size: 5',
            price: 'Price: 5,500 bells',
            timeSlot: 'Available: 9 a.m. - 4 p.m.',
            duration: [5, 7],
        },
        {
            key: 19,
            name: 'Bluegill',
            location: 'River',
            shadowSize: 'Shadow Size: 2',
            price: 'Price: 180 bells',
            timeSlot: 'Available: 9 a.m. - 4 p.m.',
            duration: [0, 11],
        },
        {
            key: 20,
            name: 'Yellow Perch',
            location: 'River',
            shadowSize: 'Shadow Size: 3',
            price: 'Price: 300 bells',
            timeSlot: 'Available: All Day',
            duration: [9, 2],
        },
        {
            key: 21,
            name: 'Black Bass',
            location: 'River',
            shadowSize: 'Shadow Size: 4',
            price: 'Price: 400 bells',
            timeSlot: 'Available: All Day',
            duration: [0, 11],
        },
        {
            key: 22,
            name: 'Tilapia',
            location: 'River',
            shadowSize: 'Shadow Size: 3',
            price: 'Price: 800 bells',
            timeSlot: 'Available: All Day',
            duration: [5, 9],
        },
        {
            key: 23,
            name: 'Pike',
            location: 'River',
            shadowSize: 'Shadow Size: 5',
            price: 'Price: 1,800 bells',
            timeSlot: 'Available: All Day',
            duration: [8, 11],
        },
        {
            key: 24,
            name: 'Pond Smelt',
            location: 'River *Shocked Pikachu Face*',
            shadowSize: 'Shadow Size: 2',
            price: 'Price: 500 bells',
            timeSlot: 'Available: All Day',
            duration: [11, 1],
        },
        {
            key: 25,
            name: 'Sweetfish',
            location: 'River',
            shadowSize: 'Shadow Size: 3',
            price: 'Price: 900 bells',
            timeSlot: 'Available: All Day',
            duration: [6, 8],
        },
        {
            key: 26,
            name: 'Cherry Salmon',
            location: 'River',
            shadowSize: 'Shadow Size: 3',
            price: 'Price: 1,000 bells',
            timeSlot: 'Available: 4 p.m. - 9 a.m.',
            duration: [2, 5, 8, 10],
        },
        {
            key: 27,
            name: 'Char',
            location: 'River/Pond (Clifftop)',
            shadowSize: 'Shadow Size: 3',
            price: 'Price: 3,800 bells',
            timeSlot: 'Available: 4 p.m. - 9 a.m.',
            duration: [2, 5, 8, 10],
        },
        {
            key: 28,
            name: 'Golden Trout',
            location: 'River (Clifftop)',
            shadowSize: 'Shadow Size: 4',
            price: 'Price: 15,000 bells',
            timeSlot: 'Available: 4 p.m. - 9 a.m.',
            duration: [2, 5, 8, 10]
        },
        {
            key: 29,
            name: 'Stringfish',
            location: 'River (Clifftop)',
            shadowSize: 'Shadow Size: 5',
            price: 'Price: 15,000 bells',
            timeSlot: 'Available: 4 p.m. - 9 p.m.',
            duration: [11, 2],
        },
        {
            key: 30,
            name: 'Salmon',
            location: 'River(Mouth)',
            shadowSize: 'Shadow Size: 2',
            price: 'Price: 700 bells',
            timeSlot: 'Available: All Day',
            duration: [8],
        },
        {
            key: 31,
            name: 'King Salmon',
            location: 'River(Mouth)',
            shadowSize: 'ShadowSize: 6 (Largest)',
            price: 'Price: 1,800 bells',
            timeSlot: 'Available: All Day',
            duration: [8],
        },
        {
            key: 32,
            name: 'Mitten Crab',
            location: 'River',
            shadowSize: 'Shadow Size: 2',
            price: 'Price: 2,000 bells',
            timeSlot: 'Available: 4 p.m. - 9 a.m.',
            duration: [8, 10],
        },
        {
            key: 33,
            name: 'Guppy',
            location: 'River',
            shadowSize: 'ShadowSize: 1 (Smallest)',
            price: 'Price: 1,300 bells',
            timeSlot: 'Available: 9 a.m. - 4 p.m.',
            duration: [3, 10]
        },
        {
            key: 34,
            name: 'Nibble Fish',
            location: 'River',
            shadowSize: 'Shadow Size: 2',
            price: 'Price: 1,500 bells',
            timeSlot: 'Available: 9 a.m. - 4 p.m.',
            duration: [4, 8],
        },
        {
            key: 35,
            name: 'Angelfish',
            location: 'River',
            shadowSize: 'Shadow Size: 2',
            price: 'Price: 3,000 bells',
            timeSlot: 'Available: 4 p.m. - 9 a.m.',
            duration: [4, 9]
        },
        {
            key: 36,
            name: 'Betta',
            location: 'River',
            shadowSize: 'Shadow Size: 2',
            price: 'Price: 2,500 bells',
            timeSlot: 'Available: 9 a.m. - 4 p.m.',
            duration: [4, 9]
        },
        {
            key: 37,
            name: 'Neon Tetra',
            location: 'River',
            shadowSize: 'ShadowSize: 1 (Smallest)',
            price: 'Price: 500 bells',
            timeSlot: 'Available: 9 a.m. - 4 p.m.',
            duration: [3, 10],
        },
        {
            key: 38,
            name: 'Rainbowfish',
            location: 'River',
            shadowSize: 'ShadowSize: 1 (Smallest)',
            price: 'Price: 800 bells',
            timeSlot: 'Available: 9 a.m. - 4 p.m.',
            duration: [4, 9],
        },
        {
            key: 39,
            name: 'Piranha',
            location: 'River',
            shadowSize: 'Shadow Size: 2',
            price: 'Price: 2,500 bells',
            timeSlot: 'Available: 9 a.m. - 4 p.m. / 9 p.m. - 4 a.m.',
            duration: [5, 8],
        },
        {
            key: 40,
            name: 'Arowana',
            location: 'River',
            shadowSize: 'Shadow Size: 4',
            price: 'Price: 10,000 bells',
            timeSlot: 'Available: 4 p.m. - 9 a.m.',
            duration: [5, 8],
        },
        {
            key: 41,
            name: 'Dorado',
            location: 'River',
            shadowSize: 'Shadow Size: 5',
            price: 'Price: 15,000 bells',
            timeSlot: 'Available: 4 p.m. - 9 p.m.',
            duration: [5, 8]
        },
        {
            key: 42,
            name: 'Gar',
            location: 'Pond',
            shadowSize: 'ShadowSize: 6 (Largest)',
            price: 'Price: 6,000 bells',
            timeSlot: 'Available: 4 p.m. - 9 a.m.',
            duration: [6, 9]
        },
        {
            key: 43,
            name: 'Arapaima',
            location: 'River',
            shadowSize: 'ShadowSize: 6 (Largest)',
            price: 'Price: 10,000 bells',
            timeSlot: 'Available: 4 p.m. - 9 a.m.',
            duration: [5, 8]
        },
        {
            key: 44,
            name: 'Saddled Bichir',
            location: 'River',
            shadowSize: 'Shadow Size: 4',
            price: 'Price: 4,000 bells',
            timeSlot: 'Available: 9 p.m. - 4 a.m.',
            duration: [5, 8]
        },
        {
            key: 45,
            name: 'Sturgeon',
            location: 'River (Mouth)',
            shadowSize: 'ShadowSize: 6 (Largest)',
            price: 'Price: 10,000 bells',
            timeSlot: 'Available: All Day',
            duration: [8, 2]
        },
        {
            key: 46,
            name: 'Sea Butterfly',
            location: 'Sea',
            shadowSize: 'ShadowSize: 1 (Smallest)',
            price: 'Price: 1,000 bells',
            timeSlot: 'Available: All Day',
            duration: [11, 2]
        },
        {
            key: 47,
            name: 'Sea Horse',
            location: 'Sea',
            shadowSize: 'ShadowSize: 1 (Smallest)',
            price: 'Price: 1,100 bells',
            timeSlot: 'Available: All Day',
            duration: [3, 10]
        },
        {
            key: 48,
            name: 'Clown Fish',
            location: 'Sea',
            shadowSize: 'ShadowSize: 1 (Smallest)',
            price: 'Price: 650 bells',
            timeSlot: 'Available: All Day',
            duration: [3, 8]
        },
        {
            key: 49,
            name: 'Surgeonfish',
            location: 'Sea',
            shadowSize: 'Shadow Size: 2',
            price: 'Price: 1,000 bells',
            timeSlot: 'Available: All Day',
            duration: [3, 8]
        },
        {
            key: 50,
            name: 'Butterfly Fish',
            location: 'Sea',
            shadowSize: 'Shadow Size: 2',
            price: 'Price: 1,000 bells',
            timeSlot: 'Available: All Day',
            duration: [3, 8]
        },
        {
            key: 51,
            name: 'Napoleonfish',
            location: 'Sea',
            shadowSize: 'ShadowSize: 6 (Largest)',
            price: 'Price: 10,000 bells',
            timeSlot: 'Available: 4 a.m. - 9 p.m.',
            duration: [6, 7]
        },
        {
            key: 52,
            name: 'Zebra Turkeyfish',
            location: 'Sea',
            shadowSize: 'Shadow Size: 3',
            price: 'Price: 500 bells',
            timeSlot: 'Available: All Day',
            duration: [3, 10]
        },
        {
            key: 53,
            name: 'Blowfish',
            location: 'Sea',
            shadowSize: 'Shadow Size: 3',
            price: 'Price: 5,000 bells',
            timeSlot: 'Available: 6 p.m. - 4 a.m.',
            duration: [11, 1]
        },
        {
            key: 54,
            name: 'Puffer Fish',
            location: 'Sea',
            shadowSize: 'Shadow Size: 3',
            price: 'Price: 250 bells',
            timeSlot: 'Available: All Day',
            duration: [6, 8]
        },
        {
            key: 55,
            name: 'Anchovy',
            location: 'Sea',
            shadowSize: 'Shadow Size: 2',
            price: 'Price: 200 bells',
            timeSlot: 'Available: 4 a.m. - 9 p.m.',
            duration: [0, 11]
        },
        {
            key: 56,
            name: 'Horse Mackerel',
            location: 'Sea',
            shadowSize: 'Shadow Size: 2',
            price: 'Price: 150 bells',
            timeSlot: 'Available: 4 a.m. - 9 p.m.',
            duration: [0, 11]
        },
        {
            key: 57,
            name: 'Barred Knifejaw',
            location: 'Sea',
            shadowSize: 'Shadow Size: 3',
            price: 'Price: 5,000 bells',
            timeSlot: 'Available: All Day',
            duration: [2, 10]
        },
        {
            key: 58,
            name: 'Sea Bass',
            location: 'Sea',
            shadowSize: 'Shadow Size: 5',
            price: 'Price: 400 bells',
            timeSlot: 'Available: All Day',
            duration: [0, 11]
        },
        {
            key: 59,
            name: 'Red Snapper',
            location: 'Sea',
            shadowSize: 'Shadow Size: 4',
            price: 'Price: 3,000 bells',
            timeSlot: 'Available: All Day',
            duration: [0, 11]
        },
        {
            key: 60,
            name: 'Dab',
            location: 'Sea',
            shadowSize: 'Shadow Size: 3',
            price: 'Price: 300 bells',
            timeSlot: 'Available: All Day',
            duration: [9, 3]
        },
        {
            key: 61,
            name: 'Olive Flounder',
            location: 'Sea',
            shadowSize: 'Shadow Size: 5',
            price: 'Price: 800 bells',
            timeSlot: 'Available: All Day',
            duration: [0, 11]
        },
        {
            key: 62,
            name: 'Squid',
            location: 'Sea',
            shadowSize: 'Shadow Size: 3',
            price: 'Price: 500 bells',
            timeSlot: 'Available: All Day',
            duration: [11, 7]
        },
        {
            key: 63,
            name: 'Moray Eel',
            location: 'Sea',
            shadowSize: 'Shadow Size: Narrow',
            price: 'Price: 2,000 bells',
            timeSlot: 'Available: All Day',
            duration: [7, 9]
        },
        {
            key: 64,
            name: 'Ribbon Eel',
            location: 'Sea',
            shadowSize: 'Shadow Size: Narrow',
            price: 'Price: 600 bells',
            timeSlot: 'Available: All Day',
            duration: [5, 9]
        },
        {
            key: 65,
            name: 'Tuna',
            location: 'Pier',
            shadowSize: 'ShadowSize: 6 (Largest)',
            price: 'Price: 7,000 bells',
            timeSlot: 'Available: All Day',
            duration: [10, 3]
        },
        {
            key: 66,
            name: 'Blue Marlin',
            location: 'Pier',
            shadowSize: 'ShadowSize: 6 (Largest)',
            price: 'Price: 10,000 bells',
            timeSlot: 'Available: All Day',
            duration: [6, 8, 10, 3]
        },
        {
            key: 67,
            name: 'Giant Trevally',
            location: 'Pier',
            shadowSize: 'Shadow Size: 5',
            price: 'Price: 4,500 bells',
            timeSlot: 'Available: All Day',
            duration: [4, 9]
        },
        {
            key: 68,
            name: 'Mahi-mahi',
            location: 'Sea',
            shadowSize: 'Shadow Size: 5',
            price: 'Price: 6,000 bells',
            timeSlot: 'Available: All Day',
            duration: [4, 9]
        },
        {
            key: 69,
            name: 'Ocean Sunfish',
            location: 'Sea',
            shadowSize: 'ShadowSize: 6 (Largest) (Fin)',
            price: 'Price: 4,000 bells',
            timeSlot: 'Available: 4 a.m. - 9 p.m.',
            duration: [6, 8]
        },
        {
            key: 70,
            name: 'Ray',
            location: 'Sea',
            shadowSize: 'Shadow Size: 5',
            price: 'Price: 3,000 bells',
            timeSlot: 'Available: 4 a.m. - 9 p.m.',
            duration: [7, 10],

        },
        {
            key: 71,
            name: 'Saw Shark',
            location: 'Sea',
            shadowSize: 'ShadowSize: 6 (Largest) (Fin)',
            price: 'Price: 12,000 bells',
            timeSlot: 'Available: 4 p.m. - 9 a.m.',
            duration: [5, 8],

        },
        {
            key: 72,
            name: 'Hammerhead Shark',
            location: 'Sea',
            shadowSize: 'ShadowSize: 6 (Largest) (Fin)',
            price: 'Price: 8,000 bells',
            timeSlot: 'Available: 4 p.m. - 9 a.m.',
            duration: [5, 8],

        },
        {
            key: 73,
            name: 'Great White',
            location: 'Sea',
            shadowSize: 'ShadowSize: 6 (Largest) (Fin)',
            price: 'Price: 15,000 bells',
            timeSlot: 'Available: 4 p.m. - 9 a.m.',
            duration: [5, 8],

        },
        {
            key: 74,
            name: 'Whale Shark',
            location: 'Sea',
            shadowSize: 'Shadow Size:  6 (Fin)',
            price: 'Price: 13,000 bells',
            timeSlot: 'Available: All Day',
            duration: [5, 8],

        },
        {
            key: 75,
            name: 'Suckerfish',
            location: 'Sea',
            shadowSize: 'ShadowSize: 6 (Largest) (Fin)',
            price: 'Price: 1,500 bells',
            timeSlot: 'Available: All Day',
            duration: [5, 8],

        },
        {
            key: 76,
            name: 'Football Fish',
            location: 'Sea',
            shadowSize: 'Shadow Size: 4',
            price: 'Price: 2,500 bells',
            timeSlot: 'Available: 4 p.m. - 9 a.m.',
            duration: [10, 2],

        },
        {
            key: 77,
            name: 'Oarfish',
            location: 'Sea',
            shadowSize: 'ShadowSize: 6 (Largest)',
            price: 'Price: 9,000 bells',
            timeSlot: 'Available: All Day',
            duration: [11, 4],

        },
        {
            key: 78,
            name: 'Barreleye',
            location: 'Sea',
            shadowSize: 'Shadow Size: 2',
            price: 'Price: 15,000 bells',
            timeSlot: 'Available: 9 p.m. - 4 a.m.',
            duration: [0, 11],

        },
        {
            key: 79,
            name: 'Coelacanth',
            location: 'Sea (rainy days only)',
            shadowSize: 'ShadowSize: 6 (Largest)',
            price: 'Price: 15,000 bells',
            timeSlot: 'Available: All Day',
            duration: [0, 11],

        },
    ],

    //All insects in the game

    insectList: [
        {
            key: 0,
            name: 'Common Butterfly' ,
            location: 'Location: Flying',
            price: 'Price: 160 bells',
            timeSlot: 'Available: 4 a.m. - 7 p.m.',
            duration: [8,5],

        },
        {
            key: 1,
            name: 'Yellow Butterfly' ,
            location: 'Location: Flying',
            price: 'Price: 160 bells',
            timeSlot: 'Available: 4 a.m. - 7 p.m.',
            duration: [2,5,8,9],

        },

        {
            key: 2,
            name: 'Tiger Butterfly' ,
            location: 'Location: Flying',
            price: 'Price: 240 bells',
            timeSlot: 'Available: 4 a.m. - 7 p.m.',
            duration: [2,8],

        },

        {
            key: 3,
            name: 'Peacock Butterfly' ,
            location: 'Location: Flying by Hybrid Flowers',
            price: 'Price: 2,500 bells',
            timeSlot: 'Available: 4 a.m. - 7 p.m.',
            duration: [2,5],

        },

        {
            key: 4,
            name: 'Common Bluebottle' ,
            location: 'Location: Flying',
            price: 'Price: 300 bells',
            timeSlot: 'Available: 4 a.m. - 7 p.m.',
            duration: [3,7],

        },

        {
            key: 5,
            name: 'Paper Kite Butterfly' ,
            location: 'Location: Flying',
            price: 'Price: 1,000 bells',
            timeSlot: 'Available: 8 a.m. - 7 p.m.',
            duration: [0,11],

        },

        {
            key: 6,
            name: 'Great Purple Emperor' ,
            location: 'Location: Flying',
            price: 'Price: 3,000 bells',
            timeSlot: 'Available: 4 a.m. - 7 p.m.',
            duration: [4,7],

        },

        {
            key: 7,
            name: 'Monarch Butterfly' ,
            location: 'Location: Flying',
            price: 'Price: 140 bells',
            timeSlot: 'Available: 4 a.m. - 5 p.m.',
            duration: [8,10],

        },

        {
            key: 8,
            name: 'Emperor Butterfly' ,
            location: 'Location: Flying',
            price: 'Price: 4,000 bells',
            timeSlot: 'Available: 5 p.m. - 8 a.m.',
            duration: [5,8,11,2],

        },

        {
            key: 9,
            name: 'Agrias Butterfly' ,
            location: 'Location: Flying',
            price: 'Price: 3,000 bells',
            timeSlot: 'Available: 8 a.m. - 5 p.m.',
            duration: [3,8],

        },

        {
            key: 10,
            name: 'Rajah Brooke\'s Birdwing' ,
            location: 'Location: Flying',
            price: 'Price: 2,500 bells',
            timeSlot: 'Available: 8 a.m. - 4 p.m.',
            duration: [3,8,11,1],

        },

        {
            key: 11,
            name: 'Queen Alexandra\'s Birdwing' ,
            location: 'Location: Flying',
            price: 'Price: 4,000 bells',
            timeSlot: 'Available: 8 a.m. - 4 p.m.',
            duration: [3,8],

        },

        {
            key: 12,
            name: 'Moth' ,
            location: 'Location: Flying by light',
            price: 'Price: 130 bells',
            timeSlot: 'Available: 7 p.m. - 4 a.m.',
            duration: [0,11],

        },

        {
            key: 13,
            name: 'Atlas Moth' ,
            location: 'Location: On trees',
            price: 'Price: 3,000 bells',
            timeSlot: 'Available: 7 p.m. - 4 a.m.',
            duration: [3,8],

        },

        {
            key: 14,
            name: 'Madagascan Sunset Moth' ,
            location: 'Location: Flying',
            price: 'Price: 2,500 bells',
            timeSlot: 'Available: 8 a.m. - 4 p.m.',
            duration: [3,8],

        },

        {
            key: 15,
            name: 'Long Locust' ,
            location: 'Location: On the ground',
            price: 'Price: 200 bells',
            timeSlot: 'Available: 8 a.m. - 7 p.m.',
            duration: [3,10],

        },

        {
            key: 16,
            name: 'Migratory Locust' ,
            location: 'Location: On the ground',
            price: 'Price: 600 bells',
            timeSlot: 'Available: 8 a.m. - 7 p.m.',
            duration: [7,10],

        },

        {
            key: 17,
            name: 'Rice Grasshopper' ,
            location: 'Location: On the ground',
            price: 'Price: 160 bells',
            timeSlot: 'Available: 8 a.m. - 7 p.m.',
            duration: [7,10],

        },

        {
            key: 18,
            name: 'Grasshopper' ,
            location: 'Location: On the ground',
            price: 'Price: 160 bells',
            timeSlot: 'Available: 8 a.m. - 5 p.m.',
            duration: [6,8],

        },

        {
            key: 19,
            name: 'Cricket' ,
            location: 'Location: On the ground',
            price: 'Price: 150 bells',
            timeSlot: 'Available: 5 p.m. - 8 a.m.',
            duration: [8,10],

        },

        {
            key: 20,
            name: 'Bell Cricket' ,
            location: 'Location: On the ground',
            price: 'Price: 430 bells',
            timeSlot: 'Available: 5 p.m. - 8 a.m.',
            duration: [8,9],

        },

        {
            key: 21,
            name: 'Mantis' ,
            location: 'Location: On Flowers',
            price: 'Price: 430 bells',
            timeSlot: 'Available: 8 a.m. - 5 p.m.',
            duration: [2,10],

        },

        {
            key: 22,
            name: 'Orchid Mantis' ,
            location: 'Location: On Flowers (White)',
            price: 'Price: 2,400 bells',
            timeSlot: 'Available: 8 a.m. - 5 p.m.',
            duration: [2,10],

        },

        {
            key: 23,
            name: 'Honeybee' ,
            location: 'Location: Flying',
            price: 'Price: 200 bells',
            timeSlot: 'Available: 8 a.m. - 5 p.m.',
            duration: [2,6],

        },

        {
            key: 24,
            name: 'Wasp' ,
            location: 'Location: Shaking trees',
            price: 'Price: 2,500 bells',
            timeSlot: 'Available: All Day',
            duration: [0,11],

        },

        {
            key: 25,
            name: 'Brown Cicada' ,
            location: 'Location: On trees',
            price: 'Price: 250 bells',
            timeSlot: 'Available: 8 a.m. -  5 p.m.',
            duration: [6,7],

        },

        {
            key: 26,
            name: 'Robust Cicada' ,
            location: 'Location: On trees',
            price: 'Price: 300 bells',
            timeSlot: 'Available: 8 a.m. - 5 p.m.',
            duration: [6,7],

        },

        {
            key: 27,
            name: 'Giant Cicada' ,
            location: 'Location: On trees',
            price: 'Price: 550 bells',
            timeSlot: 'Available: 4 a.m. - 8 a.m. / 4 p.m. - 7 p.m.',
            duration: [6,7],

        },

        {
            key: 28,
            name: 'Cicada Shell' ,
            location: 'Location: On trees',
            price: 'Price: 10 bells',
            timeSlot: 'Available: All Day',
            duration: [6,7],

        },

        {
            key: 29,
            name: 'Red Dragonfly' ,
            location: 'Location: Flying',
            price: 'Price: 180 bells',
            timeSlot: 'Available: 8 a.m. - 7 p.m.',
            duration: [8,9],

        },

        {
            key: 30,
            name: 'Darner Dragonfly' ,
            location: 'Location: Flying',
            price: 'Price: 230 bells',
            timeSlot: 'Available: 8 a.m. - 5 p.m.',
            duration: [3,9],

        },

        {
            key: 31,
            name: 'Banded Dragonfly' ,
            location: 'Location: Flying',
            price: 'Price: 4,500 bells',
            timeSlot: 'Available: 8 a.m. - 5 p.m.',
            duration: [4,9],

        },

        {
            key: 32,
            name: 'Damselfly' ,
            location: 'Location: Flying',
            price: 'Price: 500 bells',
            timeSlot: 'Available: All Day',
            duration: [10,1],

        },

        {
            key: 33,
            name: 'Firefly' ,
            location: 'Location: Flying',
            price: 'Price: 300 bells',
            timeSlot: 'Available: 7 p.m. - 4 a.m.',
            duration: [5],

        },

        {
            key: 34,
            name: 'Mole Cricket' ,
            location: 'Location: Underground',
            price: 'Price: 500 bells',
            timeSlot: 'Available: All Day',
            duration: [10,4],

        },

        {
            key: 35,
            name: 'Pondskater' ,
            location: 'Location: On ponds and rivers',
            price: 'Price: 130 bells',
            timeSlot: 'Available: 8 a.m. - 7 p.m.',
            duration: [4,8],

        },

        {
            key: 36,
            name: 'Diving Beetle' ,
            location: 'Location: On ponds and rivers',
            price: 'Price: 800 bells',
            timeSlot: 'Available: 8 a.m. - 7 p.m.',
            duration: [4,8],

        },

        {
            key: 37,
            name: 'Giant Water Bug' ,
            location: 'Location: On ponds and rivers',
            price: 'Price: 2,000 bells',
            timeSlot: 'Available: 7 p.m. - 8 a.m.',
            duration: [3,8],

        },

        {
            key: 38,
            name: 'Stinkbug' ,
            location: 'Location: On Flowers',
            price: 'Price: 120 bells',
            timeSlot: 'Available: All Day',
            duration: [2,10],

        },

        {
            key: 39,
            name: 'Man-faced Stinkbug' ,
            location: 'Location: On Flowers',
            price: 'Price: 1,000 bells',
            timeSlot: 'Available: 7 p.m. - 8 a.m.',
            duration: [2,10],

        },

        {
            key: 40,
            name: 'Ladybug' ,
            location: 'Location: On Flowers',
            price: 'Price: 200 bells',
            timeSlot: 'Available: 8 a.m. - 5 p.m.',
            duration: [2,5,9],

        },

        {
            key: 41,
            name: 'Tiger Beetle' ,
            location: 'Location: On the ground',
            price: 'Price: 1,500 bells',
            timeSlot: 'Available: All Day',
            duration: [1,10],

        },

        {
            key: 42,
            name: 'Jewel Beetle' ,
            location: 'Location: On tree stumps',
            price: 'Price: 2,400 bells',
            timeSlot: 'Available: All Day',
            duration: [3,7],

        },

        {
            key: 43,
            name: 'Violin Beetle' ,
            location: 'Location: On tree stumps',
            price: 'Price: 450 bells',
            timeSlot: 'Available: All Day',
            duration: [4,5,8,10],

        },

        {
            key: 44,
            name: 'Citrus Long-horned Beetle' ,
            location: 'Location: On tree stumps',
            price: 'Price: 350 bells',
            timeSlot: 'Available: All Day',
            duration: [0,11],

        },

        {
            key: 45,
            name: 'Rosalia Batesi Beetle' ,
            location: 'Location: On tree stumps',
            price: 'Price: 3,000 bells',
            timeSlot: 'Available: All Day',
            duration: [4,8],

        },

        {
            key: 46,
            name: 'Blue Weevil Beetle' ,
            location: 'Location: On trees (Coconut?)',
            price: 'Price: 800 bells',
            timeSlot: 'Available: All Day',
            duration: [6,7],

        },

        {
            key: 47,
            name: 'Dung Beetle' ,
            location: 'Location: On the ground (rolling snowballs)',
            price: 'Price: 3,000 bells',
            timeSlot: 'Available: All Day',
            duration: [11,1],

        },

        {
            key: 48,
            name: 'Earth-boring Dung Beetle' ,
            location: 'Location: On the ground',
            price: 'Price: 300 bells',
            timeSlot: 'Available: All Day',
            duration: [6,8],

        },

        {
            key: 49,
            name: 'Scarab Beetle' ,
            location: 'Location: On trees',
            price: 'Price: 10,000 bells',
            timeSlot: 'Available: 11 p.m. - 8 a.m.',
            duration: [6,7],

        },

        {
            key: 50,
            name: 'Drone Beetle' ,
            location: 'Location: On trees',
            price: 'Price: 200 bells',
            timeSlot: 'Available: All Day',
            duration: [5,7],

        },

        {
            key: 51,
            name: 'Goliath Beetle' ,
            location: 'Location: On trees (Coconut)',
            price: 'Price: 8,000 bells',
            timeSlot: 'Available: 5 p.m. - 6 a.m.',
            duration: [5,8],

        },

        {
            key: 52,
            name: 'Saw Stag' ,
            location: 'Location: On trees',
            price: 'Price: 2,000 bells',
            timeSlot: 'Available: All Day',
            duration: [6,7],

        },

        {
            key: 53,
            name: 'Miyama Stag' ,
            location: 'Location: On trees',
            price: 'Price: 1,000 bells',
            timeSlot: 'Available: All Day',
            duration: [6,7],

        },

        {
            key: 54,
            name: 'Giant Stag' ,
            location: 'Location: On trees',
            price: 'Price: 10,000 bells',
            timeSlot: 'Available: 11 p.m. - 8 a.m.',
            duration: [6,7],

        },

        {
            key: 55,
            name: 'Rainbow Stag' ,
            location: 'Location: On trees',
            price: 'Price: 6,000 bells',
            timeSlot: 'Available: 7 p.m. - 8 a.m.',
            duration: [5,8],

        },

        {
            key: 56,
            name: 'Cyclommatus Stag' ,
            location: 'Location: On trees',
            price: 'Price: 8,000 bells',
            timeSlot: 'Available: 5 p.m. - 8 a.m.',
            duration: [6,7],

        },

        {
            key: 57,
            name: 'Golden Stag' ,
            location: 'Location: On trees',
            price: 'Price: ? bells',
            timeSlot: 'Available: 5 p.m. - 8 a.m.',
            duration: [6,7],

        },

        {
            key: 58,
            name: 'Giraffe Stag' ,
            location: 'Location: On trees',
            price: 'Price: ? bells',
            timeSlot: 'Available: 5 p.m. - 8 a.m.',
            duration: [6,7],

        },

        {
            key: 59,
            name: 'Horned Dynastid Beetle' ,
            location: 'Location: On trees',
            price: 'Price: 1,350 bells',
            timeSlot: 'Available: 5 p.m. - 8 a.m.',
            duration: [6,7],

        },

        {
            key: 60,
            name: 'Horned Atlas Beetle' ,
            location: 'Location: On trees',
            price: 'Price: 8,000 bells',
            timeSlot: 'Available: 5 p.m. - 8 a.m.',
            duration: [6,7],

        },

        {
            key: 61,
            name: 'Horned Elephant Beetle' ,
            location: 'Location: On trees',
            price: 'Price: 8,000 bells',
            timeSlot: 'Available: 5 p.m. - 8 a.m.',
            duration: [6,7],

        },

        {
            key: 62,
            name: 'Horned Hercules Beetle' ,
            location: 'Location:  On trees',
            price: 'Price: ? bells',
            timeSlot: 'Available: 5 p.m. - 8 a.m.',
            duration: [6,7],

        },

        {
            key: 63,
            name: 'Walking Stick' ,
            location: 'Location: On trees/ shake tree',
            price: 'Price: 600 bells',
            timeSlot: 'Available: 4 a.m. - 8 a.m. / 5 p.m. - 7 p.m.',
            duration: [6,10],

        },

        {
            key: 64,
            name: 'Walking Leaf' ,
            location: 'Location: Under trees disguised as a leaf',
            price: 'Price: 600 bells',
            timeSlot: 'Available: All Day',
            duration: [6,7],

        },

        {
            key: 65,
            name: 'Bagworm' ,
            location: 'Location: Shaking trees',
            price: 'Price: 600 bells',
            timeSlot: 'Available: All Day',
            duration: [0,11],

        },

        {
            key: 66,
            name: 'Ant' ,
            location: 'Location: On rotten food',
            price: 'Price: 80 bells',
            timeSlot: 'Available: All Day',
            duration: [0,11],

        },

        {
            key: 67,
            name: 'Hermit Crab' ,
            location: 'Location: Beach disguised as a shell',
            price: 'Price: 1,000 bells',
            timeSlot: 'Available: 7 p.m. - 8 a.m.',
            duration: [0,11],

        },

        {
            key: 68,
            name: 'Wharf Roach' ,
            location: 'Location: On beach rocks',
            price: 'Price: 200 bells',
            timeSlot: 'Available: All Day',
            duration: [0,11],

        },

        {
            key: 69,
            name: 'Fly' ,
            location: 'Location: On trash items',
            price: 'Price: 60 bells',
            timeSlot: 'Available: All Day',
            duration: [0,11],

        },

        {
            key: 70,
            name: 'Mosquito' ,
            location: 'Location: Flying',
            price: 'Price: 130 bells',
            timeSlot: 'Available: 5 p.m. - 4 a.m.',
            duration: [5,8],

        },

        {
            key: 71,
            name: 'Flea' ,
            location: 'Location: On villager\'s heads',
            price: 'Price: 70 bells',
            timeSlot: 'Available: All Day',
            duration: [3,10],

        },

        {
            key: 72,
            name: 'Snail' ,
            location: 'Location: On rocks (When Raining)',
            price: 'Price: 250 bells',
            timeSlot: 'Available: All Day',
            duration: [0,11],

        },

        {
            key: 73,
            name: 'Pill Bug' ,
            location: 'Location: Hitting Rocks',
            price: 'Price: 250 bells',
            timeSlot: 'Available: 11 p.m. - 4 p.m.',
            duration: [8,5],

        },

        {
            key: 74,
            name: 'Centipede' ,
            location: 'Location: Hitting Rocks',
            price: 'Price: 300 bells',
            timeSlot: 'Available: 4 p.m. - 11 p.m.',
            duration: [8,5],

        },

        {
            key: 75,
            name: 'Spider' ,
            location: 'Location: Shaking trees',
            price: 'Price: 480 bells',
            timeSlot: 'Available: 7 p.m. - 8 a.m.',
            duration: [0,11],

        },

        {
            key: 76,
            name: 'Tarantula' ,
            location: 'Location: On the ground',
            price: 'Price: 8,000 bells',
            timeSlot: 'Available: 7 p.m. - 4 a.m.',
            duration: [10,3],

        },

        {
            key: 77,
            name: 'Scorpion' ,
            location: 'Location: On the ground',
            price: 'Price: 8,000 bells',
            timeSlot: 'Available: 7 p.m. - 4 a.m.',
            duration: [4,9],

        },

        {
            key: 78,
            name: 'Evening Cicada' ,
            location: 'Location: On trees',
            price: 'Price: 660 bells',
            timeSlot: 'Available: 4 a.m. - 8 a.m. / 4 p.m. - 7 p.m.',
            duration: [6,7],

        },

        {
            key: 79,
            name: 'Walker Cicada' ,
            location: 'Location: On trees',
            price: 'Price: 400 bells',
            timeSlot: 'Available: 8 a.m. - 5 p.m.',
            duration: [7,8],

        },

    ],


    //Fossils


    //Artwork
}
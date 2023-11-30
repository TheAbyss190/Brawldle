// Head Icon
// Name
// Publisher
// Franchise
// First Appearance
// Smash Debut
// Number

const characterData = {
    'Mario': {
        icon: 'https://ssb.wiki.gallery/images/9/9e/MarioHeadSSBUWebsite.png',
        name: 'Mario',
        publisher: 'Nintendo',
        franchise: 'Mario',
        firstAppearance: '1981',
        smashDebut: '64',
        number: '1',
        numberDisplay: '1'
    },
    'Donkey Kong': {
        icon: 'https://ssb.wiki.gallery/images/2/21/DonkeyKongHeadSSBUWebsite.png',
        name: 'Donkey Kong',
        publisher: 'Nintendo',
        franchise: 'Donkey Kong',
        firstAppearance: '1981',
        smashDebut: '64',
        number: '2',
        numberDisplay: '2'
    },
    'Link': {
        icon: 'https://ssb.wiki.gallery/images/2/2b/LinkHeadSSBUWebsite.png',
        name: 'Link',
        publisher: 'Nintendo',
        franchise: 'The Legend of Zelda',
        firstAppearance: '1986',
        smashDebut: '64',
        number: '3',
        numberDisplay: '3'
    },
    'Samus': {
        icon: 'https://ssb.wiki.gallery/images/d/d0/SamusHeadSSBUWebsite.png',
        name: 'Samus',
        publisher: 'Nintendo',
        franchise: 'Metroid',
        firstAppearance: '1986',
        smashDebut: '64',
        number: '4',
        numberDisplay: '4'
    },
    'Dark Samus': {
        icon: 'https://ssb.wiki.gallery/images/2/24/DarkSamusHeadSSBUWebsite.png',
        name: 'Dark Samus',
        publisher: 'Nintendo',
        franchise: 'Metroid',
        firstAppearance: '2004',
        smashDebut: 'Brawl',
        number: '4',
        numberDisplay: '4ᵋ'
    },
    'Yoshi': {
        icon: 'https://ssb.wiki.gallery/images/9/93/YoshiHeadSSBUWebsite.png',
        name: 'Yoshi',
        publisher: 'Nintendo',
        franchise: 'Mario',
        firstAppearance: '1990',
        smashDebut: '64',
        number: '5',
        numberDisplay: '5'
    },
    'Kirby': {
        icon: 'https://ssb.wiki.gallery/images/1/15/KirbyHeadSSBUWebsite.png',
        name: 'Kirby',
        publisher: 'Nintendo',
        franchise: 'Kirby',
        firstAppearance: '1992',
        smashDebut: '64',
        number: '6',
        numberDisplay: '6'
    },
    'Fox': {
        icon: 'https://ssb.wiki.gallery/images/c/c9/FoxHeadSSBUWebsite.png',
        name: 'Fox',
        publisher: 'Nintendo',
        franchise: 'Star Fox',
        firstAppearance: '1993',
        smashDebut: '64',
        number: '7',
        numberDisplay: '7'
    },
    'Pikachu': {
        icon: 'https://ssb.wiki.gallery/images/5/52/PikachuHeadSSBUWebsite.png',
        name: 'Pikachu',
        publisher: 'Nintendo',
        franchise: 'Pokémon',
        firstAppearance: '1996',
        smashDebut: '64',
        number: '8',
        numberDisplay: '8'
    },
    'Luigi': {
        icon: 'https://ssb.wiki.gallery/images/9/9d/LuigiHeadSSBUWebsite.png',
        name: 'Luigi',
        publisher: 'Nintendo',
        franchise: 'Mario',
        firstAppearance: '1983',
        smashDebut: '64',
        number: '9',
        numberDisplay: '9'
    },
    'Ness': {
        icon: 'https://ssb.wiki.gallery/images/d/d5/NessHeadSSBUWebsite.png',
        name: 'Ness',
        publisher: 'Nintendo',
        franchise: 'EarthBound',
        firstAppearance: '1994',
        smashDebut: '64',
        number: '10',
        numberDisplay: '10'
    },
    'Captain Falcon': {
        icon: 'https://ssb.wiki.gallery/images/6/6b/CaptainFalconHeadSSBUWebsite.png',
        name: 'Captain Falcon',
        publisher: 'Nintendo',
        franchise: 'F-Zero',
        firstAppearance: '1990',
        smashDebut: '64',
        number: '11',
        numberDisplay: '11'
    },
    'Jigglypuff': {
        icon: 'https://ssb.wiki.gallery/images/9/90/JigglypuffHeadSSBUWebsite.png',
        name: 'Jigglypuff',
        publisher: 'Nintendo',
        franchise: 'Pokémon',
        firstAppearance: '1996',
        smashDebut: '64',
        number: '12',
        numberDisplay: '12'
    },
    'Peach': {
        icon: 'https://ssb.wiki.gallery/images/1/14/PeachHeadSSBUWebsite.png',
        name: 'Peach',
        publisher: 'Nintendo',
        franchise: 'Mario',
        firstAppearance: '1985',
        smashDebut: 'Melee',
        number: '13',
        numberDisplay: '13'
    },
    'Daisy': {
        icon: 'https://ssb.wiki.gallery/images/2/2d/DaisyHeadSSBUWebsite.png',
        name: 'Daisy',
        publisher: 'Nintendo',
        franchise: 'Mario',
        firstAppearance: '1989',
        smashDebut: 'Melee',
        number: '13',
        numberDisplay: '13ᵋ'
    },
    'Bowser': {
        icon: 'https://ssb.wiki.gallery/images/0/0b/BowserHeadSSBUWebsite.png',
        name: 'Bowser',
        publisher: 'Nintendo',
        franchise: 'Mario',
        firstAppearance: '1985',
        smashDebut: 'Melee',
        number: '14',
        numberDisplay: '14'
    },
    'Ice Climbers': {
        icon: 'https://ssb.wiki.gallery/images/0/0c/IceClimbersHeadSSBUWebsite.png',
        name: 'Ice Climbers',
        publisher: 'Nintendo',
        franchise: 'Ice Climbers',
        firstAppearance: '1984',
        smashDebut: 'Melee',
        number: '15',
        numberDisplay: '15'
    },
    'Sheik': {
        icon: 'https://ssb.wiki.gallery/images/1/1e/SheikHeadSSBUWebsite.png',
        name: 'Sheik',
        publisher: 'Nintendo',
        franchise: 'The Legend of Zelda',
        firstAppearance: '1998',
        smashDebut: 'Melee',
        number: '16',
        numberDisplay: '16'
    },
    'Zelda': {
        icon: 'https://ssb.wiki.gallery/images/c/c8/ZeldaHeadSSBUWebsite.png',
        name: 'Zelda',
        publisher: 'Nintendo',
        franchise: 'The Legend of Zelda',
        firstAppearance: '1986',
        smashDebut: 'Melee',
        number: '17',
        numberDisplay: '17'
    },
    'Dr. Mario': {
        icon: 'https://ssb.wiki.gallery/images/c/c8/DrMarioHeadSSBUWebsite.png',
        name: 'Dr. Mario',
        publisher: 'Nintendo',
        franchise: 'Mario',
        firstAppearance: '1990',
        smashDebut: 'Melee',
        number: '18',
        numberDisplay: '18'
    },
    'Pichu': {
        icon: '',
        name: 'Pichu',
        publisher: 'Nintendo',
        franchise: 'Pokémon',
        firstAppearance: '1999',
        smashDebut: 'Melee',
        number: '19',
        numberDisplay: '19'
    },
    'Falco': {
        icon: 'https://ssb.wiki.gallery/images/6/6e/FalcoHeadSSBUWebsite.png',
        name: 'Falco',
        publisher: 'Nintendo',
        franchise: 'Star Fox',
        firstAppearance: '1993',
        smashDebut: 'Melee',
        number: '20',
        numberDisplay: '20'
    },
}

const tableHeaderNames = [
    'Icon',
    'Name',
    'Publisher',
    'Franchise',
    'First Appearance',
    'Smash Debut',
    'Character Number'
]

const smashGames = [
    '64',
    'Melee',
    'Brawl',
    '3DS/WiiU',
    'Ultimate'
]
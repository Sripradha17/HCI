const { puzzle } = require('../config/mongoCollections');
const dbConnection = require('../config/mongoConnection');
const data = require('../data/');
const Puzzle = data.puzzle;
const Action = data.action;
const Racing = data.racing;
const Strategy = data.strategy;
const Sports = data.sports;
const reviews = data.reviews;
const users = data.users;

async function main() {
    const db = await dbConnection();
    await db.dropDatabase();


    // Users
    //admin
    // const udit= await users.createUser('Udit','Patel','123-345 5678','upatel6@stevens.edu',1,2,'admin','24','Admin@123');
    // let data= await users.getAllUsers();
    // udit_id=data[data.length - 1]._id;



    // Puzzle
    //pending approval
    const H1 = await Puzzle.addPuzzle("The Talos Principle", "The Talos Principle", ["TET"], "https://store.steampowered.com/app/257510/The_Talos_Principle/", ["../../../public/images/TheTalosPrinciple.gif"]);
    const H2 = await Puzzle.addPuzzle("Tetris", "Tetris", ["TET"], "https://tetris.com/play-tetris", ["../../../public/images/tetris.jpg"]);
    const H3 = await Puzzle.addPuzzle("Portals 2", "Portals 2", ["TET"], "https://store.steampowered.com/app/620/Portal_2/", ["../../../public/images/Portals2.jpg"]);
    const H4 = await Puzzle.addPuzzle("Baba Is You", "Baba Is You", ["TET"], "https://store.steampowered.com/app/736260/Baba_Is_You/", ["../../../public/images/BabaIsYou.jpg"]);
    const H5 = await Puzzle.addPuzzle("Fez", "Fez", ["TET"], "https://store.steampowered.com/app/224760/FEZ/", ["../../../public/images/Fez.jpg"]);
    const H6 = await Puzzle.addPuzzle("Bejeweled 3", "Bejeweled 3", ["TET"], "https://store.steampowered.com/app/78000/Bejeweled_3/", ["../../../public/images/Bejeweled3.jpg"]);

    //action
    const A1 = await Action.addAction("Tomb Raider", "Tomb Raider", ["TET"], "https://store.steampowered.com/agecheck/app/203160/", ["../../../public/images/TombRaider.jpg"]);
    const A2 = await Action.addAction("Batman: Arkham Asylums", "Batman: Arkham Asylums", ["TET"], "https://store.steampowered.com/app/35140/Batman_Arkham_Asylum_Game_of_the_Year_Edition/", ["../../../public/images/Batman.gif"]);
    const A3 = await Action.addAction("Marvel’s Guardians of Galaxys", "Marvel’s Guardians of Galaxys", ["TET"], "https://store.steampowered.com/app/1088850/Marvels_Guardians_of_the_Galaxy/", ["../../../public/images/Guardians.gif"]);
    const A4 = await Action.addAction("Assassins Creed Valhalla", "Assassins Creed Valhalla", ["TET"], "https://store.steampowered.com/app/2208920/Assassins_Creed_Valhalla/", ["../../../public/images/Assassins_Creed_Valhalla.gif"]);
    const A5 = await Action.addAction("Resident Evil 4", "Resident Evil 4", ["TET"], "https://www.residentevil.com/4/", ["../../../public/images/ResidentEvil4.gif"]);
    const A6 = await Action.addAction("Uncharted 4 : A Thief’s End", "Uncharted 4 : A Thief’s End", ["TET"], "https://store.steampowered.com/app/607080/Psychonauts_2/", ["../../../public/images/Uncharted 4.gif"]);

    //racing
    const R1 = await Racing.addRacing("Dirt Rally 2.0", "Dirt Rally 2.0", ["TET"], "https://store.steampowered.com/agecheck/app/203160/", ["../../../public/images/DirtRally.gif"]);
    const R2 = await Racing.addRacing("Forza Horizon 5", "Forza Horizon 5", ["TET"], "https://www.residentevil.com/4/", ["../../../public/images/ForzaHorizon5.gif"]);
    const R3 = await Racing.addRacing("Need for Speed: Hot Pursuit", "Need for Speed: Hot Pursuit", ["TET"], "https://store.steampowered.com/app/1088850/Marvels_Guardians_of_the_Galaxy/", ["../../../public/images/NFS.gif"]);
    const R4 = await Racing.addRacing("Project CARS 2", "Project CARS 2", ["TET"], "https://store.steampowered.com/app/2208920/Assassins_Creed_Valhalla/", ["../../../public/images/ProjectCARS2.gif"]);
    const R5 = await Racing.addRacing("F1 2020", "F1 2020", ["TET"], "https://store.steampowered.com/app/35140/Batman_Arkham_Asylum_Game_of_the_Year_Edition/", ["../../../public/images/F12020.gif"]);
    const R6 = await Racing.addRacing("Forza Motorsport 7", "Forza Motorsport 7", ["TET"], "https://store.steampowered.com/app/607080/Psychonauts_2/", ["../../../public/images/Forza.gif"]);

    //sports
    const S1 = await Sports.addSports("MARIO TENNIS", "MARIO TENNIS", ["TET"], "https://store.steampowered.com/app/1088850/Marvels_Guardians_of_the_Galaxy/", ["../../../public/images/Mario_Tennis.gif"]);
    const S2 = await Sports.addSports("Fifa 10", "Fifa 10", ["TET"], "https://www.residentevil.com/4/", ["../../../public/images/Fifa_10.gif"]);
    const S3 = await Sports.addSports("Wii Sports", "Wii Sports", ["TET"], "https://store.steampowered.com/agecheck/app/203160/", ["../../../public/images/wii.gif"]);
    const S4 = await Sports.addSports("NFL STREET", "NFL STREET", ["TET"], "https://store.steampowered.com/app/2208920/Assassins_Creed_Valhalla/", ["../../../public/images/nfl.gif"]);
    const S5 = await Sports.addSports("Nintendo switch sports", "Nintendo switch sports", ["TET"], "https://store.steampowered.com/app/35140/Batman_Arkham_Asylum_Game_of_the_Year_Edition/", ["../../../public/images/Nintendo.gif"]);
    const S6 = await Sports.addSports("Mario Golf", "Mario Golf", ["TET"], "https://store.steampowered.com/app/607080/Psychonauts_2/", ["../../../public/images/Mario_golf.gif"]);

    //strategy
    const ST1 = await Strategy.addStrategy("Offworld Trading Company", "Offworld Trading Company is a real-time strategy video game developed by Mohawk Games and published by Stardock. The game was released for Microsoft Windows and OS X in April 2016.", ["Player A owns 7 of his own stock.", "Player B owns 3 of Player A's stocks.", "In order for Player B to buyout Player A, they must first purchase two of Player A's stocks at twice their listed price.", "Then, Player B has to purchase the remaining 5 stocks in one go (also at twice the listed price).", "These purchases are a 'forced purchase', if you will, as they forcibly replace Player A's ownership of a stock w/ Player B's."], "https://offworldtradingcompany.fandom.com/wiki/Beginner%27s_Guide", ["Cycle Own HQs	SPACE", "Cycle HQ	TAB", "Claim Tile	C", "Bid on Auction	B", "Sell All Resources	2", "Hide Buildings	3", "Delete Building	4"], ["https://store.steampowered.com/app/1088850/Marvels_Guardians_of_the_Galaxy/","https://www.offworldgame.com/",], ["../../../public/images/offworld.gif","../../../public/images/offworld.gif","../../../public/images/offworld.gif","../../../public/images/offworld.gif","../../../public/images/offworld.gif"],"https://www.youtube.com/embed/wOjeepczC6g");
    // const ST2 = await Strategy.addStrategy("Crusader Kings 3", "Crusader Kings 3", ["TET"], "https://www.residentevil.com/4/", ["../../../public/images/crusader.gif"]);
    // const ST3 = await Strategy.addStrategy("Supremacy 1914", "Supremacy 1914", ["TET"], "https://store.steampowered.com/agecheck/app/203160/", ["../../../public/images/supremacy.gif"]);
    // const ST4 = await Strategy.addStrategy("XCOM 2", "XCOM 2", ["TET"], "https://store.steampowered.com/app/2208920/Assassins_Creed_Valhalla/", ["../../../public/images/xcom2.gif"]);
    // const ST5 = await Strategy.addStrategy("Homeworld: Deserts of Kharak", "Homeworld: Deserts of Kharak", ["TET"], "https://store.steampowered.com/app/35140/Batman_Arkham_Asylum_Game_of_the_Year_Edition/", ["../../../public/images/homeworld.gif"]);
    // const ST6 = await Strategy.addStrategy("Civilization 6", "Civilization 6", ["TET"], "https://store.steampowered.com/app/607080/Psychonauts_2/", ["../../../public/images/civilization6.gif"]);

    // data= await Puzzle.getAllPuzzles();
    // H1_id= data[data.length - 1]._id;
    // console.log(H1_id)


    // const RE1 = await reviews.createReview(u11_id, H25_id,'Extraordinary','This is one of the most special resorts I\'ve visited in my 60+ years. It starts with the people who work there, all of them thoughtful, kind, generous, and service-oriented. Then there is the low-rise buildings and the landscaping, like a tropical botanic garden with small waterways and koi ponds','4','11/24/2021');
    // const RE2 = await reviews.createReview(u11_id, H23_id,'Extraordinary','This is one of the most special resorts I\'ve visited in my 60+ years. It starts with the people who work there, all of them thoughtful, kind, generous, and service-oriented. Then there is the low-rise buildings and the landscaping, like a tropical botanic garden with small waterways and koi ponds','3','11/25/2021');
    // const RE3 = await reviews.createReview(u12_id, H20_id,'Extraordinary','This is one of the most special resorts I\'ve visited in my 60+ years. It starts with the people who work there, all of them thoughtful, kind, generous, and service-oriented. Then there is the low-rise buildings and the landscaping, like a tropical botanic garden with small waterways and koi ponds','1','11/26/2021');
    // const RE4 = await reviews.createReview(u12_id, H21_id,'Extraordinary','This is one of the most special resorts I\'ve visited in my 60+ years. It starts with the people who work there, all of them thoughtful, kind, generous, and service-oriented. Then there is the low-rise buildings and the landscaping, like a tropical botanic garden with small waterways and koi ponds','5','11/27/2021');
    // const RE5 = await reviews.createReview(u13_id, H2_id,'Extraordinary','This is one of the most special resorts I\'ve visited in my 60+ years. It starts with the people who work there, all of them thoughtful, kind, generous, and service-oriented. Then there is the low-rise buildings and the landscaping, like a tropical botanic garden with small waterways and koi ponds','4','11/28/2021');
    // const RE6 = await reviews.createReview(u13_id, H5_id,'Extraordinary','This is one of the most special resorts I\'ve visited in my 60+ years. It starts with the people who work there, all of them thoughtful, kind, generous, and service-oriented. Then there is the low-rise buildings and the landscaping, like a tropical botanic garden with small waterways and koi ponds','2','11/29/2021');
    // const RE7 = await reviews.createReview(u14_id, H1_id,'Extraordinary','This is one of the most special resorts I\'ve visited in my 60+ years. It starts with the people who work there, all of them thoughtful, kind, generous, and service-oriented. Then there is the low-rise buildings and the landscaping, like a tropical botanic garden with small waterways and koi ponds','5','11/20/2021');
    // const RE8 = await reviews.createReview(u14_id, H12_id,'Extraordinary','This is one of the most special resorts I\'ve visited in my 60+ years. It starts with the people who work there, all of them thoughtful, kind, generous, and service-oriented. Then there is the low-rise buildings and the landscaping, like a tropical botanic garden with small waterways and koi ponds','5','11/1/2021');
    // const RE9 = await reviews.createReview(u15_id, H17_id,'Extraordinary','This is one of the most special resorts I\'ve visited in my 60+ years. It starts with the people who work there, all of them thoughtful, kind, generous, and service-oriented. Then there is the low-rise buildings and the landscaping, like a tropical botanic garden with small waterways and koi ponds','5','11/3/2021');
    // const RE10 = await reviews.createReview(u16_id, H25_id,'Extraordinary','This is one of the most special resorts I\'ve visited in my 60+ years. It starts with the people who work there, all of them thoughtful, kind, generous, and service-oriented. Then there is the low-rise buildings and the landscaping, like a tropical botanic garden with small waterways and koi ponds','5','11/2/2021');


    console.log('Done seeding database');
    await db.serverConfig.close();
}

main();


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

    //usert
    const u11 = await users.createUser('Sripradha', 'Bhat', 'sbhat8@stevens.edu', 'Sripradha', 'Admin@123');
    let datas = await users.getAllUsers();
    const u11_id = datas[datas.length - 1]._id;
    const u12 = await users.createUser('Karthik', 'Reddy', 'kreddy@gmail.com', 'Karthik', 'Admin@123');
    datas = await users.getAllUsers();
    const u12_id = datas[datas.length - 1]._id;
    const u13 = await users.createUser('Sainikhil', 'Mallakunta', 'sainikhil@gmail.com', 'Sainikhil', 'Admin@123');
    datas = await users.getAllUsers();
    const u13_id = datas[datas.length - 1]._id;
    const u14 = await users.createUser('Aishwarya', 'Pai', 'aishpai@gmail.com', 'Aishwarya', 'Admin@123');
    datas = await users.getAllUsers();
    const u14_id = datas[datas.length - 1]._id;
    const u15 = await users.createUser('Admin', 'Admin', 'patrikhill@gmail.com', 'Admin', 'Admin@123');
    datas = await users.getAllUsers();
    const u15_id = datas[datas.length - 1]._id;
    const u16 = await users.createUser('Shweta', 'Mishra', 'shweta@gmail.com', 'Shweta', 'Admin@123');
    datas = await users.getAllUsers();
    const u16_id = datas[datas.length - 1]._id;

    // Puzzle
    const H1 = await Puzzle.addPuzzle(
    /*name*/"The Talos Principle",
    /*about*/ "Elohim, time capsules left by Alexandra Drennan, terminals, your contact with the MLA, and QR codes left behind by previous test subjects of the kid program all play a role in the game's plot and history. The narrative addresses several philosophical issues and develops its own philosophical principle, the (philosophical) Talos principle, while being largely ignorable. You can select between three alternative endings because the game is open-ended (which can vary slightly).The Talos Principle is a philosophical first-person puzzle game from Croteam, the creators of the legendary Serious Sam series, written by Tom Jubert (FTL, The Swapper) and Jonas Kyratzes (The Sea Will Claim Everything). . As if awakening from a deep sleep, you find yourself in a strange, contradictory world of ancient ruins and advanced technology",
    /*instruction*/[
            "You may simply accomplish The Talos Principle with the aid of the tutorial",
            "This tutorial has the answer to every single one of them.",
            "You'll learn how to complete the puzzles more quickly.",
            "The Serious Sam series-famous Croteam studios are behind this game.",
            "The Portal series fans should play this game.",
            " You will need to use all of your logical thinking to finish the game in 100%."
        ],
    /*refer*/"https://www.youtube.com/watch?v=HdgvWzrOhHI",
    /*cheat code*/[
            "Builder's Island: Navigate to the Room 7 teleporter in Area A",
            "Minecraft mention: Enter the first puzzle on the right in Area C.",
            "Pink Floyd reference: In Area B: Area 5, ascend to the top of the ruin you entered at the beginning of the room",
            "Portal 2 citations: Use the first puzzle on the left in Area B",
            "Fork Parker quotation: Go to the chapel ruins with the red door in Area C"
        ],
    /*buy*/[
            "Steam", "https://store.steampowered.com/app/257510/The_Talos_Principle/",
            "Nintendo", "https://www.nintendo.com/store/products/the-talos-principle-deluxe-edition-switch/",
            "Google play", "https://play.google.com/store/apps/details?id=com.devolver.Talos&hl=en_US&gl=US",
            "Play station", "https://play.google.com/store/apps/details?id=com.devolver.Talos&hl=en_US&gl=US",
            "App store", "",
            "Game stop", "https://www.gamestop.com/video-games/products/the-talos-principle-deluxe-edition---playstation-4/117753.html",
            "Amazon", "https://www.amazon.com/s?k=The+Talos+Principle&crid=T6L9DBN7YRZF&sprefix=the+talos+principle%2Caps%2C161&ref=nb_sb_noss_1",
            "Official", "https://the-talos-principle.en.softonic.com/?utm_source=SEM&utm_medium=paid&utm_campaign=EN_desktop_RegionA_conversions_DSA_US&gclid=EAIaIQobChMIjMaxvYHc-wIVC4rICh2qwgM9EAMYASAAEgISQPD_BwE"
        ],
    /*images*/[
            "../../../public/images/TheTalosPrinciple.gif",
            "../../../public/images/TheTalosPrinciple.gif",
            "../../../public/images/TheTalosPrinciple.gif",
            "../../../public/images/TheTalosPrinciple.gif",
            "../../../public/images/TheTalosPrinciple.gif"
        ],
    /*youtube link*/  "https://www.youtube.com/embed/Vu9QFBWb7WQ"
    );
    datas = await Puzzle.getAllPuzzles();
    const p11_id = datas[datas.length - 1]._id;

    const H2 = await Puzzle.addPuzzle(
    /*name*/ "Tetris",
    /*about*/ "Soviet software developer Alexey Pajitnov invented the puzzle video game Tetris in 1984. It has been released by a number of businesses for a variety of platforms, most notably in the late 1980s amid a legal struggle over the ownership of the rights. Nintendo published Tetris for a sizable amount of time until Pajitnov and Henk Rogers co-founded the Tetris Company in 1996 to handle licensing.In Tetris, players complete lines by moving differently shaped pieces (tetrominoes), which descend onto the playing field. The completed lines disappear and grant the player points, and the player can proceed to fill the vacated spaces. The game ends when the uncleared lines reach the top of the playing field. The longer the player can delay this outcome, the higher their score will be. In multiplayer games, players must last longer than their opponents; in certain versions, players can inflict penalties on opponents by completing a significant number of lines. Some versions add variations on the rules, such as three-dimensional displays or a system for reserving pieces.",
    /*instruction*/[
            "Start the game on the lowest level. Tetris games provide a Marathon Mode that lets you pick your level, which will determine how fast the tetrominos fall. The game will increase the level every 10 lines that are cleared to give you a challenge.",
            "Move the tetrominos. You can move them left and right, and you can rotate them in both directions. (up is clockwise, and You can also speed up their fall (known as 'Soft Drop' used with the down button or s) or you can immediately set it down (known as 'Hard Drop' used with the space bar).",
            "Understand the different tetrominos. There are seven different types of tetriminos: the I, O, L, J, S, Z, and T tetriminos.",
            "Complete lines to gain points and raise the level. When a line of blocks is created, the entire line disappears, points are rewarded and the stack is pushed down. The more lines completed at once, the more points gained. Completing the maximum number of lines at once, four, is known as a 'Tetris' and can only be pulled off with the I-tetrimino.",
            "Check upcoming pieces and plan for them. This will become easier the more you play, don't rush yourself."
        ],
    /*refer*/ "https://www.interaction-design.org/literature/article/a-game-explained-an-example-of-a-single-game-and-how-it-meets-the-rules-of-fun#:~:text=The%20aim%20in%20Tetris%20is,re%20sure%20of%20your%20positioning",
    /*cheat code*/[
            "All pieces will be the same as the second piece:SXVPKASA",
            "Auto descend is disabled:OKEAKPAO",
            "Forced items fall faster:PASAUPPE",
            "Max score after putting down 1 piece:AEEOUKAA",
            "Need only 1 line to win in game B:EYSEGYIX",
            "Need only 10 lines to win in game B:APSEGYIZ",
            "Need only 50 lines to win in game B:AISEGYIZ",
            "Screen still shows puzzle when paused:TOUZYLTO"
        ],
    /*buy*/[
            "Steam", "https://store.steampowered.com/search/?term=Tetris&supportedlang=english&ndl=1",
            "Nintendo", "https://www.nintendo.com/store/products/tetris-99-switch/",
            "Google play", "https://www.nintendo.com/store/products/tetris-99-switch/",
            "Play station", "https://play.google.com/store/apps/details?id=com.n3twork.tetris&hl=en_US&gl=US",
            "App store", "https://store.playstation.com/en-us/product/UP0751-CUSA13594_00-TETRISEFFECT0000",
            "Game stop", "https://www.gamestop.com/search/?q=Tetris&type=Primary&sort=BestMatch_Desc&p=1",
            "Amazon", "https://www.amazon.com/Tetris-99-NSO-Nintendo-Switch/dp/B07V8KPHS1/ref=sr_1_6?crid=X52RLP31F5UK&keywords=Tetris&qid=1670021064&sprefix=portals+2%2Caps%2C114&sr=8-6",
            "Official", "https://tetris.com/play-tetris"
        ],
    /*images*/[
            "../../../public/images/tetris.jpg",
            "../../../public/images/tetris.jpg",
            "../../../public/images/tetris.jpg",
            "../../../public/images/tetris.jpg",
            "../../../public/images/tetris.jpg"
        ],
    /*youtube link*/"https://www.youtube.com/embed/QQ5U-rN7Veg");
    datas = await Puzzle.getAllPuzzles();
    const p12_id = datas[datas.length - 1]._id;

    const H3 = await Puzzle.addPuzzle(
    /*name*/"Portals 2",
    /*about*/ "Players solve problems by building portals and teleporting between them, just like in the 2007 original Portal. Tractor beams, lasers, light bridges, and paint-like gels are some of the new additions to Portal 2 that change player movement or let you put portals everywhere. Chell, a robot controlled by Stephen Merchant, and Cave Johnson, the creator of Aperture, are among the new characters in the single-player campaign. They help Chell explore the crumbling Aperture Science Enrichment Center as it is being rebuilt by the supercomputer GLaDOS (Ellen McLain) (J. K. Simmons). Players work together to solve problems as the robots Atlas and P-Body in the new cooperative mode (both voiced by Dee Bradley Baker). Songs for the game were created by Jonathan Coulton and the National.",
    /*instruction*/[
            "Remember the basic game play. In Portal, you have to use 'portals' to complete puzzles and move onto the next one. There are two portals: blue and orange. When you go in one portal, you come out the other. However, not all surfaces can accommodate a portal!",
            "Pick things up! Using the 'X' (on Xbox 360) or 'E' (on PC) button, you can pick objects up. Almost all objects can be picked up. This will become essential if you want to solve every puzzle in Portal.",
            "Keep momentum in mind! In Portal, many puzzles are solved by the laws of momentum. Momentum is kept through portals, so when you are falling at a fast velocity into one portal, you will come out of the other portal at a fast velocity. This is useful for levels in which you need to jump a long distance otherwise unreachable.",
            "Cubes are your friend! In Portal, you will frequently be given cubes to solve puzzles. You may ask, 'How can a cube help me solve a puzzle?''. It will help you more than you think. When a cube is given to you, it is usually for the purpose of placing on buttons to open doors to advance. They can also be used as shields against turrets and energy balls.",
            "Turrets are your enemies! In certain levels, you have to fight against turrets. Once these turrets point their laser sights at you and lock on, you will be shot at relentlessly, and without proper cover, die very quickly.",
            "Solve the energy ball puzzles! In order to go on to the next puzzle, you might have to solve 'energy ball puzzles'."
        ],
    /*refer*/ "https://www.wikihow.com/Play-Portal",
    /*cheat code*/[
            "Changes speed of game, 0.1 = 10% of original game speed, 2 = twice the original game speed:	host_timescale",
            "Changes the acceleration of the speed gel:	sv_speed_paint_acceleration",
            "Changes the maximum speed obtainable from speed gel: sv_speed_paint_max",
            "Changes the minimum speed (in seconds) in which you can fire a portal gun: portalgun_fire_delay",
            "Changes view to first person: firstperson", "Changes view to third person: thirdperson",
            "Creates a Companion Cube: ent_create_portal_companion_cube",
            "Creates a reflector cube for lasers: ent_create_portal_reflector_cube",
            "Creates a Weighted Sphere: ent_create_portal_weighted_sphere"
        ],
    /*buy*/[
            "Steam", "https://store.steampowered.com/app/620/Portal_2/",
            "Nintendo", "",
            "Google play", "",
            "Play station", "",
            "App store", "https://books.apple.com/us/book/portal-2-game-how-to-download-ps4-xbox-one-coop-walkthrough/id1317504562",
            "Game stop", "",
            "Amazon", "https://www.amazon.com/WINDOWS-XP-VISTA-7-MAC-OS/dp/B004IEA4QE/ref=sr_1_3?crid=QDUQBL2O8Q3S&keywords=Portals+2&qid=1670020985&sprefix=portals+2%2Caps%2C165&sr=8-3",
            "Official", "https://portal-2.en.softonic.com/?utm_source=SEM&utm_medium=paid&utm_campaign=EN_desktop_RegionA_conversions_DSA_US&gclid=EAIaIQobChMI5rnT_YDc-wIVBobICh0uGAPLEAMYAiAAEgLk4PD_BwE"
        ],
    /*images*/[
            "../../../public/images/Portals2.jpg",
            "../../../public/images/Portals2.jpg",
            "../../../public/images/Portals2.jpg",
            "../../../public/images/Portals2.jpg",
            "../../../public/images/Portals2.jpg"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/A0K5EXfgJnk"
    );
    datas = await Puzzle.getAllPuzzles();
    const p13_id = datas[datas.length - 1]._id;
    // console.log(p13_id)

    const H4 = await Puzzle.addPuzzle(
    /*name*/"Baba Is You",
    /*about*/ "Award-winning puzzle game Baba Is You lets you alter the game's rules as you play. The rules themselves are featured in every level as blocks that you may interact with; by doing so, you can alter how the level functions and bring about surprise, unexpected interactions! You may transform yourself into a rock, convert patches of grass into hazardously heated barriers, and even change the objective you must achieve to something altogether different with a little bit of simple block-pushing.Baba Is You is a puzzle video game created by Finnish independent developer Arvi Teikari. Originating as a short demo built for the 2017 Nordic Game Jam, the game was expanded and released on 13 March 2019 for PC and Nintendo Switch. Mobile versions were released in June 2021.",
    /*instruction*/[
            "At the beginning of every level, before you do anything, examine the stage to see what terms, phrases, and objects you will be dealing with.",
            "Most levels will have certain phrases which cannot be altered, no matter what. Keeping those in mind will give you a hint as to how you can bend or break the rules.",
            "Almost nothing is constant in Baba Is You, so try to think creatively, and nonlinearly, when thinking of possible solutions. Try something weird!",
            "In some levels, especially those involving moving objects, wait around awhile to see how everything works together, or how certain systems interact. It might give you a clue on how to proceed.",
            "There are many variables in Baba Is You so, if you can, try to combine terms to create unique results.",
            "Stages can have more than one solution, so if you are having trouble, or feel stuck, try fooling around with different terms, objects, etc.",
            "A big part of Baba Is You is creating your own win conditions.", "Luckily, if you are stuck on a level, that probably isn't the only way to proceed.",
            "If you really need to finish a specific level, don't burn yourself out",
            "If you really need to finish a specific level, don't burn yourself out",
            "Many levels will contain filler terms, which aren't actually necessary to complete the level.",
            "The rules of each stage of Baba Is You can be found in the pause menu."
        ],
    /*refer*/ "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwicgf_ottX7AhVoRDABHevnAq4QFnoECBwQAQ&url=https%3A%2F%2Fwww.appunwrapper.com%2F2019%2F03%2F24%2Fbaba-is-you-words-and-rules-walkthrough-guide%2F&usg=AOvVaw3h68-vCX3fnDhM10dhw69z",
    /*cheat code*/["Not Available"],
    /*buy*/[
            "Steam", "https://store.steampowered.com/app/736260/Baba_Is_You/",
            "Nintendo", "https://www.nintendo.com/store/products/baba-is-you-switch/",
            "Google play", "https://play.google.com/store/apps/details?id=org.hempuli.baba&hl=en_US&gl=US",
            "Play station", "",
            "App store", "https://apps.apple.com/us/app/baba-is-you/id1517281887",
            "Game stop", "https://www.gamestop.com/video-games/nintendo-switch/products/baba-is-you/209666.html",
            "Amazon", "https://www.amazon.com/Baba-You-Switch-Digital-Code/dp/B07YQKZZPQ/ref=sr_1_1?crid=3BXI0OSP4GC99&keywords=Baba+Is+You&qid=1670020932&sprefix=baba+is+you%2Caps%2C157&sr=8-1",
            "Official", "https://hempuli.com/baba/"
        ],
    /*images*/[
            "../../../public/images/BabaIsYou.jpg",
            "../../../public/images/BabaIsYou.jpg",
            "../../../public/images/BabaIsYou.jpg",
            "../../../public/images/BabaIsYou.jpg",
            "../../../public/images/BabaIsYou.jpg"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/z3_yA4HTJfs"
    );
    datas = await Puzzle.getAllPuzzles();
    const p14_id = datas[datas.length - 1]._id;
    // console.log(p14_id)

    const H5 = await Puzzle.addPuzzle(
    /*name*/"Fez",
    /*about*/ "You take on the role of Gomez in the puzzle platformer FEZ. Gomez thought the world was 2D until he was given a fez that allowed him to see it in 3D. To stop the cosmos from crumbling, Gomez must use this power to collect cube fragments, repair the giant cube, and collect them.Fez is a 2012 indie puzzle-platform game developed by Polytron Corporation and published by Trapdoor. The player-character Gomez receives a fez that reveals his two-dimensional world to be one of four sides of a three-dimensional world.",
    /*instruction*/[
            "The start of the game through getting the door open and leaving for the first time.",
            "The area directly outside the village door. The connection to the Waterfall Hub.",
            "The gateway to the first major area, and 3 more doors that have to be unlocked with cubes.",
            "The first door in the Waterfall Hub is already open when you get there. All areas through this door should be found in the Nav as subpages under this page.",
            "This door in the Waterfall Hub requires 4 cubes to be opened. All areas through this door should be found in the Nav as subpages under this page.",
            "This door in the Waterfall Hub requires 8 cubes to be opened. All areas through this door should be found in the Nav as subpages under this page.",
            "This door in the Waterfall Hub requires 16 cubes to be opened. All areas through this door should be found in the Nav as subpages under this page."
        ],
    /*refer*/ "https://www.ign.com/wikis/fez/Walkthrough",
    /*cheat code*/["Flight: Mode Enter Up, Up, Up, Up + A anytime to be able to fly"],
    /*buy*/[
            "Steam", "https://store.steampowered.com/app/224760/FEZ/",
            "Nintendo", "https://www.nintendo.com/store/products/fez-switch/",
            "Google play", "",
            "Play station", "https://store.playstation.com/en-us/product/UP4427-CUSA00383_00-FEZTHEGAMEPOLYTR",
            "App store", "https://apps.apple.com/us/app/fez-pocket-edition/ed1209489068",
            "Game stop", "https://www.gamestop.com/video-games/nintendo-switch/products/fez---nintendo-switch/309612.html",
            "Amazon", "https://www.amazon.com/FEZ-Standard-Switch-Digital-Code/dp/B09FM44VYZ/ref=sr_1_1?crid=66HOSQ973Q7C&keywords=Fez+game&qid=1670020887&sprefix=fez%2Caps%2C258&sr=8-1",
            "Official", "http://fezgame.com/"
        ],
    /*images*/[
            "../../../public/images/Fez.jpg",
            "../../../public/images/Fez.jpg",
            "../../../public/images/Fez.jpg",
            "../../../public/images/Fez.jpg",
            "../../../public/images/Fez.jpg"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/lrEsNI0aCPk"
    );
    datas = await Puzzle.getAllPuzzles();
    const p15_id = datas[datas.length - 1]._id;
    // console.log(p15_id)

    const H6 = await Puzzle.addPuzzle(
    /*name*/"Bejeweled 3",
    /*about*/ "Bejeweled 3 is a tile-matching puzzle video game developed and published by PopCap Games. It is the fifth game in the Bejeweled series following Bejeweled Blitz and succeeds Bejeweled 2 as the latest mainline title in the Bejeweled series.PopCap Games created and released the tile-matching puzzle video game Bejeweled 3. After Bejeweled Blitz, it is the fifth game in the Bejeweled series, and it replaces Bejeweled 2 as the most recent flagship title. It was published on December 7, 2010, for PC and Mac as a part of the 10 Years of Bejeweled celebration, which honored Bejeweled's 10th anniversary. Subsequently, it was ported to a number of different consoles.",
    /*instruction*/[
            "From the mode menu, select Lightning Mode.",
            "Find your first match and start playing. It is very important to match three gems.",
            "Look for Time Gems with a +5 and a +10 on it. They add time to your next round.",
            "Keep matching gems for a Speed Bonus. This is very helpful to get a high score.",
            "When the Speed Bonus meter is full, then it will activate Blazing Speed.",
            "When the round is over, the combined time gets carried over to the next round. Once this occurs, any '+5' and '+10' time gems on the board are turned into flame and star gems respectively, and the multiplier increases by one.",
            "Repeat the steps above and keep going.", "When the timer hits zero and there is no time in the meter below the score, then a Time Up message will appear. This signals the end of the game."
        ],
    /*refer*/ "https://www.wikihow-fun.com/Play-Lightning-Mode-in-Bejeweled-3",
    /*cheat code*/[
            "Turns selected gem into a Butterfly: 9",
            "Turns selected gem into a Coin: C",
            "Turns selected gem into a Flame Gem: F",
            "Turns selected gem into a Green Gem: 2",
            "Turns selected gem into a White Gem: 1",
            "Turns selected gem into a Yellow Gem: 3",
            "Turns selected gem into an Orange Gem: 5",
            "Turns selected gem into a Green Gem: 2"
        ],
    /*buy*/[
            "Steam", "https://store.steampowered.com/app/78000/Bejeweled_3/",
            "Nintendo", "",
            "Google play", "",
            "Play station", "",
            "App store", "",
            "Game stop", "",
            "Amazon", "https://www.amazon.com/s?k=Bejeweled+3&crid=3OSZUDT4NMHAP&sprefix=bejeweled+3%2Caps%2C124&ref=nb_sb_noss_1",
            "Official", "https://bejeweled-3.en.softonic.com/?utm_source=SEM&utm_medium=paid&utm_campaign=EN_desktop_RegionA_conversions_DSA_US&gclid=EAIaIQobChMIjLq3qoDc-wIVyNzICh0moQ4_EAMYASAAEgJrwPD_BwE"
        ],
    /*images*/[
            "../../../public/images/Bejeweled3.jpg",
            "../../../public/images/Bejeweled3.jpg",
            "../../../public/images/Bejeweled3.jpg",
            "../../../public/images/Bejeweled3.jpg",
            "../../../public/images/Bejeweled3.jpg"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/gVaADDW5TXk"
    );
    datas = await Puzzle.getAllPuzzles();
    const p16_id = datas[datas.length - 1]._id;
    // console.log(p16_id)

    //action
    const A1 = await Action.addAction(
    /*name*/ "Tomb Raider",
    /*about*/ "Tomb Raider, also known as Lara Croft: Tomb Raider from 2001 to 2008, is a media franchise that originated with an action-adventure video game series created by British gaming company Core Design. Formerly owned by Eidos Interactive, then by Square Enix Europe after Square Enix's acquisition of Eidos in 2009, the franchise focuses on the fictional British archaeologist Lara Croft, who travels around the world searching for lost artefacts and infiltrating dangerous tombs and ruins. Gameplay generally focuses on exploration of environments, solving puzzles, navigating hostile environments filled with traps, and fighting enemies. Additional media has been developed for the franchise in the form of film adaptations, comics and novels.Development of the original Tomb Raider game began in 1994; it was released two years later. Its critical and commercial success prompted Core Design to develop a new game annually for the next four years, which put a strain on staff. The sixth game, The Angel of Darkness, faced difficulties during development and was considered a failure at release. This prompted Eidos to switch development duties to Crystal Dynamics, which has been the series' primary developer since. Other developers have contributed to spin-off titles and ports of mainline entries.",
    /*instruction*/[
            "For each entry, I outline how an amateur gamer might handle the situation.",
            "While scrambling to get out of a collapsing cave, a demented madman grabs you from behind.",
            "After escaping the cave, you come across a campfire",
            "You enter a wolf den in search of a radio",
            "Your quest for Lara's fellow crew members brings you to a new location"
        ],
    /*refer*/ "https://www.gameinformer.com/b/features/archive/2013/04/05/how-to-play-tomb-raider-like-a-professional.aspx",
    /*cheat code*/[
            "Level Skip: Go to the Inverntory screen, go to the Load Game and hold down the following keys: L+I+F+T",
            "All Weapons: Go to the Inverntory screen, go to the Large Medipack and hold down the following keys: C+T+R+L",
            "All Items: Go to the Inverntory screen, go to the Small Medipack and hold down the following keys: A+L+T+G+R",
            "God Mode: Go to the Inverntory screen, go to the Flares and hold down the following keys: F+I+R+E"
        ],
    /*buy*/[
            "Steam", "https://store.steampowered.com/app/203160/Tomb_Raider/",
            "Nintendo", "",
            "Google play", "",
            "Play station", "https://store.playstation.com/en-us/product/UP0082-CUSA00107_00-000000TOMBRAIDER",
            "App store", "",
            "Game stop", "https://www.gamestop.com/video-games/products/tomb-raider-definitive-edition---xbox-one/954018.html",
            "Amazon", "https://www.amazon.com/s?k=Tomb+Raider&ref=nb_sb_noss",
            "Official", "https://tombraiderblog.square-enix-games.com/en-us/motp/"
        ],
    /*images*/[
            "../../../public/images/TombRaider.jpg",
            "../../../public/images/TombRaider.jpg",
            "../../../public/images/TombRaider.jpg",
            "../../../public/images/TombRaider.jpg",
            "../../../public/images/TombRaider.jpg"
        ],
    /*youtube link*/"https://www.youtube.com/embed/nFBrgeSjj-0"
    );
    datas = await Action.getAllActions();
    const p21_id = datas[datas.length - 1]._id;
    // console.log(p21_id)

    const A2 = await Action.addAction(
    /*name*/ "Batman: Arkham Asylums",
    /*about*/ "Batman: Arkham Asylum is a 2009 action-adventure game developed by Rocksteady Studios and published by Eidos Interactive in conjunction with Warner Bros. Interactive Entertainment.game, Batman fights the Joker, his archenemy, who hatches a complex ",
    /*instruction*/[
            "Batman is seen escorting the Joker to a lower level of Arkham in the lengthy, cinematic opening sequence.",
            "The interment of the Joker will encounter a minor hitch at the bottom. Time to practice your combat techniques.",
            "Be careful to get the Riddler Trophy before you leave.",
            "Holding RUN will make you travel more quickly as you head up the stairs towards the direction the Joker departed."
        ],
    /*refer*/ "https://www.ign.com/wikis/batman-arkham-asylum/Walkthrough",
    /*cheat code*/[
            "Born Free: Escape from Intensive Treatment to the island surface",
            "Breaking And Entering: Gain access to Arkham Mansion after it is locked down by the Joker",
            "Daydreamer: Survive the nightmare of the Scarecrow's fear gas",
            "Flawless Freeflow Fighter: Complete one combat challenge without taking damage"
        ],
    /*buy*/[
            "Steam", "https://store.steampowered.com/app/35140/Batman_Arkham_Asylum_Game_of_the_Year_Edition/",
            "Nintendo", "https://www.nintendo.com/store/products/batman-arkham-origins-blackgate-3ds/",
            "Google play", "",
            "Play station", "https://store.playstation.com/en-us/product/UP1018-CUSA00133_00-ARKHAMBUNDLE0000",
            "App store", "",
            "Game stop", "https://www.gamestop.com/video-games/retro-gaming/retro-playstation/products/batman-arkham-asylum-game-of-the-year-edition/525249.html",
            "Amazon", "https://www.amazon.com/s?k=Batman%3A+Arkham+Asylums&crid=FFU2P1L07TAN&sprefix=marvel%27s+guardians+of+galaxys%2Caps%2C163&ref=nb_sb_noss_2",
            "Official", "https://batman-arkham-asylum.en.softonic.com/?utm_source=SEM&utm_medium=paid&utm_campaign=EN_desktop_RegionA_conversions_DSA_US&gclid=EAIaIQobChMIqNCT5__b-wIVAvjICh24FQy2EAMYASAAEgLhuvD_BwE"
        ],
    /*images*/[
            "../../../public/images/Batman.gif",
            "../../../public/images/Batman.gif",
            "../../../public/images/Batman.gif",
            "../../../public/images/Batman.gif",
            "../../../public/images/Batman.gif"
        ],
    /*youtube link*/"https://www.youtube.com/embed/T8bu2Y_cZb8"
    );
    datas = await Action.getAllActions();
    const p22_id = datas[datas.length - 1]._id;
    // console.log(p22_id)

    const A3 = await Action.addAction(
    /*name*/ "Marvel's Guardians of Galaxys",
    /*about*/ "Marvel's Guardians of the Galaxy is a 2021 action-adventure game developed by Eidos-Montréal and published by Square Enix's European subsidiary.Action-adventure game Marvel's Guardians of the Galaxy was created by Eidos-Montréal and released in 2021 by Square Enix's European division. On October 26, 2021, a video game based on the Guardians of the Galaxy superhero team was made available for Nintendo Switch, PlayStation 4, PlayStation 5, Windows, Xbox One, and Xbox Series X/S.Critics gave Marvel's Guardians of the Galaxy positive reviews, praising its plot, presentation, and characters but offering minor criticism of its combat. The game, however, fell short of Square Enix's sales projections.",
    /*instruction*/[
            "Take Time To Explore",
            "Talk To The Team",
            "Use The Environment In Battle",
            "Stay Close To The Action",
            "Chain Abilities Often",
            "Choose Gear Upgrades Carefully",
            "Know That Choices Have Consequences",
            "Dodge Often", "Always Go For The Stagger",
            "Take Advantage Of Elemental Weaknesses"
        ],
    /*refer*/ "https://www.ign.com/wikis/guardians-of-the-galaxy-the-game/Walkthrough",
    /*cheat code*/["Not available"],
    /*buy*/[
            "Steam", "https://store.steampowered.com/app/1088850/Marvels_Guardians_of_the_Galaxy/",
            "Nintendo", "https://www.nintendo.com/store/products/marvels-guardians-of-the-galaxy-cloud-version-switch/",
            "Google play", "", "Play station", "https://store.playstation.com/en-us/product/UP0082-PPSA01748_00-DXM0000000000001",
            "App store", "",
            "Game stop", "https://www.gamestop.com/search/?q=Marvel%27s%20Guardians%20of%20Galaxys&type=Primary&sort=BestMatch_Desc&p=1",
            "Amazon", "https://www.amazon.com/s?k=Marvel%27s+Guardians+of+Galaxys&ref=nb_sb_noss",
            "Official", "https://www.marvel.com/games/marvels-guardians-of-the-galaxy"
        ],
    /*images*/[
            "../../../public/images/Guardians.gif",
            "../../../public/images/Guardians.gif",
            "../../../public/images/Guardians.gif",
            "../../../public/images/Guardians.gif",
            "../../../public/images/Guardians.gif"
        ],
    /*youtube link*/"https://www.youtube.com/embed/oki56MQfiHI"
    );
    datas = await Action.getAllActions();
    const p23_id = datas[datas.length - 1]._id;
    // console.log(p23_id)

    const A4 = await Action.addAction(
    /*name*/ "Assassins Creed Valhalla",
    /*about*/ "Assassin's Creed Valhalla is a 2020 action role-playing video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth major installment in the Assassin's Creed series, and the successor to 2018's Assassin's Creed Odyssey.A 2020 action role-playing video game called Assassin's Creed Valhalla was created by Ubisoft Montreal and released by Ubisoft. It is the series' twelfth significant entry and the follow-up to 2018's Assassin's Creed Odyssey. The game tells a fictitious tale set mostly around the years 872–878 AD, during the Viking incursions into the British Isles. Players take control of Eivor Varinsdottir, a Viking raider who finds himself caught up in a centuries-old struggle between the Assassin Brotherhood, which fights for peace and liberty, and the Templar Order, which seeks peace through control, while seeking to found a new Viking clan in England. [c] The game also has a framing narrative set in the twenty-first century that centers on Layla Hassan, an assassin who recreates Eivor's memories in order to gain an advantage. must discover a means of preventing the annihilation of the Earth.",
    /*instruction*/[
            "Utilize your talents and unique abilities.",
            "A significant aspect of your adventure as Eivor is customizing how you combat adversaries.",
            "Make use of your navigational aids.",
            "Search for gear.",
            "Build Your Settlement Over Time.",
            "Keep in Mind Your Raiding Party."
        ],
    /*refer*/ "https://www.ubisoft.com/en-us/game/assassins-creed/valhalla/news-updates/3fQgx19x3ZGi2lvWiRC75c/5-essential-tips-for-playing-assassins-creed-valhalla",
    /*cheat code*/[
            "The open-world of Assassin's Creed Valhalla is huge and offers many opportunities for exploration, finding legendary weapons and equipment like Thor's armor and Thor's hammer, or for letting you put down roots. ",
            "While strolling through your settlement, look for speech bubbles and talk to the people in the village. For the most part, they will simply share some views or concerns. ",
            "In the beginning, after you have gained access to the building system, you should build a Brotherhood House of the Hidden Ones. This will enable new menus as well as quests. ",
            "Eivor can access a large number of skills in the AC Valhalla skill tree but many of them are hidden at the beginning. So work your way to the edge of a node as quickly as possible to gain access to new sections.",
            "In Assassin's Creed Valhalla, you will realize that not all areas can be accessed without restrictions. If your level isn't high enough, you'll quickly find yourself in Valhalla. "
        ],
    /*buy*/[
            "Steam", "https://store.steampowered.com/app/2208920/Assassins_Creed_Valhalla/",
            "Nintendo", "",
            "Google play", "",
            "Play station", "https://store.playstation.com/en-us/product/UP0001-PPSA01491_00-EDITIONCOMPLETE0",
            "App store", "",
            "Game stop", "https://www.gamestop.com/search/?q=Assassins%20Creed%20Valhalla&type=Primary&sort=BestMatch_Desc&p=1",
            "Amazon", "https://www.amazon.com/s?k=Assassins+Creed+Valhalla&crid=1EQSNLDAD8M5R&sprefix=resident+evil+4%2Caps%2C135&ref=nb_sb_noss_1",
            "Official", "https://kotaku.com/assassins-creed-valhalla-the-kotaku-review-1845615415"
        ],
    /*images*/[
            "../../../public/images/Assassins_Creed_Valhalla.gif",
            "../../../public/images/Assassins_Creed_Valhalla.gif",
            "../../../public/images/Assassins_Creed_Valhalla.gif",
            "../../../public/images/Assassins_Creed_Valhalla.gif",
            "../../../public/images/Assassins_Creed_Valhalla.gif"
        ],
    /*youtube link*/"https://www.youtube.com/embed/ssrNcwxALS4"
    );
    datas = await Action.getAllActions();
    const p24_id = datas[datas.length - 1]._id;
    // console.log(p24_id)

    const A5 = await Action.addAction(
    /*name*/ "Resident Evil 4",
    /*about*/ "Resident Evil 4 is a 2005 survival horror third-person shooter game developed by Capcom Production Studio 4 and published by Capcom. It was originally released for the GameCube on January 11, 2005.The third-person survival horror game Resident Evil 4 was created by Capcom Production Studio 4 and released by Capcom in 2005. It was first made available on January 11, 2005, for the GameCube. Players take control of Leon S. Kennedy, a special agent for the US government, who is dispatched on a mission to free Ashley Graham, the president of the US, who has been abducted by a cult. Leon reunites with the spy Ada Wong while battling hordes of people afflicted with a mind-controlling parasite in rural Spain.",
    /*instruction*/[
            "Loot From Dead Birds",
            "Free The Dog For Help In A Boss Fight",
            "Shoot Incoming Projectiles Out Of The Air",
            "Take Down Krauser With Just Your Knife",
            "Take Down Krauser With Just Your Knife",
            "Make Good Money At The Shooting Range",
            "HUNK Can Dispatch Those Pesky Bella Sisters With Ease",
            "All Knife, All The Time", "Make Ashley Invincible",
            "Use The Las Plagas Removal Laser As A Deadly Weapon",
            "Using Dynamite Ganados As Deadly “Allies”",
            "Exploiting Capacity Upgrades",
            "Those Deadly Doors"
        ],
    /*refer*/"https://www.ign.com/wikis/resident-evil-4/Basics",
    /*cheat code*/[
            "Loot From Dead Birds",
            "Free The Dog For Help In A Boss Fight",
            "Shoot Incoming Projectiles Out Of The Air",
            "Take Down Krauser With Just Your Knife",
            "Take Down Krauser With Just Your Knife",
            "Make Good Money At The Shooting Range",
            "HUNK Can Dispatch Those Pesky Bella Sisters With Ease",
            "All Knife, All The Time",
            "Make Ashley Invincible",
            "Use The Las Plagas Removal Laser As A Deadly Weapon",
            "Using Dynamite Ganados As Deadly 'Allies'",
            "Exploiting Capacity Upgrades",
            "Those Deadly Doors"
        ],
    /*buy*/[
            "Steam", "https://store.steampowered.com/search/?term=Resident+Evil+4",
            "Nintendo", "https://www.nintendo.com/store/products/resident-evil-4-switch/",
            "Google play", "",
            "Play station", "https://store.playstation.com/en-us/product/UP0102-CUSA04885_00-BH4HD00000000001",
            "App store", "",
            "Game stop", "https://www.gamestop.com/search/?q=Resident%20Evil%204&type=Primary&sort=BestMatch_Desc&p=1",
            "Amazon", "https://www.amazon.com/s?k=Resident+Evil+4&crid=1O4CH2UT3YL0M&sprefix=uncharted+4+a+thief%27s+end%2Caps%2C178&ref=nb_sb_noss_1",
            "Official", "https://www.residentevil.com/4/"
        ],
    /*images*/[
            "../../../public/images/ResidentEvil4.gif",
            "../../../public/images/ResidentEvil4.gif",
            "../../../public/images/ResidentEvil4.gif",
            "../../../public/images/ResidentEvil4.gif",
            "../../../public/images/ResidentEvil4.gif"
        ],
    /*youtube link*/"https://www.youtube.com/embed/gTMwx9-rKe8"
    );
    datas = await Action.getAllActions();
    const p25_id = datas[datas.length - 1]._id;
    // console.log(p25_id)

    const A6 = await Action.addAction(
    /*name*/ "Uncharted 4 : A Thief's End",
    /*about*/ "Uncharted 4: A Thief's End is a 2016 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. It is the fourth main entry in the Uncharted series.Uncharted 4: A Thief's End is a 2016 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. It is the fourth main entry in the Uncharted series.The 2016 action-adventure title Uncharted 4: A Thief's End was created by Naughty Dog and released by Sony Computer Entertainment. The Uncharted series' fourth main installment is this one. Players take control of Nathan Drake, a veteran treasure hunter who was persuaded to come out of retirement by his supposedly deceased brother Samuel. The game is set some years after the events of Uncharted 3: Drake's Deception. Victor Sullivan, Nathan's old associate, and they look for hints as to where Henry Avery's long-lost riches could be. Platformer aspects are included in A Thief's End, which is played in third person.",
    /*instruction*/[
            "Don't worry about looking for treasure",
            "Don't be ashamed to use aim assist (or play on easy mode)",
            "Remember to pick up ammo",
            "Stealth is your friend",
            "Make sure you have lots of time"
        ],
    /*refer*/ "https://www.theverge.com/2016/5/10/11639282/uncharted-4-game-how-to-strategy-guide-ps4",
    /*cheat code*/[
            "Mirror World:Cheat Description: Everything gets mirrored.",
            "Mirror On Death:Cheat Description: After dying everything gets mirrored.",
            "Slow Motion:Cheat Description: Slows down your movement.",
            "Bullet Speed Mode:Cheat Description: Bullet Time; When aiming your gun time slows down for easy kills.",
            "No Gravity:Cheat Description: Changes the laws of gravity.",
            "8-Bit Audio:Cheat Description: Retro Music Filter.",
            "4-Bit Audio:Cheat Description: Retro Music Filter.",
            "Helium Audio:Cheat Description: Sound Filter; Helium Voices.",
            "Xenon Audio:Cheat Description: Sound Filter.",
            "Infinite Ammo:Cheat Description: Weapons ammunition never runs out.",
            "Cel Shaded:Cheat Description: Graphics Filter."
        ],
    /*buy*/[
            "Steam", "https://store.steampowered.com/app/1659420/UNCHARTED_Legacy_of_Thieves_Collection/",
            "Nintendo", "",
            "Google play", "",
            "Play station", "https://store.playstation.com/en-us/product/UP9000-CUSA00341_00-U4UTLLBUNDLE0000",
            "App store", "",
            "Game stop", "",
            "Amazon", "https://www.amazon.com/s?k=Uncharted+4+%3A+A+Thief%27s+End&ref=nb_sb_noss",
            "Official", ""
        ],
    /*images*/[
            "../../../public/images/Uncharted4.gif",
            "../../../public/images/Uncharted4.gif",
            "../../../public/images/Uncharted4.gif",
            "../../../public/images/Uncharted4.gif",
            "../../../public/images/Uncharted4.gif"
        ],
    /*youtube link*/"https://www.youtube.com/embed/hh5HV4iic1Y"
    );
    datas = await Action.getAllActions();
    const p26_id = datas[datas.length - 1]._id;
    // console.log(p26_id)

    //racing
    const R1 = await Racing.addRacing(
    /*name*/"Dirt Rally 2.0",
    /*about*/ "Dirt Rally 2.0 is a racing simulation video game developed and published by Codemasters for Microsoft Windows, PlayStation 4 and Xbox One. It was released on February 26, 2019. It is a successor to the 2015 video game Dirt Rally and emphasises realistic driving physics. Rallying and rallycross are the main topics of Dirt Rally 2.0. In a variety of weather situations, players participate in timed stage competitions on asphalt and off-road terrain. Argentina, Australia, New Zealand, Poland, Spain, and the United States all had phases in the game. [1] Codemasters also launched stages in Finland, Germany, Greece, Monte Carlo, Sweden, and Wales in addition to announcing intentions to expand the game with the addition of downloadable content[2]. The stages in this game are remastered versions of the ones in the first Dirt Rally. A rallycross mode is also available, including World RallyCross Supercars (containing the roster for the 2018 season) and eight FIA World Rallycross Championship tracks. The World Rallycross Supercars, vintage rally cars, and more are available for players to select from in Dirt Rally 2.0.",
    /*instruction*/[
            "Set up an Optimal Gaming Environment",
            "Start with Slower Cars",
            "Work on Control Rather than Speed",
            "Challenge People at Leagues",
            "Cars & Racing Mechanics in DiRT Rally 2.0",
            "Cameras in DiRT Rally 2.0",
            "Types of Tires & Their Benefits"
        ],
    /*refer*/"https://www.carlogos.org/reviews/dirt-rally-2-0-the-beginners-guide.html",
    /*cheat code*/[
            "R2: Accelerator.The harder you hold it, the faster you'll accelerate",
            "L2: Footbrake. Again, holding it harder will have a stronger effect",
            "R1: Turns your headlights on or off",
            "L1: Activates your windscreen wipers",
            "Left stick: Steering",
            "Right stick: Look around. Turns the camera left, right, up, or down. Click in R3 to look behind you",
            "Triangle: Cycle through camera positions",
            "Circle: Handbrake",
            "X: Gear shift up",
            "Square: Gear shift down"
        ],
    /*buy*/["Steam", "https://store.steampowered.com/app/690790/DiRT_Rally_20/",
            "Nintendo", "",
            "Google play", "",
            "Play station", "https://store.playstation.com/en-us/search/dirt%20rally%202%200",
            "App store", "",
            "Game stop", "https://www.gamestop.com/search/?q=Dirt%20Rally%202.0&type=Primary&sort=BestMatch_Desc&p=1",
            "Amazon", "https://www.amazon.com/s?k=Dirt+Rally+2.0&crid=2RFCSLR3KC5X1&sprefix=dirt+rally+2.0%2Caps%2C183&ref=nb_sb_noss_1",
            "Official", "https://dirtrally2.dirtgame.com/"
        ],
    /*images*/[
            "../../../public/images/DirtRally.gif",
            "../../../public/images/DirtRally.gif",
            "../../../public/images/DirtRally.gif",
            "../../../public/images/DirtRally.gif",
            "../../../public/images/DirtRally.gif"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/RQ7JvIncd4Y"
    );
    datas = await Racing.getAllRacings();
    const p31_id = datas[datas.length - 1]._id;
    // console.log(p31_id)

    const R2 = await Racing.addRacing(
    /*name*/"Forza Horizon 5",
    /*about*/ "Forza Horizon 5 is a 2021 racing video game developed by Playground Games and published by Xbox Game Studios. It is the fifth Forza Horizon title and twelfth main instalment in the Forza series. The game is set in a fictionalised representation of Mexico.A 2021 racing video game called Forza Horizon 5 was created by Playground Games and released by Xbox Game Studios. It is the twelfth major installment in the Forza series and the fifth Forza Horizon game. The setting for the game is a fictitious version of Mexico. It became available on Microsoft Windows, Xbox One, and Xbox Series X/S on November 9, 2021.Upon its debut, the game garnered positive reviews and had financial success. It had the biggest-ever launch for an Xbox Title Studios game, drawing over 10 million players in its first week. At The Game Categories 2021, the game was nominated for three jury-voted awards. It won all three of those nominations, tying Hazelight's It Takes Two for the most wins. The game was also nominated for two other awards.",
    /*instruction*/[
            "Play The Eliminator Mode Often.",
            "Seek Out And Smash XP Boards.",
            "Drive, Drive, Drive.",
            "Use The Rewind Feature.",
            "Choose The Right Car.",
            "Don't Just Focus On Speed When Selecting Cars.",
            "Keep Tweaking And Testing The Settings.",
            "Practice With New Cars Before Racing Them",
            "Tune Cars, But Only If You Know What You're Doing",
            "Enable The Full Driving Line To Begin With",
            "Seek Out Hidden Barns",
            "Don't Buy Cars Initially"
        ],
    /*refer*/"https://www.digitaltrends.com/gaming/forza-horizon-5-beginners-guide/",
    /*cheat code*/[
            "Enter 'nOsLiW' as a profile name to unlock all tracks and cars and start at level 50.",
            "Enter 'tEAm4za' as a profile name to start with 900,000,000 credits."
        ],
    /*buy*/[
            "Steam", "https://store.steampowered.com/search/?term=Forza+Horizon+5",
            "Nintendo", "",
            "Google play", "",
            "Play station", "",
            "App store", "",
            "Game stop", "https://www.gamestop.com/search/?q=Forza%20Horizon%205&type=Primary&sort=BestMatch_Desc&p=1",
            "Amazon", "https://www.amazon.com/s?k=Forza+Horizon+5&crid=3ICOA8YLMYP1V&sprefix=need+for+speed+hot+pursuit%2Caps%2C6852&ref=nb_sb_noss_1",
            "Official", "https://forza.net/horizon/"
        ],
    /*images*/[
            "../../../public/images/ForzaHorizon5.gif",
            "../../../public/images/ForzaHorizon5.gif",
            "../../../public/images/ForzaHorizon5.gif",
            "../../../public/images/ForzaHorizon5.gif",
            "../../../public/images/ForzaHorizon5.gif"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/U3mEOHvSUyw"
    );
    datas = await Racing.getAllRacings();
    const p32_id = datas[datas.length - 1]._id;
    // console.log(p32_id)

    const R3 = await Racing.addRacing(
    /*name*/"Need for Speed: Hot Pursuit",
    /*about*/ "Need for Speed: Hot Pursuit is a 2010 racing video game developed by Criterion Games and published by Electronic Arts for PlayStation 3, Xbox 360, Wii, Microsoft Windows, iOS, Android, webOS, and Windows Phone. The Wii version was developed by Exient Entertainment.Racing video game Need for Speed: Hot Pursuit was released in 2010 for the PlayStation 3, Xbox 360, Wii, Microsoft Windows, iOS, Android, webOS, and Windows Phone. It was created by Criterion Games and published by Electronic Arts. Exient Entertainment created the Wii version. The sixteenth Need for Speed game, Hot Pursuit, was published in November 2010 for physical distribution and in December 2010 for digital distribution. Need for Speed III: Hot Pursuit has been redone in this version (1998). Need for Speed: Hot Pursuit Remastered, a remastered version, was made available on November 6, 2020, for Microsoft Windows, PlayStation 4, Xbox One, and Nintendo Switch.",
    /*instruction*/[
            "Never quit out. Depending on your skill in the game, the last achievement you will probably need in both careers will be for reaching level 20, which requires you to earn 2 million bounty points. Finishing an event even if you miss out on a Distinction/Gold Medal will award you valuable bounty towards your total.",
            "Look for the shortcuts, some are invaluable to knocking precious seconds off your time, but others will slow you down. Learn which ones are a help and which are a hindrance.",
            "Don't drift corners unless you have to, I was guilty of drifting every corner on some events and missing out of Distinctions/Gold Medals by seconds.",
            "Use your nitrous boost when you really need it, generally to accelerate away from corners, and going up hill and at the start of long straights.",
            "Try to avoid spikes. It sounds obvious, but on later events hitting a spike can be the difference between gaining 10,000 extra bounty points.",
            "Keep an eye on your damage; it will be indicated with a red line on the right hand side of your speedometer.",
            "Don't assume that the fastest car is the best for every event. Try to pick a balance between speed and handling."
        ],
    /*refer*/"https://www.trueachievements.com/game/NFS-Hot-Pursuit/walkthrough/2",
    /*cheat code*/[
            "madland: All cars are fast",
            "macr: All pursuit mode cars",
            "go04: BMW 5 series",
            "go03: Cargo Truck",
            "merc: CLK GTR bonus car",
            "ckjones: Colored cars",
            "dcop: Diablo pursuit car",
            "ecop: El Nino bonus car",
            "elninor: El Nino pursuit car",
            "empire: Empire City track"
        ],
    /*buy*/[
            "Steam", "https://store.steampowered.com/app/47870/Need_For_Speed_Hot_Pursuit/",
            "Nintendo", "https://www.nintendo.com/store/products/need-for-speed-hot-pursuit-remastered-switch/",
            "Google play", "",
            "Play station", "https://store.playstation.com/en-us/product/UP0006-CUSA23264_00-NEEDFORSPEEDHPR0",
            "App store", "",
            "Game stop", "https://www.gamestop.com/search/?q=Need%20for%20Speed%3A%20Hot%20Pursuit&type=Primary&sort=BestMatch_Desc&p=1",
            "Amazon", "https://www.amazon.com/s?k=Need+for+Speed%3A+Hot+Pursuit&crid=2KX9DXXZ9QLC8&sprefix=need+for+speed+hot+pursuit%2Caps%2C146&ref=nb_sb_noss_1",
            "Official", "https://www.ea.com/games/need-for-speed/need-for-speed-hot-pursuit-remastered"
        ],
    /*images*/[
            "../../../public/images/NFS.gif",
            "../../../public/images/NFS.gif",
            "../../../public/images/NFS.gif",
            "../../../public/images/NFS.gif",
            "../../../public/images/NFS.gif"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/D6ouHWP0KrY"
    );
    datas = await Racing.getAllRacings();
    const p33_id = datas[datas.length - 1]._id;
    // console.log(p33_id)

    const R4 = await Racing.addRacing(
    /*name*/"Project CARS 2",
    /*about*/ "Project CARS 2 is a motorsport racing simulator video game developed by Slightly Mad Studios and published and distributed by the Bandai Namco Entertainment group. It was released worldwide on 22 September 2017 for Microsoft Windows, PlayStation 4, and Xbox One.There are 189 vehicles available in Project CARS 2 together with 140 track configurations across 60 distinct locales. It claims that as the race goes on, 'each circuit is a living, organic venue' and 'changes lap by lap'. A system called LiveTrack 3.0, which includes features like track temperature and dynamic weather, does this. Off-road driving, including rallycross tracks and vehicles, is now included in the game. New players in the market include Nissan, Honda, Acura, Honda, Lamborghini, Porsche, Ferrari, and Lamborghini. Project CARS 2 also supports triple screen, up to 12K resolution, and virtual reality (VR). ",
    /*instruction*/[
            "Project CARS 2 puts you in the driving seat of the fastest, coolest, and most exclusive cars on the planet on many of the world's greatest race tracks. Exploring the full set of menu options will allow you to personalise the game to your individual tastes.",
            "But if you're keen to dive right in, you're in the right place. Let's get you behind the wheel then, shall we?",
            "After you've launched Project CARS 2, choose the Quick Play tab and click on the Custom Race tile.",
            "First up, choose the car you'd like to race in. Click on the Vehicle Select tab, and choose your car from the plethora of manufacturers and models that are available (180+ if you're counting).",
            "You can also change the livery of your selected car by clicking the Livery Select button, then click Select to confirm the new livery.",
            "Once you've selected the car you want, hit Select to confirm the car, and now return to the Custom Event menu.",
            "Next up, choose the track that you want to race on. Click on Track Select, then choose your preferred track from the scrolling list.",
            "If available, you can also select different variations (layouts) of a track from the scrolling panel to the right of the main track list. Save your choice by clicking Select.",
            "Now you can set the parameters for the race, including the duration, number of laps, date, and weather. Click Save to embed any changes you've made.",
            "Select the Opponent Settings panel to choose the number of opponents, their skill, and the type of cars you want to race against. Click Save to return to the Custom Event screen.",
        ],
    /*refer*/"https://www.projectcarsgame.com/two/01-quick-start-and-general-navigation/?lang=en-us",
    /*cheat code*/[
            "959595 - Unlock all modes and all tracks",
            "123456 - Unlock lasers",
            "721953 - Unlimited Turbo",
            "102938 - Characters from the first movie"
        ],
    /*buy*/[
            "Steam", "https://store.steampowered.com/app/860233/Sim_Racing_Telemetry__Project_Cars_2/",
            "Nintendo", "",
            "Google play", "",
            "Play station", "https://store.playstation.com/en-us/product/UP0700-CUSA20100_00-PROJECTCARS3DLC3",
            "App store", "https://apps.apple.com/us/app/sim-racing-telemetry/id1288695792",
            "Game stop", "https://www.gamestop.com/search/?q=Project%20CARS%202&type=Primary&sort=BestMatch_Desc&p=1",
            "Amazon", "https://www.amazon.com/s?k=Project+CARS+2&crid=14N2ERTSBFDHV&sprefix=project+cars+2%2Caps%2C72&ref=nb_sb_noss_1",
            "Official", "https://www.projectcarsgame.com/?lang=en-us"
        ],
    /*images*/[
            "../../../public/images/ProjectCARS2.gif",
            "../../../public/images/ProjectCARS2.gif",
            "../../../public/images/ProjectCARS2.gif",
            "../../../public/images/ProjectCARS2.gif",
            "../../../public/images/ProjectCARS2.gif"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/nsaiLLhN5VQ"
    );
    datas = await Racing.getAllRacings();
    const p34_id = datas[datas.length - 1]._id;
    // console.log(p34_id)

    const R5 = await Racing.addRacing(
    /*name*/"F1 2020",
    /*about*/ "F1 2020 is the official video game of the 2020 Formula 1 and Formula 2 Championships developed and published by Codemasters.2020 FIA Formula One World Championship Drivers' Champion: Lewis Hamilton Constructors' Champion: Mercedes Previous 2019 Next 2021 Races by country Races by venue Support series: Formula 2 Championship. The 2020 FIA Formula One World Championship, which was the 71st iteration of the Formula One World Championship, was the motor racing competition for Formula One vehicles. It was the first Formula One World Drivers' Championship's seventieth anniversary. The Fédération Internationale de l'Automobile (FIA), which oversees international motorsport, recognized the championship as the highest level of competition for open-wheel racing vehicles. The titles of World Constructors' Champion and World Drivers' Champion were up for grabs, respectively.",
    /*instruction*/[
            "Beware of the first corner at start.",
            "Practice at low speed.",
            "Be smooth on the controller/wheel.",
            "Memorise the braking point for each corner.",
            "Driving assists."
        ],
    /*refer*/"https://www.keengamer.com/articles/guides/f1-2020-a-basic-beginners-guide/#:~:text=Start%20with%20an%20AI%20difficulty,with%20that%20of%20your%20teammate.",
    /*cheat code*/[
            "S + n5zk22yA - acclaim",
            "V + Fi8M9wxb - level up",
            "Enter Q + SGkXthy9 - cash",
            "W + Pass D835MZJx - podium pass",
            "S + jMFfWzZt - unlock departments",
            "Enter d + mK1ajh8x - power unit",
            "s + rt63fx8x - gearbox",
            "W + gNdzfhji - upgrade vehicle",
            "Q + zaKDT4Kp - credits",
            "q + S2coKifo - coupon",
            "s + vYNsJqal - secret combiantion"
        ],
    /*buy*/[
            "Steam", "https://store.steampowered.com/search/?sort_by=_ASC&term=F1+2020&supportedlang=english",
            "Nintendo", "",
            "Google play", "https://play.google.com/store/apps/details?id=com.unamedia.srt&hl=en_US&gl=US",
            "Play station", "",
            "App store", "https://apps.aple.com/us/app/sim-racing-dash-for-f1-2020/id1526980884",
            "Game stop", "https://www.gamestop.com/search/?q=F1%202020&type=Primary&sort=BestMatch_Desc&p=1",
            "Amazon", "https://www.amazon.com/s?k=F1+2020&crid=1S022G8CL973C&sprefix=forza+motorsport+7%2Caps%2C116&ref=nb_sb_noss_1",
            "Official", "https://www.formula1game.com/2020/"
        ],
    /*images*/[
            "../../../public/images/F12020.gif",
            "../../../public/images/F12020.gif",
            "../../../public/images/F12020.gif",
            "../../../public/images/F12020.gif",
            "../../../public/images/F12020.gif",
        ],
    /*youtube link*/ "https://www.youtube.com/embed/wF0vF1uXXYU"
    );
    datas = await Racing.getAllRacings();
    const p35_id = datas[datas.length - 1]._id;
    // console.log(p35_id)

    const R6 = await Racing.addRacing(
    /*name*/"Forza Motorsport 7",
    /*about*/ "Forza Motorsport 7 is a 2017 racing video game developed by Turn 10 Studios and published by Microsoft Studios, serving as the tenth installment in the Forza series.Forza Motorsport 7 is a 2017 racing video game developed by Turn 10 Studios and published by Microsoft Studios, serving as the tenth installment in the Forza series.A fictional street circuit in Dubai is one of the new circuits in Forza Motorsport 7, and several tracks from Forza Motorsport 4 such as Maple Valley Raceway, Mugello Circuit, and Suzuka Circuit also return. Forza Motorsport 7 features over 700 cars, including new Forza Edition cars, the majority of which have been carried over from Forza Horizon 3, and more than 200 different configurations to race on across 32 locations at launch, including all from Forza Motorsport 6.Dynamic weather (previously seen in Horizon games) and customizable drivers are two elements that are unique to the Motorsport game. ",
    /*instruction*/[
            "Make sure you know your car : that's the main important aspect to getting a good start.",
            "There are lots of spots where the braking line will lie to you, so you can never rely on it exactly.",
            "You should always brake with your exit in mind. The faster your exit, the faster you will be around the track.",
            "There are a few main ways to keep your speed up on corners. If you're having issues with stability, try balancing the throttle around 20-40% to keep your car in check without losing much cornering ability.",
            "I always like overtaking under braking if possible. Passing under braking is generally the safest way to attack another racer.",
            "Types of cars can feel extremely different but if you separate them into engine position and drive train style, you can learn each group easier.",
            "I would suggest driving cars that you enjoy. With the new homologation system in Forza Motorsport 7, most cars within each division should be fairly even.",
            "Tuning can be a huge advantage to help your cars suit your driving style. If you don't know how to tune, I'd suggest searching the forums or YouTube for some open source tunes.",
            "The way lots of the best players got to where they are now is by racing with people faster than them and learning that way."
        ],
    /*refer*/"https://www.redbull.com/gb-en/forza-7-tips-guide",
    /*cheat code*/[
            "Enter 'nOsLiW' as a profile name to unlock all tracks and cars and start at level 50.",
            "Enter 'tEAm4za' as a profile name to start with 900,000,000 credits."
        ],
    /*buy*/[
            "Steam", "",
            "Nintendo", "",
            "Google play", "https://play.google.com/store/search?q=Forza%20Motorsport%207&c=apps&hl=en_US&gl=US",
            "Play station", "",
            "App store", "",
            "Game stop", "https://www.gamestop.com/search/?q=Forza%20Motorsport%207&type=Primary&sort=BestMatch_Desc&p=1",
            "Amazon", "https://www.amazon.com/s?k=Forza+Motorsport+7&ref=nb_sb_noss",
            "Official", "https://forza.net/motorsport/"
        ],
    /*images*/[
            "../../../public/images/Forza.gif",
            "../../../public/images/Forza.gif",
            "../../../public/images/Forza.gif",
            "../../../public/images/Forza.gif",
            "../../../public/images/Forza.gif"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/hIqAmS0C3P0"
    );
    datas = await Racing.getAllRacings();
    const p36_id = datas[datas.length - 1]._id;
    // console.log(p36_id)

    //sports
    const S1 = await Sports.addSports(
    /*name*/ "Mario Tennis",
    /*about*/ "Mario Tennis is a 2000 sports video game developed by Camelot Software Planning and published by Nintendo for the Nintendo 64. Following Mario's Tennis, it is the second game in the Mario Tennis.Camelot developed a Game Boy Color version and it was published under the same title in Western regions and as Mario Tennis GB in Japan.The N64 version was re-released on the Wii and Wii U Virtual Console, and on the Nintendo Switch Online + Expansion Pack, in 2010, 2015, and 2021 respectively, while the GBC version was re-released on the Nintendo 3DS Virtual Console in 2014.",
    /*instruction*/[
            "The game uses a control system that differs from most other video tennis games on the market. Shots are performed by pressing one, or both, of the two main buttons (A or B), which make the ball spin in different ways.",
            "Pressing a button twice strikes the tennis shot with more power and spin.",
            "Additionally, pressing the two buttons in a different order can result in a different type of shot altogether, such as a lob or drop shot. Both buttons can be pressed at the same time to hit a very powerful smash shot.",
            "The longer a button is pressed before contact is made with the ball, the stronger the shot will be.",
            "The control system allows players of all levels to become familiar with the mechanics of the game within a very short time, whilst also encouraging advanced players to take advantage of the variety of shots offered to come up with different strategies for winning points.",
            "A total of seven types of shot are possible using only the two main buttons of the controller. These gameplay mechanics were later brought to the newer games of the Mario Tennis series."
        ],
    /*refer*/ "https://outsidergaming.com/mario-tennis-complete-switch-controls-guide-and-tips-for-beginners/",
    /*cheat code*/[
            "A3W5KQA3C: as a code at the code entry screen to play a tournament for the Mario Cup.",
            "UOUFMPUOM: as a code at the code entry screen to play a tournament for the Wario Cup.",
            "M1C2YQM1W: as a code at the code entry screen to play a tournament for the Luigi Cup.",
            "LA98JRLAR: as a code at the code entry screen to play a tournament for the Waluigi Cup",
            "MM55MQMMJ: as a code at the code entry screen to play a tournament for the Donkey Kong Cup.",
            "OF9XFQOFR: as a code at the code entry screen to play a tournament for the Peach Cup.",
            "N24K8QN2P: as a code at the code entry screen to play a tournament for the Bowser Cup.",
            "At the character selection screen, hold L while selecting a character to make them left-handed.",
            "V2UFMPUZM: as a code at the code entry screen to play a tournament for the IGN64 Cup.",
            "48HWOR482: as a code at the code entry screen to play a tournament for the MarioTennis.com Cup."
        ],
    /*buy*/[
            "Steam", "",
            "Nintendo", "https://www.nintendo.com/search/?q=Mario+Tennis&p=1&cat=all&sort=df",
            "Google play", "",
            "Play station", "",
            "App store", "",
            "Game stop", "https://www.gamestop.com/search/?q=Mario%20Tennis&type=Primary&sort=BestMatch_Desc&p=1",
            "Amazon", "https://www.amazon.com/Mario-Tennis-Aces-Nintendo-Switch/dp/B07DX61JTD/ref=sr_1_3?keywords=Mario+Tennis&qid=1670019671&sr=8-3",
            "Official", "https://www.ubisoft.com/en-us/game/mario-rabbids/sparks-of-hope?ucid=SCH-ID_160233&maltcode=brand_convst_SCH_googlesearch___MRSH____competitorskeywords&addinfo="
        ],
    /*images*/[
            "../../../public/images/Mario_Tennis.gif",
            "../../../public/images/Mario_Tennis.gif",
            "../../../public/images/Mario_Tennis.gif",
            "../../../public/images/Mario_Tennis.gif",
            "../../../public/images/Mario_Tennis.gif"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/jxrHwK-e1vk");
    datas = await Sports.getAllSportss();
    const p41_id = datas[datas.length - 1]._id;
    // console.log(p41_id)

    const S2 = await Sports.addSports(
    /*name*/ "Fifa 10",
    /*about*/ "FIFA 10 is a football simulation video game developed by EA Canada and published by Electronic Arts worldwide under the EA Sports label. It was released on 2 October 2009 in Europe, 1 October in Australasia and 20 October 2009 in North America.t is available for the PlayStation 3, Xbox 360, Microsoft Windows, PlayStation 2 and Wii.Handheld versions of the game were also released for the iOS, Nintendo DS, PlayStation Portable, and mobile phones.The demo of FIFA 10 appeared on PlayStation 3, Xbox 360, and Windows on 10 September in Europe, on 11 September in Australia, and on 17 September in North America. The playable teams were Chelsea, Barcelona, Juventus, Bayern Munich, Marseille and Chicago Fire. The stadia used in the demo were Wembley Stadium (Xbox 360 version), and FIWC Stadium (PlayStation 3 version).",
    /*instruction*/[
            "Build a team with good team chemistry",
            "Play the players in their specific positions",
            "Pass the ball around.The more time you have possession,the better chance you have at scoring.",
            "If you have a striker up and ready to make runs,you should make use of this feature.When you have possession in midfield,see your radar and spot a target man up ahead in the attacking third.",
            "If you have a regular 4-4-2 formation,there will be two strikers ready to head the ball when the far left or right midfielder crosses the ball in.",
            "The way you take shots also determines whether it's going to end up in the net or not.The goal keeper is pretty is good in 'legendary' difficulty but can be beaten most of the time if you take shots right.",
            "Now in the game when you are near a defender and wants to perform a special move,keep the trick modifier pressed and press the arrow keys quickly.Different combinations of arrow keys(e.g , left,left,right or left,front,right etc.) will let you perform different special moves.Just do them quickly and with right timing you  can beat the defender in the most beautiful way"
        ],
    /*refer*/ "https://www.ign.com/articles/2010/02/17/fifa-soccer-10-walkthrough-game-hints-1069798",
    /*cheat code*/["Not available"],
    /*buy*/[
            "Steam", "https://store.steampowered.com/search/?term=Fifa+&supportedlang=english&ndl=1",
            "Nintendo", "https://www.nintendo.com/search/?q=Fifa&p=1&cat=gme&sort=df",
            "Google play", "https://play.google.com/store/search?q=Fifa&c=apps&hl=en_US&gl=US",
            "Play station", "https://store.playstation.com/en-us/search/fifa%2010",
            "App store", "https://apps.apple.com/us/app/fifa-mobile-fifa-world-cup/ip1094930513",
            "Game stop", "https://www.gamestop.com/search/?q=fifa&type=Primary&sort=BestMatch_Desc&p=1",
            "Amazon", "https://www.amazon.com/s?k=Fifa+10+game&crid=MLN2NIWUZKUF&sprefix=fifa+10+game%2Caps%2C372&ref=nb_sb_noss",
            "Official", "https://www.ea.com/news/fifa-09-ultimate-team-available-for-download?isLocalized=true"
        ],
    /*images*/[
            "../../../public/images/Fifa_10.gif",
            "../../../public/images/Fifa_10.gif",
            "../../../public/images/Fifa_10.gif",
            "../../../public/images/Fifa_10.gif",
            "../../../public/images/Fifa_10.gif"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/xkNggYc7WfQ");
    datas = await Sports.getAllSportss();
    const p42_id = datas[datas.length - 1]._id;
    // console.log(p42_id)

    const S3 = await Sports.addSports(
    /*name*/ "Wii Sports",
    /*about*/ "Wii Sports is a collection of five sports simulations, which have been designed to demonstrate the motion-sensing capabilities of the Wii Remote. The five sports included are tennis, baseball, bowling, golf and boxing.It is a 2006 sports simulation video game developed and published by Nintendo for the Wii video game console. The 1.0 (pre-release) version of the game was released in North America along with the Wii on November 19, 2006, and the 1.1 version was released in Japan, Australia, and Europe the following month. Nintendo then changed to selling the 1.1 version in North America a couple months later. It was included as a pack-in game with the console in all territories except Japan, making it the first sports game included with the launch of a Nintendo system since Mario's Tennis for the Virtual Boy in 1995. The game is available on its own as part of the Nintendo Selects collection of games.",
    /*instruction*/["Pick which sport you want to start with. There are five to choose from (Tennis, Baseball, Bowling, Golf, and Boxing.)", "Pick that sport. Choose your Mii and begin.", "Example: TENNIS", "Have a partner in Tennis. You can do that by de-selecting yourself once before you start the game. With a partner, it is easier to concentrate on what you have to do, and not try to control both players.", "Be the player closest to the net. That way, most balls go past you, but you have an opportunity to hit a few and most likely score.", "Be prepared. When playing a best of 3 or best of 5 game, you will have to serve and be in the back.", "Serve. All you have do is hit the 'A' button and swing. If you miss, it's not counted against you and you try again."],
    /*refer*/ "https://www.wikihow.com/Play-Wii-Sports",
    /*cheat code*/["Power Serve: To do a 'power serve,' press A and wait for the ball to reach the highest point in the air and then strike with the Wii Remote.", "Silver Boxing Gloves: After you've beaten Matt, the Grand Champion, you'll unlock the silver gloves. Hold 1 when the screen fades to black before a boxing match to don them.", "Disable Map and Meters for Golf: Hold 2 while choosing your course to disable the map and wind meter.", "Tennis court :At the warning screen after selecting characters, hold down 2.", "Amuse Crowd in Bowling: To make the crowd laugh in bowling, move to either of the gutters in your lane, turn into opposite lane, and bowl so the ball goes over the barier between the lanes. The ball will go into the gutter in the opposite lane and the crowd will laugh."],
    /*buy*/[
            "Steam", "",
            "Nintendo", "",
            "Google play", "",
            "Play station", "",
            "App store", "",
            "Game stop", "https://www.gamestop.com/search/?q=Wii%20Sports&type=Primary&sort=BestMatch_Desc&p=1",
            "Amazon", "https://www.amazon.com/Wii-Sports-Nintendo-Certified-Refurbished/dp/B014VC8F0O/ref=sr_1_2?crid=IIHR0JVDHQDF&keywords=Wii+Sports&qid=1670019473&sprefix=wii+sports%2Caps%2C74&sr=8-2",
            "Official", "https://www.wiiplaygameslv.com/catalog/video_games-nintendo-gamecube/nfl_street/91395"
        ],
    /*images*/[
            "../../../public/images/wii.gif",
            "../../../public/images/wii.gif",
            "../../../public/images/wii.gif",
            "../../../public/images/wii.gif",
            "../../../public/images/wii.gif"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/tftWbfIFePc");
    datas = await Sports.getAllSportss();
    const p43_id = datas[datas.length - 1]._id;
    // console.log(p43_id)

    const S4 = await Sports.addSports(
    /*name*/ "NFL Street",
    /*about*/ "NFL Street is a series of sports video games developed by EA Tiburon and published by Electronic Arts. It combines the talent and big names of the NFL with the atmosphere of street football. NFL Street is an American football video game developed by EA Tiburon and published by Electronic Arts. It was released for the PlayStation 2, GameCube and Xbox on January 13, 2004. Barry Sanders of the Detroit Lions, Shannon Sharpe of the Denver Broncos, and Ricky Williams of the Miami Dolphins grace the cover. The game was followed by NFL Street 2 and NFL Street 3.",
    /*instruction*/[
            "Quick Game — In this mode you select a team and play a quick game against either the computer or a friend. The scoring system can be in touchdowns or style points, depending on the choice of the player.",
            "Pickup Game — A Pickup Game is the same as a Quick Game, but instead of choosing a team, you and your opponent create teams from a pool of around 40 NFL players, some of which are Legends. In game, the teams are referred as 'Team One' and 'Team Two'. Regulation Pickup Games of NFL Street allow each team one redraft (also called a 'Re') if one team believes the random assortment of players available in the draft are not up to par. However, if both teams have used their redraft, another redraft can be done if both teams dislike the draft. This is known in the NFL Street community as 'Mutual Garb.'",
            "NFL Challenge — This is the main mode in the game. You create a team, from logo to players height, and go through a series of challenges against other teams, unlocking new football stadiums, teams, equipment, and development points for improving your team by completing several challenges that vary in their difficulty",
            "All NFL Pickup — To unlock this mode, you must first beat the NFL Challenge mode. The same features apply as in Pickup Game, but instead of a 40 player pool, you can select from any of the players in the game, including Legends. You can choose 1-2 players from any team except from the cheat code teams."
        ],
    /*refer*/ "https://www.gamespot.com/articles/nfl-street-walkthrough/1100-6087077/",
    /*cheat code*/[
            "EAField: Unlock EA Field",
            "GlueHands: No Fumbles on hits or tackles. Does not work with fumble mode on",
            "EAASFSCT: AFC East All-Stars team",
            "NAOFRCTH: AFC North All-Stars team",
            "SAOFUCTH: AFC South All-Stars team",
            "WAEFSCT: AFC West All-Stars team",
            "NNOFRCTH: NFC East All-Stars team",
            "SNOFUCTH: NFC South All-Stars team",
            "ENASFSCT: NFC West All-Stars team",
            "NNAS66784: NFC North All-Stars team",
            "TeamXzibit: Unlock Team Xzibit",
            "NoChains: No First Downs",
            "NozBoost: Unlimited Turbo"
        ],
    /*buy*/[
            "Steam", "",
            "Nintendo", "",
            "Google play", "",
            "Play station", "",
            "App store", "",
            "Game stop", "",
            "Amazon", "https://www.amazon.com/s?k=NFL+Street&crid=1NOKOPWQ4C22T&sprefix=nfl+street%2Caps%2C102&ref=nb_sb_noss_1",
            "Official", ""
        ],
    /*images*/[
            "../../../public/images/nfl.gif",
            "../../../public/images/nfl.gif",
            "../../../public/images/nfl.gif",
            "../../../public/images/nfl.gif",
            "../../../public/images/nfl.gif"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/ObkFpWj__KM");
    datas = await Sports.getAllSportss();
    const p44_id = datas[datas.length - 1]._id;
    // console.log(p44_id)

    const S5 = await Sports.addSports(
    /*name*/ "Nintendo switch sports",
    /*about*/ "Nintendo Switch Sports is a sports simulation video game developed and published by Nintendo for the Nintendo Switch. It is the latest entry in the Wii series of games and the fourth game of the Wii Sports sub-series, as well as the first to replace the 'Wii' title.The game was released on April 29, 2022, and received generally mixed reviews from critics.The game was released on April 29, 2022, and received generally mixed reviews from critics. Nintendo Switch Sports has sold over 4.8 million copies as of June 30, 2022, making it one of the best-selling Nintendo Switch games.ntendo Switch Sports is set in a fictional multi-sport facility named Spocco Square,which contains three sports from previous installments (tennis and bowling from Wii Sports and swordplay from Wii Sports Resort; known as chambara within the game), and three new sports (soccer, volleyball, and badminton).",
    /*instruction*/[
            "Select from the multiple sports under this category",
            "Example: Bowling",
            "Roll a ball and knock down as many pins at once while avoiding the gutters on either side of the lane.",
            "In Bowling, if each player has their own Joy-Con, they can all bowl at once. Otherwise, you can still take turns for up to 4 players locally.",
            " Other example: Volleyball",
            "You only need one Joy-Con to play Volleyball.",
            "Block the Volleyball from hitting the ground on your side of the net, while hitting and spiking it over the net to your opponent's side."
        ],
    /*refer*/ "https://www.ign.com/wikis/nintendo-switch-sports/Sports_and_Games#Bowling",
    /*cheat code*/[
            "Pro League in Tennis: Play Tennis online 10 times.",
            "Pro League in Bowling: Play Bowling online 10 times.",
            "Pro League in Chambara: Play Chambara online 10 times.",
            "Pro League in Volleyball: Play Volleyball online 10 times.",
            "Pro League in Badminton: Play Badminton online 10 times.",
            "Pro League in Soccer: Play Soccer online 10 times.",
            "Pro League in Golf: Play Golf online 10 times."
        ],
    /*buy*/[
            "Steam", "",
            "Nintendo", "https://www.nintendo.com/search/?q=Nintendo+switch+sports&p=1&cat=gme&sort=df",
            "Google play", "https://play.google.com/store/search?q=Nintendo%20switch%20sports&c=apps&hl=en_US&gl=US",
            "Play station", "", "App store", "https://apps.apple.com/us/app/nintendo-switch-online/id123486557",
            "Game stop", "https://www.gamestop.com/search/?q=Nintendo%20switch%20sports&type=Primary&sort=BestMatch_Desc&p=1",
            "Amazon", "https://www.amazon.com/stores/page/BE0EB5D0-0AD6-4564-8BC5-4A129A3A9CFD/?_encoding=UTF8&store_ref=SB_A09451993FJP63G28HXRU&pd_rd_plhdr=t&aaxitk=b25c096d0097183f6c492bcbdcfb6497&hsa_cr_id=9903264740401&lp_asins=B07VGRJDFY%2CB098RKWHHZ%2CB07V4GCFP9&lp_query=Nintendo%20switch%20sports&lp_slot=auto-sparkle-hsa-tetris&ref_=sbx_be_s_sparkle_lsi4d_ls&pd_rd_w=vnHUu&content-id=amzn1.sym.552bcbb2-81a1-4e8b-b868-3fba7d5af42a%3Aamzn1.sym.552bcbb2-81a1-4e8b-b868-3fba7d5af42a&pf_rd_p=552bcbb2-81a1-4e8b-b868-3fba7d5af42a&pf_rd_r=45GVWE5W8ZA280FNNGQC&pd_rd_wg=Luwx0&pd_rd_r=55207c26-1b25-4a1c-bc51-658f3f7b0f4c",
            "Official", "https://nintendoswitchsports.nintendo.com/en/?cid=N1101-01:ch=pdpd&gclid=EAIaIQobChMIwtDI0_rb-wIVzWxvBB2QCwZxEAAYASAAEgKt7vD_BwE"
        ],
    /*images*/[
            "../../../public/images/Nintendo.gif",
            "../../../public/images/Nintendo.gif",
            "../../../public/images/Nintendo.gif",
            "../../../public/images/Nintendo.gif",
            "../../../public/images/Nintendo.gif"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/tiwjvBSS_Wk");
    datas = await Sports.getAllSportss();
    const p45_id = datas[datas.length - 1]._id;
    // console.log(p45_id)

    const S6 = await Sports.addSports(
    /*name*/ "Mario Golf",
    /*about*/ "The Mario Golf series is a group of Golf-based Mario games, part of the large and still expanding Mario sports games list. Below shows all of the games in the series.Throughout the Mario Golf series, characters can test their skills by attempting to score points low enough to win at the end. In each game, the competitors have to go through eighteen courses until the scores are tallied up. The Mario Golf series is also known for having unique human players that normally don't appear in the series, such as Plum.",
    /*instruction*/[
            "Standard Golf:Every stroke counts and the lowest score wins in this classic game of golf with a Mario twist!",
            "Speed Golf:Tee off at the same time with up to three other players* and race through the course to sink your ball first. Outpace and interrupt your opponents with dashes and Special Shots. Choose between High Score (highest number of points wins) or Best Time (fastest time wins).",
            "Golf Adventure:Enroll your Mii™ character in golf training at a prestigious country club and go from rookie to pro!",
            "Solo Challenge:Challenge yourself to improve your technique and set a new record.",
            "Battle Golf:If you thought Speed Golf was wild, Battle Golf takes it to a whole other level! Crank up the chaos with obstacles like Chain Chomps, Thwomps, and more. All holes are open at the start, but once a player sinks a ball in it, the hole is closed. Race against opponents to be the first to win three flags.",
            "Target Golf:Take turns hitting five shots at the targets highest score wins! Up to four players can share one controller."
        ],
    /*refer*/ "https://mariogolf.nintendo.com/how-to-play/",
    /*cheat code*/[
            "In the tree by the entrance to the Links Club Putting Range:Kid",
            "Leftmost part of Raven Woods:Joe",
            "Northern most part of Tiny Tots:Sherry",
            "Rightmost part of Palm's Putting Grounds:Azalea",
            "Unlock Almost Everything:Down, Down, Left, Left, Left, Right, Right, Right (D-Pad for all), C-Down, C-Down, C-Left, C-Left, C-Left, C-Right, C-Right, C-Right.",
            "1st Camp, Hyrule Cup:0EQ561G2",
            "2nd Camp, Hyrule Cup:5VW689O6",
            "Special Tournament Mode:KPXWN9N3"
        ],
    /*buy*/[
            "Steam", "",
            "Nintendo", "https://www.nintendo.com/search/?q=Mario+Golf&p=1&cat=gme&sort=df",
            "Google play", "",
            "Play station", "",
            "App store", "",
            "Game stop", "https://www.gamestop.com/search/?q=Mario%20Golf&type=Primary&sort=BestMatch_Desc&p=1",
            "Amazon", "https://www.amazon.com/s?k=Mario+Golf&crid=LYO1DGWC4GPD&sprefix=mario+tennis%2Caps%2C270&ref=nb_sb_noss_1",
            "Official", "https://mariogolf.nintendo.com/"
        ],
    /*images*/[
            "../../../public/images/Mario_golf.gif",
            "../../../public/images/Mario_golf.gif",
            "../../../public/images/Mario_golf.gif",
            "../../../public/images/Mario_golf.gif",
            "../../../public/images/Mario_golf.gif"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/5R-EuaUbPvc");
    datas = await Sports.getAllSportss();
    const p46_id = datas[datas.length - 1]._id;
    // console.log(p46_id)

    //strategy
    const ST1 = await Strategy.addStrategy(
    /*name*/"Offworld Trading Company",
    /*about*/ "Offworld Trading Company is a real-time strategy video game developed by Mohawk Games and published by Stardock. The game was released for Microsoft Windows and OS X in April 2016. Featuring economic warfare ranging from hostile takeovers to sabotage,[1] it puts the player in charge of one of four titular offworld trading companies. The players' choice of faction comes after they have their first look at the map, allowing them to tailor their choices to the situation. Regardless of their choice, players land their HQ and begin to construct resource extractors on the neighboring hexes.There are 13 resources in the game. Water, Aluminum, Iron, Silicon, and Carbon can be extracted from hexes that contain those resources. Power can be generated by building a power plant, with different limitations depending on the type of power plant being built, and is usually used to power buildings. Steel mills generate steel from iron. Greenhouse farms make food from water. Hydrolysis reactors break water apart into oxygen and fuel. Glass kilns produce glass from oxygen and silicon. Electronics factories produce electronics from silicon, carbon, and aluminum. Chemical refineries produce chemicals from carbon and fuel. Finally, money can be produced by selling stockpiles of resources.Supply and demand fluctuates constantly.",
    /*instruction*/[
            "Player A owns 7 of his own stock.",
            "Player B owns 3 of Player A's stocks.",
            "In order for Player B to buyout Player A, they must first purchase two of Player A's stocks at twice their listed price.",
            "Then, Player B has to purchase the remaining 5 stocks in one go (also at twice the listed price).",
            "These purchases are a 'forced purchase', if you will, as they forcibly replace Player A's ownership of a stock w/ Player B's."
        ],
    /*refer*/ "https://offworldtradingcompany.fandom.com/wiki/Beginner%27s_Guide",
    /*cheat code*/[
            "Cycle Own HQs	SPACE",
            "Cycle HQ	TAB",
            "Claim Tile	C",
            "Bid on Auction	B"
            , "Sell All Resources	2",
            "Hide Buildings	3",
            "Delete Building	4"
        ],
    /*buy*/[
            "Steam", "https://store.steampowered.com/app/271240/Offworld_Trading_Company/",
            "Nintendo", "",
            "Google play", "",
            "Play station", "",
            "App store", "",
            "Game stop", "https://www.gamestop.com/pc-gaming/pc-games/products/offworld-trading-company/125799.html",
            "Amazon", "",
            "Official", "https://www.offworldgame.com/"
        ],
    /*images*/[
            "../../../public/images/offworld.gif",
            "../../../public/images/offworld.gif",
            "../../../public/images/offworld.gif",
            "../../../public/images/offworld.gif",
            "../../../public/images/offworld.gif"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/wOjeepczC6g");
    datas = await Strategy.getAllStrategys();
    const p51_id = datas[datas.length - 1]._id;
    // console.log(p51_id)

    const ST2 = await Strategy.addStrategy(
    /*name*/"Crusader Kings 3",
    /*about*/ "Crusader Kings III is a grand strategy role-playing video game set in the Middle Ages, developed by Paradox Development Studio and published by Paradox Interactive as a sequel to Crusader Kings and Crusader Kings II.Dynasties can form cadet branches that have their own heads and act mostly independently from their parent dynasty. The heads of dynasties are able to use a new resource known as Renown to assert their control over their house. For example, the heads of houses are responsible for legitimizing bastards.Characters have full-body, 3D-rendered character models instead of 2D portraits.Crusader Kings III was initially rejected by the Australian Classification Board, reportedly over complications regarding the game's classification.",
    /*instruction*/[
            "Invest In Your Court.",
            "Raise A Few Men-At-Arms.",
            "Figure Out Ways To Reduce Stress.",
            "Playing Through The Tutorial Is A Must.",
            "Check Out The Tooltips As Much As Possible.",
            "Keep An Eye Out For Important In-Game Notifications.",
            "Secure An Heir.",
            "Don't Declare War At A Moment's Notice.",
            "Always Keep Vassals Happy.",
            "Keep Competent People On The Council.",
            "Form Fewer More Powerful Alliances.",
            "Pick The Right Lifestyle Focus.",
            "Start With Some Of The Easier Dynasties To Enjoy Initial Playthroughs.",
            "Place A Great Emphasis On Roleplaying As The Current Ruler.",
            "Learn From Your Failures Instead Of Retracing Your Steps."
        ],
    /*refer*/ "https://www.thegamer.com/crusader-kings-3-beginner-tasks-tips-tricks/ ",
    /*cheat code*/[
            "gold [amount]: Adds [amount] of gold to the player character.",
            "kill [character id]: Kills [character id]",
            "gain_all_perks [character id]: Gives all lifestyle perks to [character id]",
            "know_schemes: Discovers all schemes targeting the player character.",
            "end_schemes: All schemes targeting the player character are abandoned.",
            "instabuild: Holdings and buildings in the player character's domain are finished in a day.",
            "add_perk [perk id] [character id]: Adds [perk id] to [character id]",
            "add_piety [amount]:	Adds [amount] of piety to the player character",
            "add_prestige [amount]:	Adds [amount] of prestige to the player character.",
            "add_trait [trait id] [character id]: Adds [trait id] to [character id]",
            "event [event id]: Triggers [event id].",
            "give_title [title id] [character id]: Gives [title id] to [character id]"
        ],
    /*buy*/[
            "Steam", "https://store.steampowered.com/app/1158310/Crusader_Kings_III/",
            "Nintendo", "",
            "Google play", "",
            "Play station", "https://store.playstation.com/en-us/product/UP4139-PPSA02307_00-TTL0000000000001",
            "App store", "",
            "Game stop", "https://www.gamestop.com/search/?q=Crusader%20Kings%203&type=Primary&sort=BestMatch_Desc&p=1",
            "Amazon", "https://www.amazon.com/s?k=Crusader+Kings+3&crid=2CVU9SQY3BMGE&sprefix=crusader+kings+3%2Caps%2C89&ref=nb_sb_noss_1",
            "Official", "https://www.paradoxinteractive.com/games/crusader-kings-iii/about"
        ],
    /*images*/[
            "../../../public/images/crusader.gif",
            "../../../public/images/crusader.gif",
            "../../../public/images/crusader.gif",
            "../../../public/images/crusader.gif",
            "../../../public/images/crusader.gif"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/xjn66Cl3pMA");
    datas = await Strategy.getAllStrategys();
    const p52_id = datas[datas.length - 1]._id;
    // console.log(p52_id)

    const ST3 = await Strategy.addStrategy(
    /*name*/"Supremacy 1914",
    /*about*/ "Supremacy 1914 is a player real-time strategy browser game created and published by German studio Bytro Labs, in which the player manages one of the countries in the world during World War I.The player competes with countries controlled by other players playing the same game and with countries controlled by the computer. Resource management, province upgrades, coalitions and alliances play key roles in the game, in addition to the conquest aspect. The main view of the game is a map that could be zoomed in and out, but there was also a province view, which allows you see the upgrades to that province in a more realistic view than the list format that many games of this type have.",
    /*instruction*/[
            "Choose a country near the ocean and should not be surrounded by enemies.",
            "Build Recruiting Office in every Province.",
            "Build WORKSHOP on half of the provinces and BARRACKS limited to 1 or 2.",
            "Build Fortress on your borders.",
            "Produce Armoured cars and Cavalry.",
            "Attack the weakest country around you.",
            "Join Coalitions near you.", "Make many allies as much as you can.",
            "Set your relation Share Map with Al to increase Popularity."
        ],
    /*refer*/ "https://wilson.com.np/supremacy-1914-a-complete-beginner-tips-guide/",
    /*cheat code*/[
            "A6HRoy0NaF",
            "oTb7c2MIP2",
            "6cFKx1wuXc",
            "MDvgjmyXO2",
            "g9NDCIRYj5",
            "hdwrIrVaaF",
            "U4gUheFuNH",
            "58LhkND1Ql",
            "sK2lKXWPWV",
            "iAbEKPDCXI",
            "CYtf0lTpHV",
            "fuJL1MDliU",
            "I2IFSKtOsb",
            "N5Xb5DM5jG"
        ],
    /*buy*/[
            "Steam", "https://store.steampowered.com/search/?term=Supremacy+1914",
            "Nintendo", "",
            "Google play", "https://play.google.com/store/apps/details?id=com.bytro.supremacy1914&hl=en_US&gl=US",
            "Play station", "",
            "App store", "https://app.apple.com/us/app/suoermacy-1914/id1450824654",
            "Game stop", "",
            "Amazon", "",
            "Official", "https://www.supremacy1914.com/"
        ],
    /*images*/[
            "../../../public/images/supremacy.gif",
            "../../../public/images/supremacy.gif",
            "../../../public/images/supremacy.gif",
            "../../../public/images/supremacy.gif",
            "../../../public/images/supremacy.gif"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/o1u5Rxl02Ok");
    datas = await Strategy.getAllStrategys();
    const p53_id = datas[datas.length - 1]._id;
    // console.log(p53_id)

    const ST4 = await Strategy.addStrategy(
    /*name*/ "XCOM 2",
    /*about*/ "XCOM 2 is a 2016 turn-based tactics video game developed by Firaxis Games and published by 2K Games. It is the sequel to 2012's reboot of the series, XCOM: Enemy Unknown; it takes place 20 years after the events of Enemy Unknown.Gameplay is split between turn-based combat in which players command a squad of soldiers to fight enemies, and strategy elements in which players manage and control the operations of the Avenger, an alien ship that is used as a mobile base for XCOM.Following players' feedback on Enemy Unknown, Firaxis added procedural generation of maps and mod support to the game. The developers set the game after the bad ending of the 2012 reboot because it allowed them to change gameplay, introduce various new features and redesign some enemies. To encourage players to play more offensively, the developers introduced time-based objectives to boost the game's pacing. Compared with its predecessor, XCOM 2 has more emphasis on narrative. The artists drew inspiration from sci-fi movies including Elysium and Oblivion when creating the game's aesthetic. The game is powered by Unreal Engine 3.5.",
    /*instruction*/[
            "Don't Split Up The Squad.",
            "Plan Ahead With Soldier Abilities.",
            "Use Frag Grenades Liberally.",
            "Start Building Avenger Facilities Early.",
            "Most Walls Can Become Doors.",
            "Don't Forget Those Alien Autopsies.",
            "Have Reserve Soldiers With Some Battle Experience.",
            "Have A Main Squad.",
            "Manipulate The Avatar Project For An Advantage.",
            "Take It Slow In Battle."
        ],
    /*refer*/ "https://gamerant.com/xcom-2-beginner-mistakes/",
    /*cheat code*/[
            "Recover the Forge Item (Secret): A Better Human Being",
            "Recover the Psi Gate (Secret): A Dark Doorway (16)",
            "Create the Commander's Avatar (Secret): A Final Stand (16)",
            "Kill an Avatar (Secret): A God Falls (15)",
            "Recover a Codex Brain (Secret): A Grim Key (12)",
            "Recover the Black Site Data (Secret): A Horrible Truth (12)",
            "Complete the Avatar Autopsy (Secret): A Line Crossed (16)",
            "Complete the Lost and Abandoned mission: A New Alliance (26)",
            "Permanently defeat one of the Chosen: A Rival Silenced (33)",
            "Beat the Lost Towers mission: A Torch Passed (22)"
        ],
    /*buy*/[
            "Steam", "https://store.steampowered.com/search/?term=XCOM+2",
            "Nintendo", "https://www.nintendo.com/store/products/xcom-2-collection-switch/",
            "Google play", "https://play.google.com/store/search?q=XCOM%202&c=apps&hl=en_US&gl=US",
            "Play station", "https://store.playstation.com/en-us/search/xcom%202",
            "App store", "https://app.apple.com/us/app/xcom-2-collection/id1288508230",
            "Game stop", "https://www.gamestop.com/search/?q=XCOM%202&type=Primary&sort=BestMatch_Desc&p=1",
            "Amazon", "https://www.amazon.com/s?k=XCOM&crid=33SNUA6CR5972&sprefix=xcom+%2Caps%2C65&ref=nb_sb_noss_2",
            "Official", "https://xcom.com/"
        ],
    /*images*/[
            "../../../public/images/xcom2.gif",
            "../../../public/images/xcom2.gif",
            "../../../public/images/xcom2.gif",
            "../../../public/images/xcom2.gif",
            "../../../public/images/xcom2.gif"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/n3bENBYSucQ");
    datas = await Strategy.getAllStrategys();
    const p54_id = datas[datas.length - 1]._id;
    // console.log(p54_id)

    const ST5 = await Strategy.addStrategy(
    /*name*/"Homeworld: Deserts of Kharak",
    /*about*/ "Homeworld: Deserts of Kharak is a real-time strategy video game developed by Blackbird Interactive and published by Gearbox Software. The game was released on January 20, 2016, and is a prequel to the 1999 space-based real-time strategy video game Homeworld.Gearbox Software bought the intellectual property rights to the Homeworld franchise during THQ's bankruptcy auction in 2013.Following this, they announced that they were remaking both Homeworld and Homeworld 2 in high definition, released on Steam in February 2015 as Homeworld Remastered Collection.On 15 March 2016, the Soban Fleet Pack was announced as Deserts of Kharak's first in-game DLC pack, adding Kiith Soban as a playable faction in Skirmish and Multiplayer modes. Kiith Soban is a subfaction of the Northern Coalition, but with a number of unique differences, including their own version of the Carrier, Battlecruiser, Baserunner, and Railgun vehicles. The pack is available as of 22 March 2016.",
    /*instruction*/[
            "Prepare for Expedition Departure",
            "Deploy a Salvager from the Kapisi",
            "Gather Resources with the Salvager",
            "Use Rachel S'Jet to Repair the Support Cruiser",
            "Upgrade Light Attack Vehicle Fabrication",
            "Produce Three Light Attack Vehicles",
            "Destroy the Target Drones",
            "Launch the Command Carrier Kapisi"
        ],
    /*refer*/ "https://homeworld.fandom.com/wiki/Homeworld:_Deserts_of_Kharak#Plot",
    /*cheat code*/[
            "Enable debug mode: /debug",
            "Disable int 3 after fatal error: /nodebugInt",
            "Disable galaxy backgrounds: /noBG",
            "Disable default CPU players: /noCompPlayer",
            "Disable tactics: /notactics",
            "Disables retreat tactics: /noretreat",
            "Disable FMV sequences: /disableAVI",
            "Fatal errors do not generate int 3 before exiting: /nodebugInt",
            "Sets global memory heap size: /heap",
            "Sets path to search for opening files: /prepath"
        ],
    /*buy*/[
            "Steam", "https://store.steampowered.com/app/281610/Homeworld_Deserts_of_Kharak/",
            "Nintendo", "",
            "Google play", "https://play.google.com/store/apps/details?id=com.stratospheregames.nimbusgbx&hl=en_US&gl=US",
            "Play station", "",
            "App store", "",
            "Game stop", "",
            "Amazon", "",
            "Official", "https://www.desertsofkharak.com/"
        ],
    /*images*/[
            "../../../public/images/homeworld.gif",
            "../../../public/images/homeworld.gif",
            "../../../public/images/homeworld.gif",
            "../../../public/images/homeworld.gif",
            "../../../public/images/homeworld.gif"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/QZNc6Cr5O-E");
    datas = await Strategy.getAllStrategys();
    const p55_id = datas[datas.length - 1]._id;
    // console.log(p55_id)

    const ST6 = await Strategy.addStrategy(
    /*name*/"Civilization 6",
    /*about*/ "Sid Meier's Civilization VI is a turn-based strategy 4X video game developed by Firaxis Games, published by 2K Games, and distributed by Take-Two Interactive. The mobile port was published by Aspyr Media.Similar to previous installments, the goal for the player is to develop a civilization from an early settlement through many in-game millennia to become a world power and achieve one of several victory conditions, such as through military domination, technological superiority, or cultural influence, over the other human and computer-controlled opponents. Players do this by exploring the world, founding new cities, building city improvements, deploying military troops to attack and defend themselves from others, researching new technologies and civics advancements, developing an influential culture, and engaging in trade and negotiations with other world leaders.",
    /*instruction*/[
            "Take care of the Barbarian problem. Early on in a game of Civilization VI, Barbarians will be your main source of trouble.",
            "Know the map.",
            "Plan your cities.",
            "Make friends.",
            "Learn about the Eureka moments.",
            "Choose a leader that fits your play style.",
            "Know which victory to go for.",
            "Know which victory to go for.",
            "Adjust the difficulty.",
            "Check the Civilopedia"
        ],
    /*refer*/ "https://civilization.com/news/entries/civilization-vi-10-tips-to-start-playing/",
    /*cheat code*/[
            "LEFT-CLICK: open menus and accept menu choices, “activate” units, and etc.",
            "RIGHT-CLICK: designate the map location when ordering an active unit to move.",
            "Next Action: Press RETURN",
            "Toggle: Press Grid G",
            "Appeal: Press 3",
            "Continent: Press 2",
            "Government: Press 5",
            "Political: Press 6",
            "Religion: Press 1",
            "Settler: Press 4",
            "Attack: Press A",
            "Automate Exploration: Press E"
        ],
    /*buy*/[
            "Steam", "https://store.steampowered.com/search/?term=Civilization+6",
            "Nintendo", "https://www.nintendo.com/search/?q=Civilization+6&p=1&cat=all&sort=df",
            "Google play", "https://play.google.com/store/apps/details?id=com.aspyr.civvi&hl=en_US&gl=US",
            "Play station", "https://store.playstation.com/en-us/search/civilization%206",
            "App store", "https://app.apple.com/us/app/sid-meiers-civilization-vi/id1235863443",
            "Game stop", "https://www.gamestop.com/search/?q=Civilization%206&type=Primary&sort=BestMatch_Desc&p=1",
            "Amazon", "https://www.amazon.com/s?k=Civilization+6&crid=2AN2PTNSVD6J0&sprefix=civilization+6%2Caps%2C126&ref=nb_sb_noss_1",
            "Official", "https://civilization.com/"
        ],
    /*images*/[
            "../../../public/images/civilization6.gif",
            "../../../public/images/civilization6.gif",
            "../../../public/images/civilization6.gif",
            "../../../public/images/civilization6.gif",
            "../../../public/images/civilization6.gif"
        ],
    /*youtube link*/ "https://www.youtube.com/embed/5KdE0p2joJw"
    );
    datas = await Strategy.getAllStrategys();
    const p56_id = datas[datas.length - 1]._id;
    // console.log(p56_id)

    //review
    //action
    try {
        const RE1 = await reviews.createReview(
    /*user id*/u11_id,
    /*game id*/ p11_id,
    /*title*/ 'Good world',
    /*description*/ "The Talos Principle is a good world to get lost in. The strong, heady philosophical focus isn't as integrated into the puzzles as it initially suggested, but for those of you who like to flex your minds by action rather than heavy reading or contemplation, the puzzle sections deliver just as well. Much like Portal, The Talos Principle makes you feel smart just by playing it, as the bulk of the puzzles hit that sweet spot between too easy and near-impossible.",
    /*rating*/ '4',
    /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE2 = await reviews.createReview(
    /*user id*/u12_id,
    /*game id*/ p11_id,
    /*title*/ 'Amazing',
    /*description*/ "The Talos Principle is a game of challenges and conundrums and philosophical wonderings, filled with logic puzzles and cerebral mysteries. Its chunky mechanical processes are underpinned by a compelling breadcrumb-trail narrative that tackles the intangible notion of humanity and consciousness. Consequently, despite playing a robot that interacts with computer terminals and takes instruction from a disembodied voice in the sky, it exudes personality and charm; its mechanical precision complementing its aesthetic qualities. For an experience bereft of human contact it boasts a very big heart indeed.",
    /*rating*/ '4',
    /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        console.log("blah")
        const RE3 = await reviews.createReview(
    /*user id*/u13_id,
    /*game id*/ p12_id,
    /*title*/ 'Brilliant',
    /*description*/ "It's a brilliant game. Nintendo made one of the best moves in the history of the gaming industry by pairing the new portable with this spectacular puzzler, as Tetris was a perfect fit for play on the go tons of people got hooked on this game 20 years ago. Seriously, it was a phenomenon. You think Angry Birds is huge today? That was Tetris back at the dawn of the '90s. A megaton hit.",
    /*rating*/ '5',
    /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE4 = await reviews.createReview(
    /*user id*/u14_id,
    /*game id*/ p12_id,
    /*title*/ 'The Best Puzzle Game in the World.',
    /*description*/ "Tetris is an addictive and fun puzzle game designed for all ages. The innovation is classic as you fit block after block to create horizontal lines that fade out once you've made them. Alexey Pajitnov has created a classic for any system. Basically, it has always been with Nintendo spawning new Tetris games (Playstation had one, Tetrisphere), but I recommend the following titles for you to play with. Tetris (not DX), for the Game Boy, reason not being the DX is the absence of everyone's favorite theme song. Then the New Tetris for Nintendo 64, because it is beautiful, has a great soundtrack and you can have four people to play against you. There are so many puzzle games out now, but Tetris is the best.",
    /*rating*/ '4',
    /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE5 = await reviews.createReview(
    /*user id*/u15_id,
    /*game id*/ p13_id,
    /*title*/ 'Extraordinary',
    /*description*/ "Years ago, when Valve launched Portal as a fun Half-Life 2 mod, everybody was thrilled with the concept of the game. Portal 2 didn't just live up to the expectations I had, it slammed them harder into the ground, than I could have ever imagined. If this is no game of the year, I don't know what is... Portal 2's plot reaches much deeper into the history of Aperture Science, revealing new characters and shining a light on the events of Portal 1. Of course the humor most certainly made it to Portal 2 and I want to say, this game is even funnier than its predecessor. The new characters and the deeper plot make this game a must-buy, but that's not good enough for Aperture Science, I mean Valve: A co-op mode was the only thing missing from Portal 1, and they included it in this gem of video games. Challenging test chambers and hours of brain explosions await you and your partner in the Aperture Science Co-Operative Testing Initiative. If you liked Portal, you'll love Portal 2. And if you've never played Portal... do it now!",
    /*rating*/ '4',
    /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE6 = await reviews.createReview(
    /*user id*/u16_id,
    /*game id*/ p13_id,
    /*title*/ 'For science...',
    /*description*/ "'You are now thinking in portals...' - this used to be the tag line for an underdog game-project which completed the Orange Box. While most of the people bought this product because of Half Life 2 - Episode 2 the main feature only had limited playtime. After exploring the game set of the the Orange Box players were stunned by 'Portal', an ego-shooter with no shooting and parallels to the Half Life universe.",
    /*rating*/ '4',
    /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE7 = await reviews.createReview(
    /*user id*/u11_id,
    /*game id*/ p14_id,
    /*title*/ 'Good!',
    /*description*/ "Baba Is You finds the fun in the very idea of rules, which I understand may sound sacrilegious to some folks. Rules don't have a great reputation. They can be boring and restrictive and patronizing, weaponized by parents and bosses and governments and the total narcs of everyday life.",
    /*rating*/ '3',
    /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE8 = await reviews.createReview(
    /*user id*/u12_id,
    /*game id*/ p14_id,
    /*title*/ 'Extraordinary',
    /*description*/ "Baba Is You has slowly become one of my favourite puzzle games of all time alongside The Witness. Many indie games debut on PC and sometimes consoles before they come to mobile and I gave up on Baba Is You ever hitting mobile considering I didn't really see any discussion of more ports and figured we would see PS4 and Xbox versions before anything on mobile. After last week's surprise release, Baba Is You ($6.99) from Hempuli is now on iOS and Android in addition to PC and Nintendo Switch platforms and this new port is just about everything I hoped for in a mobile conversion but it is lacking in one key area.",
    /*rating*/ '5',
    /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE9 = await reviews.createReview(
    /*user id*/u13_id,
    /*game id*/ p15_id,
    /*title*/ 'Confusing',
    /*description*/ "The core game is pretty fun, but it feels a bit simple once you get used to the gimmick. Basically, walk around, hit a dead end, rotate the world a few times until a new platform is visible, go there and repeat. There were a few optical-illusion type puzzles with ladders where the solution is in view, but not obvious until you remember to think in the game's hybrid 3d-2d-physics. Those ones made me smile.",
    /*rating*/ '2',
    /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE10 = await reviews.createReview(
    /*user id*/u14_id,
    /*game id*/ p15_id,
    /*title*/ 'Could be better',
    /*description*/ "Intelligent, smart, good flow, creative, almost there. Good visuals, but the game is this, finding secret cubes hidden all around a different view 3d era. Good.",
    /*rating*/ '4',
    /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE11 = await reviews.createReview(
    /*user id*/u15_id,
    /*game id*/ p16_id,
    /*title*/ 'Fan!',
    /*description*/ "If you're a fan of Bejeweled (and who isn't?), this game won't disappoint you. There are tons of modes to play and many options for 'quests' (mini games). It works well on the DS because it's cheap, portable, and easy to play with the stylus. There are a few odd missteps, like the weird deep voice that exclaims whenever you make a good move, but overall it's definitely worth the price if you're looking for a fun casual game.",
    /*rating*/ '4',
    /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE12 = await reviews.createReview(
    /*user id*/u16_id,
    /*game id*/ p16_id,
    /*title*/ 'Solid game!',
    /*description*/ "Rise of the Tomb Raider is the most fun I've had with a Lara Croft game since 1996. Its story is full of the right kind of danger and intrigue, its tombs are dastardly, and I was as struck by its huge, romantic environments as I was as a kid playing the original. Although I could have done with a few more puzzles and fewer firefights overall, I enjoyed every rollicking, big-hearted second of it.",
    /*rating*/ '4',
    /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }


    //action
    try {
        const RE13 = await reviews.createReview(
        /*user id*/u11_id,
        /*game id*/ p21_id,
        /*title*/ 'Amazing',
        /*description*/ "The Talos Principle is a good world to get lost in. The strong, heady philosophical focus isn't as integrated into the puzzles as it initially suggested, but for those of you who like to flex your minds by action rather than heavy reading or contemplation, the puzzle sections deliver just as well. Much like Portal, The Talos Principle makes you feel smart just by playing it, as the bulk of the puzzles hit that sweet spot between too easy and near-impossible.",
        /*rating*/ '5',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE14 = await reviews.createReview(
        /*user id*/u12_id,
        /*game id*/ p21_id,
        /*title*/ 'Challenging',
        /*description*/ "Rise of the Tomb Raider raises the bar set by Lara's last outing with a rollicking adventure story, strong villains, gorgeous vistas, and smart puzzles – go off the main path to find the best stuff in dastardly optional tombs. Though the mandatory combat doesn't distinguish itself with challenging enemies unless you crank up the difficulty, Lara's newfound versatility on the battlefield makes fighting a lot more fun. Once again it's Lara herself, however, who steals the show, her complex ambitions and hardened resolve showing new sides to a character who has well and truly grown from survivor to the most fascinating action hero in video games today.",
        /*rating*/ '4',
        /*date od review*/ '12/01/2022'
        );

        const RE15 = await reviews.createReview(
        /*user id*/u13_id,
        /*game id*/ p22_id,
        /*title*/ 'The Dark Knight does it again as his game is now my favorite video game based on a comic.',
        /*description*/ "In fact, this game is probably the first game I have rated a ten and it not be a role playing game. It also saddens me a bit as Spider-man is my favorite comic book character of all time, however Batman has now claimed my favorite movie based on a comic character in 'The Dark Knight' and now my favorite video game. Spider-man has made some good games, but nothing as complete. They usually end up missing an element that detracts from game play such as the fact the web slinging kind of sucks as it is just him swinging from nothing and he might as well be flying or the web slinging is great, but the fighting and Spidey's strength is a non factor. This game though combines all of Batman's abilities to perfection as the fighting is fun and satisfying as you clobber wave after wave of Joker henchmen. His gadgets are done nicely as you throw batarangs, set explosive gel, and use grapples to perfection. Then if you are up to it you can hide in the shadows, perch on a gargoyle statue, or hide in the air vents to sneak up and silently take down Joker's men. The story too, is top notch. I enjoyed the opening as Batman once again escorts the Joker to Arkham asylum for the umpteenth time, only this time something seems strange as Joker seemingly wanted to get captured. Well you soon find out that Joker with some assistance from his crazy little gal sidekick Harley Quinn had a plan for escape and soon after the entire island of Arkham is under the Joker's control.",
        /*rating*/ '5',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE16 = await reviews.createReview(
        /*user id*/u14_id,
        /*game id*/ p22_id,
        /*title*/ 'Best game .',
        /*description*/ "First of all i am a huge batman fan. I was looking for a batman game for many years and EIDOS has just given the perfect game.This is the type of game i was expecting after Splinter cell, Hit man and Max Payne..... the game is excellent in all aspects (Story, game play, actions, level designs, graphics).The story starts with joker taking over the control of ARKHAM ASYLUM leaving batman into a trap. Batman has to save and infiltrate the arkham asylum to stop joker from doing bad to Gotham.Not only against joker but batman also has to fight against his enemies like croc, ivy, bane, scarecrow",
        /*rating*/ '4',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE17 = await reviews.createReview(
        /*user id*/u15_id,
        /*game id*/ p23_id,
        /*title*/ 'Worth every penny!!!',
        /*description*/ "Worth every penny!!!The characters themselves are all motion capture which you'll notice, nothing spectacular but what you do notice is the dialogue between all the characters. Just the normal back and forth between traveling. Especially Drax. He's more witty and somewhat intelligent.",
        /*rating*/ '5',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE18 = await reviews.createReview(
        /*user id*/u16_id,
        /*game id*/ p23_id,
        /*title*/ 'Fun experience',
        /*description*/ "I was skeptical going in because of how disappointing The Avengers game was but GOTG is a lot of fun. The characters are all done well and have funny dialogue between each other. The story is interesting and keeps you invested. The gameplay is great and combat sequences are a blast. The cooperative element with the team puts it over the top. The game is also visually appealing and looks fantastic. Ready for some DLC. Great game and definitely worth your time.",
        /*rating*/ '4',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE19 = await reviews.createReview(
        /*user id*/u11_id,
        /*game id*/ p24_id,
        /*title*/ 'Good!',
        /*description*/ "Like Assassin's Creed Odyssey and Origins before it, Assassin's Creed Valhalla continues the series trajectory into a full-fledged open-world RPG. Though Ubisoft has dug up some of its stealth-action roots to make that style more appealing, Valhalla’s focus is on the absolutely massive recreation of Dark Ages England, brought to life with stunning beauty and a level of detail I've rarely seen. It's been an impressive showcase for the Xbox Series X (and presumably the PlayStation 5, but Ubisoft only gave us access to the Xbox version ahead of launch), playing in 4K and a near-constant 60 frames per second. You have to put up with some new progression system ideas that don’t quite deliver, and an abundance of bugs, but there’s a staggering number of things to do, explore, and discover in and around Valhalla’s more atmospheric storytelling.",
        /*rating*/ '3',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE20 = await reviews.createReview(
        /*user id*/u12_id,
        /*game id*/ p24_id,
        /*title*/ 'Innovating',
        /*description*/ "Assassin's Creed Valhalla fully embraces the series' heritage. The 12th major Assassin's Creed game shows a keen awareness of the history and gameplay innovations of the saga, and it feels like a love letter to the franchise as a whole. This makes the game a far more rewarding experience for longtime fans, though newcomers can still enjoy Valhalla's combat, emphasis on exploration, and mystery-driven narrative without years of time spent in the Animus.  ",
        /*rating*/ '5',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE21 = await reviews.createReview(
        /*user id*/u13_id,
        /*game id*/ p25_id,
        /*title*/ 'Best GC Game Yet!',
        /*description*/ "After thoroughly playing through Resident Evil 4, I still think that Resident Evil 4 is one of the best from of the Resident Evil series. It's nice to see Capcom taking a step away from the regular zombies which they regularly use.",
        /*rating*/ '5',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE22 = await reviews.createReview(
        /*user id*/u14_id,
        /*game id*/ p25_id,
        /*title*/ 'Excellent!',
        /*description*/ "Intelligent, smart, good flow, creative, almost there. Good visuals, but the game is this, finding secret cubes hidden all around a different view 3d era. Good.You play as Leon S. Kennedy. You'll probably recognize the name from Resident Evil 2. Your assignment is to rescue the daughter of the President of the United States. After which, Leon travels to Spain to search for Ashley. The odds of success are strictly stacked against Leon.",
        /*rating*/ '4',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE23 = await reviews.createReview(
        /*user id*/u15_id,
        /*game id*/ p26_id,
        /*title*/ 'A great wrap-up.',
        /*description*/ "It's pretty crazy to me how so many folks actually consider this to be their favorite of the franchise. Don't get me wrong -- I loved this game to death and found it to be an extremely satisfying ending to Nathan Drake's story, but it's not better than the masterpiece that was Uncharted 2... It just isn't. I'd say it's about on par with the original and 3.",
        /*rating*/ '4',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE24 = await reviews.createReview(
        /*user id*/u16_id,
        /*game id*/ p26_id,
        /*title*/ 'A fitting end for Nathan and co.',
        /*description*/ "The game is beautiful - really beautiful, and the cutscenes are beautiful. The acting is wildly good - throughout, and when the game ends, one also feels that Drake's story is complete. Shoreline is generic, but a sword enemy that gives Drake a lot of beatings - and he ends up in my playthrough also with a broken arm and a broken nose. Oh, and that swordfight! However, there are a lot of inaccuracies regarding the historical impact of this game, which is partly a bit annoying, now that it's history, the game also ties in.",
        /*rating*/ '3',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        //racing
        const RE25 = await reviews.createReview(
        /*user id*/u11_id,
        /*game id*/ p31_id,
        /*title*/ 'Best rally game',
        /*description*/ "Dirt Rally 2.0 is the best rally game there is on the current generation consoles. The graphic effects are amazing, the authentic and challenging driving is unmatched and we can only hope Codemasters will not put microtransactions in this epic game.",
        /*rating*/ '5',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE26 = await reviews.createReview(
        /*user id*/u12_id,
        /*game id*/ p31_id,
        /*title*/ 'FFB is poor',
        /*description*/ "I do enjoy playing Dirt Rally 2.0 but only for short periods. Mainly because it only takes a short period to experience all the original content, after that point codemasters expects me to pay for extra cars and locations. This would be acceptable if the original roster wasn’t so small. It is clear that all this DLC was created well in advance of launch (especially since so many of it is from Dirt Rally 1 or Dirt 4). FFB is poor but doesn’t make the game unplayable. The audio is excellent and the menus are very clear and easy to navigate. Codemaaters are usually a reliable source of quality racing games, however, it appears greed has almost ruined this instalment of the Dirt franchise",
        /*rating*/ '2',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE27 = await reviews.createReview(
        /*user id*/u13_id,
        /*game id*/ p32_id,
        /*title*/ 'Stunning.',
        /*description*/ "Let's talk. Forza Horizon 1 had good story, Horizon 2 had good lighting and pretty map, Horizon 3 had a crazy diverse map and a lot to do in it, Horizon 4 had good update support and online functionality, Forza Horizon 5 has all of it. And SO MUCH MORE OF IT.More cars, more customization, bigger, better map, ungodly amount of campaign AND online content, a solid and compelling story, unbelievable visuals, great physics, better car sounds, a quality of life overhaul, such an amazing attention to detail, culture-wise, I could go on for hours.",
        /*rating*/ '5',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE28 = await reviews.createReview(
        /*user id*/u14_id,
        /*game id*/ p32_id,
        /*title*/ 'Awesome and involving',
        /*description*/ "Spectacular visuals, surprisingly good story and excellent control of the game makes this Forza to be a blast. If you want to be amazed and hooked to a racey game, this is the one you should be playing right away.",
        /*rating*/ '4',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE29 = await reviews.createReview(
        /*user id*/u15_id,
        /*game id*/ p33_id,
        /*title*/ 'A game ahead of its time, good nostalgic memories.',
        /*description*/ "I still remember the day going to GameStop with my friend after school and buying the physical disc for this around the time it came out back in 2010. Probably one of the best multiplayer experiences ever to be had around that time period. Looking back at this now, I never realized how much this game was ahead of its time, especially when it came to innovation and multiplayer involvement.",
        /*rating*/ '5',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE30 = await reviews.createReview(
        /*user id*/u16_id,
        /*game id*/ p33_id,
        /*title*/ 'A potential classic ruined by greed',
        /*description*/ "Developed by Criterion, the same team behind Burnout Paradise, you can definitely feel a lot of Burnout DNA in this Need for Speed entry. Sadly, since it's published by EA, do not expect to get the full game, you'll have to plonk down a further £45 on the PSN for that privilege. And since the game is now almost 8 years old you can expect online play to be dead. Trust me, this is one Platinum trophy that you won't be winning.",
        /*rating*/ '2',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE31 = await reviews.createReview(
        /*user id*/u11_id,
        /*game id*/ p34_id,
        /*title*/ 'Ridiculous',
        /*description*/ "I've regretted buying few games as much as this one. It's just ridiculously hard and unforgiving. If you've played Dirt: Rally then you might love this game. I guess I didn't realize how ruthless the game was before buying it. Granted, I'm not the best at racing games, but even after a few hours of play I wasn't able to even advance beyond the kart class. I will say the graphics and sound are really good, so if you love a hardcore racing game, this is for you.",
        /*rating*/ '3',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE32 = await reviews.createReview(
        /*user id*/u12_id,
        /*game id*/ p34_id,
        /*title*/ 'No potential',
        /*description*/ "Project Cars 2 may do a great many things exceptionally well, but it’s hard to look past the mountain of gaffes that quickly pile up on and off the track. Racing, after all, is about results, not potential.",
        /*rating*/ '5',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE33 = await reviews.createReview(
        /*user id*/u13_id,
        /*game id*/ p35_id,
        /*title*/ 'Could be better',
        /*description*/ "When I heard the F1 2020 would have a My Team, much like many long term fans of the franchise. I was ecstatic as it was a feature the community had wanted for a long time. However despite the introduction of my team and the re-added Split-screen, not seen since F1 2013, the basic formula for the game has not changed since last years game which is both a good and bad thing.Let’s start with why it’s a good thing. F1 2019 is a stellar game, everything about it felt clean and polished, and 2020 is exactly the same the graphics are among some of the best racing graphics on console right now, the handling model is not to different, so it feels familiar to players like me, but it's also not difficult to get to grips with.",
        /*rating*/ '4',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE34 = await reviews.createReview(
        /*user id*/u14_id,
        /*game id*/ p35_id,
        /*title*/ 'Flaw',
        /*description*/ "F1 2020 is a good racing game. The racing action is intense and the game options are endless. It is also cool that you can start your own team in career mode. Still, the game suffers from two flaws: the gameplay is almost identical to F1 2019 and the loading times disrupt the fun.",
        /*rating*/ '3',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE35 = await reviews.createReview(
        /*user id*/u15_id,
        /*game id*/ p36_id,
        /*title*/ 'Feature rich',
        /*description*/ "Even with an imperfect roster and a selection of modes that doesn't compare to the comprehensiveness of Forza 6 at launch, Forza Motorsport 7 is still a feature-rich and competition-diverse bundle of racing events that keep you coming back for more. The ability to control the weather to create rich, painterly cloudy backdrops goes a long way in making up for the lack of zombie modes and the Toyota MR2.",
        /*rating*/ '4',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE36 = await reviews.createReview(
        /*user id*/u16_id,
        /*game id*/ p36_id,
        /*title*/ 'Bad graphics',
        /*description*/ "Graphically, the cars are mostly well modeled. Environment, however, is straight out of early 2000's, increasing that TOCA 3 nostalgia. Compared to F-Horizon 4, which is an open world game - the environments are much uglier, despite being more contained and thus theoretically allowing for much more detail. Theoretically only, in this case. Furthermore, the lightning and reflections are for the most part worse as well.Sound is okay, I guess. Some of the cars sound like lawn-movers on crack. However, this seems to be an area the Forza games are consistently serviceable, but nothing more. There's a lot of cars and I guess the devs don't have the resources to record sounds for all of them + various configurations / upgrades so they use generic soundscape and tweak it a little.",
        /*rating*/ '2',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }


    //sports
    try {
        const RE37 = await reviews.createReview(
        /*user id*/u11_id,
        /*game id*/ p41_id,
        /*title*/ 'Simple and easy yet exciting',
        /*description*/ "Veteran gamers might find the single player mode a little too easy, but for younger gamers it should be a blast. The best part of the game is the multiplayer. Up to four people can play simultaneously, in modes such as 2 versus 2. Another great feature is the numerous different courses and challenges. One court, for instance, tilts back and forth depending how you walk on it. There is also over 12 Nintendo characters to chose. From the most popular such as Mario, to old favorites such as Donkey Kong Jr., and to everyone's favorite nemesis, Bowser.",
        /*rating*/ '5',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE38 = await reviews.createReview(
        /*user id*/u12_id,
        /*game id*/ p41_id,
        /*title*/ 'Good!',
        /*description*/ "So first of all i wanted to just say that in this game was waluigi's very first appearance in the mario franchise and he is not only a very funny and wacky character moving on in the mario franchise but has also been my all time favorite mario character but it's too bad that nintendo doesn't care about him that much and neither does the smash bros series either but at least there are a lot of people out there in this world that show him the respect and appreciation that he rightfully deserves but also i do appreciate how they gave luigi a rival just like how mario has his own rival and he even has a really cool looking design and speaking of design this game even for the year that originally came out in this game still looks very nice with good textures on the characters showing their classic designs in 3d and even updating original 3d models for characters like wario and luigi who haven't been in 3d that much back then but now have started to develop into that state a whole lot more with brand new spin off games and main series. But also i love the gameplay and how fluent it looks and feels and also how enjoyable it is to be hitting the tennis ball back and forth and not really knowing what the other player is going to do and where he or she will hit the ball next and it also has some reactionary feats to accomplish as well like having to react to when to hit the ball and also how to make a very good and fast shot to trick your opponents but i also love how you can play doubles in this game like other real life tennis matches out there where that is a thing but i also love how this is all running in a 3 dimensional space where things are easier to see and visualize because having a game where the ball is coming towards you at a 3 dimensional angle well you're going to need to see things at a very specific angle in order to not only play the game properly but also how to see things better in general when playing things like a sports game for example. ",
        /*rating*/ '4',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE39 = await reviews.createReview(
        /*user id*/u13_id,
        /*game id*/ p42_id,
        /*title*/ 'The best sports game',
        /*description*/ "Fifa 10 has to be the best game I have ever bought{mw2} runs it v. close The thing that really hooked me was the ease at which full flowing moves could be accomplished(when you know what your doing)and the huge amount of skills and celebrations available. The thing that annoyed me about has nothing to do with the game Its to do with EA. I think EA finally made the complete football game and then realised they'd set themselves up for a huge financial downfall for the next 5 years If a game cant be improved on what do they do? They strip away the things that made it excellent(like MW2-MW3) and add bells and whistles,it really annoys me Fifa 11,12 and now 13 have returned to the dark days off 06,05,04 where the ball is a pudding,getting past ppl=next to impossible and stringing moves together or even scoring a goal is more luck than skill However the one that killed my desire for future EA features was the Draconian decision to close the Fifa 10 servers,the ultimate way to get ppl buying their future products,its unfair,totally consumer-unfriendly.",
        /*rating*/ '5',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE40 = await reviews.createReview(
        /*user id*/u14_id,
        /*game id*/ p42_id,
        /*title*/ 'Awesome',
        /*description*/ "Some of you may be saying call of duty modern warfare 2 was the best game out that year and i can see why, but when you play this it feels like your actually watching football. with modern warfare it tries to make you feel like your in the war but it doesn't have that shock factor of realism that this has. this has so many games in this one disk its unbelievable. the manager mode has improved on everything that felt unrealistic on '09. the be a pro season is amazing it feels like your on the team. for those who can't play footy games very well there's a lounge mode where you can glitch the game and/or give yourself a handicap. it has possibly every league in the world. the one thing this game doesn't have is the FIFA world cup but they've sorted that out and made it a game on its own. when i bought this i also bought FIFA 2001, the improvements EA has made over the years is unbelievable. the only way this game can be topped is when FIFA 11 comes out in November/December time. this game is a must buy, get this or it's rival pro evolution soccer. but they are good in their own ways.",
        /*rating*/ '4',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE41 = await reviews.createReview(
        /*user id*/u15_id,
        /*game id*/ p43_id,
        /*title*/ 'Five Games for the price of one',
        /*description*/ "Wii Sports is the very game you will get with your Nintendo Wii.The game really showcases how the Wii is suppose to be played and it would get you along with your friends and family to get up and actually have a blast.Wii Sports is great for the fact it comes with Five Games that allow for hours of fun and will have everyone trying to outdo the other.The Five games you get are Baseball, Golf, Tennis, Bowling and Boxing.",
        /*rating*/ '5',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE42 = await reviews.createReview(
        /*user id*/u16_id,
        /*game id*/ p43_id,
        /*title*/ 'Fun, if limited',
        /*description*/ "This being one of the launch games for the Wii console, it was made with the primary reasons being to give buyers something to immediately play when they got one, and to utilize, and give a first-hand taste of, the unique aspects of the platform, on account of the technology. With that said, it is definitely entertaining. As the very first thing, you create a Mii(and that is not solely for this particular title, I think originally, they meant them to go for most releases, and then later, the selection was expanded), which is the mental projection of your digital self. The idea is to make it look like you, but you are not at all limited to that, and it seems like you can create as many as you'd like. You can customize the appearance to a great extent, with a scaling bar for height and one for... ahem... width, and multiple choices for head shape, nose, glasses or not(those last three, you can even move up and down), hair, facial features(red cheeks, freckles, etc.), and the color of the eyes, skin and the clothes it wears(what exactly they are will vary on what you are doing). That broad a spectrum allows for countless ones that are nothing alike. At this point, control wasn't perfectly smoothed out, and the VG's did get better from here on. The Wii-Mote's sensitivity is used well(not as excellently as in Wii Fit, mind you), and this goes about as far as it can in having your avatar respond to the movements you make with it. A lot(not all) of the stuff actually feels a lot like doing it for real.",
        /*rating*/ '2',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE43 = await reviews.createReview(
        /*user id*/u11_id,
        /*game id*/ p44_id,
        /*title*/ 'Great!',
        /*description*/ "A great game with just a few beefs: poor use of great licensed music, slightly lacking implementation of the Gamebreaker feature, pointless hype about all the style moves (they're best used for taunting and bragging rights), and an insane difficulty curve in the Challenge mode which may send you to the store to buy new controllers.",
        /*rating*/ '5',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE44 = await reviews.createReview(
        /*user id*/u12_id,
        /*game id*/ p44_id,
        /*title*/ 'Bad!',
        /*description*/ "This game misses the point and misses it badly. At first glance, the barely above average graphics, the hip-hop version of NFL uniforms, and the bone cracking sound during gameplay certainly seem like the game will have potential. But for the reasons stated in this review, no serious football gamer will play this longer than a week.",
        /*rating*/ '5',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE45 = await reviews.createReview(
        /*user id*/u13_id,
        /*game id*/ p45_id,
        /*title*/ 'Good Game!',
        /*description*/ "Nintendo Switch Sports (2022) is a really fun and good game. I will say the online multiplayer does need a few tweaks as it takes forever just to find other players. I also wish there were a few more sports to play as they could have easily added sports from wii sports and wii sports resort. Overall it's a very good game and is even better with friends.",
        /*rating*/ '4',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE46 = await reviews.createReview(
        /*user id*/u14_id,
        /*game id*/ p45_id,
        /*title*/ 'Noy surprised!',
        /*description*/ "Color me not surprised, but it's not nearly as great as the original. While I do like that they tried to combine both Wii Sports and Wii Resort into one game, the game doesn't have a huge selection. I would of rather seen them either include all of Wii Sports or include both Wii and Switch Sports, but sadly only had a mix and match. They didn't even have baseball.... Or boxing. They did have bowling, which is always fun, and others like sword fighting and badminton, which were fun too. It just didn't hit the same Wii Sports did, and I just didn't have as much fun as I was hoping. Still, I'd say give it a shot if you liked Wii Sports or Wii Resort.",
        /*rating*/ '3',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE47 = await reviews.createReview(
        /*user id*/u15_id,
        /*game id*/ p46_id,
        /*title*/ 'One of the finest sports videogames I own - surprisingly!',
        /*description*/ "Who ever thought a title such as 'Mario Golf' would actually amount to anything?. Surprisingly it's well-made and addictive; for anyone who plays golf (such as myself) it's rather fun and realistic. I had expected some cartoony-type Mario videogame where they use golf as a simple backdrop, but it actually is a realistic golf game, albeit one with silly characters and landscapes.Overall though everything else is very realistic and it's a fine videogame - I've owned it for years and still enjoy playing it. If you haven't gotten an upgrade from an N64 yet, this is one of the 'must-buy' games, even for non-sports-fans and sports-fans alike. Oh, and Mario fans, although they may be a bit more disappointed since it isn't typical Mario fare!",
        /*rating*/ '4',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE48 = await reviews.createReview(
        /*user id*/u16_id,
        /*game id*/ p46_id,
        /*title*/ 'MID',
        /*description*/ "Kinda MID tbh. Just as mid as endgame. The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. Beep A single lap should be completed each time you hear this sound. Ding Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.",
        /*rating*/ '2',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    //Strategy
    try {
        const RE49 = await reviews.createReview(
        /*user id*/u11_id,
        /*game id*/ p51_id,
        /*title*/ 'Fantastic',
        /*description*/ "A fantastic multiplayer strategy game, where wits not twitches are rewarded. I think it's best played against humans, and I've sunk nearly 200 hours into it so far and anticipate many more hours. I think people with a background in strategy board games are really going to love this one. I haven't enjoyed a game this much since Colonization and MOO2 back in the days of Windows 95!",
        /*rating*/ '5',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE50 = await reviews.createReview(
        /*user id*/u12_id,
        /*game id*/ p51_id,
        /*title*/ 'Could be better',
        /*description*/ "Its a solid game, remember me about Sierras' Outpost. The game works pretty well, solid FPS and no crashes but i feel that with the same money you could buy way better strategy games like Crusader Kings 2 and Civilization VI. This game can hardly deliver about 50 hours of fun because after you finish the first match you already seem all. If you can grab this game for $15,00 bucks or less its ok, anything that costs more than $15 you are wasting your money",
        /*rating*/ '3',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE51 = await reviews.createReview(
        /*user id*/u13_id,
        /*game id*/ p52_id,
        /*title*/ 'Perfect',
        /*description*/ "I'm not writing this review to tell anyone that all the people who love this game are wrong, only that it isn't great at everything it tries to do. What Crusader Kings 3 does well, it does VERY well. It's great at weaving emergent narrative, and that's not easy, because I can't think of another game that does it as well. But Crusader Kings is not meant to be Sims Medieval alone, it's supposed to be a Grand Strategy game, and it's mediocre as such, at best.",
        /*rating*/ '5',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE52 = await reviews.createReview(
        /*user id*/u14_id,
        /*game id*/ p52_id,
        /*title*/ 'Midiocre',
        /*description*/ "I'm not writing this review to tell anyone that all the people who love this game are wrong, only that it isn't great at everything it tries to do. What Crusader Kings 3 does well, it does VERY well. It's great at weaving emergent narrative, and that's not easy, because I can't think of another game that does it as well. But Crusader Kings is not meant to be Sims Medieval alone, it's supposed to be a Grand Strategy game, and it's mediocre as such, at best.Even the game's strength isn't perfect. In a game that focuses so heavily on intrigue, it's odd that I can see exactly what every other character in the world thinks of me.",
        /*rating*/ '3',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE53 = await reviews.createReview(
        /*user id*/u15_id,
        /*game id*/ p53_id,
        /*title*/ 'Great game',
        /*description*/ "Great game involving realistic(ish) military tactics and with highly addicting gameplay. Especially fun to coordinate with friends and attack other countries, defend from other countries and to just run the economy and expand the empire. Downside is that it is quite a slow game in which it can take a long time to do certain things such as moving armies. Probably intended as a game to potentially run in the background of doing something else and checking on the status of it occasionally.",
        /*rating*/ '5',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE54 = await reviews.createReview(
        /*user id*/u16_id,
        /*game id*/ p53_id,
        /*title*/ 'Immersive Strategy',
        /*description*/ "This is not a game that you play once and forget; the world map is huge, and the options available are vast. Your game may go on for months at a time!Supremacy 1914 seems pretty interesting and will definitely be one of your favorites if you like this genre. There is also role playing going on which will make you feel at home.",
        /*rating*/ '2',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE55 = await reviews.createReview(
        /*user id*/u11_id,
        /*game id*/ p54_id,
        /*title*/ 'Great!',
        /*description*/ "A great game with just a few beefs: poor use of great licensed music, slightly lacking implementation of the Gamebreaker feature, pointless hype about all the style moves (they're best used for taunting and bragging rights), and an insane difficulty curve in the Challenge mode which may send you to the store to buy new controllers.",
        /*rating*/ '5',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE56 = await reviews.createReview(
        /*user id*/u12_id,
        /*game id*/ p54_id,
        /*title*/ 'Bad!',
        /*description*/ "This game misses the point and misses it badly. At first glance, the barely above average graphics, the hip-hop version of NFL uniforms, and the bone cracking sound during gameplay certainly seem like the game will have potential. But for the reasons stated in this review, no serious football gamer will play this longer than a week.",
        /*rating*/ '5',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE57 = await reviews.createReview(
        /*user id*/u13_id,
        /*game id*/ p55_id,
        /*title*/ 'Good Game!',
        /*description*/ "Homeworld is one of those franchises that its story holds up really well. Being a prequel fits in so well. Deserts of Kharak plays just like Homeworld Originals except on land. It has always had one of the best RTS gameplay designs. The sounds alone are amazing. This game is a must buy for those who loved the Homeworld series and a must buy for RTS fans. Story holds up well, gameplay is fun and simple and the game design is top notch. While the visuals aren't super computer pushing, its enough to create an amazing atmosphere for this great game.",
        /*rating*/ '4',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE58 = await reviews.createReview(
        /*user id*/u14_id,
        /*game id*/ p55_id,
        /*title*/ 'Not easy!',
        /*description*/ "Homeworld is not an easy name to tackle, and yet Blackbird Interactive did a great job, maintaining some of the brightest ideas seen in the series, and adapting its gameplay in order to support the new location. It is not as memorable as its predecessors, but it’s still a strong and narrative driven rts, that will be appreciated by fans of the genre.",
        /*rating*/ '4',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE59 = await reviews.createReview(
        /*user id*/u15_id,
        /*game id*/ p56_id,
        /*title*/ 'Ultimate game',
        /*description*/ "Civilization 6 is the ultimate digital board game. More than ever in the series, the board—the world—is the soul of every opportunity and challenge. As usual for Civ, I build empires, compete for a set of victory conditions, and fend off warmongering leaders like that scoundrel Peter the Great. But I’m also playing for, with, and against the board. Forests and deserts and resource-rich tundras each influence the flow of my civilization, granting us boons and burdening us with lasting weaknesses. Bands of barbarians put my farms in crisis, but also open up opportunities to speed the development of my military techs. The glorious, challenging dynamics that emerge from Civ 6’s redesigned maps left me with no question that the storied series has crowned a new king.",
        /*rating*/ '4',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    try {
        const RE60 = await reviews.createReview(
        /*user id*/u16_id,
        /*game id*/ p56_id,
        /*title*/ 'Overwhelming',
        /*description*/ "There are so many of these new features that it could feel overwhelming at times. The depth and variety of systems resembles a Civ game that’s already had two or three expansions added on top—from the new Districts that perform specific tasks and spread my cities out into an often messy but somehow pleasing sprawl, to a whole separate 'tech' tree for civic and cultural progress that ties into a sort of collectible card game for mixing policy bonuses to build a unique government. The feature richness averts the common problem with strategy games on day one where I feel I’m being sold a platform on which a great game will eventually be built. But I also worry that Firaxis may have sailed a bit beyond the calm waters of accessibility for more casual strategy fans, and any expansions that add major features or new systems could heighten the barrier to newcomers.",
        /*rating*/ '3',
        /*date od review*/ '12/01/2022'
        );
    } catch (error) {
        console.log(error)
    }

    console.log('Done seeding database');
    await db.serverConfig.close();
}

main();


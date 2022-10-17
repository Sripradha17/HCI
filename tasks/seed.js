const dbConnection = require('../config/mongoConnection');
const data = require('../data/');
const Hotels = data.hotels;
const reviews = data.reviews;
const users = data.users;

async function main() {
    const db = await dbConnection();
    await db.dropDatabase();
  

    // Users
    //admin
    const udit= await users.createUser('Udit','Patel','123-345 5678','upatel6@stevens.edu',1,2,'admin','24','Admin@123');
    let data= await users.getAllUsers();
    udit_id=data[data.length - 1]._id;
    
    console.log(udit_id)
    //Business user
    //approval pending
    const u2= await users.createUser('Adit','Saha','123-345 5680','AditS@stevens.edu',2,1,'Buser1','24','Admin@123');
    data= await users.getAllUsers();
    u2_id=data[data.length - 1]._id;
    console.log(u2_id)
    const u3= await users.createUser('Uditya','Pshah','123-345 5681','ushah21@yahoo.com',2,1,'Buser2','24','Admin@123');
    data= await users.getAllUsers();
    u3_id= data[data.length - 1]._id;
    //blocked business user
    const u4= await users.createUser('Aditya','Polis','123-345 5682','PolisAdi@gmail.com',2,3,'Buser3','24','Admin@123');
    data= await users.getAllUsers();
    u4_id= data[data.length - 1]._id;
    const u5= await users.createUser('Aayush','Narette','123-345 5683','AayuNare11@gmail.edu',2,3,'Buser4','24','Admin@123');
    data= await users.getAllUsers();
    u5_id= data[data.length - 1]._id;
    //approved business user
    const u6= await users.createUser('Aayushi','Chashmawala','123-345 5684','Aayushi22@outlook.com',2,2,'Buser5','24','Admin@123');
    data= await users.getAllUsers();
    u6_id= data[data.length - 1]._id;
    const u7= await users.createUser('Uditaa','Daruwala','123-345 5685','Udaruwala@stevens.edu',2,2,'Buser6','24','Admin@123');
    data= await users.getAllUsers();
    u7_id= data[data.length - 1]._id;
    const u8= await users.createUser('Udit','Pondi','123-345 5686','upondi@hotmail.com',2,2,'Buser7','24','Admin@123');
    data= await users.getAllUsers();
    u8_id= data[data.length - 1]._id;
    const u9= await users.createUser('Adil','Rahman','123-345 5687','RahmanAdil@gmail.com',2,2,'Buser8','24','Admin@123');
    data= await users.getAllUsers();
    u9_id= data[data.length - 1]._id;
    const u10= await users.createUser('Udta','Punjab','123-345 5688','udtapunjab19@gmail.com',2,2,'Buser9','24','Admin@123');
    data= await users.getAllUsers();
    u10_id= data[data.length - 1]._id;

    //normal user(reviewer)
    const u11= await users.createUser('Sam','Kim','123-345 5698','Skimilk@outlook.com',3,2,'USER1','24','Admin@123');
    data= await users.getAllUsers();
    u11_id= data[data.length - 1]._id;
    
    const u12= await users.createUser('Sammy','Kodak','123-345 5678','KodakSam@covid.org',3,2,'USER2','24','Admin@123');
    data= await users.getAllUsers();
    u12_id= data[data.length - 1]._id;
    const u13= await users.createUser('Mathew','Perry','123-345 5677','Mperry@stevens.edu',3,2,'USER3','24','Admin@123');
    data= await users.getAllUsers();
    u13_id= data[data.length - 1]._id;
    const u14= await users.createUser('Manthan','Patel','123-345 5676','ManthanPl6@nyu.edu',3,2,'USER4','24','Admin@123');
    data= await users.getAllUsers();
    u14_id= data[data.length - 1]._id;
    const u15= await users.createUser('Patrik','Patel','123-345 5675','Ppatel@njit.edu',3,2,'USER5','24','Admin@123');
    data= await users.getAllUsers();
    u15_id= data[data.length - 1]._id;
    const u16= await users.createUser('Hill','Sabastian','123-345 5674','Hsabastian@rutgers.edu',3,2,'USER6','24','Admin@123');
    data= await users.getAllUsers();
    u16_id= data[data.length - 1]._id;
    //blocked user
    const u17= await users.createUser('Bill','Desai','123-345 5673','Bdesai@gmail.com',3,3,'USER7','24','Admin@123');
    data= await users.getAllUsers();
    u17_id= data[data.length - 1]._id;
    const u18= await users.createUser('Billy','Kapoor','123-345 5672','Bilkapoorcan@gmail.com',3,3,'USER8','24','Admin@123');
    data= await users.getAllUsers();
    u18_id= data[data.length - 1]._id;
    const u19= await users.createUser('David','Chopra','123-345 5671','Iamdavid@hotmail.com',3,3,'USER9','24','Admin@123');
    data= await users.getAllUsers();
    u19_id= data[data.length - 1]._id;
    const u20= await users.createUser('Stuti','Mehta','123-345 5670','Smehta@gmail.com',3,3,'USER10','24','Admin@123');
    data= await users.getAllUsers();
    u20_id= data[data.length - 1]._id;

    // Hotel
    //pending approval
    const H1 = await Hotels.addHotel('TI - Treasure Island Hotel & Casino','3300 Las Vegas Boulevard South, Las Vegas Strip,','Las Vegas','Las Vegas','Chain hotels','89109',['Free Breakfast'],  '$$$$','36.124954', '-115.17197',u6_id,[],1);
    data= await Hotels.getAllHotels();
    H1_id= data[data.length - 1]._id;
    console.log(H1_id)
    const H2 = await Hotels.addHotel('La Quinta by Wyndham Las Vegas RedRock/Summerlin','9570 West Sahara Avenue, Summerlin', 'Las VegaS','Las Vegas','Chain hotels','89117',['Free Breakfast'],  '$$$$','36.14554234385264', '-115.30317620059073',u6_id,[],1);
    data= await Hotels.getAllHotels();
    H2_id= data[data.length - 1]._id;
    //blocked hotel
    const H3 = await Hotels.addHotel('Conrad Las Vegas at Resorts World','111 W Resorts World Dr', 'Las Vegas','Las Vegas','Chain hotels','89109',['Free Breakfast'],  '$$$$','236.135179084283436', '-115.16560252022293',u6_id,[],3);
    data= await Hotels.getAllHotels();
    H3_id= data[data.length - 1]._id;
    //approved hotel
    const H4 = await Hotels.addHotel('Trump International Hotel Las Vegas','2000 Fashion Show Dr', 'Las Vegas','Las Vegas','Chain hotels','89109',['Free Breakfast'],  '$$$$','36.130222600429825', '-115.17268355138681',u6_id,[],2);
    data= await Hotels.getAllHotels();
    H4_id= data[data.length - 1]._id;
    const H5 = await Hotels.addHotel('Wynn Las Vegas','3131 S Las Vegas Blvd', 'Las Vegas','Las Vegas','Chain hotels','89109',['Free Breakfast'],  '$$$$','36.12734561657732', '-115.16590292760564',u6_id,[],2);
    data= await Hotels.getAllHotels();
    H5_id= data[data.length - 1]._id;
    const H6 = await Hotels.addHotel('The Palazzo at The Venetian Resort','3325 S Las Vegas Blvd', 'Las Vegas','Las Vegas','Hotels','89109',['Free Breakfast'],  '$$$$','36.12429520527176', '-115.16791994860385',u6_id,[],2);
    data= await Hotels.getAllHotels();
    H6_id= data[data.length - 1]._id;
    const H7 = await Hotels.addHotel('Embassy Suites by Hilton Convention Center Las Vegas','3600 Paradise Rd', 'Las Vegas','Las Vegas','Hotels','89169',['Free Breakfast'],  '$$$$','36.12505781921111', '-115.1539295476376',u6_id,[],2);
    data= await Hotels.getAllHotels();
    H7_id= data[data.length - 1]._id;
    const H8 = await Hotels.addHotel('Crown Motel','2855 E Fremont St', 'Las Vegas','Las Vegas','Hotels','89104',['PET FRIENDLY'],  '$$$$','36.15777914338031', '-115.11085148430936',u7_id,[],2);
    data= await Hotels.getAllHotels();
    H8_id= data[data.length - 1]._id;
    const H9 = await Hotels.addHotel('The High Line Hotel','180 10th Ave', 'New York','New York','Hotels','10011',['PET FRIENDLY'],  '$$$$','40.74667203513938', '-74.0049693222903',u7_id,[],2);
    data= await Hotels.getAllHotels();
    H9_id= data[data.length - 1]._id;
    const H10 = await Hotels.addHotel('Hilton Garden Inn New York/Manhattan-Chelsea','121 W 28th St', 'New York','New York','Hotels','10001',['PET FRIENDLY'],  '$$$$','40.74750018472313', '-73.99154817622757',u7_id,[],2);
    data= await Hotels.getAllHotels();
    H10_id= data[data.length - 1]._id;
    const H11 = await Hotels.addHotel('Royalton Park Avenue','420 Park Ave S', 'New York','New York','Hotels','10016',['PET FRIENDLY'],  '$$$$','40.74501570503315', '-73.9840784885999',u7_id,[],2);
    data= await Hotels.getAllHotels();
    H11_id= data[data.length - 1]._id;
    const H12 = await Hotels.addHotel('Hotel Giraffe by Library Hotel Collection','365 Park Ave S', 'New York','New York','Motels','10016',['Car Parking'],  '$$$$','40.74257714397287', '-73.98474650944465',u7_id,[],2);
    data= await Hotels.getAllHotels();
    H12_id= data[data.length - 1]._id;
    const H13 = await Hotels.addHotel('The Maritime Hotel','363 W 16th St', 'New York','New York','Motels','10011',['Car Parking'],  '$$$$','40.74340534454795', '-74.00411911394242',u7_id,[],2);
    data= await Hotels.getAllHotels();
    H13_id= data[data.length - 1]._id;
    const H14 = await Hotels.addHotel('The New York EDITION','5 Madison Ave', 'New York','New York','Motels','10010',['Car Parking'],  '$$$$','40.741610896934446', '-73.98735786365594',u8_id,[],2);
    data= await Hotels.getAllHotels();
    H14_id= data[data.length - 1]._id;
    // const H15 = await Hotels.addHotel('Gansevoort Meatpacking NYC','18 9th Ave', 'New York','New York','Resorts','10010',['Car Parking'],  '$$$$','40.74129784782583', '-74.00558812921025',u8_id,[],2);
    // data= await Hotels.getAllHotels();
    // H15_id= data[data.length - 1]._id;
    // const H16 = await Hotels.addHotel('Hilton Garden Inn Long Island City New York','29-21 41st Ave', 'Queens','Queens','Resorts',' 11101',['Car Parking'],  '$$$$','40.75220979748184', '-73.93783188109505',u8_id,[],2);
    // data= await Hotels.getAllHotels();
    // H16_id= data[data.length - 1]._id;
    const H17 = await Hotels.addHotel('Franklin Guesthouse','214 Franklin St',' Brooklyn','Brooklyn','Resorts','11222',['Car Parking'],  '$$$$','40.73514948207007', '-73.95832104594425',u8_id,[],2);
    data= await Hotels.getAllHotels();
    H17_id= data[data.length - 1]._id;
    const H18 = await Hotels.addHotel('Aloft Long Island City-Manhattan View','27-45 Jackson Ave',' Queens','Queens','Resorts','11101',['Pool'],  '$$$$','40.74706142461524', '-73.94026623731476',u8_id,[],2);
    data= await Hotels.getAllHotels();
    H18_id= data[data.length - 1]._id;
    const H19 = await Hotels.addHotel('Courtyard by Marriott Bethlehem Lehigh Valley/I-78','2220 Emrick Blvd', 'Bethlehem','Bethlehem','Resorts','18020',['Pool'],  '$$$$','40.69267330591069', '-75.30527821626879',u9_id,[],2);
    data= await Hotels.getAllHotels();
    H19_id= data[data.length - 1]._id;
    const H20 = await Hotels.addHotel('Mohegan Sun','1 Mohegan Sun Blvd', 'Uncasville','Uncasville','Resorts','06382',['Pool'],  '$$$$','41.58443647502379', '-72.11345021853275',u9_id,[],2);
    data= await Hotels.getAllHotels();
    H20_id= data[data.length - 1]._id;
    const H21 = await Hotels.addHotel('Camelback Mountain Resort','301 Resort Dr', 'Tannersville','Tannersville','Resorts','18372',['Pool'],  '$$$$','41.06215707263921', '-75.19040859619764',u9_id,[],2);
    data= await Hotels.getAllHotels();
    H21_id= data[data.length - 1]._id;
    const H22 = await Hotels.addHotel('Renaissance Atlanta Waverly Hotel & Convention Center','2450 Galleria Pkwy', 'Atlanta','Atlanta','Inns','30339',['Family friendly'],  '$$$$','34.08289470236439', '-85.34042897733262',u10_id,[],2);
    data= await Hotels.getAllHotels();
    H22_id= data[data.length - 1]._id;
    const H23 = await Hotels.addHotel('West Baden Springs Hotel','8538 W Baden Ave', 'West Baden Springs','West Baden Springs','Inns','47469',['Family friendly'],  '$$$$','38.91745647080442', '-87.42240098170208',u10_id,[],2);
    data= await Hotels.getAllHotels();
    H23_id= data[data.length - 1]._id;
    const H24= await Hotels.addHotel('Harrahs Cherokee Casino Resort','777 Casino Dr', 'Cherokee','Cherokee','Inns','28719',['Family friendly'],  '$$$$','35.66618182856132', '-83.33444135268464',u10_id,[],2);
    data= await Hotels.getAllHotels();
    data= await Hotels.getAllHotels();
    H24_id= data[data.length - 1]._id;
    const H25= await Hotels.addHotel('The Peabody Memphis','149 Union Ave', 'Memphis','Memphis','Inns','38103',['Family friendly'],  '$$$$','35.51890470557979', '-89.82473058460133',u10_id,[],2);
    data= await Hotels.getAllHotels();
    H25_id= data[data.length - 1]._id;

    const RE1 = await reviews.createReview(u11_id, H25_id,'Extraordinary','This is one of the most special resorts I\'ve visited in my 60+ years. It starts with the people who work there, all of them thoughtful, kind, generous, and service-oriented. Then there is the low-rise buildings and the landscaping, like a tropical botanic garden with small waterways and koi ponds','4','11/24/2021');
    const RE2 = await reviews.createReview(u11_id, H23_id,'Extraordinary','This is one of the most special resorts I\'ve visited in my 60+ years. It starts with the people who work there, all of them thoughtful, kind, generous, and service-oriented. Then there is the low-rise buildings and the landscaping, like a tropical botanic garden with small waterways and koi ponds','3','11/25/2021');
    const RE3 = await reviews.createReview(u12_id, H20_id,'Extraordinary','This is one of the most special resorts I\'ve visited in my 60+ years. It starts with the people who work there, all of them thoughtful, kind, generous, and service-oriented. Then there is the low-rise buildings and the landscaping, like a tropical botanic garden with small waterways and koi ponds','1','11/26/2021');
    const RE4 = await reviews.createReview(u12_id, H21_id,'Extraordinary','This is one of the most special resorts I\'ve visited in my 60+ years. It starts with the people who work there, all of them thoughtful, kind, generous, and service-oriented. Then there is the low-rise buildings and the landscaping, like a tropical botanic garden with small waterways and koi ponds','5','11/27/2021');
    const RE5 = await reviews.createReview(u13_id, H2_id,'Extraordinary','This is one of the most special resorts I\'ve visited in my 60+ years. It starts with the people who work there, all of them thoughtful, kind, generous, and service-oriented. Then there is the low-rise buildings and the landscaping, like a tropical botanic garden with small waterways and koi ponds','4','11/28/2021');
    const RE6 = await reviews.createReview(u13_id, H5_id,'Extraordinary','This is one of the most special resorts I\'ve visited in my 60+ years. It starts with the people who work there, all of them thoughtful, kind, generous, and service-oriented. Then there is the low-rise buildings and the landscaping, like a tropical botanic garden with small waterways and koi ponds','2','11/29/2021');
    const RE7 = await reviews.createReview(u14_id, H1_id,'Extraordinary','This is one of the most special resorts I\'ve visited in my 60+ years. It starts with the people who work there, all of them thoughtful, kind, generous, and service-oriented. Then there is the low-rise buildings and the landscaping, like a tropical botanic garden with small waterways and koi ponds','5','11/20/2021');
    const RE8 = await reviews.createReview(u14_id, H12_id,'Extraordinary','This is one of the most special resorts I\'ve visited in my 60+ years. It starts with the people who work there, all of them thoughtful, kind, generous, and service-oriented. Then there is the low-rise buildings and the landscaping, like a tropical botanic garden with small waterways and koi ponds','5','11/1/2021');
    const RE9 = await reviews.createReview(u15_id, H17_id,'Extraordinary','This is one of the most special resorts I\'ve visited in my 60+ years. It starts with the people who work there, all of them thoughtful, kind, generous, and service-oriented. Then there is the low-rise buildings and the landscaping, like a tropical botanic garden with small waterways and koi ponds','5','11/3/2021');
    const RE10 = await reviews.createReview(u16_id, H25_id,'Extraordinary','This is one of the most special resorts I\'ve visited in my 60+ years. It starts with the people who work there, all of them thoughtful, kind, generous, and service-oriented. Then there is the low-rise buildings and the landscaping, like a tropical botanic garden with small waterways and koi ponds','5','11/2/2021');


    console.log('Done seeding database');
    await db.serverConfig.close();
}

main();


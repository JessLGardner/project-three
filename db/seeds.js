require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const User = require('../models/user');
const Itinerary = require('../models/itinerary');
const Event = require('../models/event');

mongoose.Promise = global.Promise;

User.remove({}, (err) => console.log (err));
Itinerary.remove({}, (err) => console.log (err));
Event.remove({}, (err) => console.log (err));


const labyrinth = new Event({
    name: 'Jim Henson\'s Labyrinth: Journey to Goblin City',
    description: "Catch it while you can! Enter the magical world of Jim Henson’s Labyrinth! In honor of the film’s 30th anniversary, experience a spellbinding exhibit of goblins, gowns and behind the-scenes artwork. Take a journey into the world of the Goblin King! This special exhibit is included with Museum admission.",
    date: 'Now - Oct 1, 2017',
    time: 'Monday: Closed, Tuesday-Friday: 9am-5pm, Saturday: 10am-5pm, Sunday: 12pm-5pm',
    place: 'Center for Puppetry Arts',
    price: 'Free with museum admission, adults and children ages 2 & up, Museum-Only: $12.50',
    link: 'http://www.puppet.org/programs/museum/special-exhibits-events/'
})

const wildwood = new Event({
    name: 'Wildwoods',
    description: "Enjoy the wonder of nature in the heart of the city in WildWoods. An elevated walkway takes you from the Museum’s terrace into the treetops where you can enjoy stunning views from one of 2 tree pods. From there, guests can tailor their experiences: * Explore immersive and interactive exhibits for children (Nature Stories) and tweens (Adventure Outpost) * See adventure turn to art in the Nature Gallery. * Get a closer look at nature through special trailside experiences, including a sensory wall, animal tracks and tree molds. * Look for a variety of native plants, flowers and wildlife as the trails take you along the creek toward the wetlands meadow and wildlife sanctuary. * Take advantage of drop-in programs in the education pavilion and educator-led nature walks. WildWoods offers all-season nature experiences for all ages and provides direct access to Fernbank Forest.",
    date: 'Permanent',
    time: '10am – 5pm Daily',
    place: 'The Fernbank',
    price: 'Included with Museum admission. Members always free!',
    link: 'http://www.fernbankmuseum.org/explore/permanent-exhibitions/wildwoods/'
})

const threeDPrint = new Event({
    name: 'Family 3D Design & Printing Class',
    description: "Join MODA for a starter-level 3D Printing class. At the helm of your 3D printing adventure is 3D Printing Wizard/Knight/Ninja Neil Miller – who started dabbling in 3D modeling before he was 16 and has pursued the craft all throughout his life, in his work in game design, sculpture, and other creative pursuits. Once he got his hands on a 3D printer in ’05, he knew he had found his medium. He’ll walk you through the basics of the browser-based 3D modeling program Tinkercad, where you’ll design a dream creation of your own – be it a custom cell phone holder, jewelry, luggage tag, planter, pitcher, watering can, or unicorn. By the end of the class your creation will be ready to go to print, which is exactly what it’ll do. In just one week’s time you’ll be able to pick it up at MODA and bring it into the real world with you.",
    date: 'Sunday, August 27, 2017',
    time: '1:00pm  2:30pm',
    place: 'Museum of Design Atlanta',
    price: '$39 for 2 people',
    link: 'http://www.museumofdesign.org/calendar/2017/8/27/family-3d-design-printing-class'
})

const buildVibe = new Event({
    name: 'Design Workshop: Build-A-Vibrator with Crave (Ages 21+)',
    description: "Crave is a luxury sex toy company. Crave co-founder Ti Chang - one of the few women industrial designers in the sex toy industry - will give a brief introduction on building an innovative company in a taboo space. You will then assemble your very own special edition Duet vibrator from parts they provide, with their expert instruction.",
    date: 'Friday, August 18, 2017',
    time: '7:00pm  9:00pm',
    place: 'Museum of Design Atlanta',
    price: '$99 (covers 1 or 2 people plus one vibe',
    link: 'http://www.museumofdesign.org/calendar/2017/8/18/design-workshop-build-a-vibrator-with-crave-ages-21'
})

const cocktailGarden = new Event({
    name: 'Cocktails in the Garden',
    description: "August: INTO THE WOODS: Explore Storza Woods during Cocktails in the Garden! Stroll with a specialty whiskey cocktail through a sunset viewing of The Curious Garden exhibition. Enjoy live music from Amp’d Entertainment while enjoying the serene atmosphere of the woodlands.",
    date: 'August 31',
    time: '6 ­ - 10 p.m.',
    place: 'Atlanta Botanical Garden',
    price: 'Adults $21.95',
    link: 'http://atlantabg.org/visit/events/cocktails-in-the-garden'
})

const sipsUnderSea = new Event({
    name: 'Sips Under the Sea - Pajama Jam',
    description: "It’s Pajama Jam time! Throw on your favorite pj’s and fuzzy slippers and join Georgia Aquarium’s Pajama Jam on Friday, September 22, 2017! See the Aquarium in your most comfortable attire while enjoying music, signature cocktails and delicious small plates. Join us for a night of relaxing fun for everyone! Sips Under the Sea is a unique cocktail party for adults to enjoy Georgia Aquarium after hours with your family, friends or significant other. You'll have the entire Aquarium to yourself while enjoying cocktails, tapas and entertainment… all without kids!",
    date: 'Sep 22',
    time: '7pm - 10pm',
    place: 'Georgia Aquarium',
    price: '$28.95',
    link: 'http://www.georgiaaquarium.org/experience/explore/events/2017/09/22/default-calendar/sips-under-the-sea---pajama-jam'
})

const warhol = new Event({
    name: 'ANDY WARHOL: PRINTS FROM THE COLLECTIONS OF JORDAN D. SCHNITZER AND HIS FAMILY FOUNDATION',
    description: "Andy Warhol harnessed the power of celebrity, consumer goods, sex, death, and disaster to create his iconic Pop Art. The foundation of his revolutionary career lay in printmaking. This retrospective exhibition, encompassing over 250 works on loan from Portland-based collector Jordan D. Schnitzer, establishes Warhol’s innovative graphic production as it evolved over the course of four decades. The exhibition explores his nearly singular use of the silkscreen process, once largely a commercial format that Warhol elevated to the status of fine art. The series and portfolios on view highlight Warhol’s obsession with repetition and with printmaking as a mechanical means of artistic reproduction. In this convergence, Warhol famously blurred the distinctions between original and copy and employed print multiples as a medium for conceptual rebellion and experimentation. As a result of Warhol’s fascination with popular culture, the exhibition also chronicles American life in the second half of the twentieth century, from glamour icons Jacqueline Kennedy and Marilyn Monroe to the violent imagery of the Birmingham civil rights protests, political posters of the 1970s, and 1980s ad campaigns. Warhol’s work also addressed his own identity as a gay man in a time when homosexuality was stigmatized and persecuted. In total, the works on view offer a bellwether of postwar American life and foreshadow our culture’s frenzied obsession with celebrity, fashion, sensationalism, and scandal.",
    date: 'through September 3, 2017',
    time: '10am – 5pm Daily',
    place: 'High Museum',
    price: 'Included with Museum admission. Adults $14.50',
    link: 'https://www.high.org/exhibition/andy-warhol/'
})

const beltlineTalk = new Event({
    name: 'CITY ON THE VERGE: THE BELTLINE IN ATLANTA\'S PAST, PRESENT, AND FUTURE',
    description: "The Atlanta BeltLine is helping to transform our city. Originating as “belt line” railroads built over a century ago to expand the industrial base of the city, the corridors were largely abandoned by the late 20th century, but are now being repurposed as a planned 22-mile trail and transit loop that will connect new and old parks. Already, the completed trail sections are helping to revitalize neighborhoods, but not without controversy and concern over economic and cultural displacement.",
    date: 'Thursday, August 31, 2017',
    time: '7:00pm',
    place: 'Atlanta History Center',
    price: '$10.00',
    link: 'http://www.atlantahistorycenter.com/programs/city-on-the-verge-the-beltline-in-atlantas-past-present-and-future'
})

const mlkHome = new Event({
    name: 'Martin Luther King Jr Birth Home Tour',
    description: "In 1895 a two-story frame Queen Anne style house was built for a white family at 501 Auburn Avenue. MLK was born at the home in 1929. After Dr. King's assination on April 4, 1968 plans were begun to restore the house as a historic museum. Today visiting the home where Dr. King was born and lived the first twelve years of his life is often the highlight of ones visit to the park.",
    date: 'daily, except Thanksgiving, Christmas and New Year\'s Day',
    time: '10am – 4pm Daily',
    place: 'Martin Luther King Jr National Historic Site',
    price: 'free',
    link: 'https://www.nps.gov/malu/planyourvisit/birth_home_tours.htm'
})

const forTheKids = new Itinerary({
    name: 'For The Kids',
    events: [labyrinth, wildwood, threeDPrint]
})

const forSara = new Itinerary({
    name: 'For Sara',
    events: [buildVibe, cocktailGarden]
})

const design = new Itinerary({
    name: 'Design Nerd',
    events: [warhol, beltlineTalk]
})

const history = new Itinerary({
    name: 'History Nerd',
    events: [mlkHome]
})

const drunky = new Itinerary({
    name: 'Fun Drinks',
    events: [sipsUnderSea, cocktailGarden]
})

const sara = new User({
    userName: 'Saraaa',
    email:  'sara@gmail.com',
    password: 'sara',
    avatar: 'picture',
    itineraries: [forTheKids, forSara]
})

const gordon = new User({
    userName: 'Gordo',
    email:  'gordy@gmail.com',
    password: 'gordon',
    avatar: 'picture',
    itineraries: [history, design]
})

const bailey = new User({
    userName: 'Bae Lee',
    email:  'bailey@gmail.com',
    password: 'bailey',
    avatar: 'picture',
    itineraries: [drunky]
})



sara.save().then(() => console.log("Sara Saved!"))
gordon.save().then(() => console.log("Gordon Saved!"))
bailey.save().then(() => console.log("Bailey Saved!"))




mongoose.connection.close();
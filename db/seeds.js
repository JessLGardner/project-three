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
    description: "Enter the magical world of Jim Henson’s Labyrinth! In honor of the film’s 30th anniversary, experience a spellbinding exhibit of goblins, gowns and behind the-scenes artwork. Take a journey into the world of the Goblin King!",
    date: 'Now - Oct 1, 2017',
    time: 'Tuesday-Friday: 9am-5pm, Weekends: 12pm-5pm',
    place: 'Center for Puppetry Arts',
    price: 'free with museum admission ($12.50)',
    link: 'http://www.puppet.org/programs/museum/special-exhibits-events/'
})

const wildwood = new Event({
    name: 'Wildwoods',
    description: "Enjoy the wonder of nature in the heart of the city in WildWoods- an elevated walkway from the Museum’s terrace into the treetops with stunning views from the tree pods. From there, tailor your experience with interactive exhibits, art in the nature gallery, and nature walks through the wetlands meadow and wildlife sanctuary.",
    date: 'Permanent',
    time: '10am – 5pm',
    place: 'The Fernbank',
    price: 'free with museum admission ($18)',
    link: 'http://www.fernbankmuseum.org/explore/permanent-exhibitions/wildwoods/'
})

const threeDPrint = new Event({
    name: 'Family 3D Design & Printing Class',
    description: "Join MODA for a starter-level 3D Printing class. 3D Printing Wizard Neil Miller will walk you through designing your dream creation with 3D modeler Tinkercad. By the end of the class your creation will be ready to go to print, and in just one week’s time you’ll be able to pick it up at MODA and bring it into the real world with you.",
    date: 'August 27, 2017',
    time: '1pm - 2:30pm',
    place: 'Museum of Design Atlanta',
    price: '$39 for 2 people',
    link: 'http://www.museumofdesign.org/calendar/2017/8/27/family-3d-design-printing-class'
})

const buildVibe = new Event({
    name: 'Design Workshop: Build-A-Vibrator with Crave (Ages 21+)',
    description: "Ti Chang, co-founder of luxury sex toy company, Crave, will give a brief introduction on building an innovative company in a taboo space. You will then assemble your very own special edition of their flagship Duet, not yet on the market, with expert instruction.",
    date: 'August 18, 2017',
    time: '7:00pm  9:00pm',
    place: 'Museum of Design Atlanta',
    price: '$99',
    link: 'http://www.museumofdesign.org/calendar/2017/8/18/design-workshop-build-a-vibrator-with-crave-ages-21'
})

const cocktailGarden = new Event({
    name: 'Cocktails in the Garden',
    description: "Explore Storza Woods during Cocktails in the Garden! Stroll with a specialty whiskey cocktail through a sunset viewing of The Curious Garden exhibition. Enjoy live music from Amp’d Entertainment while enjoying the serene atmosphere of the woodlands.",
    date: 'August 31, 2017',
    time: '6pm - 10pm',
    place: 'Atlanta Botanical Garden',
    price: '$21.95',
    link: 'http://atlantabg.org/visit/events/cocktails-in-the-garden'
})

const sipsUnderSea = new Event({
    name: 'Sips Under the Sea - Pajama Jam',
    description: "Throw on your favorite pj’s and fuzzy slippers and join Georgia Aquarium’s Pajama Jam! See the Aquarium in your most comfortable attire while enjoying music, signature cocktails and delicious small plates. Join us for a night of relaxing fun for everyone! Sips Under the Sea is a unique cocktail party for adults to enjoy Georgia Aquariu after hours.",
    date: 'September 22, 2017',
    time: '7pm - 10pm',
    place: 'Georgia Aquarium',
    price: '$28.95',
    link: 'http://www.georgiaaquarium.org/experience/explore/events/2017/09/22/default-calendar/sips-under-the-sea---pajama-jam'
})

const warhol = new Event({
    name: 'Andy Warhol: Prints from the Collections of Jordan D. Schnitzer and his Family Foundation',
    description: "Andy Warhol harnessed the power of celebrity, consumer goods, sex, death, and disaster to create his iconic Pop Art. This retrospective exhibition, encompassing over 250 works on loan from Jordan D. Schnitzer, establishes Warhol’s innovative graphic production as it evolved over the course of four decades and highlight Warhol’s obsession with repetition and with screenprinting. In total, the works on view offer a bellwether of postwar American life and foreshadow our culture’s frenzied obsession with celebrity, fashion, sensationalism, and scandal.",
    date: 'through September 3, 2017',
    time: '10am – 5pm Daily',
    place: 'High Museum',
    price: 'free with museum admission ($14.50)',
    link: 'https://www.high.org/exhibition/andy-warhol/'
})

const beltlineTalk = new Event({
    name: 'City on the Verge: The Beltling in Atlanta\'s Past, Present, and Future',
    description: "The Atlanta BeltLine is helping to transform our city. Originating as “belt line” railroads built over a century ago to expand the industrial base of the city, the corridors were largely abandoned by the late 20th century, but are now being repurposed as a planned 22-mile trail and transit loop that will connect new and old parks. Already, the completed trail sections are helping to revitalize neighborhoods, but not without controversy and concern over economic and cultural displacement.",
    date: 'Thursday, August 31, 2017',
    time: '7:00pm',
    place: 'Atlanta History Center',
    price: '$10',
    link: 'http://www.atlantahistorycenter.com/programs/city-on-the-verge-the-beltline-in-atlantas-past-present-and-future'
})

const mlkHome = new Event({
    name: 'Martin Luther King, Jr. Birth Home Tour',
    description: "In 1895 a two-story Queen Anne style house was built at 501 Auburn Avenue. Martin Luther King, Jr. was born at the home in 1929. After Dr. King's assasination in 1968 plans were begun to restore the house as a historic museum. Today visiting the home where Dr. King was born and lived the first twelve years of his life is often the highlight of ones visit to the park.",
    date: 'daily, except Thanksgiving, Christmas and New Year\'s Day',
    time: '10am – 4pm',
    place: 'Martin Luther King, Jr. National Historic Site',
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
    userName: 'Sara',
    email:  'sara@gmail.com',
    password: 'sara',
    avatar: 'http://placeskull.com/150/150',
    itineraries: [forTheKids, forSara]
})

const gordon = new User({
    userName: 'Gordon',
    email:  'gordon@gmail.com',
    password: 'gordon',
    avatar: 'http://placeskull.com/150/150',
    itineraries: [history, design]
})

const bailey = new User({
    userName: 'Bailey',
    email:  'bailey@gmail.com',
    password: 'bailey',
    avatar: 'http://placeskull.com/150/150',
    itineraries: [drunky]
})



sara.save().then(() => console.log("Sara Saved!"))
gordon.save().then(() => console.log("Gordon Saved!"))
bailey.save().then(() => console.log("Bailey Saved!"))




mongoose.connection.close();
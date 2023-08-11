import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarsDataService {
  detail: any[] = [];
  cat: any;
  list: any[] = [
    {
      category: 'SUV',
      name: 'Kia Sorento',
      fueltype: 'Gasoline/Diesel',
      color: 'black',
      model: 2019,
      desc: 'The Sorento is a three-row SUV with seven seats. A six-seat layout is available, and it swaps the second-row bench seat for two captains chairs. Cloth upholstery and manually adjustable front seats are standard.',
    },
    {
      category: 'SUV',
      name: 'Hyndai Creta',
      fueltype: 'Diesel',
      color: 'blue',
      model: 2020,
      desc: 'The Ultimate SUV. With a breathtakingly beautiful and edgy design, the Hyundai CRETA has been crafted to command respect. The bold exterior and the new masculine stance will set you apart from every other SUV on the road.',
    },
    {
      category: 'SUV',
      name: 'Porsche Ceyenne',
      fueltype: 'Gasoline/Diesel',
      color: 'silver',
      model: 2023,
      desc: 'For the 2024 iteration of the Cayenne, Porsche has completely reworked the design of the vehicle. The luxury performance SUV has long been a reliable five-seater for ones every day – albeit, elevated – driving experience.',
    },
    {
      category: 'Sedan',
      name: 'Audi A6',
      fueltype: 'Diesel',
      color: 'red',
      model: 2014,
      desc: 'If youre happy to hand over a little extra cash, then, the Audi A6 makes an excellent large saloon car thats easy to drive, fairly cheap to run and comes with all the latest high-tech kit to make it easier to live with.',
    },
    {
      category: 'Sedan',
      name: 'Honda Civic',
      fueltype: 'Diesel',
      color: 'grey',
      model: 2021,
      desc: 'Honda Civic is a D segment car and is worth the money its priced for. The excellent power and convenient ride provides a impressive driving experience to the driver as well as passengers of the car. Civic is a luxurious car embedded with all the luxurious and comforts which a sedan must carry with itself.',
    },
    {
      category: 'Sedan',
      name: 'BMW 3 Series',
      fueltype: 'Gasoline/Diesel',
      color: 'blue',
      model: 2018,
      desc: 'BMW designed the 3 Series to be as sporty as it is practical. It handles like a sports car, its relatively quick, and its extremely easy to drive (which makes it an excellent daily driver). I think we can all agree on that. The major drawbacks are high maintenance costs and general reliability',
    },
    {
      category: 'Minivan',
      name: 'Honda Odyssey',
      fueltype: 'Gasoline/Diesel',
      color: 'black',
      model: 2009,
      desc: 'The 2023 Honda Odyssey has a predicted reliability score of 81 out of 100. A J.D. Power predicted reliability score of 91-100 is considered the Best, 81-90 is Great, 70-80 is Average, and 0-69 is Fair and considered below average.The 2023 Honda Odyssey has a predicted reliability score of 81 out of 100. A J.D. Power predicted reliability score of 91-100 is considered the Best, 81-90 is Great, 70-80 is Average, and 0-69 is Fair and considered below average.',
    },
    {
      category: 'Minivan',
      name: 'Dodge Caravan',
      fueltype: 'Gasoline',
      color: 'yellow',
      model: 2015,
      desc: 'The Dodge Caravan has seating for up to 7 passengers with 3 available seats in the back. It provides plenty of legroom with 36.5 inches of legspace in the second row, 40.7 inches of legroom in the first row, and 32.7 inches of leg space in the third row.',
    },
    {
      category: 'Minivan',
      name: 'Toyota Sienna',
      fueltype: 'Gasoline/Diesel',
      color: 'silver',
      model: 2017,
      desc: 'The Sienna is also an outstanding value when it comes to what minivan drivers really value: safety and reliability. The Toyota brand has a consistently proven reliability record. In addition, the Sienna earns a 5-star overall safety rating from the NHTSA, and its an IIHS Top Safety Pick+.',
    },
    {
      category: 'Sports',
      name: 'Porsche 911',
      fueltype: 'Gasoline/Diesel',
      color: 'black',
      model: 2011,
      desc: 'When the J.D. Power conducted a poll to determine the car of the twentieth century, the 911 ranked ahead of all other powerful and performance-driven vehicles. From vintage Porsches to the latest models fresh from dealer lots, the 911 always wins a place in the garages of enthusiasts.',
    },
    {
      category: 'Sports',
      name: 'Jaguar F-Type',
      fueltype: 'Gasoline',
      color: 'yellow',
      model: 2020,
      desc: 'The Jaguar F-Type is a looker, and you get a lot of power for your money. Still, we think Jaguar missed the mark with this model updated for 2021. The car has lost some of the raucous character we fell in love with a few years back, and the cars infotainment system is still behind the times.',
    },
    {
      category: 'Sports',
      name: 'Nissan GT-R',
      fueltype: 'Gasoline/Diesel',
      color: 'silver',
      model: 2022,
      desc: 'The Nissan Skyline GT-R R34 has a 2.6-liter twin-turbocharged inline-6 engine that produces 330 HP and 260 lb-ft of torque. It can go from 0-60 MPH in 4.8 seconds and reach a top speed of 165 MPH.',
    },
  ];

  constructor() {}
}

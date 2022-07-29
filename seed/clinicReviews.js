const db = require('../db')
const { Borough, Clinic, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  // Borough.collection.drop()
  // Clinic.collection.drop()
  // Review.collection.drop()

  const bronx = await new Borough({
    name: 'Bronx',
    image: 'https://f4.bcbits.com/img/0020924734_100.png',

  })
  const bronxAwait = await bronx.save()

  const brooklyn = await new Borough({
    name: 'Brooklyn',
    image: 'https://thumbs.dreamstime.com/z/manhattan-map-poster-new-york-city-borough-street-cityscape-aria-panorama-silhouette-aerial-view-typography-style-hudson-east-207537219.jpg'

  })
  const brooklynAwait = await brooklyn.save()

  const manhattan = await new Borough({
    name: 'Manhattan',
    image: 'https://thumbs.dreamstime.com/z/manhattan-map-poster-new-york-city-borough-street-cityscape-aria-panorama-silhouette-aerial-view-typography-style-hudson-east-207537219.jpg'
  })

  const manhattanAwait = await manhattan.save()

  const queens = await new Borough({
    name: 'Queens',
    image: 'https://thumbs.dreamstime.com/z/manhattan-map-poster-new-york-city-borough-street-cityscape-aria-panorama-silhouette-aerial-view-typography-style-hudson-east-207537219.jpg'

  })
  const queensAwait = await queens.save()

  const statenIsland = await new Borough({
    name: 'Staten Island',
    image: 'https://thumbs.dreamstime.com/z/manhattan-map-poster-new-york-city-borough-street-cityscape-aria-panorama-silhouette-aerial-view-typography-style-hudson-east-207537219.jpg'

  })
  const statenIslandAwait = await statenIsland.save()

    const BMEC = await new Clinic ({
      name: 'Boi Morrisania Emergency Clinic',
      location: '1309 Fulton Ave 3rd Floor, The Bronx, NY 10456',
      hours: '9:00am - 5:00pm',
      appt_type: 'Appointment Only',
      borough: bronxAwait._id,
    })
    BMEC.save()

    const unionCommunityOneEightyEight = await new Clinic ({
      name: 'Union Community Health Center - 188th Street',
      location: '260 E 188th St, The Bronx, NY 10458',
      hours: '9:00am - 5:30pm',
      appt_type: 'Appointment Only',
      borough: bronxAwait._id,
    })
    unionCommunityOneEightyEight.save()

  
    const unionCommunityGrandConcourse = await new Clinic ({
      name: 'Union Community Health Center - 2021 Grand Concourse',
      location: '260 E 188th St, The Bronx, NY 10458',
      hours: '9:00am - 5:00pm',
      appt_type: 'Appointment Only',
      borough: bronxAwait._id,
    })
    unionCommunityGrandConcourse.save()


    const inwoodHealthCenter = await new Clinic ({
      name: 'Inwood Health Center',
      location: '1543-1545 Inwood Avenue, The Bronx NY, 10452',
      hours: '8:00am - 4:00pm',
      appt_type: 'Appointment Only',
      borough: bronxAwait._id,
    })
    inwoodHealthCenter.save()

    const essenUrgentCareGrandConcourse = await new Clinic ({
      name: 'Essen Urgent Care - 3200 Grand Concourse',
      location: '3200 Grand Concourse, The Bronx, NY 10458',
      hours: '8:00am - 8:00pm',
      appt_type: 'Appointment Only',
      borough: bronxAwait._id,
    })
    essenUrgentCareGrandConcourse.save()

    const essenUrgentCareOneFortyNine = await new Clinic ({
      name: 'Essen Urgent Care - 828 E 149th St',
      location: '828 E 149th St, The Bronx, NY 10455',
      hours: '8:00am - 5:00pm',
      appt_type: 'Appointment Only',
      borough: bronxAwait._id,
    })
    essenUrgentCareOneFortyNine.save()

    // brooklyn locations
    
    const fortGreeneEmergencyClinic = await new Clinic ({
      name: 'Fort Greene Emergency Clinic',
      location: '295 Flatbush Ave Ext 2nd Floor, Brooklyn, NY 11201',
      hours: '8:30am - 5:00pm',
      appt_type: 'Appointment Only',
      borough: brooklynAwait._id,
      })
      fortGreeneEmergencyClinic.save()

    const bmsFHWC = await new Clinic ({
      name: 'BMS Family Health and Wellness Center Vaccine Hub at St. Paul Community Baptist Church',
      location: '859 Hendrix St., Brooklyn, NY 11207',
      hours: '9:00am - 4:00pm',
      appt_type: 'Appointment Only',
      borough: brooklynAwait._id,
    })
    bmsFHWC.save()

    const maimonidesMedicalCenter = await new Clinic ({
      name: 'Maimonides Medical Center - MMC Hall',
      location: '4802 10th Ave, Brooklyn, NY 11219',
      hours: 'N/A',
      appt_type: 'Appointment Only',
      borough: brooklynAwait._id,
    })
    maimonidesMedicalCenter.save()

    const lasanteHealthCenter = await new Clinic ({
      name: 'LaSante Health Center · Rambam Family Health Center',
      location: '1122 Chestnut Ave Ground Floor, 11230',
      hours: '8:00am - 9:00pm',
      appt_type: 'Appointment Only',
      borough: brooklynAwait._id,
    })
    lasanteHealthCenter.save()

// Manhattan Locations
    const eastHarlemActionHealthCenter = await new Clinic ({
      name: 'East Harlem Action Health Center',
      location: '158 E 115th St, New York, NY 10029',
      hours: '8:00am - 8:00pm',
      appt_type: 'Appointment Only',
      borough: manhattanAwait._id,
    })
    eastHarlemActionHealthCenter.save()

    const medriteUrgentCareMidtown = await new Clinic ({
      name: 'MedRite Urgent Care, Midtown West, NYC',
      location: '521 W 42nd St, New York, NY 10013',
      hours: '8:00am - 8:00pm',
      appt_type: 'Appointment Only',
      borough: manhattanAwait._id,
    })
    medriteUrgentCareMidtown.save()

    const medriteUrgentCareSecondAve = await new Clinic ({
      name: 'MedRite Urgent Care 919 2nd Ave',
      location: '919 2nd Ave New York, NY 10017',
      hours: '8:00am - 8:00pm',
      appt_type: 'Appointment Only',
      borough: manhattanAwait._id,
    })
    medriteUrgentCareSecondAve.save()

    const medriteUrgentCareDyckman = await new Clinic ({
      name: 'MedRite Urgent Care Dyckman St',
      location: '177 Dyckman St, New York, NY 10040',
      hours: '8:00am - 8:00pm',
      appt_type: 'Appointment Only',
      borough: manhattanAwait._id,
    })
    medriteUrgentCareDyckman.save()
  
// Queens locations

    const modellsSportingGoods = await new Clinic ({
      name: 'Modells Sporting Goods',
      location: '90-15 Queens Blvd, Queens, NY 11373',
      hours: 'N/A',
      appt_type: 'Appointment Only',
      borough: queensAwait._id,
    })
    modellsSportingGoods.save()

    const medisysFamilyCare = await new Clinic ({
      name: 'MediSys Family Care - Hollis Tudors',
      location: '20016 Hollis Ave, St. Albans, NY 11412',
      hours: 'N/A',
      appt_type: 'Appointment Only',
      borough: queensAwait._id,
    })
    medisysFamilyCare.save()

  // Staten Island
    const superHealthPharmacy = await new Clinic ({
      name: 'Super Health Pharmacy · Empire Outlets',
      location: '6390 Amboy Rd, Staten Island, NY 10309',
      hours: '9:30am - 7:00pm',
      appt_type: 'Appointment Only',
      borough: statenIslandAwait._id,
    })
    superHealthPharmacy.save()

  console.log('Created clinics!')

    const review1 = await new Review ({
      name: 'John Smith',
      date: '07/24/2022',
      wait_time: '0-15',
      rating: '4',
      clinic: BMEC._id,
    })
    review1.save()

    const review2 = await new Review ({
      name: 'Jane Doe',
      date: '07/24/2022',
      wait_time: '0-15',
      rating: '4',
      clinic: medriteUrgentCareMidtown._id,
    })
    review2.save()

    const review3 = await new Review ({
      name: 'YS',
      date: '07/25/2022',
      wait_time: '30-45',
      rating: '2',
      clinic: maimonidesMedicalCenter._id,
    })
    review3.save()

    const review4 = await new Review ({
      name: 'Nalgene',
      date: '07/23/2022',
      wait_time: '45-60',
      rating: '1',
      clinic: modellsSportingGoods._id,
    })
    review4.save()

    const review5 = await new Review ({
      name: 'haha',
      date: '07/23/2022',
      wait_time: '0-15mins',
      rating: '5',
      clinic: superHealthPharmacy._id,
    })
    review5.save()

    console.log('Created reviews!')

  }
const run = async () => {
  await main()
  // db.close()
}

run()
import Route from '@ember/routing/route';

export default class DinosaurusiRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question:
            '1. Koje je doba geološke istorije poznato kao doba dinosaura?',
          answer: 'Mezozoik',
        },
        {
          id: 2,
          question: '2. Koje su tri periode Mezozoika?',
          answer: 'Trijas, Jura i Kreda',
        },
        {
          id: 3,
          question:
            '3. Koliko miliona godina su dinosaurusi dominirali Zemljom?',
          answer: 'Dinosaurusi su dominirali Zemljom oko 165 miliona godina',
        },
        {
          id: 4,
          question: '4. Koji je najpoznatiji dinosaur koji je prvi opisan?',
          answer: 'Prvi opisani dinosaur bio je Megalosaurus',
        },
        {
          id: 5,
          question: '5. Koji dinosaur je bio prvi otkriven u Severnoj Americi?',
          answer: 'Hadrosaurus foulkii',
        },
        {
          id: 6,
          question: '6. Koja je teorija o izumiranju dinosaura najpoznatija?',
          answer: 'Teorija o asteroidu koji je udario Zemlju',
        },
        {
          id: 7,
          question:
            '7. Koje je ime dinosaura koji je imao najveći mozak u odnosu na svoju telesnu masu?',
          answer: 'Trodon',
        },
        {
          id: 8,
          question: '8. Koji je dinosaur imao najduže rogove?',
          answer: 'Triceratops',
        },
        {
          id: 9,
          question: '9. Koja je najstarija poznata vrsta dinosaura?',
          answer: 'Eoraptor',
        },
        {
          id: 10,
          question:
            '10. Koje je doba poznato po dominaciji ptica i cvetnih biljaka?',
          answer: 'Krede',
        },
        {
          id: 11,
          question: '11. Koji je dinosaur bio najveći mesožder?',
          answer: 'Spinosaurus',
        },
      ],
    };
  }
}

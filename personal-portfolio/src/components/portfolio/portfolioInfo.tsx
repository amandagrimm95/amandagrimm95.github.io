type portfolioInfoType = {
    name: string,
    image: string,
    link: string,
    tech: string[],
    features: string[]
}

export const portfolioInfo: portfolioInfoType[] = [{
    name: 'Family Medical Practice Site',
    image: 'images/VillageDoctor.png',
    link: 'http://www.thevillagedoctor.net',
    tech: ['TypeScript', 'JavaScript', 'React', 'HTML5/CSS3', 'Mockplus'],
    features: ['Static site', 'Select cpmponents easily editable by client', 'Rework of existing site, maintaining content and brand identity']
},{
    name: 'Software Dev & Consulting Site',
    image: 'images/GrimbarInt.png',
    link: 'https://www.grimbarinteractive.com',
    tech: ['TypeScript', 'JavaScript', 'React', 'HTML5/CSS3', 'NodeJS', 'MySQL', 'Mockplus'],
    features: ['Dynamic site', 'Email collection', 'Interactive crowd sourced "create your own adventure" game available for events']
},{
    name: 'Nutrition & Fitness Site',
    image: 'images/FitnessLexx.png',
    link: 'https://www.fitnesslexx.com',
    tech: ['Kajabi Website Builder'],
    features: ['Integration with client Kajabi Course Catalog', 'Email collection', 'Active Blog', 'Member sign-in and library']
}]
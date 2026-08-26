const fs = require('fs');

const neighborhoods = [
  // Aldeota e adjacências (maior concentração ~45%)
  { name: "Aldeota", lat: -3.7380, lng: -38.5020, weight: 22 },
  { name: "Meireles", lat: -3.7270, lng: -38.4980, weight: 10 },
  { name: "Varjota", lat: -3.7340, lng: -38.4870, weight: 6 },
  { name: "Dionísio Torres", lat: -3.7480, lng: -38.5080, weight: 6 },
  { name: "Cocó", lat: -3.7500, lng: -38.4830, weight: 6 },
  { name: "Papicu", lat: -3.7420, lng: -38.4750, weight: 5 },
  { name: "Praia de Iracema", lat: -3.7190, lng: -38.5140, weight: 4 },
  
  // Demais regiões de Fortaleza (~41%)
  { name: "Centro", lat: -3.7280, lng: -38.5300, weight: 4 },
  { name: "Benfica", lat: -3.7410, lng: -38.5380, weight: 4 },
  { name: "Bairro de Fátima", lat: -3.7540, lng: -38.5280, weight: 4 },
  { name: "Parquelândia", lat: -3.7380, lng: -38.5580, weight: 4 },
  { name: "Montese", lat: -3.7650, lng: -38.5500, weight: 4 },
  { name: "Edson Queiroz", lat: -3.7680, lng: -38.4780, weight: 4 },
  { name: "Guararapes", lat: -3.7600, lng: -38.4900, weight: 3 },
  { name: "Cidade dos Funcionários", lat: -3.7850, lng: -38.4950, weight: 4 },
  { name: "Cambeba", lat: -3.8050, lng: -38.4900, weight: 3 },
  { name: "Messejana", lat: -3.8300, lng: -38.4950, weight: 4 },
  { name: "Jóquei Clube", lat: -3.7680, lng: -38.5750, weight: 3 },
  { name: "Maraponga", lat: -3.7880, lng: -38.5680, weight: 3 },
  { name: "Presidente Kennedy", lat: -3.7250, lng: -38.5700, weight: 3 }
];

const clinicNames = [
  "Clínica Bicho Feliz", "VetCare 24 horas", "Hospital Veterinário São Francisco", "Dra. Patinhas Clínica",
  "SOS Animal 24h", "Clínica Pet Saúde", "Centro Veterinário Fortaleza", "Vet Prime Especialidades",
  "Clínica Vet & Vida", "Hospital Veterinário Pet Center", "Clínica Veterinária Dr. Cão", "ProntoVet Emergências",
  "Clínica Amigo Fiel", "Vida Pet Medicina Veterinária", "VetClin Especialistas", "Clínica Veterinária Estimação",
  "CuidarVet Consultas e Cirurgias", "Vetsul Hospital", "PetCare Emergência Animal", "Bichos e Caprichos Veterinária",
  "Clínica Amor de Bicho", "Vet House Clínica", "Clínica Veterinária Santa Clara", "Alpha Vet Centro Médico",
  "Clínica Veterinária Leãozinho", "Harmonia Pet Clínica", "TopVet Diagnósticos", "PetLife Veterinária Integrada",
  "Anjos de Quatro Patas Vet", "VitalVet Hospital Veterinário", "Clínica Veterinária Aldeota", "Clínica Veterinária Beira Mar",
  "Meireles Vet Care", "Clínica Pet Papicu", "Centro Médico Veterinário do Cocó"
];

const petshopNames = [
  "Pet Vida", "AuMiau Petshop", "Mundo Animal Fortaleza", "Bicho Mimado Petshop", "Pet Shop do Parque",
  "Cão & Gato Boutique", "Espaço Pet Fortaleza", "Planeta Pet Acessórios", "Pet Mania Rações",
  "Cantinho do Pet", "Pet Show Fortaleza", "Mega Petstore", "Boutique das Patinhas", "Empório Pet & Rações",
  "Tudo Para Seu Pet", "Pet Gourmet & Boutique", "Rei dos Animais Pet Shop", "Estilo Pet Store",
  "Pet Express Conveniência", "Amor aos Bichos Pet Shop", "Pet & Cia Rações", "Pura Vida Pet Store",
  "Império dos Pets", "Central dos Pets Fortaleza", "Pet Delícia Rações Premium", "Pet Charme Boutique",
  "Mimos Pet Shop", "Pet & Dog Acessórios", "Pet Lovers Fortaleza", "Super Pet Rações",
  "Pet Store Aldeota", "Varjota Pet Shop", "Pet Shop Beira Mar", "Dionísio Torres Pet Boutique"
];

const groomingNames = [
  "AuMiau Banho & Tosa", "Groomer Pet Spa", "Alpha Pet Banho e Tosa", "Espaço Glamour Pet",
  "Banho & Cheiroso Estética Canina", "Studio Pet Tosa & Spa", "Tosa & Arte Grooming", "Banho Feliz Estética Animal",
  "Pelo & Patas Spa Animal", "Beleza Animal Banho e Tosa", "Estética Pet Bicho Limpo", "Charme Canino Spa",
  "Top Grooming Fortaleza", "Lava Cão & Gato Express", "Penteado & Cia Banho e Tosa", "Pet Spa Relax",
  "Bicho Chic Banho e Tosa", "Amor & Espuma Pet Wash", "Estilo Livre Pet Groomer", "Spa das Patinhas",
  "Banho de Espuma Pet", "Pet VIP Estética Animal", "Grooming House Fortaleza", "Pet Clean Estética",
  "Bella Pet Spa & Banho", "Tosa Fina Estética Animal", "Banho & Arte Pet Care", "Groomer Pro Fortaleza",
  "Delicadeza Pet Spa", "Banho dos Sonhos Estética Pet", "Aldeota Pet Spa", "Meireles Grooming Studio"
];

const categories = [
  {
    category: "Veterinária",
    names: clinicNames,
    colorClass: "orange",
    icons: ["🐾", "🩺", "✚"],
    imageClass: "image-clinic",
    illustrations: ["🐕", "🐈", "🩺"],
    servicesList: [
      "Veterinária • Consultas • Vacinas",
      "Hospital 24h • Emergências • Cirurgias",
      "Consultas • Dermatologia • Ultrassom",
      "Exames Laboratoriais • Raio-X • UTI",
      "Cardiologia • Odontologia Pet • Vacinas"
    ],
    badges: ["Aberto agora", "Plantão 24h", "Aberto até 20h", "Atendimento com hora marcada"]
  },
  {
    category: "Petshop",
    names: petshopNames,
    colorClass: "purple",
    icons: ["🐶", "🛍️", "🦴"],
    imageClass: "image-petshop",
    illustrations: ["🐕", "🐈", "🦴"],
    servicesList: [
      "Petshop • Rações • Acessórios",
      "Rações Premium • Brinquedos • Medicamentos",
      "Farmácia Veterinária • Petiscos • Camas",
      "Acessórios • Coleiras • Roupas Pet",
      "Alimentos Naturais • Higiene • Arranhadores"
    ],
    badges: ["Aberto até 19h", "Aberto agora", "Aberto até 22h", "Delivery grátis"]
  },
  {
    category: "Banho",
    names: groomingNames,
    colorClass: "yellow",
    icons: ["🛁", "🫧", "✂️"],
    imageClass: "image-grooming",
    illustrations: ["🐕", "🐈", "🛁"],
    servicesList: [
      "Banho • Tosa • Hidratação",
      "Tosa Higiênica • Banho Terapêutico • Ozonioterapia",
      "Grooming Completo • Desembolo • Tosa da Raça",
      "Banho Calmante • Corte de Unhas • Escovação",
      "Spa Pet • Hidratação de Chocolate • Tosa Tesoura"
    ],
    badges: ["Horários hoje", "Aberto agora", "Agendamento online", "Leva & Traz disponível"]
  }
];

// Helper para calcular distância aproximada em linha reta a partir de Aldeota (-3.7380, -38.5020)
function calculateDistance(lat, lng) {
  const dLat = (lat - (-3.7380)) * 111;
  const dLng = (lng - (-38.5020)) * 111 * Math.cos(-3.7380 * (Math.PI / 180));
  const km = Math.sqrt(dLat * dLat + dLng * dLng);
  if (km < 1) {
    const meters = Math.round(km * 1000 / 50) * 50;
    const mins = Math.max(3, Math.round(meters / 80));
    return { distance: `${Math.max(250, meters)} m`, time: `🚶 ${mins} min` };
  } else {
    const roundedKm = km.toFixed(1).replace(".", ",");
    const carMins = Math.max(4, Math.round(km * 2.2));
    return { distance: `${roundedKm} km`, time: `🚗 ${carMins} min` };
  }
}

// Montagem dos 100 estabelecimentos
const places = [];
let idCounter = 1;

// Gerar lista expandida com base nos pesos dos bairros
const weightedNeighborhoods = [];
neighborhoods.forEach(n => {
  for (let i = 0; i < n.weight; i++) {
    weightedNeighborhoods.push(n);
  }
});

for (let i = 0; i < 100; i++) {
  const nh = weightedNeighborhoods[i % weightedNeighborhoods.length];
  const catObj = categories[i % categories.length];
  
  // Pequena dispersão aleatória em torno do centro do bairro (aproximadamente ±300m a ±700m)
  const jitterLat = (Math.sin(i * 997) * 0.0055) + ((i % 5 - 2) * 0.0012);
  const jitterLng = (Math.cos(i * 811) * 0.0055) + ((i % 7 - 3) * 0.0011);
  
  const lat = Number((nh.lat + jitterLat).toFixed(5));
  const lng = Number((nh.lng + jitterLng).toFixed(5));
  
  const nameIndex = Math.floor(i / 3) % catObj.names.length;
  const rawName = catObj.names[nameIndex];
  // Se o nome não contiver o bairro, podemos adicionar ou manter variado
  const name = i < 30 ? rawName : (rawName.includes("Fortaleza") || rawName.includes("Aldeota") ? rawName : `${rawName} ${nh.name}`);
  
  const ratingVal = (4.5 + ((i * 13) % 6) / 10).toFixed(1).replace(".", ",");
  const icon = catObj.icons[i % catObj.icons.length];
  const service = catObj.servicesList[i % catObj.servicesList.length];
  const badge = catObj.badges[i % catObj.badges.length];
  const petIllustration = catObj.illustrations[i % catObj.illustrations.length];
  const { distance, time } = calculateDistance(lat, lng);
  
  places.push({
    id: String(idCounter++),
    name: name,
    category: catObj.category,
    neighborhood: nh.name,
    rating: ratingVal,
    services: service,
    distance: distance,
    time: time,
    badge: badge,
    icon: icon,
    colorClass: catObj.colorClass,
    imageClass: catObj.imageClass,
    petIllustration: petIllustration,
    coords: { lat, lng }
  });
}

// Salva em places.js
const fileContent = `/**
 * vetPerto - Base de Dados de Estabelecimentos (Fortaleza - CE)
 * 100 estabelecimentos distribuídos por Fortaleza com alta densidade em Aldeota e adjacências.
 */
window.PLACES_DATA = ${JSON.stringify(places, null, 2)};
`;

fs.writeFileSync('places.js', fileContent, 'utf-8');
console.log('Successfully generated places.js with 100 places!');

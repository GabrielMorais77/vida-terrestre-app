export type ConservationStatus = 'safe' | 'vulnerable' | 'endangered';

export type Species = {
  id: string;
  type: 'fauna' | 'flora';
  icon: string;
  imageUrl?: string; // Nova propriedade para a foto real
  name: string;
  scientificName: string;
  status: ConservationStatus;
  location: string;
  lastSeen: string;
  riskArea?: boolean;
  latitude?: number;   // NOVO
  longitude?: number;  // NOVO
};

export const speciesList: Species[] = [
  {
    id: '1',
    type: 'fauna',
    icon: '🦅',
    imageUrl: 'https://i.pinimg.com/564x/be/d3/14/bed3147dfcd521efff4a1f7c8bc0f2f7.jpg',
    name: 'Gavião-de-penacho',
    scientificName: 'Spizaetus ornatus',
    status: 'vulnerable',
    location: 'Cerrado - Chapada dos Veadeiros',
    lastSeen: 'Há 3 dias',
    latitude: -14.083,   // Chapada dos Veadeiros
    longitude: -47.467,
  },
  {
    id: '2',
    type: 'fauna',
    icon: '🐺',
    imageUrl: 'https://i.pinimg.com/736x/30/1e/62/301e6241597e272e4b415de846a07ee8.jpg',
    name: 'Lobo-guará',
    scientificName: 'Chrysocyon brachyurus',
    status: 'vulnerable',
    location: 'Cerrado - Emas',
    lastSeen: 'Há 1 semana',
    riskArea: true,
    latitude: -18.167,   // Parque Nacional das Emas
    longitude: -52.75,
  },
  {
    id: '3',
    type: 'fauna',
    icon: '🦜',
    imageUrl:
      'https://images.unsplash.com/photo-1612024782955-49fae79e42bb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJhcmF8ZW58MHx8MHx8fDA%3D',
    name: 'Arara-azul',
    scientificName: 'Anodorhynchus hyacinthinus',
    status: 'endangered',
    location: 'Cerrado - Pantanal',
    lastSeen: 'Há 2 dias',
    riskArea: true,
    latitude: -17.7166,  // Região do Pantanal
    longitude: -57.3835,
  },
  {
    id: '4',
    type: 'fauna',
    icon: '🐆',
    imageUrl: 'https://crmvsp.gov.br/wp-content/uploads/2020/12/28.11.2019_On%C3%A7a-pintada.jpg',
    name: 'Onça-pintada',
    scientificName: 'Panthera onca',
    status: 'endangered',
    location: 'Cerrado - Pantanal',
    lastSeen: 'Há 5 dias',
    riskArea: true,
    latitude: -17.7166,  // Mesma referência do Pantanal
    longitude: -57.3835,
  },
  {
    id: '5',
    type: 'fauna',
    icon: '🦌',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Veado-campeiro_macho_no_Parque_Nacional_da_Serra_da_Canastra_alt.jpg/250px-Veado-campeiro_macho_no_Parque_Nacional_da_Serra_da_Canastra_alt.jpg',
    name: 'Veado-campeiro',
    scientificName: 'Ozotoceros bezoarticus',
    status: 'vulnerable',
    location: 'Cerrado - Emas',
    lastSeen: 'Hoje',
    latitude: -18.167,   // Parque Nacional das Emas
    longitude: -52.75,
  },
  {
    id: '6',
    type: 'flora',
    icon: '🌳',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvZQFwy4dCJA10RaMYiilzgBvFkxB5ok0RQ&s',
    name: 'Ipê-amarelo',
    scientificName: 'Handroanthus albus',
    status: 'safe',
    location: 'Cerrado - Brasília',
    lastSeen: 'Há 2 dias',
    latitude: -15.7934,  // Brasília
    longitude: -47.8823,
  },
  {
    id: '7',
    type: 'flora',
    icon: '🌺',
    imageUrl:
      'https://static.wixstatic.com/media/129e86_6f6e8efe267449719d4d40fcac1818b3~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/129e86_6f6e8efe267449719d4d40fcac1818b3~mv2.jpg',
    name: 'Pequizeiro',
    scientificName: 'Caryocar brasiliense',
    status: 'vulnerable',
    location: 'Cerrado - Goiás',
    lastSeen: 'Há 1 semana',
    riskArea: true,
    latitude: -16.0,     // Aproximado para região central de Goiás
    longitude: -49.0,
  },
  {
    id: '8',
    type: 'fauna',
    icon: '🦎',
    imageUrl:
      'https://images.unsplash.com/photo-1685042854774-97584230f824?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Tatu-canastra',
    scientificName: 'Priodontes maximus',
    status: 'endangered',
    location: 'Cerrado - Tocantins',
    lastSeen: 'Há 4 dias',
    riskArea: true,
    latitude: -10.1675,  // Próximo a Palmas (TO)
    longitude: -48.3277,
  },
];

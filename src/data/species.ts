export type ConservationStatus = 'safe' | 'vulnerable' | 'endangered';

export type Species = {
  id: string;
  type: 'fauna' | 'flora';
  icon: string;
  name: string;
  scientificName: string;
  status: ConservationStatus;
  location: string;
  lastSeen: string;
  riskArea?: boolean;
};

export const speciesList: Species[] = [
  {
    id: '1',
    type: 'fauna',
    icon: '🦋',
    name: 'Borboleta Monarca',
    scientificName: 'Danaus plexippus',
    status: 'vulnerable',
    location: 'Mata Atlântica - Serra do Mar',
    lastSeen: 'Há 2 dias',
  },
  {
    id: '2',
    type: 'flora',
    icon: '🌳',
    name: 'Pau-Brasil',
    scientificName: 'Paubrasilia echinata',
    status: 'endangered',
    location: 'Litoral do Nordeste',
    lastSeen: 'Há 5 dias',
    riskArea: true,
  },
  {
    id: '3',
    type: 'fauna',
    icon: '🦎',
    name: 'Iguana Verde',
    scientificName: 'Iguana iguana',
    status: 'safe',
    location: 'Região Amazônica',
    lastSeen: 'Hoje',
  },
];

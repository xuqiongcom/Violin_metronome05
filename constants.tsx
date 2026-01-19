
import { DroneNote } from './types';

export const VIOLIN_DRONES: DroneNote[] = [
  { label: 'G', frequency: 196.00 }, // G3
  { label: 'D', frequency: 293.66 }, // D4
  { label: 'A', frequency: 440.00 }, // A4
  { label: 'E', frequency: 659.25 }, // E5
];

export const TEMPO_MARKINGS = [
  { name: 'Grave', min: 20, max: 40 },
  { name: 'Largo', min: 40, max: 60 },
  { name: 'Adagio', min: 66, max: 76 },
  { name: 'Andante', min: 76, max: 108 },
  { name: 'Moderato', min: 108, max: 120 },
  { name: 'Allegro', min: 120, max: 156 },
  { name: 'Vivace', min: 156, max: 176 },
  { name: 'Presto', min: 168, max: 200 },
];

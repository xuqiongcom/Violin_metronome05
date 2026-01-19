
export enum TimeSignature {
  TWO_FOUR = '2/4',
  THREE_FOUR = '3/4',
  FOUR_FOUR = '4/4',
  SIX_EIGHT = '6/8',
}

export enum Subdivision {
  QUARTER = 1,
  EIGHTH = 2,
  TRIPLET = 3,
  SIXTEENTH = 4,
}

export interface MetronomeState {
  isPlaying: boolean;
  bpm: number;
  timeSignature: TimeSignature;
  subdivision: Subdivision;
  currentBeat: number;
}

export interface DroneNote {
  label: string;
  frequency: number;
}



export enum STEPS {
  UPLOAD= "UPLOAD",
  STRUCTURE= "STRUCTURE",
  PREVIEW= "PREVIEW",
}

export const NEXT_STEP: Record<STEPS,STEPS | null> = {
  [STEPS.UPLOAD]: STEPS.STRUCTURE,
  [STEPS.STRUCTURE]: STEPS.PREVIEW,
  [STEPS.PREVIEW]: null,
}

export const PREVIOUS_STEP: Record<STEPS,STEPS | null> = {
  [STEPS.UPLOAD]: null,
  [STEPS.STRUCTURE]: STEPS.UPLOAD,
  [STEPS.PREVIEW]: STEPS.STRUCTURE,
}

export const EXPECTED_SCHEMA = [
  {
    name: 'Name'
  },
  {
    name: 'Surname'
  },
  {
    name: 'Email'
  },
  {
    name: 'Password'
  },
  {
    name: 'Gender'
  },
  {
    name: 'Age'
  },
];

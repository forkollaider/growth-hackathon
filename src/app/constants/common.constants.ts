

export enum STEPS {
  UPLOAD="UPLOAD",
  STRUCTURE="STRUCTURE",
  PREVIEW="PREVIEW",
}

export enum TITLE {
  UPLOAD="Import Data",
  STRUCTURE="STRUCTURE",
  PREVIEW="PREVIEW",
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
    name: 'Name',
    field: 'name',
  },
  {
    name: 'Surname',
    field: 'surname'
  },
  {
    name: 'Email',
    field: 'email',
  },
  {
    name: 'Password',
    field: 'password'
  },
  {
    name: 'Gender',
    field: 'gender',
  },
  {
    name: 'Age',
    field: 'age',
  },
];

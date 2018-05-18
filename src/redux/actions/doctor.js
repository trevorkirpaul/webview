import CASES from '../cases';

const { DOCTOR } = CASES;

export const selectDoctor = id => ({
  type: DOCTOR.SELECT,
  id,
});

export const clearDoctor = () => ({
  type: DOCTOR.CLEAR,
});

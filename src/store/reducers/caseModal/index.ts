const OPEN_CASE_MODAL = "caseModal/OPEN";
const CLOSE_CASE_MODAL = "caseModal/CLOSE";

export const openCaseModal = () => ({ type: OPEN_CASE_MODAL });
export const closeCaseModal = () => ({ type: CLOSE_CASE_MODAL });

const initialState = {
  open: false,
};

export default function caseModal(state = initialState, action: any) {
  switch (action.type) {
    case OPEN_CASE_MODAL:
      return { ...state, open: true };
    case CLOSE_CASE_MODAL:
      return { ...state, open: false };
    default:
      return state;
  }
}
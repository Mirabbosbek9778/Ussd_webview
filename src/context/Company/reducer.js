export const state = {
  data: {},
  company: 'uzmobile',
  companyIndex: 0,
  tarifDetail: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setCompany':
      return { ...state, company: action.payload };
    case 'setCompanyIndex':
      return { ...state, companyIndex: action.payload };
    case 'setTarifDetail':
      return { ...state, tarifDetail: action.payload };
    default:
      state;
  }
};

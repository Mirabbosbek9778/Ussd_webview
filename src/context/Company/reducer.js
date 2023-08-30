export const state = {
  data: {},
  company: 'uzmobile',
  companyIndex: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setCompany':
      return { ...state, company: action.payload };
    case 'setCompanyIndex':
      return { ...state, companyIndex: action.payload };
    default:
      state;
  }
};

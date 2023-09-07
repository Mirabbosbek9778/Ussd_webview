// request ussd code for mobile
const callUssd = (code) => {
  console.log(code);
  window?.Android?.callUssd(code);
  window?.webkit?.messageHandlers?.callUssd.postMessage(code);
};

// get company color
const getColorCompany = (company) => {
  switch (company) {
    case 'uzmobile':
      return '#0073ff';
    case 'beeline':
      return '#FEBE00';
    case 'ucell':
      return '#652D86';
    case 'mobiuz':
      return '#E30613';
    default:
      return '#0073ff';
  }
};

export { callUssd, getColorCompany };

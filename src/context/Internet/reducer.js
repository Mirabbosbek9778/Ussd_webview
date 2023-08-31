export const state = {
  packets: {},
  packetsDetail: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setPackets':
      console.log(action.payload);
      return { ...state, packets: action.payload };
    case 'setPacketDetail':
      console.log(action.payload);
      return { ...state, packetsDetail: action.payload };
    default:
      state;
  }
};

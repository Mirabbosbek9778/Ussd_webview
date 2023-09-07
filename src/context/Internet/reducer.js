export const state = {
  packets: {},
  packetsDetail: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setPackets':
      return { ...state, packets: action.payload };
    case 'setPacketDetail':
      return { ...state, packetsDetail: action.payload };
    default:
      state;
  }
};

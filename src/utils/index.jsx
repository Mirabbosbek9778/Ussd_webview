const callUssd = (code) => {
  console.log(code);
  window?.Android?.callUssd(code);
  window?.webkit?.messageHandlers?.callUssd.postMessage(code);
};

export { callUssd };

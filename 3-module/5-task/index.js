function getMinMax(str) {
  let segments = str.match(/(-|\+)?[\d]+(\.[\d]+)?/ig) || [];

  segments = segments.map(seg => parseFloat(seg));

  return {
    min: Math.min(...segments),
    max: Math.max(...segments),
  };
}

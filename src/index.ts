const almostPi = async (resolution: number = 10000): Promise<number> => {
  const radius = 1;
  let counter = 0;
  Array.from({ length: resolution }).forEach(() => {
    if (
      distance(0, 0, Math.random() * 2 * radius - radius, Math.random() * 2 * radius - radius) < 1
    ) {
      counter++;
    }
  });
  return (counter * 4) / resolution;
};

const distance = (p1x: number, p1y: number, p2x: number, p2y: number): number => {
  return Math.sqrt(Math.abs(Math.pow(p1x - p2x, 2) + Math.pow(p1y - p2y, 2)));
};

export default almostPi;

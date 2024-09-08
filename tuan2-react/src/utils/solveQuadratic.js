const solveQuadratic = (a, b, c) => {
    const A = parseFloat(a);
    const B = parseFloat(b);
    const C = parseFloat(c);
    const delta = B * B - 4 * A * C;
    if (delta < 0) {
      return 'Phương trình vô nghiệm';
    } else if (delta === 0) {
      const x = -B / (2 * A);
      return `Phương trình có nghiệm kép: x = ${x}`;
    } else {
      const x1 = (-B + Math.sqrt(delta)) / (2 * A);
      const x2 = (-B - Math.sqrt(delta)) / (2 * A);
      return `Phương trình có hai nghiệm: x1 = ${x1}, x2 = ${x2}`;
    }
  };
  
  export default solveQuadratic;
  
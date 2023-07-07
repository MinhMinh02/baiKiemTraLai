function alternatingSums(a) {
  let sumTeam1 = 0;
  let sumTeam2 = 0;

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      sumTeam1 += a[i];
    } else {
      sumTeam2 += a[i];
    }
  }

  return [sumTeam1, sumTeam2];
}

const weights = [60, 40, 55, 75, 64];
const teamWeights = alternatingSums(weights);
console.log(teamWeights); // Output: [179, 115]



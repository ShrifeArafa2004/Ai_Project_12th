[old_weight, points_arr, arrts] = [[], [], []];
let [n, t, point, arr] = [0.2, 0, 0, 0];
let number_of_points = window.prompt('Enter number of Points :');
let number_of_feauters = window.prompt('Enter number of Feautures :');
let number_of_iterations = window.prompt('Enter number of Iterations :');
for (let h = 0; h < number_of_feauters; h++) {
  arr = Math.random();
  old_weight.push(arr.toFixed(1));
}
for (let j = 0; j < number_of_points; j++) {
  point = window.prompt(`Enter point ${j + 1} :`);
  points_arr.push(point.split(' '));
  t = window.prompt(`Enter t${j + 1} :`);
  arrts.push(t);
}
for (let j = 0; j < number_of_iterations; j++) {
  for (let j = 0; j < points_arr.length; j++) {
    Get_Sum_Of_Each_Point(old_weight, points_arr[j], arrts[j]);
  }
}
function Get_Sum_Of_Each_Point(weight, point, t) {
  [result, new_wegiht_arr] = [0, []];

  for (let i = 0; i < weight.length; i++) {
    result += weight[i] * point[i];
  }
  result <= 0 ? (result = 0) : (result = 1);

  if (result != t) {
    for (let x = 0; x < weight.length; x++) {
      new_wegiht_arr.push(weight[x] + n * [t - result] * point[x]);
    }
    old_weight = new_wegiht_arr;
  } else {
    old_weight = weight;
  }
  console.log(old_weight);

}

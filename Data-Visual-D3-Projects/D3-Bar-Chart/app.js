// d3.json(
//   'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json'
// );
// Dummy Data
const dummy = [
  ['1947-01-01', 243.1],
  ['1947-04-01', 246.3],
  ['1947-07-01', 250.1],
  ['1947-10-01', 260.3],
  ['1948-01-01', 266.2],
  ['1948-04-01', 272.9],
  ['1948-07-01', 279.5],
  ['1948-10-01', 280.7],
  ['1949-01-01', 275.4],
  ['1949-04-01', 271.7],
  ['1949-07-01', 273.3],
];

const w = 500;
const h = 500;

const svg = d3.select('body').append('svg').attr('width', w).attr('height', h);

svg
  .selectAll('rect')
  .data(dummy)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * 30)
  .attr('y', (d, i) => h - 3 * d)
  .attr('width', 20)
  .attr('height', (d) => d[1] + 'px')
  .attr('fill', 'navy')
  .attr('class', 'bar');

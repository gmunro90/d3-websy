const dataset = [
  {
    id: 'd1',
    value: 8,
    region: 'USA'
  },
  {
    id: 'd2',
    value: 19,
    region: 'Germany'
  },
  {
    id: 'd3',
    value: 12,
    region: 'Spain'
  },
]

const container = d3.select('svg')
  .classed('container', true)

  container.selectAll('bar')
    .data(dataset)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', 50)
    .attr('height', data => (data.value * 10))


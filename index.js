const dataset = [
  {
    id: 'd1',
    value: 10,
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

const container = d3.select('div')
  .classed('container', true)
  .style('border', '1px solid black')

  container.selectAll('bar')
    .data(dataset)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('width', '50px')
    .style('height', data => (data.value * 10) + 'px')

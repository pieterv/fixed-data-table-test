Object.assign = Object.assign || require('object.assign');

var FixedDataTable = require('fixed-data-table');
var React = require('react');

require('fixed-data-table/dist/fixed-data-table.css');

var Table = FixedDataTable.Table;
var Column = FixedDataTable.Column;
var rows = [[1,2], [2,2], [2,2], [2,2], [2,2]];

function rowGetter(rowIndex) {
  return rows[rowIndex];
}

var FancyTable = React.createClass({
  render: function() {
    return (
      <Table rowHeight={40} rowGetter={rowGetter} rowsCount={rows.length} width={200} height={610} headerHeight={40}>
        <Column label="lol" width={200} dataKey={0} />
      </Table>
    );
  }
});

React.render(
  <FancyTable />,
  document.getElementById('example')
);

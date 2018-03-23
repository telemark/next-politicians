export default ({ columns, children }) => (
  <table>
    <thead>
      <tr>
        { columns && Array.isArray(columns) ? columns.map(column => <th key={column}>{column}</th>) : <th>{columns}</th> }
      </tr>
    </thead>
    <tbody>
      { children }
    </tbody>
    <style jsx>
      {`
        table {
          text-align: left;
        }
      `}
    </style>
  </table>
)

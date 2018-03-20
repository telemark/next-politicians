import axios from 'axios'
import Page from '../components/Page'
import { POLITICIANS_API } from '../config'
import { Box } from '../components/styles'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

const Table = ({ title, children }) => (
  <table>
    <thead>
      <tr>
        <th>
          { title }
        </th>
      </tr>
    </thead>
    <tbody>
      { children }
    </tbody>
    <style jsx global>
      {`
        table {
          text-align: left;
        }
      `}
    </style>
  </table>
)

const Index = ({ committees, parties }) => (
  <Page>
    <div>
      <Box>
        <h1>Politiske utvalg</h1>
        <Table title='Utvalg'>
          {
            committees.map(({ name, id }) => (
              <tr key={id}>
                <td><a href={`/committees/${id}`}>{name}</a></td>
              </tr>
            ))
          }
        </Table>
      </Box>
      <Box>
        <h1>Politiske partier</h1>
        <Table title='Parti'>
          {
            parties.map(({ name, id }) => (
              <tr key={id}>
                <td><a href={`/parties/${id}`}>{name}</a></td>
              </tr>
            ))
          }
        </Table>
      </Box>
    </div>
  </Page>
)

Index.getInitialProps = async () => {
  const { data: committeesData } = await axios(POLITICIANS_API + '/committees')
  const committees = committeesData.map(({ name, _id: id }) => ({ name, id })).sort((a, b) =>  a.name < b.name ? -1 : 1)

  const { data: partiesData } = await axios(POLITICIANS_API + '/parties')
  const parties = partiesData.map(({ name, _id: id }) => ({ name, id })).sort((a, b) =>  a.name < b.name ? -1 : 1)

  return { committees, parties }
}

export default Index

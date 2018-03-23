import { Link } from '../routes'
import Page from '../components/Page'
import { Box, Table } from '../components/styles'
import { getParties, getCommittees } from '../lib/get-data'

const Index = ({ committees, parties }) => (
  <Page>
    <div>
      <Box>
        <h1>Politiske utvalg</h1>
        <Table columns={['Utvalg']}>
          {
            committees.map(({ name, _id: id }) => (
              <tr key={id}>
                <td><Link route='committees' params={{ id }}><a>{name}</a></Link></td>
              </tr>
            ))
          }
        </Table>
      </Box>
      <Box>
        <h1>Politiske partier</h1>
        <Table columns='Parti'>
          {
            parties.map(({ name, _id: id }) => (
              <tr key={id}>
                <td><Link route='parties' params={{ id: id }}><a>{name}</a></Link></td>
              </tr>
            ))
          }
        </Table>
      </Box>
    </div>
  </Page>
)

Index.getInitialProps = async () => {
  const committees = await getCommittees()
  const parties = await getParties()
  return { committees, parties }
}

export default Index

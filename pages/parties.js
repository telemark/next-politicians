import { Link } from '../routes'
import Page from '../components/Page'
import { Box, Table } from '../components/styles'
import { getParties, getParty, getPartyMembers } from '../lib/get-data'

const Committees = ({ parties, members }) => (
  <Page>
    {parties &&
      <Box>
        {parties.map(item =>
          <div key={item._id}>
            <Link route='committees' params={{ id: item._id }}>
              <a>{item.name}</a>
            </Link>
          </div>
        )}
      </Box>
    }
    {members &&
      <Box>
        <h1>Utvalgsmedlemmer</h1>
        <Table columns={['Navn', 'Rolle', 'E-post', 'Mobil', 'Telefon']}>
          {members.map(item =>
            <tr key={item.recno}>
              <td>
                <Link route='politicians' params={{ id: item.recno }}>
                  <a>{item.name}</a>
                </Link>
              </td>
              <td>{item.roleDescription}</td>
              <td>{item.publicMail}</td>
              <td>{item.mobilePhone}</td>
              <td>{item.phone}</td>
            </tr>
          )}
        </Table>
      </Box>
    }
  </Page>
)

Committees.getInitialProps = async ({ query }) => {
  const parties = query && query.id ? await getParty(query.id) : await getParties()
  const members = query && query.id && await getPartyMembers(query.id)
  return { parties, members }
}

export default Committees

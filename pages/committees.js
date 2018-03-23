import { Link } from '../routes'
import Page from '../components/Page'
import { Box, Table } from '../components/styles'
import { getCommittees, getCommittee, getCommitteeMembers } from '../lib/get-data'

const Committees = ({ committees, members }) => (
  <Page>
    {committees &&
      <Box>
        {committees.map(item =>
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
        <Table columns={['Navn', 'Rolle', 'Parti', 'E-post', 'Mobil', 'Telefon']}>
          {members.map(item =>
            <tr key={item.recno}>
              <td>
                <Link route='politicians' params={{ id: item.recno }}>
                  <a>{item.name}</a>
                </Link>
              </td>
              <td>{item.roleDescription}</td>
              <td>{item.party}</td>
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
  const committees = query && query.id ? await getCommittee(query.id) : await getCommittees()
  const members = query && query.id && await getCommitteeMembers(query.id)
  return { committees, members }
}

export default Committees

import axios from 'axios'
import { POLITICIANS_API } from '../config'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

export async function getParties () {
  const { data } = await axios(POLITICIANS_API + '/parties')
  const parties = data.sort((a, b) => a.name < b.name ? -1 : 1)
  return parties
}

export async function getParty (id) {
  const { data } = await axios(POLITICIANS_API + '/parties/' + id)
  return data
}

export async function getPartyMembers (id) {
  const { data } = await axios(POLITICIANS_API + '/parties/' + id + '/members')
  return data
}

export async function getCommittees () {
  const { data } = await axios(POLITICIANS_API + '/committees')
  const committees = data.sort((a, b) => a.name < b.name ? -1 : 1)
  return committees
}

export async function getCommittee (id) {
  const { data } = await axios(POLITICIANS_API + '/committees/' + id)
  return data
}

export async function getCommitteeMembers (id) {
  const { data } = await axios(POLITICIANS_API + '/committees/' + id + '/members')
  return data.map(item => {
    const { roleDescription } = item.committees.find(committee => committee.groupRecno === parseInt(id)) || {}
    const { name: party } = item.committees.find(party => party.role === 'Parti') || {}
    return Object.assign(item, { roleDescription, party })
  })
}

export async function getPoliticians () {
  const { data } = await axios(POLITICIANS_API + '/politicians')
  return data
}

export async function searchPoliticians (phrase) {
  const { data } = await axios(POLITICIANS_API + '/politicians/search/' + phrase)
  return data
}

export async function getPolitician (id) {
  const { data } = await axios(POLITICIANS_API + '/politicians/' + id)
  return data
}

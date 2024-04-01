import axios from 'axios'

export const searchShows = async ({ query }) => {
  const { data } = await axios.get('/search/shows', { params: { q: query } })
  return data
}

export const searchPeople = async ({ query }) => {
  const { data } = await axios.get('/search/people', { params: { q: query } })
  return data
}

export const getShowById = async ({ showId, embed = [] }) => {
  const { data } = await axios.get(`/shows/${showId}`, {
    params: {
      ...(embed.length ? { embed: embed } : null)
    }
  })
  return data
}

export const getAllShows = async ({ page } = { page: 1 }) => {
  const { data } = await axios.get(`/shows`, { params: { page } })
  return data
}

export const getEpisodeById = async ({ episodeId }) => {
  const { data } = await axios.get(`/episodes/${episodeId}`)
  return data
}

export const getPersonById = async ({ personId }) => {
  const { data } = await axios.get(`/people/${personId}`)
  return data
}

export const getPersonShows = async ({ personId }) => {
  const { data } = await axios.get(`/people/${personId}/castcredits`, { params: { embed: 'show' } })
  return data
}

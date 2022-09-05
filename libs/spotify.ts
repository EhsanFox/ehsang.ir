import axios from 'axios'
import { SPOTIFY_TOKEN_API, SPOTIFY_NOW_PLAYING_API, SPOTIFY_TOP_TRACKS_API } from '~/constant'

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

async function getAccessToken() {
  const response = await axios.post(SPOTIFY_TOKEN_API, (!refresh_token) ? new URLSearchParams({
    grant_type: 'client_credentials',
  }) : new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token,
  }), {
    headers: {
      'Authorization': `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })

  const result = response.data
  console.log(result)
  return result
}

export async function getNowPlaying() {
  const { access_token } = await getAccessToken()

  const response = await axios.get(SPOTIFY_NOW_PLAYING_API, {
    headers: {
      "Content-Type": 'application/json',
      'Authorization': `Bearer ${access_token}`,
    }
  })

  return response.data;
}

export async function getTopTracks() {
  const { access_token } = await getAccessToken()

  const response = await axios.get(SPOTIFY_TOP_TRACKS_API, {
    headers: {
      'Authorization': `Bearer ${access_token}`,
    }
  })

  return response.data;
}

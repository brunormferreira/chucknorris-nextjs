import React from 'react'
import getHost from '../utils/host'
import axios from 'axios'

const Hello = ({ name }) => (
  <div>
    <p>Hello page</p>
    <p>Data from /api/ folder: {name}</p>
  </div>
)

Hello.getInitialProps = async (ctx) => {
  const apiUrl = `${getHost(ctx.req)}/api/hello`

  const res = await axios.get(apiUrl)

  return {
    name: res.data.name,
  }

}


export default Hello
import Layout from './Layout'
import Navbar from './navbar'

export default ({ children }) => (
  <Layout>
    <Navbar />
    <div className='main'>
      { children }
    </div>
    <style jsx>
      {`
        .main {
          grid-area: content;
          padding-bottom: 50px;
          margin: auto;
          width: 100%;
          height: 100%;
        }
      `}
    </style>
  </Layout>
)

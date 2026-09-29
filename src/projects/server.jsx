import Container from 'react-bootstrap/Container';
import webservedemo from '../assets/Webserver-demo.mp4'
import { BackButton } from '../components/BackButton.jsx'

function Server() {

  return ( 
      <Container className='text-light mt-5'> 
          <BackButton />
          <h1>Multi-Threaded HTTP Server in C</h1>

                          <video
                    src={webservedemo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-100 rounded-3 mt-3 mb-4"
                />

          <div className='mb-5'>
          <p1>
            I implemented a standard HTTP server in C with multi threaded execution focusing on performance and simplicity.
            <br></br>
            <br></br>
            Features:
            <ul>
              <li>
                <b>Protocol Support:</b> Implemented parsing and handling for a subset of HTTP/1.1,
                including <code>GET</code> and <code>PUT</code> methods.
              </li>
              <li>
                <b>File Operations:</b> Supported serving files from the local directory and creating/updating
                files via PUT requests, with strict validation of URIs and headers.
              </li>
              <li>
                <b>Error Handling:</b> Invalid responses are sent a corresponding error code: <code>200</code>, <code>201</code>, <code>400</code>, <code>403</code>, <code>404</code>,
                <code>500</code>, <code>501</code>, <code>505</code>
              </li>
              <li>
                <b>Threading:</b> Extend the server to handle more requests simultaneously using a
                  customizable thread pool.
              </li>
              <li>
                <b>Logging:</b> Added a logging support that records all
                 client requests.
              </li>
            </ul>
            Implementation Details:
            <ul>
              <li>Developed in C with direct use of system calls (<code>socket()</code>, <code>bind()</code>,
              <code> accept()</code>, <code>read()</code>, <code>write()</code>, <code>close()</code>).</li>
              <li>Validated functionality with <code>curl</code> and <code>netcat</code> test scripts,
              ensuring compliance with provided specifications.</li>
            </ul>
          </p1>
          </div>
      </Container>
  )
}

export default Server
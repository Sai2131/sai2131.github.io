import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Gameplay from '../assets/emulatorgameplay.gif'
import { BackButton } from '../components/BackButton.jsx'

function Emulator() {

  return ( 
      <Container className='text-light mt-5'>
        <BackButton />
        <Row>
          <Col>
            <h1>BananaSlug Emulator</h1>
            <p1>
              I implemented a virtual console emulator in <b>C++</b> that simulates a custom hardware stack and executes the game logic in a 60 FPS loop. 
              <br></br>
              <br></br>
              The gameplay on the right is one of the flappy bird ROM files.
              <br></br>
              <br></br>
              System layout:
              <ul>
                <li>
                  <b>CPU:</b> Implemented a RISC style CPU supporting arithmetic, branching,
                  load/store, and I/R type instructions with proper program counter and stack handling.
                </li>
                <li>
                  <b>Memory Model:</b> Includes memory mapped I/O, ROM loading, data sections, and
                  memory safety checks for readable and writeable addresses.
                </li>
                <li>
                  <b>GPU Rendering:</b> Used <code>SDL</code> to render a 64x64 pixel display at 60 FPS with proper
                  texture and frame buffer management.
                </li>
                <li>
                  <b>Controller Input:</b> Keyboard mapped to controller buttons; integrated into the
                  event loop with real time input handling.
                </li>
                <li>
                  <b>ROM Validation and Loading:</b> SLUG files are checked for correct headers, and
                  program/data sections are loaded into memory for execution.
                </li>
                <li>
                  <b>Game Loop:</b> Main loop handles CPU execution, GPU rendering, and input events,
                  maintaining a consistent 60 FPS frame rate.
                </li>
                <li>
                  <b>CI/CD and Build:</b> Built with <code>CMake</code> and continuously integrated via <code>GitHub Actions </code>
                  for automated compilation and testing.
                </li>
              </ul>
            </p1>
          </Col>

          <Col>
              <img src={Gameplay} alt="Gameplay GIF" className='w-100 rounded-3'/> 
          </Col>
          </Row>      </Container>
  )
}

export default Emulator
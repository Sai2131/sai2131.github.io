import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import RegexDiag from '../assets/RegexDiag.1.jpeg'
import GithubIcon from '../assets/githubicon.svg'
import { BackButton } from '../components/BackButton.jsx'

function Regexengine() {

  return ( 
      <Container className='text-light mt-5'>
        <BackButton />
        <Row>
          <Col>
            <h1>cRegex</h1>
            <p1>
              <b>cRegex</b> is a regular expression library written for C designed to be easy to use.
              <br></br>
              <br></br>
              Features:
              <ul>
                <li><b>Full string matching</b> and <b>start-of-string matching</b></li>
                <li><b>Regex operations:</b> Concatenation, Union, Kleene Star</li>
                <li><b>Grouping and ranges</b> (e.g., <code>[A-Za-z]</code>)</li>
                <li><b>Wildcard</b> support (<code>.</code>)</li>
              </ul>
              How it Works:
              <ul>
                <li>Regex is first tokenized using a custom scanner.</li>
                <li>Tokens are parsed into an AST with a recursive descent parser.</li>
                <li>The AST is compiled into an NFA.</li>
                <li>The NFA is executed against input strings to determine acceptance.</li>
              </ul>
              The project was created as a lightweight alternative to POSIX regex, focusing on simplicity,
              and educational value.
            </p1>
          </Col>
          <Col>
              <img src={RegexDiag} alt="Regex Diagram" className='w-100 rounded-3'/> 
          </Col>
          </Row>
        <div className='m-3'>
          <h3>
            <img src={GithubIcon} alt="icon" className="me-2" style={{ width: '30px' }} /> 
            <a href={"https://github.com/Sai2131/cRegex"}>Source code</a>
          </h3>
        </div>

      </Container>
  )
}

export default Regexengine
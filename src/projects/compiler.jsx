import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CompilerDiagram from '../assets/CompilerDiagram.jpeg'
import Container from 'react-bootstrap/Container';
import GithubIcon from '../assets/githubicon.svg'
import { BackButton } from '../components/BackButton.jsx'

function CompilerProject() {

  return ( 
      <Container className='text-light mt-5'>
        <BackButton />
        <Row>
            <Col>
                <h1>IR Code Generator / Compiler</h1>
                <p1>
                  I made a simple compiler in Python for a custom C like programming language, targeting a three address LLVM style intermediate representation.
                  <br></br>
                  <br></br>
                  Compiler Stages:
                  <ul>
                    <li>Lexical Analysis: Made a custom lexer using regular expressions, converting the source code into tokens <code>(e.g., INT, FLOAT, SEMICOLON, ID)</code>.</li>
                    <li>Grammar Design: Wrote a context free grammar, then refactored it into LL1 compatible form by removing left recursion and enforcing associativity/precedence rules.</li>
                    <li>Parsing and AST Construction: Handwrote a recursive descent parser based on the grammar. While parsing it constructs an Abstract Syntax Tree (AST) and populates a symbol table to manage variables and types, and scope.</li>
                    <li>Semantic Analysis: Did type checking and type inference on the AST with the help of the symbol table. Any type errors were thrown here.</li>
                    <li>IR Generation: Translated the AST into three address code similar to LLVM's IR</li>
                    <li>IR Optimization: Implemented basic compiler optimizations:
                      <ul>
                        <li>Loop unrolling with a customizable unrolling factor</li>
                        <li>Local value numbering on basic blocks</li>
                      </ul>
                    </li>
                  </ul>

                  Finally to test compiler, I built an interpreter to execute the IR and benchmarked optimizations on computation and branch heavy programs.

                  <br></br>
                  <br></br>

                  This is a school project but I am currently developing a more complex compiler in C++ for a more feature rich language, targeting real x86 or ARM assembly, the repo for which is below.
                </p1>
            </Col>
            <Col>
                <img src={CompilerDiagram} alt="Compiler Diagram" className='w-100 rounded-3'/> 
            </Col>
        </Row>

            <div className='m-3'>
              <h3>
                <img src={GithubIcon} alt="icon" className="me-2" style={{ width: '30px' }} /> 
                <a href={"https://github.com/Sai2131/MiniC-Compiler"}>Source Code for newer version</a>
              </h3>
            </div>
        
      </Container>

      
  )
}

export default CompilerProject
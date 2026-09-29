import { Footer } from './components/footer.jsx'
import { Header } from './components/header.jsx'
import { AboutMe } from './components/AboutMe.jsx'
import { Education } from './components/Education.jsx'
import { Experience } from './components/Experience.jsx'
import { ProjectCard } from './components/projectcard.jsx'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function Homepage() {

    return (
        <div className="py-5">
            <Header />

            <Container className="mt-5">
                <AboutMe />
                <Row className="g-4 mt-2">
                    <Col lg={6} className="d-flex">
                        <div className="equal-height w-100"><Education /></div>
                    </Col>
                    <Col lg={6} className="d-flex">
                        <div className="equal-height w-100"><Experience /></div>
                    </Col>
                </Row>

                <div className='mt-5 p-4 border-0 rounded blur'>
                    <h2 className='text-center mb-5 text-uppercase tracking-wider' style={{ letterSpacing: '2px' }}>Featured Projects</h2>
                    
                    <Row className='g-4'>
                        <Col md={6} lg={4} className="d-flex justify-content-center">
                            <ProjectCard Title={"Chaptre"} Desc={"A platform to share stories in incremental chapters for people to read and give feedback."} Page={"/chaptre"} />
                        </Col>
                        
                        <Col md={6} lg={4} className="d-flex justify-content-center">
                            <ProjectCard Title={"cRegex"} Desc={"Regular expression library written in C, for C designed to be easy to use."} Page={"/regexengine"} />
                        </Col>

                        <Col md={6} lg={4} className="d-flex justify-content-center">
                            <ProjectCard Title={"IR Code Generator"} Desc={"A compiler that translates a subset of C into intermediate representation (IR) similar to assembly."} Page={"/compiler"} />
                        </Col>

                        <Col md={6} lg={4} className="d-flex justify-content-center">
                            <ProjectCard Title={"Distributed Key-Value Store"} Desc={"High availability storage system distributed across multiple nodes for fault tolerance and throughput."} Page={"/kvs"} />
                        </Col>

                        <Col md={6} lg={4} className="d-flex justify-content-center">
                            <ProjectCard Title={"HTTP Webserver"} Desc={"Multithreaded HTTP 1.1 server implemented with POSIX threads and Unix sockets for high concurrency."} Page={"/httpserver"} />
                        </Col>

                        <Col md={6} lg={4} className="d-flex justify-content-center">
                            <ProjectCard Title={"BananaSlug Emulator"} Desc={"A virtual emulator for a virtual game console, featuring custom instruction set support."} Page={"/emulator"}/>
                        </Col>
                    </Row>
                </div>
            </Container>

            <Footer />
        </div>
    )
}

export default Homepage

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import kvsdiag from '../assets/kvsdiag.jpg'
import { BackButton } from '../components/BackButton.jsx'

function KVSProject() {

  return ( 
      <Container className='text-light mt-5'>
        <BackButton />
        <Row>
            <Col>
                <Col>
                <h1>Distributed Key Value Store</h1>
                <p1>
                  I implemented a fault tolerant distributed key value store that features
                  <b> availability, causal consistency, and eventual consistency</b>. 
                  
                  <br></br>
                  <br></br>

                  This allows the system to 
                  remain usable during node failures and network partitions while preserving
                  natural cause and effect relationships between operations.
                  <br></br>
                  <br></br>
                  Features:
                  <ul>
                    <li>
                      <b>Availability:</b> As long as one replica is reachable, all client operations succeed,
                      if they do not violate causal consistency.
                    </li>
                    <li>
                      <b>Causal Consistency:</b>
                      Clients always observe effects alongside their causes and never the reverse.
                    </li>
                    <li>
                      <b>Eventual Consistency:</b> After a network partitions heals, nodes exchange state using gossip
                      mechanisms until all of them converge on the same values.
                    </li>
                    <li>
                      <b>View Management:</b> Nodes maintain a dynamic view of the cluster. Updating the view allows for Nodes
                      to be added or removed.
                    </li>
                    <li>
                      <b>Horizontal Scaling:</b> Extended the KVS with sharding. Each shard is responsible
                      for a subset of keys, and nodes proxy requests to the correct shard when needed. If shard assignments change
                      consistent hashing is used to minimizing data movement.
                    </li>
                    <li>
                      <b>REST API Interface:</b> <code>/ping</code>, <code>/data/&lt;key&gt;</code>,
                      <code>/data</code>, and <code>/view</code>
                    </li>
                  </ul>

                  The system was tested using Docker with simulated nodes and network partitions
                  (via iptables and custom Docker networks) to verify correctness during faults.
                  <br></br>
                  <br></br>
                </p1>
              </Col>
            </Col>
            <Col>
                <img src={kvsdiag} alt="KVS Diagram" className='w-100 rounded-3'/> 
            </Col>
        </Row>
      </Container>
  )
}

export default KVSProject
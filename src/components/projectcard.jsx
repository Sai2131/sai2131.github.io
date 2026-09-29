import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export function ProjectCard({Title, Desc, Page}) {

  const navigate = useNavigate();

  return (
    <Card
      style={{ width: '20rem', minHeight: '12rem', cursor: 'pointer' }}
      className="blur bg-transparent text-light project-card p-2 border-0"
      onClick={() => navigate(Page)}
    >
      <Card.Body className="d-flex flex-column justify-content-center">
        <Card.Title className="fs-4 mb-3">{Title}</Card.Title>
        <Card.Text className="flex-grow-1 opacity-75">
          {Desc}
        </Card.Text>
        <div className="mt-3 text-info small fst-italic">
          Learn more →
        </div>
      </Card.Body>
    </Card>
  );
}

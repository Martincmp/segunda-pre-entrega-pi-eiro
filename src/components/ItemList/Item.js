import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.pictureUrl} />
      <Card.Body className='cardColor'>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          $ {product.price}
        </Card.Text>
        <Card.Text>
          {product.description}
        </Card.Text>
          <Link to={`/item/${product.id}`}>
            <Button variant="secondary" className='colorDetalle'>
              Ver detalle
            </Button>
          </Link>
      </Card.Body>
    </Card>
  );
}
 
export default Item;
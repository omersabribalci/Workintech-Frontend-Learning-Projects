import styled from "styled-components";
import Button from "./Button";

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    transform: translateY(-6px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: contain;
  background: #f0f0f0;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  flex: 1;
`;

const Title = styled.h3`
   color: #111;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 8px 0;
`;

const Price = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #111;
  margin: 0 0 12px 0;
`;
const ButtonWrapper = styled.div`
  margin-top: auto;
  justify-content: center;
`;

export default function Product(props) {
    const {product} = props;

  return (
        <Card>
            <Image src={product.image} alt={product.title} />
            <Content>
                <Title>{product.title}</Title>
                <Price>{product.price} ₺</Price>
                <ButtonWrapper>
                    <Button>Sepete Ekle</Button>
                </ButtonWrapper>
            </Content>
        </Card>        
  );
}
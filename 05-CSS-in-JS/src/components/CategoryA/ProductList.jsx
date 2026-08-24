import Card from "./Card";

function ProductList(props) {
    const { product } = props;
    
    return (
        <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '30px', 
            justifyContent: 'center' ,
            padding: '20px',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            {
                product && product.map((item, index) => (
                    <Card 
                        key={index} 
                        title={item.title} 
                        price={item.price} 
                        image={item.image} 
                    />
                ))
            }
        </div>
    )
}

export default ProductList;
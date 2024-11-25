/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const ProductCards = ({ products, setSelectedProduct }) => {
    const handleProductClick = (product) => {
      setSelectedProduct(product);
    };
  
    return (
      <div style={{ width: "50%" }}>
        <h3>Daftar Produk</h3>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
              <p>{product.name}</p>
              <p>Harga: {product.price}</p>
              <button onClick={() => handleProductClick(product)}>Lihat Detail</button>
            </div>
          ))
        ) : (
          <p>Loading produk...</p>
        )}
      </div>
    );
  };
  export default ProductCards;
import { Link } from 'react-router-dom';
// import { formatPrice } from "../../utils/helpers";
import "./Product.scss";
import { IProduct } from '../../types';

interface ProductProps {
    product: IProduct;
}

const ProductTest: React.FC<ProductProps> = ({ product }) => {
    console.log(product);
    
    return (
        <Link to={`/product/${product?.id}`} key={product.id}>
            <div className='product-item bg-white'>
               <div>
                  {product.title}
                  <img className='img-cover' src={product.images[0]} alt={product.title} />

               </div>
            </div>
        </Link>
    )
}

export default ProductTest
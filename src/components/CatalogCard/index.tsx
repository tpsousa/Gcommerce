import './styles.css';

import type { ProductDTO } from '../../models/product';

type Props = {

  product : ProductDTO;

}

//dizemos quais propiedades iremos usar do tipo Props
export default function CatalogCard ({product} : Props){

    return (

        <>
        
          <div className="dsc-card">
            <div className="dsc-catalog-card-top dsc-line-bottom">
              <img src={product.imgUrl} alt={product.name} />
            </div>
            <div className="dsc-catalog-card-bottom">
             
            
              <h4>
                {product.name}
              </h4>

              <p>

               {product.description}

              </p>

              <strong>

                R$ {product.price.toFixed(2)}  
              </strong>   
           </div>
          </div>

        </>
    );
}
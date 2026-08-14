import './style.css';
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import type { ProductDTO } from '../../models/product';

const product : ProductDTO  = {

     id : 2,
     name : "Smart tv",
     description : "Essa tv é muito bonita",
     imgUrl : "https://unsplash.com/photos/a-flat-screen-tv-sitting-on-top-of-a-entertainment-center-zULmo_Yxu-0?utm_source=chatgpt.com",
     price : 2500.99,
     categories : [

       {

        id : 2, 
        name: "Eletronicos"
       },

       {

        id : 3, 
        name : "Computadores"

       },

       {
        
        id: 4,
        name : "Eletrodomesticos"

       }
     ]
}

export default function ProductDetails (){

    return (

        <>
        
        <HeaderClient/>
        
            <main>
              
              <section id="product-details-section" className="dsc-container">
        
                
                <ProductDetailsCard product = {product}/>
        
                <div className="dsc-btn-page-container">
        
        
                <ButtonPrimary/>
        
                <ButtonInverse/>
                   
                </div>
              </section>
              
            </main>
        </>
    );

}
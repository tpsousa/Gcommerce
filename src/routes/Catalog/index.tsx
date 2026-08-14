import HeaderClient from '../../components/HeaderClient';

import './styles.css';
import SearchBar from '../../components/SearchBar';
import CatalogCard from '../../components/CatalogCard';
import ButtonNextPage from '../../components/ButtonNextPage';

import type{ ProductDTO } from '../../models/product';

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


export default function Catalog (){

    return (

        <>
        <HeaderClient/>
        <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar/>

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
         
         <CatalogCard product={product}/>

         <CatalogCard product={product} />

         <CatalogCard product={ product}/>

         <CatalogCard product={product}/>

         <CatalogCard product={product}/>

         <CatalogCard product={product}/>

         <CatalogCard product={product}/>

         <CatalogCard product={product}/>

         <CatalogCard product={product}/>

         <CatalogCard product={product}/>


        </div>

       <ButtonNextPage/>
       

      </section>
    </main>

        </>
    );
}
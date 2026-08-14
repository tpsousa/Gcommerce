import './style.css';

type Props = {

    name : String
}

export default function ButtonInverse({name} : Props){

    return (

        <>
        
          <div className="dsc-btn dsc-btn-white">
            
            {name}

            </div>
        
        </>
    );
}


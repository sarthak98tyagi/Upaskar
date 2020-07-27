import React from 'react';
import Gallery from './../../Gallery/Gallery';
import Cover from './../../../Hoc/Cover';
const Tableware = (props) =>
{
    function importAll(r) {
        return r.keys().map(r);
      }
     function trim(arr,name)
     {
         let list=arr.map((s,i)=>{
            let t=s.split('/').pop().split('.');
            return name+String(i+1);
        });
        return list;
     } 
    const imagesCutlery = importAll(require.context('./../../../images/Categories/Tableware/Cutlery', false, /.jpg$/));
    const imageListCultery=trim(imagesCutlery,"Cutlery");
    const imagesDinnerware = importAll(require.context('./../../../images/Categories/Tableware/Dinnerware', false, /.jpg$/));
    const imageListDinnerware=trim(imagesDinnerware,"Dinnerware");
    const imagesDrinkware = importAll(require.context('./../../../images/Categories/Tableware/Drinkware', false, /.jpg$/));
    const imageListDrinkware=trim(imagesDrinkware,"Drinkware");
    const imagesServeware = importAll(require.context('./../../../images/Categories/Tableware/Serveware', false, /.jpg$/));
    const imageListServeware=trim(imagesServeware,"Serveware");
    return(
        <Cover>
                <Gallery name="Tableware">
                    <Gallery name="Cutlery" list={imageListCultery}/>
                    <Gallery name="Dinnerware" list={imageListDinnerware}/>
                    <Gallery name="Drinkware" list={imageListDrinkware}/>
                    <Gallery name="Serveware" list={imageListServeware}/>
                </Gallery>
                
        </Cover>)
    
}
export default Tableware;
import React from 'react';
import Gallery from './../../Gallery/Gallery';
const FurnitureLightning = (props) =>
{
    function importAll(r) {
        return r.keys().map(r);
      }
     function trim(arr,name)
     {
         let list=images.map((s,i)=>{
            let t=s.split('/').pop().split('.');
            return name+String(i+1);
        });
        return list;
     } 
    const images = importAll(require.context('./../../../images/Categories/FurnitureandLightning', false, /.jpg$/));
    const imageList=trim(images,"FurnitureandLightning");
    return(<Gallery name="Furniture and Lightning" list={imageList}/>);
}
export default FurnitureLightning;
import React from 'react';
import Gallery from './../../Gallery/Gallery';
const Decor = (props) =>
{
    function importAll(r) {
        return r.keys().map(r);
      }
     function trim(arr,name)
     {
         let list=arr.map((s,i)=>{
            // let t=s.split('/').pop().split('.');
            return name+String(i+1);
        });
        return list;
     } 
    const imagesDinningDecor = importAll(require.context('./../../../images/Categories/Decor/DinningDecor', false, /.jpg$/));
    const imageListDinningDecor=trim(imagesDinningDecor,"DinningDecor");
    const imagesKitchenDecor = importAll(require.context('./../../../images/Categories/Decor/KitchenDecor', false, /.jpg$/));
    const imageListKitchenDecor=trim(imagesKitchenDecor,"KitchenDecor");
    const imagesLivingRoomDecor = importAll(require.context('./../../../images/Categories/Decor/LivingRoomDecor', false, /.jpg$/));
    const imageListLivingRoomDecor =trim(imagesLivingRoomDecor,"LivingRoomDecor");
    return(
    <Gallery name="Decor">
            <Gallery name="Dinning Decor" list={imageListDinningDecor}/>
            <Gallery name="Kitchen Decor" list={imageListKitchenDecor}/>
            <Gallery name="Living Room Decor" list={imageListLivingRoomDecor}/>
    </Gallery>
    );
}
export default Decor;
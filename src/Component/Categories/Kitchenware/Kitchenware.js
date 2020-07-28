import React from 'react';
import Gallery from './../../Gallery/Gallery';
const KitchenWare = (props) =>
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
    const imagesChoppingBoards = importAll(require.context('./../../../images/Categories/Kitchenware/Utilities/ChoppingBoards', false, /.jpg$/));
    const imageListChoppingBoards=trim(imagesChoppingBoards,"ChoppingBoards");
    return(<Gallery name="Kitchenware">
        <Gallery name="Utilities">
            <Gallery name="Chopping Boards" list={imageListChoppingBoards}/>
        </Gallery>
    </Gallery>
    );
}
export default KitchenWare;
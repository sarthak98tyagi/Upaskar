import React from 'react';
// import classes from './Landing.module.css';
import Gallery from './../Gallery/Gallery';
import Cover from './../../Hoc/Cover';
const Landing = (props) =>
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
     const imagesBestSellers = importAll(require.context('./../../images/Categories/BestSellers', false, /.jpg$/));
     const imageListBestSellers=trim(imagesBestSellers,"BestSellers");
     const imagesJewelleryBox = importAll(require.context('./../../images/Categories/JewelleryBox', false, /.jpg$/));
     const imageListJewelleryBox=trim(imagesJewelleryBox,"JewelleryBox");
     const imagesLivingRoomDecor = importAll(require.context('./../../images/Categories/LivingRoomDecor', false, /.jpg$/));
     const imageListLivingRoomDecor=trim(imagesLivingRoomDecor,"LivingRoomDecor");
     const imagesServeware = importAll(require.context('./../../images/Categories/Serveware', false, /.jpg$/));
     const imageListServeware=trim(imagesServeware,"Serveware");

    return(
        <Cover>
                <Gallery name="Best Sellers" list={imageListBestSellers}/>
                <Gallery name="Serveware" list={imageListServeware}/>
                <Gallery name="Jewellery Box" list={imageListJewelleryBox}/>
                <Gallery name="Living Room Decor" list={imageListLivingRoomDecor}/>
                

        </Cover>
    ) 
}
export default Landing;
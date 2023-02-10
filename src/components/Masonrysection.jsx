import React from 'react';
import { images } from "../assets/data/MasonryImages";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const Masonrysection = () => {
  console.log(images);
  return (
    <div>
      <div>
        <div className="text-3xl flex justify-center">
          EXPLORE BEST PLACE IN THE WORLD
        </div>
        {/* {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block"}}
                    />
                ))} */}
                <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
       
        {/* <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
            <Masonry columnsCount={3} gutter="10px">
               
            </Masonry>
            </ResponsiveMasonry> */}
      </div>
    </div>
  );
};

export default Masonrysection;

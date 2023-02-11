import React from 'react';
import { MansoryDatas } from "../assets/data/MansoryDatas";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const Masonrysection = () => {


  const halo = (id) => {
    console.log(id)
  }
  return (
    <div>
      <div>
        <div className="text-3xl flex justify-center">
          EXPLORE BEST PLACE IN THE WORLD
        </div>
        <div className='my-12' >

                <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 3, 900: 4}}
            >
                <Masonry  >
                    {MansoryDatas.map((MansoryData, i) => (
                      <div className='relative group' >
                        <img
                        className="hover:scale-110 duration-300 p-2 lg:p-5 rounded-large"
                            key={i}
                            loading="lazy"
                            onClick={()=>halo(i)}
                            src={MansoryData.foto}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                        <div className='absolute top-3 bg-white left-8 group-hover:hidden'>
                          <div className='' >
                            {MansoryData.location}
                          </div>
                        </div>
                      </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
};

export default Masonrysection;

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
                      <div className='relative group' key={i} >
                        <img
                        className="hover:scale-110 duration-300 p-2 lg:p-5 rounded-large"
                            key={i}
                            onClick={()=>halo(i)}
                            loading="lazy"
                            src={MansoryData.foto}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                        <div className='absolute bottom-6 w-1/2 right-6 backdrop-blur-sm bg-opacity-40 rounded-br-xl duration-200 bg-slate-900 group-hover:hidden'>
                          <div className='text-left mx-4 text-slate-200 py-2' >
                            {MansoryData.name}
                            <div>{MansoryData.location}</div>
                            <div>{MansoryData.price}</div>
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

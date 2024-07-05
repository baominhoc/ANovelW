import { Swiper, SwiperSlide } from "swiper/react";
import MangaCard from "@/components/Card/MangaCard";
import { useState, useEffect } from 'react'
import { Autoplay, Pagination } from "swiper";
import MiniCard from "../Card/Mini";
import BrowseLightCard from "../Card/LightNovel";
export default function FetchManga({type}) {
    const [data, setData] = useState(null)
    const [datas, setDatas] = useState(null)
  const [isLoading, setLoading] = useState(true)
   /* async function getManga() {
        const response = await fetch("http://localhost:3000/manga");
        const data = await response.json();
        console.log(`data ${data}`);
        return data
    }
        const datas = getManga();*/
        useEffect(() => {
            fetch('http://localhost:3000/manga')
              .then((res) => res.json())
              .then((data) => {
                console.log(data)
                setData(data)
           
                //setDatas(datass)
                setLoading(false)
              })
          }, [])
         
          if (isLoading) return <p>Loading...</p>
          if (!data) return <p>No profile data</p>
          switch (type) {
            case "lightnovel":
              return (
              <div className="grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-7 gap-4 p-4">        
              {data.map((data)=>
                    (                    
                     <BrowseLightCard  
                     thumnailurl= {data.thumnails}
                     title={data.name}
                     description={data.desciption}
                     status={data.status} 
                     style={data.styles}
                     chap={data.chapter}/>            
                    )
                  )
                 }  
              </div>
              );
            case "manga":
              return (
                
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                      },
                    }}
    
                    modules={[Autoplay, Pagination]}
                    className="historyManga"
                    autoplay={{
                      delay: 7000,
                      disableOnInteraction: true,
                    }}
                  >
                {data.slice(0,10).map((data)=>
                    (
            <SwiperSlide>
                <MangaCard 
                thumnailurl= {data.thumnails}
                title={data.name}
                description={data.desciption}
                status={data.status} 
                style={data.styles}
                chap={data.chapter}/>
            </SwiperSlide>
                    )
                         )
                        }
               </Swiper>
                );        
  
            case "minicard":
              return (
              <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}

              modules={[Autoplay, Pagination]}
              className="populerManga"
              autoplay={{
                delay: 6500,
                disableOnInteraction: true,
              }}
            >
                  {data.slice(0,10).map((data)=>
                    (
            <SwiperSlide>
                <MiniCard
                thumnailurl= {data.thumnails}
                title={data.name}
                description={data.desciption}
                status={data.status} 
                style={data.styles}
                chap={data.chapter}/>
            </SwiperSlide>
                    )
                         )
                        }
            </Swiper>
              )
             ;
          }
        

    }
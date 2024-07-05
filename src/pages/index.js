import { NextSeo } from 'next-seo';
import MiniCard from "@/components/Card/Mini";
import { Swiper, SwiperSlide } from "swiper/react";
import MangaCard from "@/components/Card/MangaCard";
import { Autoplay, Pagination } from "swiper";
import Link from "next/link";
import SlideCard from '@/components/Card/SlideCard';
import  FetchManga  from '@/components/Funtions/fetchmanga';
import BrowseMangaCard from '@/components/Card/BrowseCard';
export default function Home() {
  return (
    <>
      <NextSeo title={"Home"} />
      <div className="flex flex-col items-center justify-center px-10 -mt-8 lg:-mt-0 mb-24">
        <div className="w-full">



          {/* CAROUSEL */}

          <div className="relative mt-12 px-6 mx-auto">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              modules={[Autoplay, Pagination]}
              className="latestt"
              autoplay={{
                delay: 7000,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
                enabled: true
              }}
            >
              <SwiperSlide>
                <SlideCard />
              </SwiperSlide>
              <SwiperSlide>
                <SlideCard />
              </SwiperSlide>
              <SwiperSlide>
                <SlideCard />
              </SwiperSlide>
              <SwiperSlide>
                <SlideCard />
              </SwiperSlide>
              <SwiperSlide>
                <SlideCard />
              </SwiperSlide>

            </Swiper>
          </div>
          <div className="flex space-x-2 mt-24 md:w-1/2 w-full text-center items-center mx-auto bg-zinc-900/90 border border-zinc-700/20 px-4 rounded-lg hover:border-[#363636] duration-300">
                                <div className="absolute justify-center space-x-4 mr-4">
                                    <i className="fa-solid fa-search text-[17px] mt-1"></i>
                                </div>
                                <input className="bg-zinc-700/20 navbar-input px-6 border !w-[18rem] lg:!w-[32rem] border-zinc-700/10" placeholder="Tìm Kiếm Các Series!" />
          </div>
          {/* Last Added Chapters */}
          <div className="mt-16 lg:ml-0 -ml-4">
            <div className="flex justify-between">
              <div id="title">
                <h1 className="text-2xl font-semibold">
                  Chapters Mới Nhất
                </h1>
              </div>
            </div>
            <div className="mt-4">
           <FetchManga type="manga"/>
            </div>
          </div>
          {/* POPULAR SERIES */}
          <div className="mt-16 lg:ml-0 -ml-4">
            <div className="flex justify-between">
              <div id="title">
                <h1 className="text-2xl font-semibold">
                  Phổ Biến
                </h1>
              </div>
            </div>
            <div className="mt-4">
            <FetchManga type="minicard"/>
            </div>
          </div>

          <div className="mt-8 lg:ml-0 -ml-4">
            <div className="flex justify-between">
              <div id="title">
                <h1 className="text-2xl font-semibold">
                  LightNovels Mới Ra Lò
                </h1>
              </div>
            </div>
            <div className="mt-4">
            <div className="w-full">    
                        <FetchManga type="lightnovel"/>                    
                    </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
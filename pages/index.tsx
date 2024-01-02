import Image from 'next/image';
import Link from 'next/link';
import AppHead from '@/components/app-head';
import Header from '@/components/header';
import Section from '@/components/section';
import AppBanner from '@/components/app-banner';
import Footer from '@/components/footer';
import Nearby from '@/components/nearby';
import MainBanner from '@/components/main-banner';
import { exploreNearby, presentationGallery } from '../constants/data';

const Home = () => {
  return (
    <>
      <AppHead />
      <Header exploreNearby={exploreNearby} />
      <main>
        <MainBanner />
        <Section
          title="Explore Nearby"
          className="grid grid-cols-2 lg:gap-x-4 gap-x-1 gap-y-2 sm:grid-cols-3 lg:grid-cols-4"
        >
          {exploreNearby.map((data, index) => (
            <Nearby key={index} data={data} />
          ))}
        </Section>
        <Section
          title="Gallery"
          className="grid grid-cols-2 lg:gap-x-4 gap-x-1 gap-y-2 lg:grid-cols-4"
        >
          {presentationGallery.map((data, index) => (
            <Link key={index} href="#">
              <div className="p-2 duration-300 lg:p-3 gap-y-4 active:scale-105 active:bg-gray-200 active:bg-opacity-40 rounded-xl">
                <div className="relative w-full h-40 mb-2 md:h-60 lg:h-72">
                  <Image
                    src={data.img}
                    alt={data.title}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={data.img}
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="font-medium leading-5 text-gray-500 text-md md:text-xl">
                    {data.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </Section>
        <AppBanner />
      </main>
      <Footer />
    </>
  );
};

export default Home;

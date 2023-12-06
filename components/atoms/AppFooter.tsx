import Link from 'next/link';
import Image from 'next/image';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { SITE_MAP } from 'constants/site-map';

const AppFooter = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {SITE_MAP.map(({ title, sitemap }, index) => (
            <div
              key={title}
              className={`${
                index !== 0 && 'border-t border-gray-200 lg:border-none'
              } py-6 md:py-8`}
            >
              <span className="inline-block mb-4 text-sm font-medium">{title}</span>
              <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-y-3 xl:gap-y-4">
                {sitemap.map((data) => (
                  <li
                    key={data}
                    className="text-sm text-gray-500 hover:text-gray-400 hover:underline"
                  >
                    <Link href="/">{data}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between py-5 text-sm text-gray-400 border-t border-gray-200 lg:py-6 lg:flex-row">
          <div className="flex flex-col items-center order-last lg:flex-row lg:order-none">
            <span className="mr-0 text-center lg:mr-4">© 2021 Airbnb, Inc.</span>
            <span className="mb-2 mr-0 lg:mr-8 lg:mb-0">
              | Clone by{' '}
              <a
                href="https://edwintantawi.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary hover:underline"
              >
                Edwin Tantawi
              </a>{' '}
              |
            </span>
            <ul className="flex space-x-6 list-disc">
              <li className="hover:underline">
                <Link href="/">Privacy</Link>
              </li>
              <li className="hover:underline">
                <Link href="/">Terms</Link>
              </li>
              <li className="hover:underline">
                <Link href="/">Sitemap</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center mb-4 space-y-4 lg:space-y-0 lg:flex-row lg:space-x-12 lg:mb-0">
            <ul className="flex items-center space-x-4">
              <li>
                <Link href="/" className="flex items-center">
                  <GlobeAltIcon className="h-5 mr-1" />
                  <span className="underline">English (US)</span>
                </Link>
              </li>
              <li>
                <Link href="/" className="flex items-center">
                  <span className="mr-1">$</span>
                  <span className="underline">USD</span>
                </Link>
              </li>
            </ul>
            <ul className="flex space-x-6">
              <li className="flex items-center">
                <Link href="/">
                  <Image
                    src="/assets/icons/facebook.svg"
                    alt="facebook"
                    height={16}
                    width={16}
                  />
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/">
                  <Image
                    src="/assets/icons/twitter.svg"
                    alt="facebook"
                    height={16}
                    width={16}
                  />
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/">
                  <Image
                    src="/assets/icons/instagram.svg"
                    alt="facebook"
                    height={16}
                    width={16}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
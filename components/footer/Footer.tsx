import Link from 'next/link';
import Image from 'next/image';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container">
        <div className="flex flex-col items-center justify-between py-5 text-sm text-gray-400 border-t border-gray-200 lg:py-6 lg:flex-row">
          <div className="flex flex-col items-center order-last lg:flex-row lg:order-none">
            <span className="mr-0 text-center lg:mr-4">© {year} Juanita Soho</span>
            <ul className="flex space-x-6 list-disc lg:ml-2">
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

export default Footer;

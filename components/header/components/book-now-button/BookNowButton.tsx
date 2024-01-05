import Link from 'next/link';
import Image from 'next/image';
import { getImage } from 'utils/imagesUtils';

type BookNowButtonProps = {
  isSnapTop: boolean;
};

const BookNowButton = ({ isSnapTop }: BookNowButtonProps) => {
  return (
    <Link
      href="https://airbnb.com/h/juanita-soho"
      target="_blank"
      className="relative group"
    >
      <div
        className={`${
          isSnapTop
            ? 'text-white hover:bg-white hover:bg-opacity-10'
            : 'text-gray-500 hover:bg-gray-100 '
        } flex items-center h-10 px-4 rounded-full font-medium tracking-wide text-sm`}
      >
        Book now
      </div>
      <div className="absolute top-14 -right-16 w-60 h-36 scale-y-0 origin-top ease-in-out group-hover:scale-100 group-hover:transition-transform group-hover:duration-300">
        <div className="absolute w-full h-5 bg-white -top-5 [clip-path:polygon(50%_0%,5%_100%,95%_100%)]" />
        <Image
          src={getImage('preview-link.png')}
          alt="Preview image"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={getImage('preview-rental.png')}
          className="rounded-xl"
        />
      </div>
    </Link>
  );
};

export default BookNowButton;

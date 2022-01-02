import Image from 'next/image';

export default function Review({ image, profileImage, text }) {
  return (
    <div className="mt-6">
      <div className="rounded-lg overflow-hidden">
        <Image src={image} alt="" width={144} height={180} layout="responsive" />
      </div>

      <div className="flex mt-4">
        <div className="rounded-full overflow-hidden w-12 h-12 mr-4">
          <Image src={profileImage} alt="" layout="responsive" objectFit="cover" />
        </div>
        <div>
          <span className="font-semibold text-lg">Andi Eier</span>
          <p className="text-gray">{text}</p>
        </div>
      </div>
    </div>
  );
}

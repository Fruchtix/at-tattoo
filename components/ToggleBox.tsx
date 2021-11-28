import Image from 'next/image';
import chevronDown from '../public/svgs/chevron-down.svg';
import chevronUp from '../public/svgs/chevron-up.svg';

export default function ToggleBox({ id, isOpen, handleToggleboxClick, title, children }) {
  return (
    <div className="border-b py-5">
      <div className="flex justify-between items-center" onClick={() => handleToggleboxClick(id)}>
        <span className="font-semibold text-xl">{title}</span>
        <Image src={isOpen ? chevronUp : chevronDown} alt="" />
      </div>

      <p className={`pt-5 text-gray text-xl ${isOpen ? '' : 'hidden'}`}>{children}</p>
    </div>
  );
}

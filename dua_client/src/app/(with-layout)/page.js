export const metadata = {
    title: 'Home || RKRHS-Centenary',
    description: 'Enjoy',
  }
import img from '@/assets/dua.jpg'
import Image from 'next/image';
const WithLayouts = () => {
    return (
        <div className="bg-gradient-to-r from-green-100 to-red-100 h-[700px] text-center p-8">
            Home Page
            <Image src={img} alt="Dua" width={300} height={200} />
        </div>
    );
};

export default WithLayouts;
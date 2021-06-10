import FontLoader from '../components/FontLoader';
import RistocodeLogin from '../components/RistocodeLogin';
import ShallatyLogo from '../components/ShallatyLogo';

export default function Home() {
  return (
    <div className="w-screen flex-col h-screen bg-risto bg-cover bg-center flex items-center font-poppins text-white justify-evenly">
      <FontLoader />
      <ShallatyLogo />
      <RistocodeLogin />
    </div>
  )
}

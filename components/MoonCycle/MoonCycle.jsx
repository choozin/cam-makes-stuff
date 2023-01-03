import Image from "next/image";
import { useState, useEffect } from "react";

import NewMoon from '../../public/svg/new-moon.svg'
import WaxingCrescent from '../../public/svg/waxing-crescent-moon.svg'
import FirstQuarterMoon from '../../public/svg/first-quarter-moon.svg'
import WaxingGibbous from '../../public/svg/waxing-gibbous-moon.svg'
import FullMoon from '../../public/svg/full-moon.svg'
import WaningGibbousMoon from '../../public/svg/waning-gibbous-moon.svg'
import LastQuarterMoon from '../../public/svg/last-quarter-moon.svg'
import WaningCrescentMoon from '../../public/svg/waning-crescent-moon.svg'

const MoonCycle = () => {
  const [imagePosition, setImagePosition] = useState(0);

  const imageArray = [
    <NewMoon key='0'/>,
    <WaxingCrescent key='1'/>,
    <FirstQuarterMoon key='2'/>,
    <WaxingGibbous key='3'/>,
    <FullMoon key='4'/>,
    <WaningGibbousMoon key='5'/>,
    <LastQuarterMoon key='6'/>,
    <WaningCrescentMoon key='7'/>
  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImagePosition(imagePosition < 7 ? imagePosition+1 : 0);
    }, 500);
    return () => clearInterval(intervalId);
  }, [imagePosition]);

  return (
    <div style={{ width: '128px', height: '128px' }}>
      {imageArray[imagePosition]}
    </div>
  );
};

export default MoonCycle
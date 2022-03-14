import Bath from './Bath';
import Bedroom from './Bedroom';
import LivingRoom from './LivingRoom';
import Kitchen from './Kitchen';

const FloorPlan = () => {
  return ( 
    <>
    <Bedroom bedNum={'1'}/>
    <Kitchen />
    <Bath size={'Full'}/>
    <Bedroom bedNum={'2'}/>
    <LivingRoom />
    <Bath size={'Half'}/>
    <Bedroom bedNum={'3'}/>

    </>
   );
}
 
export default FloorPlan;
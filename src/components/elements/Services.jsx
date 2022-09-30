import {MdPeopleAlt} from 'react-icons/md'
import Service from './Service'

const Services = () => {
  return (
    <section className="container my-5">
        <div className="row">
        
            <Service heading='Community Focused' btnText='Join Us' text='Community Focused and fair launch. The dev team burned all of their tokens and participated with everyone else.'>
                <MdPeopleAlt />
            </Service>
            <Service heading='Automatic LP' btnText='View BscScan' text='Every trade contributes towards auto-generating liquidity that goes into multiple pools used by exchanges'>
                <MdPeopleAlt />
            </Service>
            <Service heading='RFI Static Rewards' btnText='Check your wallet' text='Holders earn passive rewards through static reflection as they watch their balance of SafeMoon grow indefinitely.'>
                <MdPeopleAlt />
            </Service>
        </div>
    </section>
  )
}
export default Services
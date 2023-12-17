import { Fitler } from './Filter'
import { Sorter } from './Sorter'

export const Header: React.FC = () => {
  return (
    <div className='w-full mb-5 flex flex-cols pt-2'>
      <div className='w-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-end'>
        <Sorter />
        <Fitler />
      </div>
    </div>
  )
}

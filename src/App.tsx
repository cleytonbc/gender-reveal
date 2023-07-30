import { useEffect, useRef, useState } from 'react'
import { GenderFemale, GenderMale, XCircle } from '@phosphor-icons/react'
import { Fireworks } from '@fireworks-js/react'
import type { FireworksHandlers } from '@fireworks-js/react'
import './styles/global.css'

type genderType = 'female' | 'male';

function App() {
  const [gender, setGender] = useState<genderType | null>(null)
  const ref = useRef<FireworksHandlers>(null)
  const female = import.meta.env.VITE_FEMALE;
  const male = import.meta.env.VITE_MALE;

  useEffect(() => {
    if (!ref.current) return
    if(!gender) {
      ref.current.stop()
    }
    ref.current.start()
  })

  const FireworksEffect = () => (
    <Fireworks
          ref={ref}
          options={{
            opacity: 0.5,
            intensity: 30,
          }}

          style={{
            top: 30,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
          }}
        />
  )


  if(gender ==='female') {
    return (
      <div 
        className="w-screen h-screen flex justify-center items-center flex-nowrap text-white text-9xl"
      >
        <div className="absolute top-0  right-0">
        <button onClick={() => setGender(null)} className='flex'>
          <XCircle size={32} />
        </button>
      </div>
        <div className="flex w-full h-full items-center justify-center bg-pink-600">
          <GenderFemale size={120} /> {female}
        </div>
      <FireworksEffect />
    </div>
    )
  }
  if(gender ==='male') {
    return (
      <div 
      className="w-screen h-screen flex justify-center items-center flex-nowrap text-white text-9xl relative"
    >
      <div className="absolute top-0  right-0">
        <button onClick={() => setGender(null)} className='flex'>
          <XCircle size={32} />
        </button>
      </div>
      <div className="flex w-full h-full items-center justify-center bg-blue-600">
       <GenderMale size={120} /> {male}
      </div>
      <FireworksEffect />
    </div>
    )
  }

  return (
    <div 
      className=
      "w-screen h-screen flex justify-center items-center flex-nowrap text-white text-9xl bg-gradient-to-r from-pink-600 to-blue-600 from-40% to-60%"
    > 
        <div className="flex w-5/12 h-full items-center justify-center">
          <button onClick={() => setGender('female')} className='flex'><GenderFemale size={120} /> {female}</button>
        </div>
        <div className="flex w-1/5 h-full items-center justify-center">
          ou
        </div>
        <div className="flex w-5/12 h-full items-center justify-center">
          <button onClick={() => setGender('male')} className='flex'><GenderMale size={120} />{male}</button>
        </div>

    </div>
  )
}

export default App

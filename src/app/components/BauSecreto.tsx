/* eslint-disable prettier/prettier */
import Image from 'next/image'
import circle from '../../assets/circle.png'
import galaxy from '../../assets/swaGalaxy.svg'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  color: string
  variant: 'left' | 'right'
  textVariant: string
}
export function Button({ children, color, variant, textVariant }: ButtonProps) {
  return (
    <div
      className={`h-10 py-5 px-10 ${color} hover:brightness-125 z-20 cursor-pointer flex items-center  border-[1px] border-solid border-white ${variant === 'left' ? 'rounded-bl-lg' : 'rounded-br-lg'
        }`}
    >
      <p className={`${textVariant} font-extrabold`}>{children}</p>
    </div>
  )
}

export function BauSecreto() {
  return (
    <section className="pl-10 relative h-full">
      <div className="w-[380px] relative py-24 px-12 text-left gap-10 flex-col">
        <div className="flex flex-col gap-2">
          <Image src={galaxy} alt='logo Galaxy' />
          <div className='flex'>
            <p className="w-[200px]">
              o maior acervo de tesouros já encontrado no espaço intergaláctico.
              nunca explorado
            </p>
            <Image
              src={circle}
              alt="Carregando..."
              className="w-20 h-20 -translate-y-8 translate-x-1"
            />
          </div>
        </div>

        <div className="flex gap-6 items-center justify-center pt-5">
          <Button textVariant='text-white' variant='left' color='bg-[#6D51A1]' >Teste</Button>
          <Button textVariant='text-black' variant='right' color='bg-[#a6a80d]' >Teste</Button>
        </div>
        <div className=" h-full w-full absolute top-0 left-0 right-0 bottom-0 bg-[url(../assets/bodinhaBranca.png)] bg-cover " />

      </div>

      <div className="absolute left-2  top-0 bottom-0 w-2 bg-stripes" />
    </section>
  )
}

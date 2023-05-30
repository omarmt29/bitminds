import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-full w-full bg-[url('/bg.jpg')] bg-cover	bg-no-repeat	bg-center	">

      <div className="h-screen w-full flex flex-col gap-10 justify-center items-center px-10 sm:px-0">

        <Image
          src="/logo.png"
          width={200}
          height={200}
          alt="Picture of the author"

        />

        <p className='text-white text-1xl sm:text-4xl text-center font-extralight'>¡Bienvenido a Bitminds, tu puerta de entrada al mundo del desarrollo web!</p>

      </div>

      <div className='grid md:grid-cols-1 lg:grid-cols-2  px-5  container m-auto gap-10 pt-12 md:pt-32 border-t-2 border-gray-800'>
        <div className='w-full justify-center flex  h-full '>
          <div className='justify-center items-center gap-4 w-full flex flex-col'>
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt="Picture of the author"
              className='mb-10'

            />
            <h2 className='text-amber-200 text-2xl'>Descubre qué es Bitminds</h2>
            <p className='text-1xs text-center text-gray-300'>Bitminds es un grupo de conocimiento dedicado a brindar recursos y apoyo a personas interesadas en aprender sobre desarrollo web. Nos enfocamos en proporcionar información clara y accesible para aquellos que deseen sumergirse en el fascinante mundo de la programación y el diseño web. Aquí encontrarás contenido educativo, tutoriales, consejos y trucos para ayudarte a desarrollar tus habilidades y conocimientos.</p>
          </div>
        </div>
        <div className='w-full justify-center flex h-full '>
          <div>
            <img className='w-full h-full md:h-auto lg:h-full' src="/img-1.png" alt="" />
          </div>
        </div>
      </div>

      <div className='grid md:grid-cols-1 lg:grid-cols-2   px-5   container m-auto gap-10 mt-12 pt-12 md:mt-32  md:pt-32 border-t-2 border-gray-800'>



        <div className='w-full justify-center flex h-full order-2 sm:order-none '>
          <div>
            <img className='w-full h-full' src="/img-2.png" alt="" />
          </div>
        </div>

        <div className='w-full justify-center flex h-full '>
          <div className='justify-center items-center gap-4 w-full flex flex-col'>
            <p className='text-8xl text-yellow-400 mb-10'>?</p>
            <h2 className='text-amber-200 text-2xl text-center'>¿Qué puedes esperar de Bitminds?</h2>
            <p className='text-1xs text-center text-gray-300'>En Bitminds, nos comprometemos a ofrecer contenido de calidad que sea fácil de entender y aplicar. Nuestro objetivo es desmitificar el desarrollo web y hacerlo accesible para todos, incluso para aquellos que no tienen experiencia previa en el tema. A través de nuestros artículos, videos y recursos interactivos, aprenderás los conceptos básicos, las mejores prácticas y las últimas tendencias en el campo del desarrollo web.</p>
          </div>
        </div>

      </div>

      <div className='flex container m-auto gap-10 mt-12 pt-12 md:mt-32 px-5  md:pt-32 border-t-2 border-gray-800'>

        <div className='w-full justify-center flex h-full '>
          <div className='justify-center items-center gap-4 w-full flex flex-col'>
            <a href="https://chat.whatsapp.com/FL05wDMG4PL57Ukhjkh0bJ" target='_blank'><img className='w-20 h-auto mb-10' src="/ws.png" alt="" /></a>
            <h2 className='text-amber-200 text-2xl text-center'>Únete a nuestro grupo de WhatsApp</h2>
            <p className='text-1xs text-center text-gray-300 max-w-5xl'>¿Quieres ser parte de una comunidad activa y en crecimiento en el mundo del desarrollo web? ¡Únete a nuestro grupo de WhatsApp! Aquí tendrás la oportunidad de interactuar con personas apasionadas por el tema, hacer preguntas, recibir asesoramiento personalizado y compartir tus logros y desafíos en el aprendizaje del desarrollo web. Nuestro grupo es un espacio seguro y acogedor donde todos son bienvenidos, sin importar su nivel de conocimiento.</p>
          </div>
        </div>

      </div>


      <div className='flex container md:m-auto gap-10 mt-12 pt-12 md:mt-32  md:pt-32  border-t-2 border-gray-800'>

        <div className='w-full justify-center  flex h-full '>
          <div className='justify-center items-center gap-4 w-full flex px-5 flex-col'>
            <p className='text-8xl text-center mb-5 sm:mb-10 text-yellow-400'>?</p>
            <h2 className='text-amber-200 text-4sm sm:text-2xl text-center max-w-5xl'>¿Cómo integrarse a Bitminds a través de nuestro grupo de WhatsApp? Es muy sencillo unirse a nuestro grupo de WhatsApp. Solo tienes que seguir estos pasos:</h2>
            <ul className='text-gray-300 list-decimal space-y-3 mt-4 '>
              <li>
                Haz clic en el enlace de invitación al grupo de WhatsApp que se encuentra en el logo de whatsapp en nuestra página web
              </li>
              <li>
                Abre el enlace en tu dispositivo móvil y confirma tu participación en el grupo.
              </li>
              <li>
                ¡Listo! Ahora podrás acceder al grupo de WhatsApp y comenzar a explorar, aprender y compartir con otros miembros de Bitminds.
              </li>
            </ul>
            <p className='text-gray-300 text-sm text-center max-w-5xl mt-10 bg-zinc-800 px-3 py-4 sm:p-9'>No importa si eres un principiante absoluto o si ya tienes algunos conocimientos en desarrollo web, en Bitminds encontrarás el apoyo y los recursos que necesitas para seguir creciendo en esta apasionante área. Únete a nuestra comunidad de aprendizaje y descubre cómo el desarrollo web puede abrirte un mundo de oportunidades.</p>
          </div>
        </div>

      </div>

      <div className='flex justify-center gap-10 mt-32 py-12 bg-zinc-900 border-t-2 border-yellow-300'>
        <p className='text-center text-white mb-0 pb-0'>¡Explora Bitminds y sumérgete en el fascinante mundo del desarrollo web hoy mismo!</p>
      </div>

    </main>
  )
}
import LostFoundImage from '@/assets/lostandfound.jpg'
const AboutUs = () => {
  return (
    <div className='md:flex gap-2 p-4 md:w-[80%] w-[90%] mt-12 mx-auto justify-between'>
        <div className='md:w-[50%]'>
            <h1 className='text-3xl font-bold mb-4'>About us</h1>
            <img className='rounded-md shadow-md md:hidden block w-full h-[200px] mb-4' src='https://cdn.leonardo.ai/users/f72da480-7a9b-4922-ba1f-f82b4e57cdaf/generations/8ede8412-832a-4835-8728-80e8babfc76d/Default_Create_a_logo_for_Lost_Found_Hub_a_web_application_de_3.jpg' alt="lost and found"  />
            <p>
            Welcome to Lost & Found Hub, the ultimate destination for reconnecting people with their lost belongings. Our mission is to provide a reliable, secure, and efficient platform where individuals can report lost items and claim found ones. We believe that every item has a story and every story deserves a happy ending.
            Founded with the vision of creating a community-driven solution, Lost & Found Hub brings together technology and compassion. Our team is dedicated to helping you navigate the often stressful experience of losing or finding items. Whether it’s a cherished personal belonging or an essential item, we understand the value it holds for you.
            </p>
        </div>
        <img className='rounded-md shadow-md hidden md:block' src='https://cdn.leonardo.ai/users/f72da480-7a9b-4922-ba1f-f82b4e57cdaf/generations/8ede8412-832a-4835-8728-80e8babfc76d/Default_Create_a_logo_for_Lost_Found_Hub_a_web_application_de_3.jpg' alt="lost and found" width={400} />
    </div>
  )
}

export default AboutUs
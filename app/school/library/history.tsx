import Image from "next/image";
const BookHistory = () => {

  return (
    <>
    <div className="bg-white rounded-md shadow-md w-full flex mt-4">
        
      <div className="h-full mr-4">
        <Image
          src="/icons/bgIcon.jpg"
          alt="Image 1"
          width={82}
          height={16}
          className=""
        />
      </div>
      <div className="w-1/2">
        <h2 className="font-semibold mb-2">books title</h2>
        <p className="text-gray-600">description</p>
      </div>
    </div>
    </>
    
  )
}

export default BookHistory
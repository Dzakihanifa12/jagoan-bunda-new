import Image from "next/image";
import { IMAGES_DATA } from "@/constant/Index";

const Gallery = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 grid grid-cols-3 gap-4" id="Galeri">
      {IMAGES_DATA.map((image, index) => (
        <div key={image.id} className="relative w-full h-64">
          <Image
            alt={image.alt}
            src={image.src}
            fill
            style={{objectFit:"cover"}}
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
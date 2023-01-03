import Image from "next/image";

const StarrySky = () => {
  return (
    <div style={{ position: 'fixed', width: '100%', height: '100%', overflow: 'hidden', zIndex: -1, top: 0, left: 0 }}>
      <Image src="/img/starry-sky.jpg" alt="Starry Sky" layout='fill' objectFit='cover' />
    </div>
  );
};

export default StarrySky
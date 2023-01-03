import Image from "next/image";

const Starfield = () => {
  const generateTiles = (multiplier, scaleInput, zI) => {
    let tiles = [];

    for (let x = 0; x < 15; x++) {
      tiles.push(
        <div style={{ transform: 'rotate(-'+(x^x*multiplier)+'0deg)'+ scaleInput, zIndex: zI,}}>
          <Image
            src="/img/starfield.png"
            alt="Picture of the author"
            width={300}
            height={300}
          />
        </div>
      );
    }

    return tiles;
  };

  let scrollYDistance = 1

  return (
    <div
      style={{
        width: "120%",
        left: '-10%',
        height: "100%",
        backgroundColor: "black",
        margin: '0',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'fixed',
      }}
    >
      {
        generateTiles(9, ' scale(1)', 1) &&
        generateTiles(9, ' scale(-1.1)', 2)
      }
    </div>
  );
};

export default Starfield;

import PaintingCalculator from "../../components/Examples/PaintingCalculator/calculatorBasic";

const PaintingCalculatorPage = () => {
  return (
    <div style={{ width: '100vw', background: '#333'}}>
      <div style={{
        width: '100vw',
        height: '10vh',
        background: '#888',
      }}>

      </div>
      <PaintingCalculator containerHeight='90vh'/>
    </div>
  );
};

export default PaintingCalculatorPage;

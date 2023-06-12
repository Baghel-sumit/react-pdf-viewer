import './App.css';
import PdfOne from './pdf-viewers/pdf-one';
import PdfThree from './pdf-viewers/pdf-three';
import PdfTwo from './pdf-viewers/pdf-two';

const App = () => {
  return (
    <div className="App">
      <h1>Pdf viewer</h1>
      {/* <PdfOne/> */}
      {/* <PdfTwo/> */}
      <PdfThree/>
    </div>
  );
}

export default App;

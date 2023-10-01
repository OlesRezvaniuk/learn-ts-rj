import { Product } from "./components/Product";
import { IBox } from "./models";


const dataProduct : IBox[] = [
  {
  title: 'This is Title',
  id: '01',
  count: 45,
  active: false,
  info: 'hihihiihih'
},
  {
  title: 'This is Title2',
  id: '02',
  count: 43,
  active: false,
  info: 'dadadata'
},
  {
  title: 'This is Title3',
  id: '03',
  count: 41,
  active: true,
  info: 'hohodsa'
},
]

function App() {
  return (
    <div className="container">
      {dataProduct.map(i => {
        return (
        <Product key={i.id}  product={i}/>
      )
    })}
    </div>
  );
}

export default App;

import { Product } from "./components/Product";
import { IBox } from "./models";
import styled from "styled-components";

const ProductsBox = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
padding-top: 30px;
`

const dataProduct : IBox[] = [
  {
  title: 'This is Title',
  id: '01',
  count: 99,
  active: false,
  info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus consequatur voluptatum veritatis, aperiam, error, est culpa maxime dolore rerum beatae eius. Repudiandae laborum aspernatur animi?'
},
  {
  title: 'This is Title2',
  id: '02',
  count: 43,
  active: false,
  info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum earum ea ipsa repudiandae dignissimos sed!'
},
  {
  title: 'This is Title3',
  id: '03',
  count: 21,
  active: true,
  info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, assumenda?'
},
]

function App() {
  return (
    <ProductsBox className="container">
      {dataProduct.map(i => {
        return (
        <Product key={i.id}  product={i}/>
      )
      })}
    </ProductsBox>
  );
}

export default App;

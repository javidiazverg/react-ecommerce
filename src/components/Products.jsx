import styled from "styled-components";
import { popularProducts } from "../data";
import { tablet } from "../responsive";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    ${tablet({display: "flex", flexWrap:"wrap", justifyContent: "space-between"})};
    
`


const Products = () => {
  return (
      <Container>
          {popularProducts.map(item=>(
              <Product item={item} key={item.id}/>
          ))}
      </Container>
  )
};

export default Products;
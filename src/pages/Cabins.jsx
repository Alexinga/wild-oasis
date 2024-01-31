import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperation from "../features/cabins/CabinTableOperation";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
// import Button from "../ui/Button";
// import { useState } from "react";
// import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperation />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;

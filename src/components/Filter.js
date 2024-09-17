/** @format */
import { useState, useContext, useEffect } from "react";
import { NavbarBrand } from "react-bootstrap";
import Checkbox from "../components/Checkbox";

import { CatgContext } from "../pages/Category";

const Filter = () => {
  const { setCatgProducts, checkBoxBrand, updatedCheckboxes, checkBoxType } =
    useContext(CatgContext);

  const [checkedBrand, setCheckedBrand] = useState([]);
  const [checkedType, setCheckedType] = useState([]);

  const handleCheckBrands = (e) => {
    let updatedBrands = [...checkedBrand];

    if (e.target.checked) {
      // console.log(e);
      updatedBrands = [...checkedBrand, e.target.value];

      checkedBrandsFunc(updatedBrands);

      // console.log("updated brands", updatedBrands);
    } else {
      updatedBrands.splice(checkedBrand.indexOf(e.target.value), 1);

      checkedBrandsFunc(updatedBrands);

      // console.log(e);

      // console.log("updated brands", updatedBrands);
    }

    setCheckedBrand(updatedBrands);
  };

  const handleCheckTypes = (e) => {
    let updatedTypes = [...checkedType];

    if (e.target.checked) {
      // console.log(e);

      updatedTypes = [...checkedType, e.target.value];

      checkedTypesFunc(updatedTypes);

      // console.log("updated types", updatedTypes);
    } else {
      updatedTypes.splice(checkedType.indexOf(e.target.value), 1);

      checkedTypesFunc(updatedTypes);

      // console.log(e);

      // console.log("updated types", updatedTypes);
    }

    setCheckedType(updatedTypes);
  };

  ///////////ASK ABOUT USING VARIABLS IN NESTING MAP FUNCTION
  // const renderCheckboxLists = (array, filterType) => {
  //   return array.map((product) => {
  //     // console.log(filterType);
  //     return (
  //       <div className="checkbox-wrapper" key={product.id}>
  //         <Checkbox
  //           onChange={handleCheck}
  //           value={product.filterType}
  //           id={product.id}
  //           name={product.filterType}
  //         />
  //         &nbsp;&nbsp;
  //         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  //       </div>
  //     );
  //   });
  // };
  // checkBoxType.map((product) => {
  //   // console.log(checkBoxType);
  //   return (
  //     <div className="checkbox-wrapper" key={product.id}>
  //       <h4> Product type </h4>
  //       <Checkbox
  //         onChange={handleCheck}
  //         value={product.type}
  //         id={product.id}
  //         name={product.type}
  //       />
  //       &nbsp;&nbsp;
  //       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  //     </div>
  //   );
  // });
  // };

  const renderCheckboxBrands = () =>
    checkBoxBrand.map((product) => {
      return (
        <div className='checkbox-wrapper' key={product.id}>
          <Checkbox
            onChange={handleCheckBrands}
            value={product.brand}
            id={product.id}
            name={product.brand}
          />
          &nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      );
    });

  const renderCheckboxTypes = () =>
    checkBoxType.map((product) => {
      return (
        <div className='checkbox-wrapper' key={product.id}>
          <Checkbox
            onChange={handleCheckTypes}
            value={product.type}
            id={product.id}
            name={product.type}
          />
          &nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      );
    });

  const checkedBrandsFunc = (updatedList) => {
    let filteredByBrand;

    if (
      updatedList.length === 0 ||
      updatedList.length === checkBoxBrand.length
    ) {
      /////// we use a copy of the original products array to filter it
      filteredByBrand = updatedCheckboxes;
    } else {
      filteredByBrand = updatedCheckboxes.filter((brand) => {
        return updatedList.includes(brand.product_brand);
      });
    }
    setCatgProducts(filteredByBrand);
  };

  const checkedTypesFunc = (updatedList) => {
    let filteredByType;
    if (
      updatedList.length === 0 ||
      updatedList.length === checkBoxType.length
    ) {
      /////// we use a copy of the original products array to filter it

      filteredByType = updatedCheckboxes;
    } else {
      filteredByType = updatedCheckboxes.filter((type) => {
        return updatedList.includes(type.product_type);
      });
    }
    setCatgProducts(filteredByType);
  };

  return (
    <>
      <h4>Brands</h4>
      {renderCheckboxBrands()}
      <h4>Types</h4>
      {renderCheckboxTypes()}
    </>
  );
};

export default Filter;

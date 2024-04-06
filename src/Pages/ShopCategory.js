import React from 'react';
import './CSS/ShopCategory.css';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContextProvider';
import Item from '../Component/Item/Item.js';
import dropdown_icon from '../Component/Assets/dropdown_icon.png'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col banner">
            <img src={props.banner} alt='banner'></img>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row my-3">
            <div className="col-md-6 ">
              <p>
                <span style={{ marginLeft: "70px", fontWeight: "600" }}>Showing 1-12</span> out of 36 products
              </p>
            </div>
            <div className="col-md-6 ">
              <p className='sort'>Sort by <img src={dropdown_icon} alt="" /></p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container ">
          <div className="row">
            <div className="col shopcategory_product">
              {all_product.map((item, i) => {
                if (props.category === item.category) {
                  return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                }
                else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col ">
                <p className='explore'>Explore more</p>
            </div>
          </div>
        </div>
      </div>





    </>
  )
}

export default ShopCategory;
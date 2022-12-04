import React from "react";
import {useNavigate} from "react-router-dom"
const ProductCard = ({item}) => {
  const navigate = useNavigate()
  return (
    <div className="w-[220px] h-[320px] mx-[10px] bg-sky-100 rounded-lg shadow-lg shadow-gray-500">
      <img
        src="https://fptshop.com.vn/Uploads/images/2015/0511/Lenovo-IdeaPad-Gaming-3-fpt-1.jpg"
        alt=""
        className="w-[200px] h-[140px]"
      />

      <div>
        <p className="font-medium text-xl mt-1 ml-3">{item.productName}</p>
        <p className="flex mt-1 ml-3">
          Hãng:<p className="font-medium text-[16px] ml-1"> {item.productBrand}</p>
        </p>
        <p className="flex mt-1 ml-3">
          Chip: <p className="font-medium text-[16px] ml-1"> {item.chip}</p>
        </p>
        <p className="flex mt-1 ml-3">
          Giá:{" "}
          <p className="font-medium text-[16px] text-red-600 ml-1">
            {" "}
            {item.price} VNĐ
          </p>
        </p>
      </div>

      <div onClick={() => navigate('/product/1')} 
       className="w-[160px] p-2 bg-green-600 rounded-xl my-2 m-auto text-white hover:bg-green-700 ">
        <p className="text-center font-medium text-lime-50 cursor-pointer">
          Xem sản phẩm
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
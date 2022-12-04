import React from "react";
import Navbar from "../../components/navbar";
const ProductDetail = () => {
    return (
        <div>
            <Navbar />
            <div className="px-10 py-5">
                <p className="text-2xl font-semibold">Tên sản phẩm</p>
                <div className="flex">
                    <div className="flex">
                        <p>Tình trạng:</p>
                        <p className="ml-2"> Còn hàng</p>
                    </div>
                    <div className="flex ml-6">
                        <p>Bảo hành :</p>
                        <p className="ml-2"> 24 tháng</p>
                    </div>
                </div>
                <hr className="my-3" />
                <div className=" flex justify-between">
                    <div className="w-[33%]" >
                        <img className="w-full h-auto"
                            src="https://fptshop.com.vn/Uploads/images/2015/0511/Lenovo-IdeaPad-Gaming-3-fpt-1.jpg"
                            alt=""
                        />
                        <div className="flex justify-center ">
                            <img className="w-[50px] h-auto border-gray-700 boder-[1px] mt-2 mx-2 cursor-pointer"
                                src="https://fptshop.com.vn/Uploads/images/2015/0511/Lenovo-IdeaPad-Gaming-3-fpt-1.jpg"
                                alt=""
                            />
                            <div className="flex justify-center ">
                                <img className="w-[50px] h-auto border-gray-700 boder-[1px] mt-2 mx-2 cursor-pointer"
                                    src="https://fptshop.com.vn/Uploads/images/2015/0511/Lenovo-IdeaPad-Gaming-3-fpt-1.jpg"
                                    alt=""
                                />
                                <div className="flex justify-center ">
                                    <img className="w-[50px] h-auto border-gray-700 boder-[1px] mt-2 mx-2 cursor-pointer"
                                        src="https://fptshop.com.vn/Uploads/images/2015/0511/Lenovo-IdeaPad-Gaming-3-fpt-1.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[33%]">
                        <span> Giá bán :</span>
                        <span> 1000000 VNĐ</span>
                        <div>
                            <div className="bg-green-500 p-5">
                                <p className="text-xl font-semibold text-slate-100 text-center" >Khuyến mãi -Quà tặng</p>
                            </div>
                            <div className="p-5 border-dotted border-gray-700 boder-2">
                                <p className="text-lg font-semibold text-center" > Thông tin quà tặng</p>
                            </div>
                        </div>
                        <div className=" flex justify-center my-4">
                            <div className="w-[110px] p-2 bg-red-600 rounded-lg hover:bg-red-600 cursor-pointer ">
                                <p className="text-sm font-semibold text-slate-100 text-center">
                                    Mua ngay
                                </p>
                            </div>
                        </div>
                        <div className="flex  justify-center">
                            <span className="mt -[2px]" >GỌI NGAY</span>
                            <span className="mx-2 text-lg text-red-700 font-semibold">0777246987</span>
                            <span className="mt-[2px]">ĐỂ GIỮ HÀNG</span>
                        </div>
                    </div>
                    <div className="w-[33%] px-5">
                        <>
                            <p className="text-lg font-semibold">
                                Điện thoại tư vấn - Đặt hàng
                            </p>
                            <ul className="ml-8">
                                <li className="list-disc">Huy Hoàng : 123456789 </li>
                                <li className="list-disc">Duy Trung : 123445555</li>
                                <li className="list-disc">xuân Tiến : 214655878</li>
                            </ul>
                        </>
                        <div className="mt-4">
                            <p className="text-lg font-semibold">Địa chỉ mua hàng</p>
                            <ul className="ml-8">
                                <li className="list-disc">124 : Nguyễn Duy Trung </li>
                                <li className="list-disc">12  : Hòa sơn</li>
                                <li className="list-disc">11  : Phú Thượng</li>
                                <li className="list-disc">134 : Hòa Khánh</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="mt-5 " />
                <div className="px-20 py-10">
                    <table className="table-fixed w-full mb-10">
                        <thead>
                            <tr className="text-left border-b-[1px] border-black">
                                <th className="w-[30%]"> Phần cứng</th>
                                <th className="w-[30%]"> Thống số kỹ thuật</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b-[1px] border-gray-200">
                                <td className="py-2" >Model</td>
                                <td className="py-2" >Lenovo Ideapad Gaming 3 15ARH05(82E00JXVN)</td>
                            </tr>
                            <tr className="border-b-[1px] border-gray-200">
                                <td className="py-2" >CPU</td>
                                <td className="py-2" >ADM RYzen 5 4500H</td>
                            </tr>
                            <tr className="border-b-[1px] border-gray-200">
                                <td className="py-2" >RAM</td>
                                <td className="py-2" >8GB DDR4 3200MHz</td>
                            </tr>
                            <tr className="border-b-[1px] border-gray-200">
                                <td className="py-2" >Ổ cứng</td>
                                <td className="py-2" >256GB SSD PCIe NVM 3.0x4</td>
                            </tr>
                            <tr className="border-b-[1px] border-gray-200">
                                <td className="py-2">Card đồ họa </td>
                                <td className="py-2">NVIDIA GeForce GTX 1650 4GB GDDR6</td>
                            </tr>
                            <tr className="border-b-[1px] border-gray-200">
                                <td className="py-2">Màn Hình</td>
                                <td className="py-2">16.inch FHD (1920x1080) IPS 250nits Anti-glare ,120Hz</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
export default ProductDetail
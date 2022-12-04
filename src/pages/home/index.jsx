import React, { useState } from "react";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/product-card";
import Slider from "../../components/sdiler";
import { fakeData } from "./data";

const Home = () => {
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    const [data, setData] = useState(fakeData)
    const handleSearch = (val) => {
        if (val) {
            setSearch(val)
        } else {
            setSearch(val)
            setData(fakeData)
        }
    }
    const handleSubmitSearch = () => {
        setData(
            fakeData.filter((item) =>
                item.productName.toLowerCase().includes(search.toLowerCase()),
            ),
        )
    }

    const hanldeFilterBrand = (value) => {
        setData(
            fakeData.filter((item) =>
                item.productBrand.toLowerCase().includes(value.toLowerCase()),
            ),
        )
    }


    const hanldeSortPrice = (value) => {
        setSort(value)
        if (value === 'asc') {
            setData(fakeData.sort((a, b) => a.price - b.price))
        } else if (value === 'desc') {
            setData(fakeData.sort((a, b) => b.price - a.price))
        } else {
            setData(fakeData)
        }
    }
    return (
        <div>
            <Navbar />
            <div className="px-10 py-5 min-w-[525px]">
                <Slider />
                <div className="flex mb-5 justify-end">
                    <div className="flex mr-5" >
                        <input type="text"
                            value={search}
                            onChange={(e) => handleSearch(e.target.value)}
                            placeholder="Nhập tên sản phẩm"
                            className="border-[1px] border-gray-400 p-2 rounded outline-none ml-2" />
                        <div onClick={handleSubmitSearch} className=" bg-green-600 p-2 rounded hover:bg-green-700 cursor-pointer">
                            <p className="text-slate-100">Tìm kiếm</p>
                        </div>
                    </div>
                    <div className="flex mr-5 " >
                        <p className="mt-2 mr-1">Hãng</p>
                        <select name="" id="" className="border-[1px] border-gray-400 p-2 rounded w-[140px]"
                            onChange={(e) => hanldeFilterBrand(e.target.value)} >
                            <option value="">Tất cả</option>
                            <option value="asus">Asus</option>
                            <option value="aser">Aser</option>
                            <option value="lenovo">Lenovo</option>
                            <option value="dell">Dell</option>
                        </select>
                    </div>
                    <div className="flex">
                        <p className="mt-2 mr-1">Giá</p>
                        <select name="" id="" className="border-[1px] border-gray-400 p-2 rounded w-[240px]"
                            onChange={(e) => hanldeSortPrice(e.target.value)}>
                            <option value="">Tất cả</option>
                            <option value="asc">Từ thấp đến cao</option>
                            <option value="desc">Từ cao đến thấp</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.map((item) => (
                        <ProductCard item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Home
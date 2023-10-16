import React, { useState } from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList.js';
import Footer from './Footer.js'
import AddItem from './addItem';


function Main() {
    const product = [
        {
            price: 999,
            name: "iphone",
            quntity: 0
        },
        {
            price: 199,
            name: "vivo",
            quntity: 0
        },
        {
            price: 90,
            name: "Redmi",
            quntity: 0
        },
        {
            price: 290,
            name: "Xiomi",
            quntity: 0
        },
    ]
    let [Product, setProducts] = useState(product);
    let [totalAmount, setTotalAmount] = useState(0);
    let incremernt = (index) => {
        let newProduct = [...Product];
        let newtotalAmount = totalAmount;
        newtotalAmount += newProduct[index].price
        setTotalAmount(newtotalAmount)
        newProduct[index].quntity++;

        setProducts(newProduct)
    }
    let decrement = (index) => {
        let newProduct = [...Product];
        let newtotalAmount = totalAmount;

        if (newProduct[index].quntity === 0) {
            newProduct[index].quntity = 0;
        } else {
            newProduct[index].quntity--;
            newtotalAmount -= newProduct[index].price;
        }

        // newProduct[index].quntity>0 ? newProduct[index].quntity-- : newProduct[index].quntity=0;
        setProducts(newProduct)
        setTotalAmount(newtotalAmount)
    }
    let reset = () => {
        let newProduct = [...Product];
        newProduct.map((product) => product.quntity = 0)
        setProducts(newProduct)
        setTotalAmount(0)
    };
    const remove = (index) => {
        let newProduct = [...Product];
        let newtotalAmount = totalAmount;
        newtotalAmount -= newProduct[index].quntity * newProduct[index].price
        newProduct.splice(index, 1);
        setProducts(newProduct)
        setTotalAmount(newtotalAmount)
    }
    const add = (name, price) => {
        let newProduct = [...Product];
        newProduct.push({
            price: price,
            name: name,
            quntity: 0
        });
        setProducts(newProduct)
    }
    return (
        <div>
            <Navbar />
            <main className="container">
                <AddItem add={add} />
                <ProductList product={Product} incremernt={incremernt} decrement={decrement} remove={remove} />
            </main>
            <Footer totalAmount={totalAmount} reset={reset} />
        </div>
    )
}

export default Main
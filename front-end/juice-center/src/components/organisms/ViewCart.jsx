import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const ViewCart = () => {

    const [allItems, setAllItems] = useState([]);
    const [finalItems, setFinalItems] = useState([]);

    const handleAdd = (id) => {
        allItems.forEach((data) => {
            if(data.id === id){
                setAllItems([...allItems, data]);
            }
        })
        localStorage.setItem('cart', JSON.stringify(allItems));      
    }

    const deleteSeed = (id) =>{
        let totalItem=[], flag= true;
        allItems.forEach((data) => {
            if(data.id == id && flag){
                flag=false;
            } else {
                totalItem = [...totalItem, data];
            }
        })
        setAllItems(totalItem);
        localStorage.setItem('cart', JSON.stringify(totalItem));
    }

    const removeDuplicates = (arr) => {
        const uniqueItems = Array.from(new Set(arr.map(JSON.stringify))).map(JSON.parse);
        return uniqueItems;
    };

    const totalquantity = (id) => {
        let total=0;
        allItems.forEach((data) => {
            if(data.id === id){
                total++;
            }
        })
        return total;
    }

    const totalCost = (id) => {
        let cost;
        allItems.forEach((data) => {
            if(data.id === id){
                cost = data.cost;
            }
        })
        return totalquantity(id)*cost;
    }

    const overallCostOfCart = () => {
        let cost=0;
        allItems.forEach((data) => {
            cost+=totalCost(data.id);
        })
        return cost;
    }

    useEffect(() => {
        let totalData = JSON.parse(localStorage.getItem('cart'));
        // const uniqueItems = Array.from(new Set(totalData.map(JSON.stringify))).map(JSON.parse);
        setAllItems(totalData);
    },[])

    return (
        <div>
            <div style={{padding: '10px'}}>
                <div  style={{ borderRadius: '5px', boxShadow: '0px 0px 16px #4443403D', padding: '15px' }}> 
                    {allItems.length > 0 ? (
                        <table style={{width: '100%'}}>
                        <thead>
                            <tr style={{ fontWeight: 'bold' }}>
                                <td>SL</td>
                                <td>Name</td>
                                <td>No's</td>
                                <td>Cost</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {removeDuplicates(allItems).map((data, index) => (
                                <tr key={index}>
                                    <td >{index + 1}</td>
                                    <td >{data?.name}</td>
                                    <td >{totalquantity(data.id)}</td>
                                    <td >{totalCost(data.id)}</td>
                                    <td><button style={{ backgroundColor: 'orange' }} onClick={() => handleAdd(data?.id)}>+</button> &nbsp;&nbsp;
                                        <button style={{ backgroundColor: 'red' }} onClick={() => deleteSeed(data?.id)}>-</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    ):(
                        <h3>Selected Items will be displayed here</h3>
                    )}
                    <div style={{display: 'flex', padding: '20px 0px 0px 0px', fontWeight: 'bold'}}>
                        <div style={{display: 'flex'}}>
                            Total Cost: <div style={{ fontSize: '18px', textIndent:'12px' }}>{overallCostOfCart()}</div>
                        </div>
                        <div style={{marginLeft: 'auto'}}>
                            <button>Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

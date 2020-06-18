import React from 'react';
import './App.css';
import PriceList from './components/PriceList/priceList';
var items1 = [
    {
        "id": 1,
        "title": "去新疆游玩",
        "price": 200,
        "date": "2020-06-18",
        "category": {
            "id": 1,
            "name": "旅行",
            "type": "outcome",
            "iconName": "icon-lvxing"
        }
    },
    {
        "id": 2,
        "title": "去拉萨游玩",
        "price": 200,
        "date": "2020-06-18",
        "category": {
            "id": 1,
            "name": "旅行",
            "type": "income",
            "iconName": "icon-lvyoutehui"
        }
    }
];
var App = function () {
    return (React.createElement("div", { className: "App" },
        React.createElement(PriceList, { items: items1, onModifyItem: function (item) { alert(item.id); }, onDeleteItem: function (item) { alert(item.id); } })));
};
export default App;

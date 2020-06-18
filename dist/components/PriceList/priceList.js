import React from "react";
import { List, Button } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
var IconFont = createFromIconfontCN({
    scriptUrl: ["//at.alicdn.com/t/font_1891915_ndgr420z3gq.js"],
});
export var PriceList = function (props) {
    var items = props.items, onModifyItem = props.onModifyItem, onDeleteItem = props.onDeleteItem;
    var handleEdit = function (item) {
        if (onModifyItem) {
            onModifyItem(item);
        }
    };
    var handleDelete = function (item) {
        if (onDeleteItem) {
            onDeleteItem(item);
        }
    };
    return (React.createElement(List, { bordered: true, dataSource: items, renderItem: function (item) {
            var _a, _b;
            return (React.createElement(List.Item, { actions: [
                    React.createElement(Button, { onClick: function () { return handleEdit(item); }, type: "primary", shape: "circle", icon: React.createElement(IconFont, { type: "icon-bianji" }) }),
                    React.createElement(Button, { onClick: function () { return handleDelete(item); }, type: "primary", danger: true, shape: "circle", icon: React.createElement(IconFont, { type: "icon-shanchu" }) }),
                ] },
                React.createElement(IconFont, { type: ((_a = item.category) === null || _a === void 0 ? void 0 : _a.iconName) || "", style: {
                        fontSize: "20px",
                        backgroundColor: "#007bff",
                        borderRadius: "2px",
                        padding: "5px",
                        color: "#fff",
                    } }),
                React.createElement("span", null, item.title),
                React.createElement("span", null,
                    ((_b = item.category) === null || _b === void 0 ? void 0 : _b.type) === "income" ? "+" : "-",
                    item.price,
                    "\u5143"),
                React.createElement("span", null, item.date)));
        } }));
};
export default PriceList;

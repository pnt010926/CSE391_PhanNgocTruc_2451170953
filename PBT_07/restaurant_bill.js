const foods = [

    {
        name: "Phở bò",
        price: 65000,
        quantity: 2
    },

    {
        name: "Trà đá",
        price: 5000,
        quantity: 3
    },

    {
        name: "Bún chả",
        price: 55000,
        quantity: 1
    }

];

const isWednesday = true;

const hasTip = true;

let total = 0;

console.log("╔══════════════════════════════════════╗");
console.log("║        HÓA ĐƠN NHÀ HÀNG             ║");
console.log("╠══════════════════════════════════════╣");

for (let i = 0; i < foods.length; i++) {

    const item = foods[i];

    const itemTotal =
        item.price * item.quantity;

    total += itemTotal;

    console.log(
        `║ ${i + 1}. ${item.name.padEnd(10)} x${item.quantity} @${item.price / 1000}k = ${itemTotal / 1000}k ║`
    );

}

console.log("╠══════════════════════════════════════╣");

let discountPercent = 0;

if (total > 1000000) {

    discountPercent = 15;

} else if (total > 500000) {

    discountPercent = 10;

}

if (isWednesday) {

    discountPercent += 5;

}

const discount =
    total * discountPercent / 100;

const afterDiscount =
    total - discount;

const vat =
    afterDiscount * 0.08;

let tip = 0;

if (hasTip) {

    tip = afterDiscount * 0.05;

}

const finalTotal =
    afterDiscount + vat + tip;

console.log(
    `║ Tổng cộng:         ${total.toLocaleString()}đ ║`
);

console.log(
    `║ Giảm giá (${discountPercent}%):      ${discount.toLocaleString()}đ ║`
);

console.log(
    `║ VAT (8%):            ${vat.toLocaleString()}đ ║`
);

console.log(
    `║ Tip (5%):            ${tip.toLocaleString()}đ ║`
);

console.log("╠══════════════════════════════════════╣");

console.log(
    `║ THANH TOÁN:        ${finalTotal.toLocaleString()}đ ║`
);

console.log("╚══════════════════════════════════════╝");
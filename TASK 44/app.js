function order_sandwich(items) {
    console.log("Ordering a sandwich with the following items:");
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        console.log("- ".concat(item));
    }
}
order_sandwich(["ham", "cheese", "lettuce"]);
order_sandwich(["turkey", "cheese"]);
order_sandwich(["butter", "jelly"]);

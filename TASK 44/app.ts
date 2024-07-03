function order_sandwich(items: string[]){
    console.log("Ordering a sandwich with the following items:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
}

order_sandwich(["ham", "cheese", "lettuce"]);
order_sandwich(["turkey",  "cheese"]);
order_sandwich(["butter", "jelly"]);
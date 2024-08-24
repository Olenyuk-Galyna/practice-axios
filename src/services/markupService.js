const createMarkUpProducts = arr => {
    return arr
        .map(
            ({ titel, price, thubnail, brand }) =>
        "<li>
        <h3>Titel: ${ titel }</h3>
        <p>Price: ${price}</p>
        <img src="${thumdneil}" alt="${brand}">
    </li>",
    ) .join("");
}

// const createMarkUpProduct = arr =>
//             (titel, price, thubnail, brand) =>
//         "<li>
//         <h3>Titel: ${ titel }</h3>
//         <p>Price: ${price}</p>
//         <img src="${thumdneil}" alt="${brand}">
//     </li>"


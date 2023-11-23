const categoriesList = document.querySelectorAll('.task-01__item');
console.log(`Number of categories: ${categoriesList.length}`)


categoriesList.forEach(item => {
    const h2 = item.querySelector('h2')
    const li = item.querySelector('li')

    console.log(`Categories: ${item.querySelector('h2').textContent}`)
    console.log(`Elements: ${item.querySelectorAll('li').length}`)
});


    

    // console.log(item.querySelector('h2').classList.add('NU'))
    // console.log(item.querySelectorAll('li').length)


    // const toggleButton = (element) => {
//     element.addEventListener('click', function (event) {
//         event.preventDefault()
//         this.classList.toggle('is-hidden')

//     })
// }


// for (const item of categoriesList) {
//     let categories = item.querySelectorAll('li')

//     item.querySelector("h2").textContent;

//     const categoryName = item.querySelector("h2").textContent;
//     console.log("Категория: ", categoryName, "\n", "Елементов: ", categories.length);
// }




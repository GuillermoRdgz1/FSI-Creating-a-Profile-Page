
let content = document.querySelector('.js-generated.content')

    // h1 with rizzo

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

    // dog content

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let h3 = document.createElement('h3');
h3.textContent = 'Description';
dogDetails.append(h3);

let p = document.createElement('p')
p.textContent = 'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.'
dogDetails.append(p)

let h3a = document.createElement('h3');
h3a.textContent = 'Feeding Times:';
dogDetails.append(h3a);

let ul = document.createElement('ul')
dogDetails.append(ul)

let li = document.createElement('li')
li.textContent = "9:00 am";
ul.append(li)

let li2 = document.createElement('li')
li2.textContent = "12:00 pm"
ul.append(li2)

let li3 = document.createElement('li')
li3.textContent = "5:00 pm"
ul.append(li3)
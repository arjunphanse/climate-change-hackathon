const articles = [
    {
        title:  "Flood Simulator",
        body: "How the different climate policies affect the sea level and city flooding... By Arjun Phanse",
        img: "city.jpg",
        href: "article1.html"
    },
    {
        title:  "Iceberg Simulator",
        body: "How the glaciers melt and the sea level rises...By Riaan Shah",
        img: "ice.jpg",
        href:  "article2.html"
    },
    {
        title:  "Car Game",
        body: "Get rid of the gas cars while keeping the electric ones... By Hadi Hilaly",
        img: "car.jpg",
        href:  "article3.html"
    },


]
document.addEventListener("DOMContentLoaded", () => {
    const articleHolder = document.getElementById("article-holder")
    
    for (const article of articles) {
        const link = document.createElement("a")
        const e = document.createElement("div")
        e.className = "article"

        const title = document.createElement("h1")
        title.innerText = article.title
        e.appendChild(title)
        title.style.color = "black"
        const image = document.createElement("img")
        // Image styles
        image.src = `/images/${article.img}`
        image.style.maxWidth = "200px"
        image.style.maxHeight = "200px"
        e.appendChild(image)
        
        const content = document.createElement("p")
        content.className = "larger"
        content.innerText = article.body
        e.appendChild(content)

        link.href = article.href
        link.className = "link"
        link.appendChild(e)
        
        articleHolder.appendChild(link)
    }
})


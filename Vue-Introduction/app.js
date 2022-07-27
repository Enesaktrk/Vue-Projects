const app = Vue.createApp({
    //template: "buraya yazdıgın html div içine gömülür direkt"

    // fonksiyon icinde bi data return ediyorsun, o datayı #app icinde kullanabiliyorsun
    data() {        
        return {
            url: "http://yunusemreertunc.com",
            showProducts: true,
            showFiltered: false,
            products: [
                {title: 'Casper Via G5', seller: 'Zeynep Neara', price: 2199, img: 'assets/g5.jpg', isFav: true},
                {title: 'Iphone 7', seller: 'Muhammed Enes Aktürk', price: 2399, img: 'assets/ip7.jpg', isFav: false},
                {title: 'Iphone 11', seller: 'Yunus Emre Ertunç', price: 12999, img: 'assets/ip11.jpg', isFav: true},
            ],
            age: 23,
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle() {
            this.title = "Changed Title"
        },
        changeTitleParam(title) {
            this.title = title
        },
        toggleShowFiltered() {
            this.showFiltered = !this.showFiltered
            this.showProducts = !this.showProducts
        },
        toggleShowProducts() {
            this.showProducts = !this.showProducts
        },
        handleEvent(event, data) {
            console.log(event, event.type, data)
        },
        handleMouseMove(event){
            this.x = event.offsetX
            this.y = event.offsetY
        },
        changeFav(product) {
            product.isFav = !product.isFav
        }
    },
    computed: {
        filteredProducts() {
            return this.products.filter((product) => product.isFav)
        }
    }

})

app.mount("#app")
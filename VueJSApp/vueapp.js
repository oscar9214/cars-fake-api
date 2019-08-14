var BrandsComponent = Vue.component('brands', {
    data: function () {
        return {
            brands: [],
            loading: true
        }
    },
    template: `
        <div class="container">
            <div class="row">
                <div class="col">
                    <div v-if="loading" class="spinner-border" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                    <template v-if="!loading">
                        <h3 v-if="brands.length === 0">There are no brands</h3>
                        <div v-else>
                            <ul>
                                <li v-for="brand in brands">
                                    {{ brand.name }}
                                    <img :src="brand.logo" class="brand-logo" alt="">
                                </li>
                            </ul>
                        </div>
                    </template>                    
                </div>
            </div>
        </div>
    
    `,
    created: function () {
        fetch('https://my-json-server.typicode.com/oscar9214/cars-fake-api/brands').
        then(function(response){
            return response.json();
        }).then(data => {
            this.$data.brands = data;
            this.$data.loading = false;
        }).catch(function (err) {
            console.log(err);
        });
    }
});

var CarsComponent = Vue.component('cars', {
    data: function () {
        return {
            cars: [],
            loading: true
        }
    },
    template: `
        <div class="container">
            <div class="row">
                <div class="col">
                    <div v-if="loading" class="spinner-border" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                    <template v-if="!loading">
                        <h3 v-if="cars.length === 0">There are no cars</h3>
                        <div v-else>
                            <div class="row">
                                <div class="col" v-for="car in cars">
                                    <div class="card">
                                      <img :src="car.image" class="card-img-top" alt="...">
                                      <div class="card-body">
                                        <h5 class="card-title">{{ car.model }}</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                      </div>
                                      <ul class="list-group list-group-flush">
                                        <li class="list-group-item">{{ car.performance.0to100 }}</li>
                                        <li class="list-group-item">{{ car.engine.horsepower }}</li>
                                        <li class="list-group-item">{{ car.engine.displacement }}</li>
                                      </ul>
                                    </div>
                                </div>                        
                            </div>
                            
                        </div>
                    </template>                    
                </div>
            </div>
        </div>
    
    `,
    created: function () {
        fetch('https://my-json-server.typicode.com/oscar9214/cars-fake-api/vehicles').
        then(function(response){
            return response.json();
        }).then(data => {
            this.$data.cars = data;
            this.$data.loading = false;
        }).catch(function (err) {
            console.log(err);
        });
    }
});



var app = new Vue({
    el: "#root"
});
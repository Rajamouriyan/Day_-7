// 1) Solving problems using array functions on the rest countries' data.
        // a) Get all the countries from the Asia continent /region using the Filter function
     let request=new XMLHttpRequest();
     request.open('GET','https://restcountries.com/v3.1/all','true');
     request.send();
     request.onload=function(){
        let countryData=JSON.parse(this.response);
        let asia=countryData.filter((element)=>{
            if(element.region==='Asia'){
                return element.region;
            }
        })
     
     console.log(asia);
    }

    // output:
    // total 50  countries are belongs to asia

        // b)Get all the countries with a population of less than 2 lakhs using Filter function
         let request=new XMLHttpRequest();
            request.open('GET','https://restcountries.com/v3.1/all','true');
            request.send();
            request.onload=function(){
                let countryData=JSON.parse(this.response);
                let population=countryData.filter((element)=>{
                    if(element.population<200000){
                        return element.population;
                    }
                })
            
            console.log(population);
            }

    // output:
    // total 60  countries are less than 200000 population

            // c)Print the following details name, capital, flag using forEach function
            let request=new XMLHttpRequest();
            request.open('GET','https://restcountries.com/v3.1/all','true');
            request.send();
            request.onload=function(){
                let countryData=JSON.parse(this.response);
                countryData.forEach(element => {
                    console.log (element.name, element.capital, element.flag);
              });
            }

        // Output:
        // total 251 countries details are resulted.


            // d)Print the total population of countries using reduce function
               let request=new XMLHttpRequest();
                request.open('GET','https://restcountries.com/v3.1/all','true');
                request.send();
                request.onload=function(){
                    let countryData=JSON.parse(this.response);
                    let population = countryData.reduce((data,element)=>{
                        return data+element.population;
                    },0)
                    console.log(population);
                }

                // output:
                // 7777721563


                // e)Print the country which uses US Dollars as currency.
                let request=new XMLHttpRequest();
                request.open('GET','https://restcountries.com/v3.1/all','true');
                request.send();
                request.onload=function(){
                    let data = JSON.parse(this.response);
                    let usdollars = data.filter((data) =>  {
                        for (let value in data.currencies) {
                            if(data.currencies[value].name === "United States dollar"){
                          return data;
                          }
                        }
                        })
                        console.log(usdollars[0].currencies)
                    }

                    // output:
                        // object for the USD has been resulted

                
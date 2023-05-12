/// MENUS HAMBURGER
const menu = document.querySelector('.ham');
const menulist = document.querySelector('.navbar-list');

menu.addEventListener("click", ()=>{
    menulist.classList.toggle("active");
})



/// POP-UP SERVICES 


const service1 = document.querySelector('.service1');
const service2 = document.querySelector('.service2');
const service3 = document.querySelector('.service3');
const service4 = document.querySelector('.service4');
const service5= document.querySelector('.service5');
const service6= document.querySelector('.service6');
const service7= document.querySelector('.service7');
const servicePopup1 = document.querySelector('.popup1');
const servicePopup2 = document.querySelector('.popup2');
const servicePopup3 = document.querySelector('.popup3');
const servicePopup4 = document.querySelector('.popup4');
const servicePopup5 = document.querySelector('.popup5');
const servicePopup6 = document.querySelector('.popup6');
const servicePopup7 = document.querySelector('.popup7');

const close = document.querySelectorAll('.close');


        service1.addEventListener('click', (e) => {
            
            servicePopup1.classList.remove('hidden');

        })
        
        service2.addEventListener('click', (e) => {
            
            servicePopup2.classList.remove('hidden');

        })
        service3.addEventListener('click', (e) => {
            
            servicePopup3.classList.remove('hidden');

        })
        service4.addEventListener('click', (e) => {
            
            servicePopup4.classList.remove('hidden');

        })
        service5.addEventListener('click', (e) => {
            
            servicePopup5.classList.remove('hidden');

        })
        service6.addEventListener('click', (e) => {
            
            servicePopup6.classList.remove('hidden');

        })
        service7.addEventListener('click', (e) => {
            
            servicePopup7.classList.remove('hidden');

        })


        close.forEach(x => {
            x.addEventListener('click', (e) => {
                const element = e.target.offsetParent;
                const service=element.parentNode

                service.classList.add('hidden');
            })
            
        });






// Choose your profile

const floating = document.querySelector('.floating-section');
const floatingSection = document.querySelectorAll('.floating-link');

floatingSection.forEach(x => {
    x.addEventListener('click', () => {
        floating.style.display = 'none';
    })
})



// Choose your region

const regionSelect = document.getElementById('region-select');
const addressFields = document.getElementById('address-fields');
const street = document.getElementById('street');
const city = document.getElementById('city');
const state = document.getElementById('state');
const phone = document.getElementById('phone');
const country = document.getElementById('country');

regionSelect.addEventListener('change', () => {
  if (regionSelect.value !== '') {
    addressFields.style.display = 'block';
    if (regionSelect.value === 'asia') {
      street.innerHTML = '10, Hermes Centre, Sector 17, Vashi, Navi Mumbai';
      city.innerHTML = 'Mumbai';
      state.innerHTML = 'Maharashtra';
      phone.innerHTML = '02227890390';
      country.innerHTML = 'India';
    } else if (regionSelect.value === 'europe') {
      street.innerHTML = 'Thwake Bldg, 1431-90139 Ekalakala';
      city.innerHTML = 'Machakos';
      state.innerHTML = 'Machakos';
      phone.innerHTML = '+254-4420255';
      country.innerHTML = 'United Kingdom';
    } else if (regionSelect.value === 'north-america') {
      street.innerHTML = 'Box No. 80361';
      city.innerHTML = 'Toronto';
      state.innerHTML = 'Montreal';
      phone.innerHTML = '+97142726743';
      country.innerHTML = 'Canada';
    }
  } else {
    addressFields.style.display = 'none';
  }
});



// Click para el pop up del corporate offices

const corporateUp = document.querySelector('#corporate-footer');
const hiddenCorporate = document.querySelector('#region-form');

corporateUp.addEventListener('click', ()=>{

    hiddenCorporate.style.display = 'flex';
})

//close form

const closeForm = document.querySelectorAll('.close-image');
const formSalesContact = document.querySelector('#sales-contact');

  closeForm.forEach(x => {
      x.addEventListener('click', ()=>{
        formSalesContact.style.display = 'none';
        hiddenCorporate.style.display = 'none';

      })
  })




/// sales Contact


const countrySelect = document.querySelector('#contry-contact');
const countryOption = document.querySelector('#country-option');

const AsiaOption = ['India', 'Singapore', 'Thailand', 'Turkey', 'Hong Kong', 'UAE'];
const EuropeOption = ['United Kingdom', 'Ireland', 'Netherlands', 'Italy', 'Hungary', 'Switzerland', 'Germany', 'Poland', 'Sweden', 'Denmark', 'France', 'Spain', 'Portugal'];
const NorthAmericaOption = ['Canada', 'United States of America'];
const countries = [ 
   
      india={ 
        
        street: "10, Hermes Centre, Sector 17, Vashi, Navi Mumbai",
        city: "Mumbai",
        state: "Maharashtra",
        phone: "02227890390",
        country: "India"
      },
      singapore= {
        
        street: "Mechinagar-10, Kakarvita",
        city: "Jhapa",
        state: "Jhapa",
        phone: "+977023562452",
        country: "Singapore"
      },
      thailand= { 
       
        street: "135/2 Bankshall Street, 11",
        city: "Colombo",
        state: "Colombo",
        phone: "+940112440765",
        country: "Thailand"
      },
      turkey= {
        
        street: "maxell bandhan, block-a, lalmatia, 1207",
        city: "Dhaka",
        state: "Dhaka",
        phone: "+8801713144980",
        country: "Turkey"
      },
      hongkong={  
        
        street: "Jl Sumatera 13 Kel Mabar, Sumatera Utara",
        city: "Sumatera Utara",
        state: "Medan",
        phone: "+620616856242",
        country: "Hong Kong"
      },
      uae= {  
        
        street: "Jl Sumatera 13 Kel Mabar, Sumatera Utara",
        city: "Sumatera Utara",
        state: "Medan",
        phone: "+620616856242",
        country: "UAE"
      },
      unitedkingdom={
        street: "Thwake Bldg, 1431-90139 Ekalakala",
        city: "Machakos",
        state: "Machakos",
        phone: "+254-4420255",
        country: "United Kingdom"
      },
      ireland= {
        street: "1737 Albert St",
        city: "Germiston",
        state: "Gauteng",
        phone: "+270857972467",
        country: "Ireland"
      },
      Netherlands= {
        street: "Plot 15, Jinja Rd, Henry House",
        city: "Henry House",
        state: "Kampala",
        phone: "+25641248596",
        country: "Netherlands"
      },
      italy= {
        street: "Plot No.7 Samora Avenue, Opposite Sapna, P.O. Box: 9033",
        city: "Dar Es Salaam",
        state: "Dar Es Salaam",
        phone: "+255222116091",
        country: "Italy"
      },
      hungary={
        street: "J31 Shotinoye street, Ladipo",
        city: "Mushin",
        state: "Lagos",
        phone: "+23417606464",
        country: "Hungary"
      },
      switzerland={
        street: "J31 Shotinoye street, Ladipo",
        city: "Mushin",
        state: "Lagos",
        phone: "+23417606464",
        country: "Switzerland"
      },
      germany= {
        street: "J31 Shotinoye street, Ladipo",
        city: "Mushin",
        state: "Lagos",
        phone: "+23417606464",
        country: "Germany"
      },
      poland= {
        street: "J31 Shotinoye street, Ladipo",
        city: "Mushin",
        state: "Lagos",
        phone: "+23417606464",
        country: "Poland"
      },
      sweden= {
        street: "J31 Shotinoye street, Ladipo",
        city: "Mushin",
        state: "Lagos",
        phone: "+23417606464",
        country: "Sweden"
      },
      denmark= {
        street: "J31 Shotinoye street, Ladipo",
        city: "Mushin",
        state: "Lagos",
        phone: "+23417606464",
        country: "Denmark"
      },
      france= {
        street: "J31 Shotinoye street, Ladipo",
        city: "Mushin",
        state: "Lagos",
        phone: "+23417606464",
        country: "France"
      },
      spain= {
        street: "J31 Shotinoye street, Ladipo",
        city: "Mushin",
        state: "Lagos",
        phone: "+23417606464",
        country: "Spain"
      },
      portugal= {
        street: "J31 Shotinoye street, Ladipo",
        city: "Mushin",
        state: "Lagos",
        phone: "+23417606464",
        country: "Portugal"
      },
      canada={  
        id:"canada",
        street: "ATAÇ-2 S N 48/3, Kizilay",
        city: "Toronto",
        state: "Montreal",
        phone: "+903124310034",
        country: "Canada"
      },
      usa={  
        id: "usa",
        street: "Box No. 80361",
        city: "Dubai",
        state: "Dubai",
        phone: "+97142726743",
        country: "United States of America"
      }

  
];

countrySelect.addEventListener('change', (e)=>{
    const valor = e.target.value;
    console.log(valor);
    if(valor =='asia'){
      countryOption.innerHTML = '';
        for(let i=0; i<AsiaOption.length; i++){
            
            const option= document.createElement('option');
            option.value = AsiaOption[i];
            option.text = AsiaOption[i];
            countryOption.appendChild(option);
        }
    }else if(valor =='europe'){
      countryOption.innerHTML = '';
        
        for(let i=0; i<EuropeOption.length; i++){
            
            const option= document.createElement('option');
            option.value = EuropeOption[i];
            option.text = EuropeOption[i];
            countryOption.appendChild(option);
        }
    }else if(valor =='northamerica'){
      countryOption.innerHTML = '';
        
        for(let i=0; i<NorthAmericaOption.length; i++){
            
            const option= document.createElement('option');
            option.value = NorthAmericaOption[i];
            option.text = NorthAmericaOption[i];
            countryOption.appendChild(option);
        }
    }
})


const streetContact = document.querySelector('.street');
const cityContact = document.querySelector('.city');
const stateContact = document.querySelector('.state');
const phoneContact = document.querySelector('.phone');
const countryContact = document.querySelector('.country');

countryOption.addEventListener('change', (e)=>{
    const valor = e.target.value;
 
    for(let i=0; i<countries.length; i++){
      if(valor === countries[i].country ){
          streetContact.textContent = countries[i].street;
          cityContact.textContent = countries[i].city;
          stateContact.textContent = countries[i].state;
          phoneContact.textContent = countries[i].phone;
          countryContact.textContent = countries[i].country;
      }
    }
   
})


// Click FOR pop up  Sales Contact

const salesContactUp = document.querySelector('#sales-contact-up');

salesContactUp.addEventListener('click', ()=>{

  formSalesContact.style.display = 'flex';
})





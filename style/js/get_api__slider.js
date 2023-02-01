async function reviews(){
    try{
    const response = await fetch('http://77.120.190.159:8080');
    if (!response.ok) {
        throw new Error('Ответ сети был не ok.');
        }
    let data = await response.json();
    } catch(error){
        alert("Ошибка: " + error);
    }
    for ( obj_index in data) {
        let reviews = `<div class="reviews-person">

                            <div class="reviews-title">
                                <img src="${api_data[obj_index].avatar}>

                                <div class="reviews-person--name">
                                    <h4> ${api_data[obj_index].name}</h4>
                                    <h5> ${api_data[obj_index].location}</h5>
                                </div>

                                <div class="reviews-rate">
                                    <p>${api_data[obj_index].rating}</p>
                                </div>

                            </div>
                            
                            <p>“ ${api_data[obj_index].message}”</p>

                        </div>`;
                        document.querySelector('.reviews-swiper').innerHTML += reviews;
                    }
}
reviews();
   
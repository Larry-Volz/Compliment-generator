async function getData(){
    //requesting from API -- will return a "promise"
    const response = await axios.get("https://complimentr.com/api");

    let compliment = response.data.compliment;

    document.querySelector("#compliment").innerText = compliment;
    console.log(response.data.compliment);
}

getData()
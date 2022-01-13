console.log('Helloo')

let form = document.getElementById('myForm')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    // console.log(document.getElementById('address').value)
    x();
    form.reset()
})

let x = async() => {
    try{
        const addrees = document.getElementById('address').value
        const res = await fetch('http://localhost:5000/weather?address=' + addrees)
        const data = await res.json()
        console.log(data)
        if(data.error){
            document.getElementById('error').innerText =data.error
            document.getElementById('forecast').innerText = ''
            document.getElementById('location').innerText = ''
        }
        else{
            document.getElementById('forecast').innerText = data.forecast
            document.getElementById('location').innerText = data.location
            document.getElementById('error').innerText = ''
        }
    }
    catch(e){
        console.log(e)
    }
}
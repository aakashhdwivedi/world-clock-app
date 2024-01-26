const container = document.getElementsByClassName("result-box")[0];
async function GetRandomImg(){
    const imageurl = "https://api.unsplash.com/photos/?client_id=tVLKdq497VcmLxFw18ZjJnzpb3bMYINWbVhvD00kFUw";
    var data = await fetch(imageurl);
    var result =  await data.json();
    console.log(result[0].urls);
    container.style.backgroundImage = `url("${result[Math.floor(Math.random()*10)].urls.small}")`;
    container.style.backgroundSize = "cover";

}
// GetRandomImg();
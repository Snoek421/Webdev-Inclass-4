function TurnOnLight()
{
    document.getElementById("bodyText").innerHTML = "Much better, now we can see this cute little rat. Double click on him to turn the light back off.";
    document.getElementById("image").src="./assets/images/RatCartoon1554621.jpg";
}

function TurnOffLight()
{
    document.getElementById("bodyText").innerHTML = "This square is pretty dark. Click on it to turn on the light.";
    document.getElementById("image").src="./assets/images/RatInDark.jpg";
}
function startWatch() {
  const date = new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const watch = document.getElementById("watch");

if(seconds<10){
    seconds=`0${seconds}`
}

  watch.innerHTML = `${hours}:${minutes}:${seconds}`;
}
setInterval(startWatch, 1000);
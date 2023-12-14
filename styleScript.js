.body{
  width:200px;
  background-color:transparent;
  height:300px;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  z-index:99;
  position:absolute;
  top:0;
}
.head{
  width:50px;
  height:50px;
  border-radius:50%;
  background-color:blue;
}
.stomach{
  width:80px;
  height:100px;
  border-radius:20%;
  background-color:blue;
}

.legs{
  width:60px;
  height:50px;
  background-color:transparent;
  display:flex;
  justify-content:space-between;
}

.legs div{
  width:20px;
  height:50px;
  background-color:blue;
  border-radius:20%;
}

.hands{
  z-index:100;
  width:70%;
  height:60px;
  position:absolute;
  top:22vh;
  left:15%;
  background-color:transparent;
  display:flex;
  justify-content:space-between;
}
.hands div{
  width:20px;
  height:50px;
  background-color:blue;
  border-radius:20%;
}

.l-hand{
  transform:rotate(40deg)
}
.r-hand{
  transform:rotate(-40deg)
}

.eyes{
  width:50px;
  height:4vh;
  position:absolute;
  top:12vh;
  background-color:transparent;
  display:flex;
  justify-content:space-around;
}

.eyes div{
  background-color:white;
  width:20px;
  height:20px;
  border-radius:50%;
}
.mouth{
  width:20px;
  height:5px;
  position:absolute;
  top:17vh;
  left:45%;
  background-color:white;
}

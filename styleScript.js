.body{
  width:200px;
  background-color:transparent;
  height:300px;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  z-index:99;
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
  width:14%;
  height:60px;
  position:absolute;
  top:22vh;
  left:4.5%;
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

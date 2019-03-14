var toChange;



function makeCalE(elem)
{
  for (i=0;i<elem.classList.length; i++)
  {
    if (elem.classList[i] == 'voteday')
    {
        /*
        if (elem.id.includes('early-voting'))
        {
            elem.style.background = 'aqua';
        }*/
      elem.classList.remove('voteday');
        
      return;
    }
    else if (elem.classList[i] == 'mailday')
    {
      elem.classList.remove('mailday');
      return;
    }
  }
  toChange = elem;
  p = document.getElementById('popupHandle');
  p.style.display = 'block';

}

function closePopup()
{
  document.getElementById('popupHandle').style.display = 'none';
}

function submitPopup()
{
  if(document.getElementById('voteType').checked)
  {
     
      
    toChange.classList.add('voteday');
  }
  else if(document.getElementById('mailType').checked)
  {
    toChange.classList.add('mailday');
  }
  closePopup();
}

window.onclick = function(event)
{
  if (event.target == document.getElementById('popupHandle'))
  {
    document.getElementById('popupHandle').style.display = 'none';
  }
}


//create a map to hold the dates id
var maildate = [0,0,0,0,0];

//fill in the array with the id
for(k = 0;k<1;k++){
//    alert(i);
    var temp = 'maildueonly'+k;
    maildate.temp = 'notset';

    
}
//    alert(maildate.temp); 
//check 
//for(j=0;j<4;j++){
//    console.log(maildate.j);
//}

function checkingdateasas(elem){
    
//    alert(elem.style.background );
    var x = elem.id;
    var num = x.substr(11,12);
//    alert(num);
    
//    alert(maildate[Number(num)]);
    if(num ==5){
        //check what the status is
        if(maildate[Number(num)]==0){
            elem.style.background = 'rgb(0,255,0)';
            maildate[Number(num)]=1;
        }else{
            elem.style.background = '#ffb7c8';
            maildate[Number(num)]=0;
    }
    }else{
        //if the number is 0 that means it is being clicked to set the reminder
        if(maildate[Number(num)]==0){
            elem.style.background = 'rgb(0,255,0)';
            maildate[Number(num)]=1;
        }else{
            elem.style.background = '#d6e3ff';
            maildate[Number(num)]=0;
        }
    }
    
}

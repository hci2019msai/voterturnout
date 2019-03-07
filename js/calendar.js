var toChange;

function makeCalE(elem)
{
  for (i=0;i<elem.classList.length; i++)
  {
    if (elem.classList[i] == 'voteday')
    {
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

function revealName() {
    var x = document.getElementById("NameContainer");
    x.style.display = "grid";
}

function revealBirth() {
    var x = document.getElementById("BirthContainer");
    x.style.display = "grid";
}

function revealMail() {
    var x = document.getElementById("MailContainer");
    x.style.display = "grid";
}

function revealLicense() {
    var x = document.getElementById("LicenseContainer");
    x.style.display = "grid";
}

function revealNext() {
    var x = document.getElementById("Next");
    x.style.display = "grid";
}

function validateZip(boxEl,butID)
{
    var b = document.getElementById(butID);
    if (!isNaN(boxEl.value) && boxEl.value.length == 5)
    {
        b.disabled = false;
    }
    else
    {
        b.disabled = true;
    }
}

function validateTwo(first, second, butID)
{
    var b = document.getElementById(butID);
    var bool = false;
    if (document.getElementById(first).value.length==0 || document.getElementById(second).value.length==0)
    {
        b.disabled = true;
    }
    else
    {
        b.disabled = false;
    }
}

function validateMDY(butID)
{
    var b = document.getElementById(butID);
    mEl = document.getElementById('m');
    dEl = document.getElementById('d');
    yEl = document.getElementById('y');
    if (!isNaN(mEl.value) && !isNaN(dEl.value) && !isNaN(yEl.value) && mEl.value.length == 2 && yEl.value.length == 4 && dEl.value.length == 2)
    {
        b.disabled = false;
    }
    else
    {
        b.disabled = true;
    }
}


function validateAddress(butID)
{
    var b = document.getElementById(butID);
    ad1 = document.getElementById('ad1');
    city = document.getElementById('city');
    st = document.getElementById('st');
    zz = document.getElementById('zipzop');
    if (ad1.value.length>0 && city.value.length>0 && st.options[st.selectedIndex].value!='--' && !isNaN(zz.value) && zz.value.length==5)
    {
        b.disabled = false;
    }
    else
    {
        b.disabled = true;
    }
}

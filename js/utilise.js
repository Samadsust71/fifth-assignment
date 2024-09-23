
function makeDonation(donateInputId,totalDonateId,donatePlaceTitleId) {
    const totalMoneyEl = document.getElementById('total-money');
    const donation = getInputValue(donateInputId);
    const totalDonate = getTotalDonation(totalDonateId);
    const totalMoney = Number(totalMoneyEl.innerText);
    if (donation <= 0) {
        getEmptyInput(donateInputId);
        return alert('Please give positive Input');
    }
    else if ( donation > totalMoney) {
        getEmptyInput(donateInputId);
        return alert('You have not enough money');
    }
    else if (isNaN(donation) ) {
        getEmptyInput(donateInputId);
        return alert('Input should be a number'); 
    }
    else
     totalMoneyEl.innerText = (totalMoney - donation).toFixed(2);
     {document.getElementById(totalDonateId).innerText = (donation + totalDonate).toFixed(2);
     getEmptyInput(donateInputId);
     my_modal_6.showModal();
     createHistoryDiv(donation,donatePlaceTitleId);
    }
 };
 function getInputValue(id) {
    const inputValue = Number(document.getElementById(id).value);
    return inputValue;
 };

 function getTotalDonation(id){
    const totalDonate = Number(document.getElementById(id).innerText);
    return totalDonate;
 };
 function getEmptyInput(id){
    return document.getElementById(id).value ='';
 };

 function createHistoryDiv(donation,id){

    let history = document.createElement('div');
    history = `<div class="p-8 border border-[#1111111a] rounded-2xl space-y-4">
             <h1 class="text-xl font-bold text-primary">${donation} Taka is ${document.getElementById(id).innerText}</h1> 
             <p class="font-light text-secondary">Date : ${new Date().toString()}</p>
         </div>
        `;
       return document.getElementById('history-container').innerHTML += history;
 };

 function addRemoveClass(id) {
       document.getElementById(id).classList.remove('bg-button','text-title');
       document.getElementById(id).classList.add('bg-white','border','border-secondary','text-secondary');
 }

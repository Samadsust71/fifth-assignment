

 document.getElementById('donate-noakhali-btn').addEventListener('click',function(){
    makeDonation('donate-noakhali-input','donate-noakhali','donate-noakhali-title')
 })
 document.getElementById('donate-feni-btn').addEventListener('click',function(){
    makeDonation('donate-feni-input','donate-feni','donate-feni-title')
 });
 document.getElementById('donate-quota-btn').addEventListener('click',function(){
    makeDonation('donate-quota-input','donate-quota','donate-quota-title')
 });
 

document.getElementById('history-page-btn').addEventListener('click', function(e){
       e.target.classList.remove('bg-white','border','border-secondary');
       e.target.classList.add('bg-button','text-title');
       
      document.getElementById('history-container').classList.remove('hidden');
      document.getElementById('main-section').classList.add('hidden');
});
document.getElementById('donation-page-btn').addEventListener('click', function(e){
       e.target.classList.remove('bg-white','border','border-secondary');
       e.target.classList.add('bg-button','text-title');
       document.getElementById('history-page-btn').classList.remove('bg-button','text-title');
       document.getElementById('history-page-btn').classList.add('bg-white','border','border-secondary','text-secondary');
      document.getElementById('history-container').classList.add('hidden');
      document.getElementById('main-section').classList.remove('hidden');
});



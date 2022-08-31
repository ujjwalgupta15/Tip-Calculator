const tipcalcy = () =>{
    let amount = document.getElementById('bill_amount').value;
    
    let perc = document.getElementById('tip_perc').value;

    let tip = amount * (perc/100);
    alert(tip);
    
    let total = tip + Number(amount);
    alert(total); 

    document.getElementById('tip_total').value = tip;

    document.getElementById('total_billed').value = total;
}
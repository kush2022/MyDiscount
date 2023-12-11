// function to load merchants count 
function loadMerchantsCount(){
    $.ajax({
        url: "charts/merchants_count.php",
        type: "GET",
        dataType: "json",
        success: function(data){
            displayMerchantsCount(data.count);
        },
        error: function(error){
            console.error("Error Fetching data for merchants count", error);
        }
    });
}

// function to display merchants count
function displayMerchantsCount(count){
    $("#merchantsCount").text(count);
}



// function to load customer count 
function loadCustomersCount(){
    $.ajax({
        url: "charts/customers_count.php",
        type: "GET",
        dataType: "json",
        success: function(data){
            displayCustomersCount(data.count);
        },
        error: function(error){
            console.error("Error Fetching for customer count", error);
        }
    });
}

// function to display the customers count 
function displayCustomersCount(count){
    $("#customersCount").text(count)
}


// function to load referrals count 
function loadReferralsCount(){
    $.ajax({
        url: "charts/referrals_count.php",
        type: "GET",
        dataType: "json",
        success: function(data){
            displayReferralsCount(data.count);
        },
        error: function(error){
            console.error("Error Failed to load referrals count", error);
        }
    });
}

// function to display referrals count 
function displayReferralsCount(count){
    $("#referralCount").text(count)
}


// function to load coupons info
function loadCouponsInfo(){
    $.ajax({
        url: 'charts/coupons.php',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            displayCouponInfo(data);
        },
        error: function(error){
            console.error("Error Fetching coupons info");
        }
    });
}

// function to display coupons info 
function displayCouponInfo(data){
    $("#numberOfCoupons").text(data.number_of_coupons);
    $("#totalCouponValue").text(data.total_coupon_value);
}

// function to load merchants by business type 
function loadMerchantsBusinessType(){
    $.ajax({
        url: "charts/merchants_by_business_type.php",
        type: 'GET',
        dataType: 'json',
        success: function(data){
            drawMerchantBusinessChart(data);
        },
        error: function(error){
            console.error("Error Fetching merchants by business type");
        }
    });
}

// function to draw merchant business type chart 
function drawMerchantBusinessChart(data){
    var ctx = document.getElementById("merchantsChart").getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: "Number of Merchant by Business Type",
                data: data.values, 
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    })
}


// function to load referrer customer over time 
function loadReferrerCustomerOverTime(){
    $.ajax({
        url: "charts/referral_over_time.php",
        type: 'GET',
        dataType: 'json',
        success: function(data){
            drawReferrerChart(data);
        },
        error: function(error){
            console.log("Error Fetching data for referrer over time ", error);
        },
    });
}


// function to draw line chart for referrer customer overtime 
function drawReferrerChart(data){
    var ctx = document.getElementById('referrerCustomerChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data:{
            labels: data.dates,
            datasets: [{
                label: 'Referrer Customers Over Time',
                data: data.customerCounts, 
                borderWidth: 2,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'month', // Adjust the time unit as needed
                    },
                    title: {
                        display: true,
                        text: 'Date',
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Referrer Customers',
                    }
                }
            }
        }
    })
}


// Function to load Coupon Status Distribution
function loadCouponStatusDistribution() {
    $.ajax({
        url: 'charts/coupons_status_chart.php',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            drawCouponStatusChart(data);
        },
        error: function (error) {
            console.error('Error fetching data for Coupon Status Distribution:', error);
        }
    });
}


// function to draw coupons status distribution pie chart 
function drawCouponStatusChart(data){
    var ctx = document.getElementById("couponStatusChart").getContext('2d');
    var chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: data.statuses,
            datasets: [{
                data: data.statusCounts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    // 'rgba(255, 205, 86, 0.8)',
                    // // Add more colors if needed
                ],
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom',
                },
            },
        },
    })
}



// load the charts on the document ready
$(document).ready(function(){
    loadMerchantsCount();
    loadCustomersCount();
    loadReferralsCount();
    loadCouponsInfo();
    loadMerchantsBusinessType();
    loadReferrerCustomerOverTime();
    loadCouponStatusDistribution();
})

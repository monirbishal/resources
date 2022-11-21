<?php 
$data = array();
if ($orders != null) {
    foreach ($orders as $item) {
        $data[] = $item->orderdetailnew->origin;
    }
}

$countryWiseOrders = [];
$countryWiseOrders['country'] = '';
$countryWiseOrders['order'] = '';
$orderCountries = array_unique($data);

    foreach($orderCountries as $key => $id) {
    $order = MerchantOrder::whereIn('module_type', $module_types)->with('orderdetailnew.origincountry')->whereHas('orderdetailnew', function ($q) use ($id){
        $q->where('origin', $id);
    });
    if($order->count() > 0) {
        if ($key == 0) {
            $countryWiseOrders['country'] .= "'".$order->first()->orderdetailnew->origincountry->name."'";
            $countryWiseOrders['order'] .= $order->count();
        }
        else {
            $countryWiseOrders['country'] .= ",'".$order->first()->orderdetailnew->origincountry->name."'";
            $countryWiseOrders['order'] .= ",".$order->count()."";
        }
        
    }
}
// return $countryWiseOrders;     

$lastSevenDaysSalesRecords = [];
$lastSevenDaysSalesRecords['total'] = CouriarOrder::where('created_at', '>=', Carbon::today()->subDays(7))->count();
$lastSevenDaysSalesRecords['order'] = '';
$lastSevenDaysSalesRecords['date'] = '';
for ($i=0; $i<7; $i++) {
    $dates = date("Y-m-d", strtotime($i." days ago"));
    if($i == 0) {
        $date = "Today";
        $lastSevenDaysSalesRecords['order'] = CouriarOrder::where('created_at', 'like', $dates.'%')->count();
        $lastSevenDaysSalesRecords['date'] = "'".$date."'";
    }
    else {
        $date = $i." days ago";
        $lastSevenDaysSalesRecords['order'] .= ','.CouriarOrder::where('created_at', 'like', $dates.'%')->count();
        $lastSevenDaysSalesRecords['date'] .= ", '".$date."'";
    }
    
}
// return $lastSevenDaysSalesRecords;
// return array_reverse($lastSevenDaysSalesRecords);
// last 7 days report


$lastThirtyDaysSalesRecords = [];
$lastThirtyDaysSalesRecords['total'] = CouriarOrder::where('created_at', '>=', Carbon::today()->subDays(30))->count();
$lastThirtyDaysSalesRecords['order'] = '';
$lastThirtyDaysSalesRecords['date'] = '';
for($i=0; $i<30; $i++){
    $date = date('Y-m-d', strtotime($i."days ago"));
    if($i == 0) {
        $lastThirtyDaysSalesRecords['order'] .= CouriarOrder::where('created_at', 'like', $date.'%')->count();
        $lastThirtyDaysSalesRecords['date'] .= "'".$date."'";
    }
    else {
        $lastThirtyDaysSalesRecords['order'] .= ','.CouriarOrder::where('created_at', 'like', $date.'%')->count();
        $lastThirtyDaysSalesRecords['date'] .= ", '".$date."'";
    }
}
// last 30 days report

$lastYearSalesRecords = [];
$lastYearSalesRecords['total'] = CouriarOrder::where('created_at', '>=', Carbon::today()->subYear(1))->count();
$lastYearSalesRecords['order'] = '';
$lastYearSalesRecords['month'] = '';

for($i=1; $i<=12; $i++){
    $month = date('m', strtotime($i."month"));
    $monthName = date('M', strtotime($i."month"));
    if($i == 1) {
        $lastYearSalesRecords['order'] .= CouriarOrder::whereMonth('created_at', 'like', $month.'%')->count();
        $lastYearSalesRecords['month'] .= "'".$monthName."'";
    }
    else {
        $lastYearSalesRecords['order'] .= ','.CouriarOrder::whereMonth('created_at', 'like', $month.'%')->count();
        $lastYearSalesRecords['month'] .= ", '".$monthName."'";
    }
}
// return $lastYearSalesRecords;
?>
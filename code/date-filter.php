<?php
public function cash($payments, $account_head, $start_date, $end_date)
    {
        return $payments
        // ->whereBetween('created_at', [$start_date, $end_date])
        ->whereBetween('created_at', [
            Carbon::parse($start_date, Auth::user()->timezone)->toATOMString(),
            Carbon::parse($end_date, Auth::user()->timezone)->addDay(1)->toATOMString()
        ])
        ->where('account_head', $account_head)->map(function ($q){
            return $q->store_amount;
        })->sum();
    }
?>
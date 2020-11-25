<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    //
    protected $table = 'booking';
    protected $fillable = ['invoicestatus', 'creatinv_at'];
    public $incrementing = false;
}

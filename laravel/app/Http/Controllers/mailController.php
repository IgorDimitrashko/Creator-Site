<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;

class mailController extends Controller
{
    public function send()
    {
    Mail::send(['text'=>'mail'],['name','Creator'],function($message){

        $message->to('ktbltv@gmail.com','Creator')->subject('help email');
        $message->from('igor.dimitrashko@gmail.com','Creator');
    });

    }
}

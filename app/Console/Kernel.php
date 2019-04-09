<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\Event;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Mail\Reminder;


class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $reminder = DB::table('events')
                        ->join('users' , 'events.author', '=','users.id' )
                        ->select('users.email', 'events.name', 'events.author')
                        ->where('events.reminder', '<', 'NOW()')
                        ->where('u too late', 'false')
                        ->get();
        $it = 0;
        foreach ($reminder as $reminders) {
            Mail::to($reminders->email)->send(new Reminder());
            $it++;
        }
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}

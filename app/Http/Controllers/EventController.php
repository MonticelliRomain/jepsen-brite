<?php

namespace App\Http\Controllers;

use App\Event;
use App\User_Event;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;


class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $event = Event::take(5)->orderBy('date', 'DESC')->get();

        return response()->json($event);
    }

    public function pastEvent($offset, $limit) {


        $event = Event::where('date', '<=', now())->skip($offset*$limit)->take($limit)->orderBy('date', 'DESC')->get();

        return response()->json($event);
    }

    public function store(Request $request)
    {
        $params = $request->all(); 
        $params['author'] = auth('api')->user()->id;
        $event = Event::create($params);
        $event['author'] = $event->author()->get()[0];

        return response()->json([
            'message' => 'Great success! New event created',
            'Event' => $event
        ]);
    }

    public function search(Request $request, $offset, $limit){

        if ($request->has('id')) {
            
            $res = Event::find($request->input('id'));
            return $res ? $res : 'raté.';
        }
        
        elseif ($request->has('string')) {
            
            $res = Event::where(
                'name', 'LIKE', '%'.$request->input('string').'%')->orWhere(
                'date', '<=', $request->input('string'))->skip($offset*$limit)->take($limit)->get();
                
            return $res ? $res : 'raté.';
         } 
       
        return 'coucou';
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        $ev['event'] = DB::table('events', 'users')
                    ->select('events.id', 'events.name','events.description', 'events.date', 'events.author', 'users.name AS username', 'u too late')
                    ->join('users' , 'events.author', '=','users.id' )
                    ->where('events.id', '=', $event->id)
                     ->first();
   
       
        $ev['participants'] = DB::table('user__events')
                    ->select('pseudo')
                    ->join('users', 'user__events.users_id', '=','users.id')
                    ->where('events_id', '=', $event->id)
                    ->get();
       return $ev;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Event $event)
    {
        $request->validate([
            'name'       => 'nullable',
            'date' => 'nullable',
            'description' => 'nullable'
         ]);
 
         $event->update($request->all());
 
         return response()->json([
             'message' => 'Great success! Event updated',
             'Event' => $event
         ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        $event->delete();

        return response()->json([
            'message' => 'Successfully deleted event!'
        ]);
    }

    public function inscription (Event $event){

        $userEvent = new User_Event;
        $test = json_decode(DB::table('user__events')
        ->select('users_id')
        ->where('events_id', '=', $event->id)
        ->get());

        if ($test != NULL && ($test[0]->users_id === auth('api')->user()->id)) {
            return response()->json([
                'message' => 'You are already suscribed!']);
        }
        $userEvent['events_id'] = $event->id;
        $userEvent['users_id'] = auth('api')->user()->id;

        $userEvent->save();

        return response()->json([
                'message' => 'Succes']);

    }
     public function desinscription (Event $event){

        $userEvent = new User_Event;
        $test = json_decode(DB::table('user__events')
        ->select('users_id')
        ->where('events_id', '=', $event->id)
        ->get());

        if ($test != NULL && ($test[0]->users_id === auth('api')->user()->id)) {
            DB::table('user__events')->select('users_id')
                ->where('events_id', '=', $event->id)->delete();

            return response()->json([
                'message' => 'Succes']);
        }
        
        return response()->json([
                'message' => 'You are not suscribed']);

    }
}

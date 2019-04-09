<?php

use Faker\Generator as Faker;

$factory->define(App\Event::class, function (Faker $faker) {
    return [
        'name'        => $faker->name(),
        'date'        => $faker->dateTimeAD(),
        'description' => 'Romain t es nul',
        'reminder'    => $faker->dateTimeAD(),
        'u too late'  => $faker->boolean,
        'author'      => factory ('App\User')->create()->id
    ];
});

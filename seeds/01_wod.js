exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('wod').del()
    .then(function () {
      // Inserts seed entries
      return knex('wod').insert([
        {
          name: "This one Sucks",
          equipment_needed: "A pull-up bar.",
          the_workout: "5 pull-ups, 15 push-ups, and 20 air squats, do as many rounds as possible.  5 minutes on, 1 minute rest.  Do 5 five iterations total",
          time_required: "29 minutes.",
          source: "Graham Carssow"
          },
          
          {
          name: "HIIT and Run",
          equipment_needed: "Stopwatch, known distance course (or GPS)",
          the_workout: "Find a known distance area or use a Treadmill.  Run for 5 minutes, then do 50 push-ups and 50 squats, however you want to get them done.  Restart your timer, start running again.  Keep going until you have hit your distance (or died).  Aim for a distance of 3+ miles.",
          time_required: "Depends on the distance, but usually less than 30 minutes",
          source: "Graham Carssow"
          },
          
          {
          name: "Row, Row, Row your fat away",
          equipment_needed: "Rowing machine that can tell you distance rowed, stopwatch",
          the_workout: "You can either go by distance or by time.  Set your stopwatch to 25 minutes, start rowing.  When you hit 500 meters, stop and do 25 push-ups.  When done, get rowing again!  Repeat again when you hit your next 500 meters.  Try and go as far as possible",
          time_required: "25 minutes, more or less if you decide to go by distance instead of time.",
          source: "Graham Carssow"
          },
          
          {
          name: "Run Forrest Run!",
          equipment_needed: "Stopwatch.  A standard track and field track is extremely helpful, though not necessary",
          the_workout: "Run as fast as you can for 80 seconds, then walk for 40 seconds.  Repeat 8 times.  This workout is extremely difficult, feel free to cut down the number to 6 or even 4 times.",
          time_required: "16 miserable minutes, if you do all 8.",
          source: "Some Jerk I remember from the Army"
          },
          
          {
          name: "MMA Smoker",
          equipment_needed: "Pull-up bar, 1 45 lb plate, 1 set of 25 lb dumbells, 1 set of 15 lb dumbells.  Some type of bench for bench dips.",
          the_workout: "This one is complex!  Might be a good idea to keep a handy reference.  You will do 5 rounds, each 5 minutes long, with a 1 minute rest between rounds.  Each round is as many reps as possible.  Round 1:  15 push-ups, 15 jumping jacks, 15 bench dips.  Round 2: Burpee clean and press with 25 lb dumbells, 10 reps.  Then move onto 15 lbs, then move onto bodyweight burpees. Round 3:  10 high knees, 10 mountain climbers, 10 jumping jacks, 10 jumping split lunges, Round 4:  Grab the 45 lb plate.  10 squats, 10 overhead squats, 10 curls, 10 triceps extension (behind your head), 10 around the worlds around your head (both directions).  Round 5:  5 Pull-ups, 15 push-ups, 20 squats.",
          time_required: "29 minutes",
          source: "httpsww.muscleandfitness.com/training/build-muscle/mma-workout for the base, but I made some modifications"
          }
      ]);
    });
};

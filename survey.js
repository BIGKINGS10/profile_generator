const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  
  rl.question('What is your favorite activity? ', (activity) => {

    rl.question('What do you listen to while doing that? ', (song) => {
      
      rl.question('Which meal is your favorite? ', (meal) => {
        
        rl.question("What's your favorite thing to eat for that meal? ", (food) => {
          
          rl.question('What sport is your absolute favorite? ', (sport) => {
            
            rl.question('What is your superpower? ', (superPower) => {
              
              console.log(`${name} loves listening to ${song} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superPower}`);
              rl.close();
            });

          });

        });

      });

    });

  });

});
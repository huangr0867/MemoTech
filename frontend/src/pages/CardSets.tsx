import Navbar from "../components/Navbar"
import "../styles/CardSets.css";

const flashcardSets = [
    { id: 1, title: 'Set 1', description: 'Description of Set 1', cardPairs: `[{"id":3,"question":"Describe how you would carry out an investigation into osmosis using potato tissue","answer":"● Cut identical potato cylinders  ● Measure and record the length and mass of cylinders ● Add each cylinder to one of three solutions: 1M sugar solution, 0.5M sugar solution and distilled water  ● Leave cylinders in tubes overnight  ● Remove cylinders from tubes and blot them using paper towels  ● Record length and mass of each cylinder"},{"id":4,"question":"What test do you use to test for glucose?","answer":"Benedict test"},{"id":5,"question":"How do you do the benedict test?","answer":"- Prepare food sample and transfer 5cm3 of food sample to a test tube - Prepare a water bath that is set to 75 C - Add some Benedict solution to test tube using a pipette - Place test tube in water bath using test tube holder"},{"id":6,"question":"How much of the food sample do you transfer to a test tube when doing the Benedict test?","answer":"5cm3"},{"id":7,"question":"What temperature should the water bath be when doing the Benedict test?","answer":"75 degrees C"},{"id":8,"question":"How many drops of the Benedict's solution should you add to the test tube?","answer":"10 drops"},{"id":9,"question":"How long should you leave the test tube in the water bath for when doing the Benedict test?","answer":"5 minutes"},{"id":10,"question":"If the food sample contains a reducing sugar, what will the solution in the test tube change from normal blue? ( Benedict Test )","answer":"- Green  - Yellow  - Brickred"},{"id":11,"question":"What does the colour of the solution depend on when doing the Benedict test?","answer":"how much sugar is in the food"},{"id":12,"question":"What do you use to test for starch?","answer":"Iodine Solution"},{"id":13,"question":"How do you do the Iodine Solution test?","answer":"- Make food sample and transfer 5cm3 of food sample to test tube - Add few drops of iodine solution and shake tube to mix contents"},{"id":14,"question":"If the sample contains starch, what will the colour of the solution change from?","answer":"Browny-orange to black or blue-black"},{"id":15,"question":"What test do you use to test for proteins?","answer":"Biuert test"},{"id":16,"question":"How do you do the Biuret test?","answer":"- Prepare sample, and transfer 2cm3 of sample to test tube - Add 2cm3 of biuret solution to sample and mix contents"},{"id":17,"question":"If a food sample contains proteins, what will the solution change from and to?","answer":"Change from blue to purple"},{"id":18,"question":"If there is no protein present in the food sample when doing the Biuret test, then what colour will the solution be?","answer":"Blue"},{"id":19,"question":"How much of your food should you transfer to your test tube when doing the Biuret test?","answer":"2cm3"},{"id":20,"question":"How much of Biuret solution should you add to the sample when doing the Biuret test?","answer":"2cm3"},{"id":21,"question":"What test do you use to test for lipids?","answer":"Sudan III test"},{"id":22,"question":"How do you do the Sudan III test?","answer":"- Prepare sample of food, transfer 5cm3 to test tube - Use pipette to add 3 drops of Sudan III stain solution to test tube and gently shake"},{"id":23,"question":"What does the Sudan III stain solution do?","answer":"Stain lipids"},{"id":24,"question":"If a sample contains lipids, what will the Sudan III stain solution do?","answer":"It will seperate out the sample into two layers. With the top layer be bright red (indicating that there are lipids)"},{"id":25,"question":"If there are no lipids present, then what will not be formed at the top of the liquid when doing the Sudan III stain test?","answer":"No seperate red layer will form at the top of the liquid"},{"id":26,"question":"What consideration must you take when doing the Benedict test for glucose?","answer":"Do not boil the mixture for a long time, because any starch present might break down into sugar and test positive"},{"id":27,"question":"If you boil the mixture for too long in the water bath what will happen to the starch when doing the Benedict test?","answer":"Might break down into sugar and test positive"},{"id":28,"question":"What consideration must you take when doing the Biuret test for proteins?","answer":"Sometimes the purple colour is difficult to see. So hold the test tube in front of a white paper sheet."},{"id":29,"question":"What can you use to cut identical potato cylinders with?","answer":"Cork Borer"},{"id":30,"question":"How can you measure the length and mass of the potato cylinders?","answer":"Using a ruler and balance"},{"id":31,"question":"What is the first step in the sample method?","answer":"Place a tissue sample on a microscope slide"},{"id":32,"question":"What is the second step in the sample method?","answer":"Add a few drops of a suitable stain (iodine)"},{"id":33,"question":"What is the third step in the sample method?","answer":"Lower a coverslip onto the tissue"},{"id":34,"question":"What is the fourth step in the sample method?","answer":"Place the slide on the microscope stage and focus on the cells use low power"},{"id":35,"question":"What is the fifth step in the sample method?","answer":"Change to high power and refocus"},{"id":36,"question":"What is the sixth step in the sample method?","answer":"Draw any type of cells that can be seen"},{"id":37,"question":"What is the seventh step in the sample method?","answer":"Add a scale line to the diagram"},{"id":38,"question":"What is the independant variable when investigating the effect of sugar solutions on plant tissue?","answer":"Concentration of sugar solution"},{"id":39,"question":"What is the dependant variable when investigating the effect of sugar solutions on plant tissue?","answer":"Change in mass of the potato"},{"id":40,"question":"What is the control variable when investigating the effect of sugar solutions on plant tissue?","answer":"- Temperature - Length of time the cylinders were left in the solution - Volume of the solution"},{"id":41,"question":"Why do the cylinders need to be left in the solution long enough?","answer":"For a change in mass to occur"},{"id":42,"question":"Before the mass of the cylinders is measured again, what must be done?","answer":"They should be rolled on tissue paper to remove any excess solution"},{"id":43,"question":"If the cylinders have changed in mass, what is this a result of?","answer":"Result of them gaining or losing water by osmosis"},{"id":44,"question":"What hazard and risk is there when investigating the effect of sugar solutions on a potato cylinder?","answer":"Care must be taken when cutting the cylinders of potatao"},{"id":45,"question":"What is the first step in the sample method?","answer":"Put a test tube containing starch solution and a test tube containing amylase into a water bath at 37oC"},{"id":46,"question":"What is the second step in the sample method?","answer":"After 5 minutes add the amylase solution to the starch"},{"id":47,"question":"What is the third step in the sample method?","answer":"Every 30 seconds take a drop from the mixture and test it for starch using iodine solution"},{"id":48,"question":"What is the fourth step in the sample method?","answer":"Record how long it takes for the starch to be completely digested"},{"id":49,"question":"What is the fifth step in the sample method?","answer":"Repeat the experiment at a different pH values using different buffer solutions"},{"id":50,"question":"What should the temperature of the water bath be when putting the test tube containing starch solution and a test tube containing amylase into the waterbath?","answer":"37C"},{"id":51,"question":"After how many minutes should you add the amylase solution to the starch?","answer":""},{"id":52,"question":"Every [] seconds take a drop from the mixture and test it for starch using iodine solution","answer":"Every 30 seconds take a drop from the mixture and test it for starch using iodine solution"},{"id":53,"question":"What is the independant variable in the experiment?","answer":"pH"},{"id":54,"question":"What is the dependant variable in the experiment?","answer":"Time taken for the starch to be digested"},{"id":55,"question":"What is the control variables in the experiment?","answer":"- Temperature - Concentration - Volume of starch and amylase"},{"id":56,"question":"What are the considerations, mistakes and errors in the experiment?","answer":"- Solutions need to be left in the water bath for a while to reach the correct temperature before they are mixed - After mixing, tube must be kept in the water bath - Buffer solution must be used to keep the reaction mixture at a certain fixed pH"},{"id":57,"question":"What are the hazards and risks?","answer":"- Care must be taken if a bunsen burner is used to heat the water bath - Take care not to spill iodine solution on skin"}]` },
    { id: 2, title: 'Set 2', description: 'Description of Set 2', cardPairs: `[{"id":3,"question":"Describe how you would carry out an investigation into osmosis using potato tissue","answer":"● Cut identical potato cylinders  ● Measure and record the length and mass of cylinders ● Add each cylinder to one of three solutions: 1M sugar solution, 0.5M sugar solution and distilled water  ● Leave cylinders in tubes overnight  ● Remove cylinders from tubes and blot them using paper towels  ● Record length and mass of each cylinder"},{"id":4,"question":"What test do you use to test for glucose?","answer":"Benedict test"},{"id":5,"question":"How do you do the benedict test?","answer":"- Prepare food sample and transfer 5cm3 of food sample to a test tube - Prepare a water bath that is set to 75 C - Add some Benedict solution to test tube using a pipette - Place test tube in water bath using test tube holder"},{"id":6,"question":"How much of the food sample do you transfer to a test tube when doing the Benedict test?","answer":"5cm3"},{"id":7,"question":"What temperature should the water bath be when doing the Benedict test?","answer":"75 degrees C"},{"id":8,"question":"How many drops of the Benedict's solution should you add to the test tube?","answer":"10 drops"},{"id":9,"question":"How long should you leave the test tube in the water bath for when doing the Benedict test?","answer":"5 minutes"},{"id":10,"question":"If the food sample contains a reducing sugar, what will the solution in the test tube change from normal blue? ( Benedict Test )","answer":"- Green  - Yellow  - Brickred"},{"id":11,"question":"What does the colour of the solution depend on when doing the Benedict test?","answer":"how much sugar is in the food"},{"id":12,"question":"What do you use to test for starch?","answer":"Iodine Solution"},{"id":13,"question":"How do you do the Iodine Solution test?","answer":"- Make food sample and transfer 5cm3 of food sample to test tube - Add few drops of iodine solution and shake tube to mix contents"},{"id":14,"question":"If the sample contains starch, what will the colour of the solution change from?","answer":"Browny-orange to black or blue-black"},{"id":15,"question":"What test do you use to test for proteins?","answer":"Biuert test"},{"id":16,"question":"How do you do the Biuret test?","answer":"- Prepare sample, and transfer 2cm3 of sample to test tube - Add 2cm3 of biuret solution to sample and mix contents"},{"id":17,"question":"If a food sample contains proteins, what will the solution change from and to?","answer":"Change from blue to purple"},{"id":18,"question":"If there is no protein present in the food sample when doing the Biuret test, then what colour will the solution be?","answer":"Blue"},{"id":19,"question":"How much of your food should you transfer to your test tube when doing the Biuret test?","answer":"2cm3"},{"id":20,"question":"How much of Biuret solution should you add to the sample when doing the Biuret test?","answer":"2cm3"},{"id":21,"question":"What test do you use to test for lipids?","answer":"Sudan III test"},{"id":22,"question":"How do you do the Sudan III test?","answer":"- Prepare sample of food, transfer 5cm3 to test tube - Use pipette to add 3 drops of Sudan III stain solution to test tube and gently shake"},{"id":23,"question":"What does the Sudan III stain solution do?","answer":"Stain lipids"},{"id":24,"question":"If a sample contains lipids, what will the Sudan III stain solution do?","answer":"It will seperate out the sample into two layers. With the top layer be bright red (indicating that there are lipids)"},{"id":25,"question":"If there are no lipids present, then what will not be formed at the top of the liquid when doing the Sudan III stain test?","answer":"No seperate red layer will form at the top of the liquid"},{"id":26,"question":"What consideration must you take when doing the Benedict test for glucose?","answer":"Do not boil the mixture for a long time, because any starch present might break down into sugar and test positive"},{"id":27,"question":"If you boil the mixture for too long in the water bath what will happen to the starch when doing the Benedict test?","answer":"Might break down into sugar and test positive"},{"id":28,"question":"What consideration must you take when doing the Biuret test for proteins?","answer":"Sometimes the purple colour is difficult to see. So hold the test tube in front of a white paper sheet."},{"id":29,"question":"What can you use to cut identical potato cylinders with?","answer":"Cork Borer"},{"id":30,"question":"How can you measure the length and mass of the potato cylinders?","answer":"Using a ruler and balance"},{"id":31,"question":"What is the first step in the sample method?","answer":"Place a tissue sample on a microscope slide"},{"id":32,"question":"What is the second step in the sample method?","answer":"Add a few drops of a suitable stain (iodine)"},{"id":33,"question":"What is the third step in the sample method?","answer":"Lower a coverslip onto the tissue"},{"id":34,"question":"What is the fourth step in the sample method?","answer":"Place the slide on the microscope stage and focus on the cells use low power"},{"id":35,"question":"What is the fifth step in the sample method?","answer":"Change to high power and refocus"},{"id":36,"question":"What is the sixth step in the sample method?","answer":"Draw any type of cells that can be seen"},{"id":37,"question":"What is the seventh step in the sample method?","answer":"Add a scale line to the diagram"},{"id":38,"question":"What is the independant variable when investigating the effect of sugar solutions on plant tissue?","answer":"Concentration of sugar solution"},{"id":39,"question":"What is the dependant variable when investigating the effect of sugar solutions on plant tissue?","answer":"Change in mass of the potato"},{"id":40,"question":"What is the control variable when investigating the effect of sugar solutions on plant tissue?","answer":"- Temperature - Length of time the cylinders were left in the solution - Volume of the solution"},{"id":41,"question":"Why do the cylinders need to be left in the solution long enough?","answer":"For a change in mass to occur"},{"id":42,"question":"Before the mass of the cylinders is measured again, what must be done?","answer":"They should be rolled on tissue paper to remove any excess solution"},{"id":43,"question":"If the cylinders have changed in mass, what is this a result of?","answer":"Result of them gaining or losing water by osmosis"},{"id":44,"question":"What hazard and risk is there when investigating the effect of sugar solutions on a potato cylinder?","answer":"Care must be taken when cutting the cylinders of potatao"},{"id":45,"question":"What is the first step in the sample method?","answer":"Put a test tube containing starch solution and a test tube containing amylase into a water bath at 37oC"},{"id":46,"question":"What is the second step in the sample method?","answer":"After 5 minutes add the amylase solution to the starch"},{"id":47,"question":"What is the third step in the sample method?","answer":"Every 30 seconds take a drop from the mixture and test it for starch using iodine solution"},{"id":48,"question":"What is the fourth step in the sample method?","answer":"Record how long it takes for the starch to be completely digested"},{"id":49,"question":"What is the fifth step in the sample method?","answer":"Repeat the experiment at a different pH values using different buffer solutions"},{"id":50,"question":"What should the temperature of the water bath be when putting the test tube containing starch solution and a test tube containing amylase into the waterbath?","answer":"37C"},{"id":51,"question":"After how many minutes should you add the amylase solution to the starch?","answer":""},{"id":52,"question":"Every [] seconds take a drop from the mixture and test it for starch using iodine solution","answer":"Every 30 seconds take a drop from the mixture and test it for starch using iodine solution"},{"id":53,"question":"What is the independant variable in the experiment?","answer":"pH"},{"id":54,"question":"What is the dependant variable in the experiment?","answer":"Time taken for the starch to be digested"},{"id":55,"question":"What is the control variables in the experiment?","answer":"- Temperature - Concentration - Volume of starch and amylase"},{"id":56,"question":"What are the considerations, mistakes and errors in the experiment?","answer":"- Solutions need to be left in the water bath for a while to reach the correct temperature before they are mixed - After mixing, tube must be kept in the water bath - Buffer solution must be used to keep the reaction mixture at a certain fixed pH"},{"id":57,"question":"What are the hazards and risks?","answer":"- Care must be taken if a bunsen burner is used to heat the water bath - Take care not to spill iodine solution on skin"}]` },
    { id: 3, title: 'Set 3', description: 'Description of Set 3', cardPairs: `[{"id":3,"question":"Describe how you would carry out an investigation into osmosis using potato tissue","answer":"● Cut identical potato cylinders  ● Measure and record the length and mass of cylinders ● Add each cylinder to one of three solutions: 1M sugar solution, 0.5M sugar solution and distilled water  ● Leave cylinders in tubes overnight  ● Remove cylinders from tubes and blot them using paper towels  ● Record length and mass of each cylinder"},{"id":4,"question":"What test do you use to test for glucose?","answer":"Benedict test"},{"id":5,"question":"How do you do the benedict test?","answer":"- Prepare food sample and transfer 5cm3 of food sample to a test tube - Prepare a water bath that is set to 75 C - Add some Benedict solution to test tube using a pipette - Place test tube in water bath using test tube holder"},{"id":6,"question":"How much of the food sample do you transfer to a test tube when doing the Benedict test?","answer":"5cm3"},{"id":7,"question":"What temperature should the water bath be when doing the Benedict test?","answer":"75 degrees C"},{"id":8,"question":"How many drops of the Benedict's solution should you add to the test tube?","answer":"10 drops"},{"id":9,"question":"How long should you leave the test tube in the water bath for when doing the Benedict test?","answer":"5 minutes"},{"id":10,"question":"If the food sample contains a reducing sugar, what will the solution in the test tube change from normal blue? ( Benedict Test )","answer":"- Green  - Yellow  - Brickred"},{"id":11,"question":"What does the colour of the solution depend on when doing the Benedict test?","answer":"how much sugar is in the food"},{"id":12,"question":"What do you use to test for starch?","answer":"Iodine Solution"},{"id":13,"question":"How do you do the Iodine Solution test?","answer":"- Make food sample and transfer 5cm3 of food sample to test tube - Add few drops of iodine solution and shake tube to mix contents"},{"id":14,"question":"If the sample contains starch, what will the colour of the solution change from?","answer":"Browny-orange to black or blue-black"},{"id":15,"question":"What test do you use to test for proteins?","answer":"Biuert test"},{"id":16,"question":"How do you do the Biuret test?","answer":"- Prepare sample, and transfer 2cm3 of sample to test tube - Add 2cm3 of biuret solution to sample and mix contents"},{"id":17,"question":"If a food sample contains proteins, what will the solution change from and to?","answer":"Change from blue to purple"},{"id":18,"question":"If there is no protein present in the food sample when doing the Biuret test, then what colour will the solution be?","answer":"Blue"},{"id":19,"question":"How much of your food should you transfer to your test tube when doing the Biuret test?","answer":"2cm3"},{"id":20,"question":"How much of Biuret solution should you add to the sample when doing the Biuret test?","answer":"2cm3"},{"id":21,"question":"What test do you use to test for lipids?","answer":"Sudan III test"},{"id":22,"question":"How do you do the Sudan III test?","answer":"- Prepare sample of food, transfer 5cm3 to test tube - Use pipette to add 3 drops of Sudan III stain solution to test tube and gently shake"},{"id":23,"question":"What does the Sudan III stain solution do?","answer":"Stain lipids"},{"id":24,"question":"If a sample contains lipids, what will the Sudan III stain solution do?","answer":"It will seperate out the sample into two layers. With the top layer be bright red (indicating that there are lipids)"},{"id":25,"question":"If there are no lipids present, then what will not be formed at the top of the liquid when doing the Sudan III stain test?","answer":"No seperate red layer will form at the top of the liquid"},{"id":26,"question":"What consideration must you take when doing the Benedict test for glucose?","answer":"Do not boil the mixture for a long time, because any starch present might break down into sugar and test positive"},{"id":27,"question":"If you boil the mixture for too long in the water bath what will happen to the starch when doing the Benedict test?","answer":"Might break down into sugar and test positive"},{"id":28,"question":"What consideration must you take when doing the Biuret test for proteins?","answer":"Sometimes the purple colour is difficult to see. So hold the test tube in front of a white paper sheet."},{"id":29,"question":"What can you use to cut identical potato cylinders with?","answer":"Cork Borer"},{"id":30,"question":"How can you measure the length and mass of the potato cylinders?","answer":"Using a ruler and balance"},{"id":31,"question":"What is the first step in the sample method?","answer":"Place a tissue sample on a microscope slide"},{"id":32,"question":"What is the second step in the sample method?","answer":"Add a few drops of a suitable stain (iodine)"},{"id":33,"question":"What is the third step in the sample method?","answer":"Lower a coverslip onto the tissue"},{"id":34,"question":"What is the fourth step in the sample method?","answer":"Place the slide on the microscope stage and focus on the cells use low power"},{"id":35,"question":"What is the fifth step in the sample method?","answer":"Change to high power and refocus"},{"id":36,"question":"What is the sixth step in the sample method?","answer":"Draw any type of cells that can be seen"},{"id":37,"question":"What is the seventh step in the sample method?","answer":"Add a scale line to the diagram"},{"id":38,"question":"What is the independant variable when investigating the effect of sugar solutions on plant tissue?","answer":"Concentration of sugar solution"},{"id":39,"question":"What is the dependant variable when investigating the effect of sugar solutions on plant tissue?","answer":"Change in mass of the potato"},{"id":40,"question":"What is the control variable when investigating the effect of sugar solutions on plant tissue?","answer":"- Temperature - Length of time the cylinders were left in the solution - Volume of the solution"},{"id":41,"question":"Why do the cylinders need to be left in the solution long enough?","answer":"For a change in mass to occur"},{"id":42,"question":"Before the mass of the cylinders is measured again, what must be done?","answer":"They should be rolled on tissue paper to remove any excess solution"},{"id":43,"question":"If the cylinders have changed in mass, what is this a result of?","answer":"Result of them gaining or losing water by osmosis"},{"id":44,"question":"What hazard and risk is there when investigating the effect of sugar solutions on a potato cylinder?","answer":"Care must be taken when cutting the cylinders of potatao"},{"id":45,"question":"What is the first step in the sample method?","answer":"Put a test tube containing starch solution and a test tube containing amylase into a water bath at 37oC"},{"id":46,"question":"What is the second step in the sample method?","answer":"After 5 minutes add the amylase solution to the starch"},{"id":47,"question":"What is the third step in the sample method?","answer":"Every 30 seconds take a drop from the mixture and test it for starch using iodine solution"},{"id":48,"question":"What is the fourth step in the sample method?","answer":"Record how long it takes for the starch to be completely digested"},{"id":49,"question":"What is the fifth step in the sample method?","answer":"Repeat the experiment at a different pH values using different buffer solutions"},{"id":50,"question":"What should the temperature of the water bath be when putting the test tube containing starch solution and a test tube containing amylase into the waterbath?","answer":"37C"},{"id":51,"question":"After how many minutes should you add the amylase solution to the starch?","answer":""},{"id":52,"question":"Every [] seconds take a drop from the mixture and test it for starch using iodine solution","answer":"Every 30 seconds take a drop from the mixture and test it for starch using iodine solution"},{"id":53,"question":"What is the independant variable in the experiment?","answer":"pH"},{"id":54,"question":"What is the dependant variable in the experiment?","answer":"Time taken for the starch to be digested"},{"id":55,"question":"What is the control variables in the experiment?","answer":"- Temperature - Concentration - Volume of starch and amylase"},{"id":56,"question":"What are the considerations, mistakes and errors in the experiment?","answer":"- Solutions need to be left in the water bath for a while to reach the correct temperature before they are mixed - After mixing, tube must be kept in the water bath - Buffer solution must be used to keep the reaction mixture at a certain fixed pH"},{"id":57,"question":"What are the hazards and risks?","answer":"- Care must be taken if a bunsen burner is used to heat the water bath - Take care not to spill iodine solution on skin"}]` },
    // Add more sets as needed
];

function CardSets() {

  const navigateToFlashcardSet = (cardPairs: string,) => {
    window.location.href = '/create-flashcards'; // redirects to location
    localStorage.cardPairs = cardPairs
  };
  return (
    <div className='card-sets'>
        <Navbar />
        <h1>Flashcard Sets</h1>
        <div className="flashcard-set-list">
          {flashcardSets.map(set => (
            <div key={set.id} className="flashcard-set">
              <h2>{set.title}</h2>
              <p>{set.description}</p>
              <button onClick={() => navigateToFlashcardSet(set.cardPairs)}>Select</button>
            </div>
          ))}
        </div>
    </div>
    
  )
}

export default CardSets
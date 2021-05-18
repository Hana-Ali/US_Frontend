import React from 'react';
import Card from './ChallengeItems/Card';
import Forest from './forest.jpg';
import Hard from './hardship.jpg';
import Nature from './environment.jpg';

function ChallengePage(){
    return(
    
    <div>

        <div 
        id="card-section"
        className="d-flex my-4 justify-content-between"
        style={{minHeight: 'calc(100vh - 462px)'}}>

        <div class="container">
          <div class="row">
            <div class="col">
              <Card 
                imageUrl={Forest} 
                title="One week in the forest" 
                description="Build a work of art with materials you find in the forest..." 
                buttonLabel="Accept Challenge"
              />
            </div>

            <div class="col">
              <Card 
                imageUrl={Hard} 
                title="Art and the pandemic" 
                description="Hardships have always inspired art..." 
                buttonLabel="Accept Challenge"
              />
            </div>

            <div class="col">
              <Card 
                imageUrl={Nature}
                title="For nature!" 
                description="Create a piece of art made up entirely of recycled materials..." 
                buttonLabel="Accept Challenge"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default ChallengePage;

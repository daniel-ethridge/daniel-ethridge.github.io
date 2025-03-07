import { Component } from '@angular/core';

@Component({
  selector: 'app-data-mining-models',
  templateUrl: './data-mining-models.component.html',
  styleUrls: ['./data-mining-models.component.css']
})
export class DataMiningModelsComponent {

  armPlots: string[] = [
    "../../../assets/data-mining-assets/visualizations/arm/liked-action.png",
    "../../../assets/data-mining-assets/visualizations/arm/liked-adventure.png",
    "../../../assets/data-mining-assets/visualizations/arm/liked-casual.png",
    "../../../assets/data-mining-assets/visualizations/arm/liked-indie.png",
    "../../../assets/data-mining-assets/visualizations/arm/liked-multiplayer.png",
    "../../../assets/data-mining-assets/visualizations/arm/liked-racing.png",
    "../../../assets/data-mining-assets/visualizations/arm/liked-rpg.png",
    "../../../assets/data-mining-assets/visualizations/arm/liked-simulation.png",
    "../../../assets/data-mining-assets/visualizations/arm/liked-story.png",
    "../../../assets/data-mining-assets/visualizations/arm/liked-strategy.png",
  ]
}

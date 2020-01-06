import { Component, OnInit } from '@angular/core';
import { ControlScore } from '../controlScore';
import { GraphService } from '../graph.service';
import { AlertsService } from '../alerts.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  private scores: ControlScore[];

  constructor(
    private graphService: GraphService,
    private alertsService: AlertsService) { }

  ngOnInit() {
    this.graphService.getControlScores()
      .then((scores) => {
        this.scores = scores;
        // Temporary to display raw results
        this.alertsService.add('Scores from Graph', JSON.stringify(scores, null, 2));
      });
  }

}

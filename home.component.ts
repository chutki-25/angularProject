import { Component, OnInit } from '@angular/core';
import { IplService } from '../ipl.service';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  teamNames;
  teamName;
  players;
  piechart: GoogleChartInterface;


  constructor(private iplservice: IplService) { }

  ngOnInit() {
    this.iplservice.teamLabels().subscribe(res => {
      this.teamNames = res['labels'];

    })
  }

  getPlayers(event) {
    this.teamName = event.target.value;
    if (this.teamName) {
      this.iplservice.getPlayersByTeamName(this.teamName)
        .subscribe(res => {
          this.players = res["players"];
        })

      this.iplservice.getTeamRoleStat(this.teamName)
        .subscribe(res => {
          let stat = res["stat"];
          let data = []
          data.push(["Role", "Count"]);
          for (let s of stat) {
            data.push([s["role"], s["count"]]);

          }
          this.showRoleStatChart(data);
        })


    }

  }

  showRoleStatChart(data) {
    this.pieChart = {
      chartType: "PieChart",
      dataTable: data,
      options: {
        'Role': 'Count',
        'height': 600,
        'width': 700
      }
    }
  }


}



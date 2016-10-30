import { Component } from '@angular/core';

declare var require: any;

// You can load Highcharts static if you need its API
import * as Highcharts from 'highcharts';

// If you want you can also load any Highcharts module here: 'highcharts/highcharts-more', 'highcharts/modules/map' and etc.
// See the node_modules/highcharts folders to find a necessary module
import * as Highcharts3d from 'highcharts/highcharts-3d';

// Any Highcharts static API is available throw the Highcharts variable
Highcharts.setOptions({
  colors: ['#058DC7', '#50B432', '#ED561B']
});

// Plug the highcharts-3d module
Highcharts3d(Highcharts);

import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent {
  // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title) {
    this.options = {
      chart: {
        type: 'column',
        margin: 75,
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50
        }
      },
      plotOptions: {
        column: {
          depth: 25
        }
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    };
  }
  options: Object;

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}

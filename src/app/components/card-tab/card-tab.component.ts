import { componentApi } from '@wk/components-angular13';

import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-card-tab',
  templateUrl: './card-tab.component.html',
  styleUrls: ['./card-tab.component.css']
})
export class CardTabComponent implements OnInit {

  constructor(private changeDetector: ChangeDetectorRef) {}

  writeState = componentApi.writeState.bind(this);

  ngOnInit(): void {
  }

  logUserRequest(event: any) {
    console.log('userRequest', event);
  }

}

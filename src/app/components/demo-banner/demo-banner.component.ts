import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { componentApi } from '@wk/components-angular13';
@Component({
  selector: 'app-demo-banner',
  templateUrl: './demo-banner.component.html',
  styleUrls: ['./demo-banner.component.css']
})
export class DemoBannerComponent implements OnInit {

  constructor(private changeDetector: ChangeDetectorRef) {}

  logEvent(event:any) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}

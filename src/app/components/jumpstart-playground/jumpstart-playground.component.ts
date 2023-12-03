import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit
} from '@angular/core';
import { componentApi } from '@wk/components-angular13';

@Component({
  selector: 'app-jumpstart-playground',
  templateUrl: './jumpstart-playground.component.html',
  styleUrls: ['./jumpstart-playground.component.css']
})
export class JumpstartPlaygroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
